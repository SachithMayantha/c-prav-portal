import React, { useState, useEffect } from "react";
import axiosInstance from "../api/AxiosConfig";
import { Modal, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTrash, FaUpload } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useUserRoles } from "../hooks/useUserRoles";

const CertDBProducts = () => {
  const roles = useUserRoles();
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = location.state?.clientId;
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    productId: "",
    companyName: "",
    status: "Active",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (clientId) {
      fetchProducts();
    } else {
      navigate("/clients");
    }
  }, [clientId, navigate]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        `/product/getProducts/${clientId}`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleDeleteClose = () => setShowDeleteModal(false);

  const handleRowClick = (product) => {
    navigate("/cert-db-product-info", {
      state: {
        productId: product.productId,
        companyName: product.companyName,
        comments: product.comments,
        productManager: product.productManager,
        status: product.status,
        clientId: clientId,
      },
    });
  };

  const handleDeleteClick = (product, e) => {
    e.stopPropagation(); // Prevent row click event
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (selectedProduct && selectedProduct.productId) {
      try {
        await axiosInstance.delete(`/product/${selectedProduct.productId}`);
        handleDeleteClose();
        fetchProducts(); // Refresh the list
      } catch (error) {
        console.error("Error deleting product:", error);
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Store the file name in the form data
      setFormData((prevState) => ({
        ...prevState,
        photos: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post(`/product/save/${clientId}`, {
        companyName: formData.companyName,
        status: formData.status,
      });

      handleClose();
      // Reset form
      setFormData({
        productId: "",
        companyName: "",
        status: "Active",
      });
      setSelectedFile(null);
      setFilePreview(null);
      // Refresh products list
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
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
                    Products
                  </a>
                </li>
              </ul>
              <Button
                variant="contained"
                color="primary"
                onClick={handleShow}
                startIcon={<span>+</span>}
              >
                Add Product
              </Button>
            </div>

            {/* Add Product Modal */}
            <Modal show={showModal} onHide={handleClose} size="sm">
              <Modal.Header closeButton className="py-2">
                <Modal.Title className="fs-5">Add New Product</Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-2">
                <Form onSubmit={handleSubmit}>
                  <div className="row g-2">
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">
                          Product Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          size="sm"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label className="small mb-1">Status</Form.Label>
                        <Form.Select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          required
                          size="sm"
                        >
                          <option value="Active">Active</option>
                          <option value="Renew">Renew</option>
                          <option value="Inactive">Inactive</option>
                        </Form.Select>
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
            <Modal show={showDeleteModal} onHide={handleDeleteClose} size="sm">
              <Modal.Header closeButton className="py-2">
                <Modal.Title className="fs-5">Confirm Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-2">
                Are you sure you want to delete this product?
              </Modal.Body>
              <Modal.Footer className="py-2">
                <Button
                  variant="secondary"
                  onClick={handleDeleteClose}
                  size="small"
                >
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete} size="small">
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
                    <i className="fa fa-lg fa-fw fa-file-certificate"></i>{" "}
                    Products List
                  </div>
                  <div className="card-body">
                    {loading ? (
                      <div className="text-center">Loading...</div>
                    ) : (
                      <div className="table-responsive">
                        <table className="table table-hover table-striped">
                          <thead className="thead-light">
                            <tr>
                              <th>Product Name</th>
                              <th>Status</th>
                              {roles.includes("admin") && <th>Actions</th>}
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product) => (
                              <tr
                                key={product.productId}
                                onClick={() => handleRowClick(product)}
                                style={{ cursor: "pointer" }}
                              >
                                <td>{product.companyName}</td>
                                <td>
                                  <span
                                    className={`badge ${
                                      product.status === "Active"
                                        ? "bg-success"
                                        : product.status === "Renew"
                                        ? "bg-warning"
                                        : "bg-danger"
                                    }`}
                                  >
                                    {product.status}
                                  </span>
                                </td>
                                {roles.includes("admin") && (
                                  <td>
                                    <Button
                                      variant="link"
                                      className="text-danger p-0"
                                      onClick={(e) =>
                                        handleDeleteClick(product, e)
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

export default CertDBProducts;
