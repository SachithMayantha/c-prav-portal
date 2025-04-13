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
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    mobile: "",
    email: "",
    address: "",
  });

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

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleDeleteClose = () => setShowDeleteModal(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/client/save", formData);
      handleClose();
      // Reset form
      setFormData({
        company: "",
        contactPerson: "",
        mobile: "",
        email: "",
        address: "",
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleShow}
                startIcon={<span>+</span>}
              >
                Add Client
              </Button>
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
                        />
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
                        />
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
