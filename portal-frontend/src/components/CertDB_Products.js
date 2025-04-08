import React, { useState, useEffect } from "react";
import axiosInstance from "../api/AxiosConfig";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaUpload } from "react-icons/fa";

const CertDB_Products = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    productId: "",
    companyName: "",
    comments: "",
    productManager: "",
    photos: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/product/getProducts");
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
      state: { productId: product.productId },
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
      // Send the request with just the form data and file name
      await axiosInstance.post("/product/save", {
        companyName: formData.companyName,
        comments: formData.comments,
        productManager: formData.productManager,
        photos: formData.photos, // This will be just the file name string
      });

      handleClose();
      // Reset form
      setFormData({
        productId: "",
        companyName: "",
        comments: "",
        productManager: "",
        photos: "",
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
            <div className="d-flex justify-content-between align-items-center mb-3">
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
              <Button variant="primary" onClick={handleShow}>
                Add Product
              </Button>
            </div>

            {/* Add Product Modal */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Manager</Form.Label>
                    <Form.Control
                      type="text"
                      name="productManager"
                      value={formData.productManager}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Photos</Form.Label>
                    <div className="d-flex align-items-center">
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="me-2"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          document.querySelector('input[type="file"]').click()
                        }
                      >
                        <FaUpload /> Upload
                      </Button>
                    </div>
                    {filePreview && (
                      <div className="mt-2">
                        <img
                          src={filePreview}
                          alt="Preview"
                          style={{ maxWidth: "100%", maxHeight: "150px" }}
                        />
                        <div className="text-muted small mt-1">
                          {selectedFile
                            ? selectedFile.name
                            : "No file selected"}
                        </div>
                      </div>
                    )}
                  </Form.Group>
                  <div className="d-flex justify-content-end gap-2">
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit">
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
                Are you sure you want to delete this product?
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
                  <div
                    className="card-header"
                    data-tour="true"
                    data-step="1"
                    data-intro="Here you can see a list of all certificates in this product. The number in brackets shows how many certificates there are."
                  >
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
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th>Product Manager</th>
                              <th>Comments</th>
                              <th>Photos</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product, index) => (
                              <tr
                                key={index}
                                onClick={() => handleRowClick(product)}
                                style={{ cursor: "pointer" }}
                              >
                                <td>{product.productId}</td>
                                <td>{product.companyName}</td>
                                <td>{product.productManager}</td>
                                <td>{product.comments}</td>
                                <td>{product.photos}</td>
                                <td>
                                  <span className="badge bg-success">
                                    Active
                                  </span>
                                </td>
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

export default CertDB_Products;