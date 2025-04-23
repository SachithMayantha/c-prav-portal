import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/AxiosConfig";
import { Modal, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import { FaTrash } from "react-icons/fa";
import { useUserRoles } from "../hooks/useUserRoles";

const ClientDB = () => {
  const roles = useUserRoles();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showReportCategoryModal, setShowReportCategoryModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    mobile: "",
    email: "",
    address: "",
    password: "",
    roles: "staff",
  });
  const [countryFormData, setCountryFormData] = useState({
    country: "",
  });
  const [reportCategoryFormData, setReportCategoryFormData] = useState({
    c_category_name: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axiosInstance.get("/client/getClients");
      setClients(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching clients:", error);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      company: "",
      contactPerson: "",
      mobile: "",
      email: "",
      address: "",
      password: "",
      roles: "staff",
    });
    setFormErrors({});
  };

  const handleShow = () => setShowModal(true);
  const handleDeleteClose = () => setShowDeleteModal(false);

  const handleCountryClose = () => {
    setShowCountryModal(false);
    setCountryFormData({
      country: "",
    });
  };

  const handleCountryShow = () => setShowCountryModal(true);

  const handleCountryInputChange = (e) => {
    const { name, value } = e.target;
    setCountryFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCountrySubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/country/save", countryFormData);
      handleCountryClose();
      // Refresh the list if needed
      fetchClients();
    } catch (error) {
      console.error("Error saving country:", error);
    }
  };

  const handleReportCategoryClose = () => {
    setShowReportCategoryModal(false);
    setReportCategoryFormData({
      c_category_name: "",
    });
  };

  const handleReportCategoryShow = () => setShowReportCategoryModal(true);

  const handleReportCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setReportCategoryFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReportCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/report-category", reportCategoryFormData);
      handleReportCategoryClose();
      // Refresh the list if needed
      fetchClients();
    } catch (error) {
      console.error("Error saving report category:", error);
    }
  };

  const handleRowClick = (client) => {
    navigate("/products", { state: { clientId: client.clientId } });
  };

  const handleDeleteClick = (client, e) => {
    e.stopPropagation(); // Prevent row click event
    setSelectedClient(client);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (selectedClient && selectedClient.clientId) {
      try {
        await axiosInstance.delete(`/client/${selectedClient.clientId}`);
        handleDeleteClose();
        fetchClients();
      } catch (error) {
        console.error("Error deleting client:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.company.trim()) {
      errors.company = "Company name is required";
    }
    if (!formData.contactPerson.trim()) {
      errors.contactPerson = "Contact person is required";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else {
      // Password validation
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{12,}$/;
      if (!passwordRegex.test(formData.password)) {
        errors.password =
          "Password must be at least 12 characters long and include uppercase, lowercase, number, and symbol";
      }
      // Check if password is same as email
      if (formData.password.toLowerCase() === formData.email.toLowerCase()) {
        errors.password = "Password cannot be the same as email";
      }
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Keep using the client save endpoint with the existing structure
      await axiosInstance.post("/client/save", formData);
      handleClose();
      // Reset form
      setFormData({
        company: "",
        contactPerson: "",
        mobile: "",
        email: "",
        address: "",
        password: "",
        roles: "staff",
      });
      // Refresh clients list
      fetchClients();
    } catch (error) {
      console.error("Error saving client:", error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    href="#profile-1"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Clients
                  </a>
                </li>
              </ul>
              <div className="d-flex gap-2">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCountryShow}
                  startIcon={<span>+</span>}
                >
                  Add Country
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleReportCategoryShow}
                  startIcon={<span>+</span>}
                >
                  Add Report Category
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleShow}
                  startIcon={<span>+</span>}
                >
                  Add Client
                </Button>
              </div>
            </div>

            {/* Add Client Modal */}
            <Modal show={showModal} onHide={handleClose} size="sm">
              <Modal.Header closeButton className="py-2">
                <Modal.Title className="fs-5">Add New Client</Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-2">
                <Form onSubmit={handleSubmit}>
                  <div className="row g-2">
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">
                          Company Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          size="sm"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">
                          Contact Person
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          required
                          size="sm"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">
                          Mobile Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          size="sm"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          size="sm"
                          isInvalid={!!formErrors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          size="sm"
                          isInvalid={!!formErrors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          size="sm"
                          isInvalid={!!formErrors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.address}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <Button
                      variant="secondary"
                      onClick={handleClose}
                      size="small"
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit" size="small">
                      Save
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={handleDeleteClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this client?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteClose}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Add Country Modal */}
            <Modal
              show={showCountryModal}
              onHide={handleCountryClose}
              size="sm"
            >
              <Modal.Header closeButton className="py-2">
                <Modal.Title className="fs-5">Add New Country</Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-2">
                <Form onSubmit={handleCountrySubmit}>
                  <div className="row g-2">
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">
                          Country Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="country"
                          value={countryFormData.country}
                          onChange={handleCountryInputChange}
                          required
                          size="sm"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <Button
                      variant="secondary"
                      onClick={handleCountryClose}
                      size="small"
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit" size="small">
                      Save
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>

            {/* Add Report Category Modal */}
            <Modal
              show={showReportCategoryModal}
              onHide={handleReportCategoryClose}
              size="sm"
            >
              <Modal.Header closeButton className="py-2">
                <Modal.Title className="fs-5">
                  Add New Report Category
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-2">
                <Form onSubmit={handleReportCategorySubmit}>
                  <div className="row g-2">
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">
                          Report Category Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="c_category_name"
                          value={reportCategoryFormData.c_category_name}
                          onChange={handleReportCategoryInputChange}
                          required
                          size="sm"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <Button
                      variant="secondary"
                      onClick={handleReportCategoryClose}
                      size="small"
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit" size="small">
                      Save
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>

            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="profile-1"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div
                  className="card card_product_detail_certificates"
                  style={{ border: "1px solid #dbdbd9" }}
                >
                  <div className="card-header">
                    <i className="fa fa-lg fa-fw"></i> Clients List
                  </div>
                  <div className="card-body">
                    {loading ? (
                      <div className="text-center">Loading...</div>
                    ) : (
                      <div className="table-responsive">
                        <table className="table table-hover table-striped">
                          <thead className="thead-light">
                            <tr>
                              <th>Company Name</th>
                              <th>Contact Person</th>
                              <th>Mobile Number</th>
                              <th>Email</th>
                              <th>Address</th>
                              {roles.includes("admin") && <th>Actions</th>}
                            </tr>
                          </thead>
                          <tbody>
                            {clients.map((client) => (
                              <tr
                                key={client.clientId}
                                onClick={() => handleRowClick(client)}
                                style={{ cursor: "pointer" }}
                              >
                                <td>{client.company}</td>
                                <td>{client.contactPerson}</td>
                                <td>{client.mobile}</td>
                                <td>{client.email}</td>
                                <td>{client.address}</td>
                                {roles.includes("admin") && (
                                  <td>
                                    <Button
                                      variant="link"
                                      className="text-danger p-0"
                                      onClick={(e) =>
                                        handleDeleteClick(client, e)
                                      }
                                    >
                                      <FaTrash />
                                    </Button>
                                  </td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDB;
