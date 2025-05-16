import React, { useState, useEffect } from "react";
import axiosInstance from "../api/AxiosConfig";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserRoles } from "../hooks/useUserRoles";
import { FaTrash } from "react-icons/fa";
import { Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOktaAuth } from "@okta/okta-react";

const CertDBProductInfo = () => {
  const { authState } = useOktaAuth();
  const roles = useUserRoles();
  const location = useLocation();
  const navigate = useNavigate();
  const productData = location.state || {};
  const clientId = productData.clientId;
  const [clientName, setClientName] = useState("");

  const [testReports, setTestReports] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading_cer, setLoadingCer] = useState(true);

  const [formData, setFormData] = useState({
    productId: productData.productId || "",
    companyName: productData.companyName || "",
    comments: productData.comments || "",
    status: productData.status || "Active",
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const [technologies, setTechnologies] = useState([]);
  const [productTechnologies, setProductTechnologies] = useState([]);
  const [loadingTech, setLoadingTech] = useState(true);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const [loadingCert, setLoadingCert] = useState(true);
  const [countryNames, setCountryNames] = useState({});

  const [showComments, setShowComments] = useState(false);
  const [selectedComments, setSelectedComments] = useState("");

  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [certificateForm, setCertificateForm] = useState({
    n_product_id: formData.productId,
    n_country_id: "",
    c_cert_date: new Date(),
    c_exp_date: new Date(),
    c_status: "In Progress",
    c_comments: "",
    certificateFile: null,
  });

  const [showTestReportModal, setShowTestReportModal] = useState(false);
  const [reportCategories, setReportCategories] = useState([]);
  const [loadingReportCategories, setLoadingReportCategories] = useState(true);
  const [testReportForm, setTestReportForm] = useState({
    n_product_id: formData.productId,
    c_uploaded_by: "",
    c_file_cat_name: "Test Report EMC",
    c_rep_name: "",
    c_file_type: "PDF",
    d_date: new Date().toISOString().split("T")[0],
    c_file_path: "",
    testReportFile: null,
  });

  useEffect(() => {
    fetchReports();
    fetchCertificates();
    fetchTechnologies();
    fetchReportCategories();
    if (formData.productId) {
      fetchProductTechnologies();
      fetchCountries();
      fetchClientName();
    }
    if (authState?.idToken?.claims?.sub) {
      setTestReportForm((prev) => ({
        ...prev,
        c_uploaded_by: authState.idToken.claims.email,
      }));
    }
  }, [formData.productId, authState?.idToken?.claims?.sub]);

  const fetchClientName = async () => {
    if (!clientId) {
      console.error("No client ID provided");
      return;
    }
    try {
      const response = await axiosInstance.get(`/client/${clientId}`);
      if (response.data && response.data.companyName) {
        setClientName(response.data.companyName);
      } else {
        console.error("No company name in response");
      }
    } catch (error) {
      console.error("Error fetching client name:", error);
    }
  };

  const fetchReports = async () => {
    try {
      const response = await axiosInstance.get(`/report/${formData.productId}`);
      setTestReports(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reports:", error);
      setLoading(false);
    }
  };

  const fetchCountryName = async (countryId) => {
    try {
      const response = await axiosInstance.get(`/country/${countryId}`);
      setCountryNames((prev) => ({
        ...prev,
        [countryId]: response.data.country,
      }));
    } catch (error) {
      console.error("Error fetching country name:", error);
    }
  };

  const fetchCertificates = async () => {
    try {
      const response = await axiosInstance.get(
        `/certificate/${formData.productId}`
      );
      setCertificates(response.data);
      // Fetch country names for each certificate
      response.data.forEach((cert) => {
        if (!countryNames[cert.n_country_id]) {
          fetchCountryName(cert.n_country_id);
        }
      });
      setLoadingCert(false);
    } catch (error) {
      console.error("Error fetching certificates:", error);
      setLoadingCert(false);
    }
  };

  const fetchTechnologies = async () => {
    try {
      const response = await axiosInstance.get("/technology/getAll");
      setTechnologies(response.data);
      setLoadingTech(false);
    } catch (error) {
      console.error("Error fetching technologies:", error);
      setLoadingTech(false);
    }
  };

  const fetchProductTechnologies = async () => {
    try {
      const response = await axiosInstance.get(
        `/technologies/${formData.productId}`
      );
      const techIds = response.data.map((tech) =>
        tech.n_technology_id.toString()
      );
      setProductTechnologies(response.data);
      setSelectedTechnologies(techIds);
    } catch (error) {
      console.error("Error fetching product technologies:", error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axiosInstance.get("/country/getCountries");
      setCountries(response.data);
      setLoadingCountries(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setLoadingCountries(false);
    }
  };

  const fetchReportCategories = async () => {
    try {
      const response = await axiosInstance.get("/report-category");
      setReportCategories(response.data);
      setLoadingReportCategories(false);
    } catch (error) {
      console.error("Error fetching report categories:", error);
      setLoadingReportCategories(false);
    }
  };

  const handleViewPDF = () => {
    console.log("User opened the PDF");

    // This should now correctly open the PDF in a new tab
    window.open("/reports/test_report.pdf", "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFrequencyChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const frequencies = checked
        ? [...prevState.frequencies, value]
        : prevState.frequencies.filter((freq) => freq !== value);
      return { ...prevState, frequencies };
    });
  };

  const handleProductManagerChange = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setFormData((prevState) => ({
      ...prevState,
      productManager: selectedValues,
    }));
  };

  const handleTechnologyChange = (e) => {
    const { value, checked } = e.target;
    setSelectedTechnologies((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((tech) => tech !== value);
      }
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/product/update`, {
        productId: +formData.productId,
        companyName: formData.companyName,
        comments: formData.comments,
        status: formData.status,
      });
      setSubmitStatus({
        success: true,
        message: "Product updated successfully",
      });
    } catch (error) {
      console.error("Error updating product:", error);
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || "Failed to update product",
      });
    }
  };

  const handleSaveTechnologies = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(
        `/technologies/${formData.productId}`,
        selectedTechnologies.map((id) => parseInt(id))
      );
      setSubmitStatus({
        success: true,
        message: "Technologies updated successfully",
      });
    } catch (error) {
      console.error("Error updating technologies:", error);
      setSubmitStatus({
        success: false,
        message:
          error.response?.data?.message || "Failed to update technologies",
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-success";
      case "In Progress":
        return "text-warning";
      case "Ends Soon":
        return "text-#0c0c41";
      default:
        return "text-secondary";
    }
  };

  const getProgressPercentage = (status) => {
    switch (status) {
      case "Approved":
        return 100;
      case "In Progress":
        return 40;
      case "Ends Soon":
        return 70;
      default:
        return 0;
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-success";
      case "In Progress":
        return "bg-warning";
      case "Ends Soon":
        return "bg-#0c0c41";
      default:
        return "bg-secondary";
    }
  };

  const handleShowComments = (comments) => {
    setSelectedComments(comments);
    setShowComments(true);
  };

  const handleCloseComments = () => {
    setShowComments(false);
    setSelectedComments("");
  };

  const handleCertificateInputChange = (e) => {
    const { name, value } = e.target;
    setCertificateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date, field) => {
    setCertificateForm((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleFileChange = (e) => {
    setCertificateForm((prev) => ({
      ...prev,
      certificateFile: e.target.files[0],
    }));
  };

  const handleSaveCertificate = async (e) => {
    e.preventDefault();
    try {
      // Save file locally
      if (certificateForm.certificateFile) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const filePath = `C:/Users/sachi/OneDrive/Desktop/c-prav-portal/portal-frontend/Documents/${certificateForm.certificateFile.name}`;
          // Here you would typically save the file using a file system API
          // For now, we'll just log the path
          console.log("File would be saved to:", filePath);
        };
        reader.readAsArrayBuffer(certificateForm.certificateFile);
      }

      // Save certificate data
      const response = await axiosInstance.post("/certificate/save", {
        ...certificateForm,
        c_cert_date: certificateForm.c_cert_date.toISOString().split("T")[0],
        c_exp_date: certificateForm.c_exp_date.toISOString().split("T")[0],
        certificateFile: undefined, // Remove file from API request
      });

      setShowCertificateModal(false);
      fetchCertificates(); // Refresh certificates list
      setSubmitStatus({
        success: true,
        message: "Certificate assigned successfully",
      });
    } catch (error) {
      console.error("Error saving certificate:", error);
      setSubmitStatus({
        success: false,
        message:
          error.response?.data?.message || "Failed to assign certificate",
      });
    }
  };

  const handleTestReportInputChange = (e) => {
    const { name, value } = e.target;
    setTestReportForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTestReportFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTestReportForm((prev) => ({
        ...prev,
        testReportFile: file,
        c_rep_name: file.name,
      }));
    }
  };

  const handleSaveTestReport = async (e) => {
    e.preventDefault();
    try {
      const reportData = {
        n_product_id: testReportForm.n_product_id,
        c_uploaded_by: testReportForm.c_uploaded_by,
        c_file_cat_name: testReportForm.c_file_cat_name,
        c_rep_name: testReportForm.c_rep_name,
        c_file_type: testReportForm.c_file_type,
        d_date: testReportForm.d_date,
        c_file_path: testReportForm.c_file_path,
      };

      const response = await axiosInstance.post("/report/save", reportData);

      setShowTestReportModal(false);
      fetchReports(); // Refresh test reports list
      setSubmitStatus({
        success: true,
        message: "Test report added successfully",
      });
    } catch (error) {
      console.error("Error saving test report:", error);
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || "Failed to add test report",
      });
    }
  };

  return (
    <div className="row">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="mb-4">
              <h4 className="text-muted">
                {clientName
                  ? `${clientName} > ${formData.companyName}`
                  : formData.companyName}
              </h4>
            </div>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="product_info"
                  data-bs-toggle="tab"
                  href="#home-1"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Product Info
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="certificates"
                  data-bs-toggle="tab"
                  href="#profile-1"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Certificates
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="test_reports"
                  data-bs-toggle="tab"
                  href="#profile-3"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Test Reports
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="home-1"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-12 col-xl-6">
                      <form onSubmit={handleSave} name="productDetailsForm">
                        <div
                          className="card mb-3"
                          style={{ border: "1px solid #dbdbd9" }}
                        >
                          <div
                            className="card-header"
                            data-tour="true"
                            data-step="1"
                            data-intro="Comments on certificates, both internal and external appear here.<br/>"
                          >
                            <div>
                              <i className="fa fa-fw text-muted fa-info"></i>
                              Product Information{" "}
                            </div>
                          </div>
                          <div className="card-body">
                            {submitStatus.message && (
                              <div
                                className={`alert alert-${
                                  submitStatus.success ? "success" : "danger"
                                }`}
                              >
                                {submitStatus.message}
                              </div>
                            )}
                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="productId"
                              >
                                Product-ID
                              </label>
                              <div className="col-xl-9">
                                <input
                                  className="form-control"
                                  readOnly
                                  type="text"
                                  value={+formData.productId}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="companyName"
                              >
                                Name
                              </label>
                              <div className="col-xl-9">
                                <input
                                  className="form-control"
                                  id="companyName"
                                  name="companyName"
                                  type="text"
                                  placeholder="Product Name"
                                  value={formData.companyName}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="status"
                              >
                                Status
                              </label>
                              <div className="col-xl-9">
                                <select
                                  className="form-control"
                                  id="status"
                                  name="status"
                                  value={formData.status}
                                  onChange={handleInputChange}
                                  style={{
                                    height: "38px",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                  }}
                                >
                                  <option value="Active">Active</option>
                                  <option value="Renew">Renew</option>
                                  <option value="Inactive">Inactive</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="comments"
                              >
                                Comment
                              </label>
                              <div className="col-xl-9">
                                <textarea
                                  className="form-control"
                                  id="comments"
                                  name="comments"
                                  rows="11"
                                  cols="40"
                                  value={formData.comments}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <input
                              type="hidden"
                              name="check_compliance_score"
                              value="1"
                            />
                            <input
                              type="hidden"
                              name="show_compliance_score"
                              value="3"
                            />
                          </div>

                          <div className="card-footer text-right">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              id="generalButtonSave"
                              name="general"
                              value="prodGeneralSave"
                            >
                              <i className="fa fa-fw fa-save"></i> Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-12 col-xl-6">
                      <form onSubmit={handleSaveTechnologies}>
                        <div
                          className="card mb-3"
                          style={{ border: "1px solid #dbdbd9" }}
                        >
                          <div className="card-header">
                            <i className="fa fa-satellite-dish"></i>
                            Product Technologies
                          </div>
                          <div className="card-body">
                            {submitStatus.message && (
                              <div
                                className={`alert alert-${
                                  submitStatus.success ? "success" : "danger"
                                }`}
                              >
                                {submitStatus.message}
                              </div>
                            )}
                            <div className="card">
                              <div className="card-header">Technologies</div>
                              <div className="card-body">
                                {loadingTech ? (
                                  <div className="text-center">
                                    Loading technologies...
                                  </div>
                                ) : (
                                  <div className="form-group row mb-1">
                                    <div className="col-xl-12 col-lg-12">
                                      <div className="d-flex flex-wrap gap-2">
                                        {technologies.map((tech) => (
                                          <div
                                            key={tech.n_technology_id}
                                            className="d-flex align-items-center bg-light p-2 rounded"
                                            style={{ minWidth: "200px" }}
                                          >
                                            <input
                                              id={tech.n_technology_id}
                                              type="checkbox"
                                              name="frequencies[]"
                                              value={tech.n_technology_id}
                                              onChange={handleTechnologyChange}
                                              checked={selectedTechnologies.includes(
                                                tech.n_technology_id.toString()
                                              )}
                                              className="me-2"
                                              style={{ marginTop: "0" }}
                                            />
                                            <label
                                              htmlFor={tech.n_technology_id}
                                              className="mb-0"
                                              style={{ whiteSpace: "nowrap" }}
                                            >
                                              {tech.c_technology}
                                            </label>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-right">
                            <button type="submit" className="btn btn-primary">
                              <i className="fa fa-fw fa-save"></i> Save
                            </button>
                          </div>
                        </div>
                      </form>

                      <form method="post" action="">
                        {/* <div
 className="card-header"
 data-tour="true"
 data-step="3"
 data-intro="Here you can see the product ID with further information.<br/>"
 >
 <i className="fa fa-table"></i>
 Product-ID (PID){" "}
 <div className="card-actions">
 <div id="pidWidgetModeToggle"></div>
 <a
 data-tour="true"
 data-step="4"
 data-intro="If you want to edit the product ID, click here.<br/>"
 href="product_pid.php?pid=kmxAjihHd20Lek1soPZO8L86jrPj5Z1meoQy6mk0jcMQ8Wb"
 title=""
 data-original-title="Edit PID"
 >
 <i className="fa fa-fw fa-edit"></i>
 </a>
 </div>
 </div> */}
                        {/* <div
 className="pidOemWidget"
 id="PID_OEM_TARGET_DIV"
 ></div>
 <div className="card-body pidSysWidget" id="pidCards">
 <div className="card">
 <div className="card-header">
 Basic Keys{" "}
 <div className="card-actions">
 <a
 href="product_detail?pid=kmxAjihHd20Lek1soPZO8L86jrPj5Z1meoQy6mk0jcMQ8Wb&amp;pidExport=bmMOpA4PgOQ-tPVbcmRBmGc72NA9DPfb8Krw0kWg2-2cqW2"
 target="_blank"
 >
 <i
 className="fas fa-file-export"
 title=""
 data-original-title="Export Basic PID Keys"
 ></i>
 </a>
 </div>
 </div>
 <div className="card-body">
 <div className="alert alert-warning">
 No PID available.
 </div>
 </div>
 </div>
 </div> */}

                        {/* <div className="card-footer pidSysWidget">
 <div id="pidReviewStatus">
 <div className="text-muted pb-3">
 <i className="fa fa-fw fa-info-square pr-4"></i>
 Currently, this PID is not undergoing Customer
 review.
 </div>{" "}
 </div>
 </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile-1"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div
                  className="card card_product_detail_certificates"
                  style={{ border: "1px solid #dbdbd9" }}
                >
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fa fa-lg fa-fw fa-file-certificate"></i>{" "}
                      Certificates
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => setShowCertificateModal(true)}
                    >
                      Assign Certificate
                    </Button>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      {loadingCert ? (
                        <div className="text-center">
                          Loading certificates...
                        </div>
                      ) : (
                        <table className="table table-hover table-striped">
                          <thead className="thead-light">
                            <tr>
                              <th width="72"></th>
                              <th className="column-min-width-110">
                                <span>Country</span>
                              </th>
                              <th className="column-min-width-110 text-center">
                                <span>Cert.D.</span>
                              </th>
                              <th className="column-min-width-110 text-center">
                                <span>Exp.D.</span>
                              </th>
                              <th className="column-min-width-110 text-center">
                                <span>Status</span>
                              </th>
                              <th className="column-min-width-110 text-center">
                                <span>Progress</span>
                              </th>
                              <th className="column-min-width-110 text-center">
                                <span>Certificate</span>
                              </th>
                              <th className="text-center column-min-width-90">
                                <span>Com.</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {certificates.map((cert) => {
                              const progress = getProgressPercentage(
                                cert.c_status
                              );
                              const progressColor = getProgressColor(
                                cert.c_status
                              );
                              return (
                                <tr key={cert.n_certificate_id}>
                                  <td>
                                    <a
                                      className="btn btn-sm btn-outline-gray-500"
                                      href="#"
                                      title="Cert Files"
                                    >
                                      <i className="fas fa-search"></i>
                                    </a>
                                    <a
                                      className="btn btn-sm btn-outline-gray-500"
                                      href="#"
                                      title="Info"
                                    >
                                      <i className="fas fa-info"></i>
                                    </a>
                                  </td>
                                  <td>
                                    {countryNames[cert.n_country_id] ||
                                      "Loading..."}
                                  </td>
                                  <td className="text-center">
                                    {cert.c_cert_date}
                                  </td>
                                  <td className="text-center">
                                    {cert.c_exp_date}
                                  </td>
                                  <td className="text-center">
                                    <span
                                      className={`fa fa-lg fa-fw fa-star ${getStatusColor(
                                        cert.c_status
                                      )}`}
                                    ></span>
                                  </td>
                                  <td className="text-center">
                                    <div
                                      className="progress"
                                      style={{
                                        height: "20px",
                                        width: "100px",
                                        margin: "0 auto",
                                      }}
                                    >
                                      <div
                                        className={`progress-bar ${progressColor}`}
                                        role="progressbar"
                                        style={{ width: `${progress}%` }}
                                        aria-valuenow={progress}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      >
                                        {progress}%
                                      </div>
                                    </div>
                                  </td>
                                  <td className="text-center">
                                    <a
                                      className="ibl-lightbox"
                                      href="#"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <span
                                        className="fa fa-lg fa-fw far fa-file-alt"
                                        style={{ color: "#666666" }}
                                      ></span>
                                    </a>
                                  </td>
                                  <td className="text-center">
                                    <span
                                      className="fa fa-lg fa-fw fa-comment"
                                      style={{
                                        color: "#666666",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        handleShowComments(cert.c_comments)
                                      }
                                      title="View Comments"
                                    ></span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile-3"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div
                  className="card card_product_detail_certificates"
                  style={{ border: "1px solid #dbdbd9" }}
                >
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fa fa-lg fa-fw fa-file-certificate"></i>{" "}
                      Test Reports
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => setShowTestReportModal(true)}
                    >
                      Add Test Report
                    </Button>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      {loading ? (
                        <div className="text-center">Loading...</div>
                      ) : (
                        <table className="table table-hover table-striped mb-3">
                          <thead className="thead-light">
                            <tr>
                              <th width="5%">
                                <input type="checkbox" />
                              </th>
                              <th width="25%">Exhibit Name</th>
                              <th width="15%">File Category</th>
                              <th width="10%">Filetype</th>
                              <th width="10%">Date</th>
                              <th width="20%">Uploaded by</th>
                              <th width="10%">Allow Deletion</th>
                              <th width="10%" className="text-right"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {testReports.map((report) => (
                              <tr key={report.n_report_id}>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>
                                  <a
                                    href=""
                                    onClick={handleViewPDF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {report.c_rep_name}
                                  </a>
                                </td>
                                <td>{report.c_file_cat_name}</td>
                                <td>{report.c_file_type}</td>
                                <td>{report.d_date.split("00")[0]}</td>
                                <td>{report.c_uploaded_by}</td>
                                <td>
                                  <FaTrash className="text-danger" />
                                </td>
                                <td className="text-right buttons">
                                  <a
                                    className="btn btn-sm btn-outline-gray-500 mr-1"
                                    title="Edit Testreport"
                                  >
                                    <i className="fa fa-fw fa-edit"></i>
                                  </a>
                                  <a
                                    className="btn btn-sm btn-outline-gray-500 mr-1"
                                    title="Archive Testreport"
                                  >
                                    <i className="fa fa-fw fa-archive"></i>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Modal */}
      <Modal show={showComments} onHide={handleCloseComments} centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificate Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedComments}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseComments}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Certificate Assignment Modal */}
      <Modal
        show={showCertificateModal}
        onHide={() => setShowCertificateModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Assign New Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveCertificate}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select
                name="n_country_id"
                value={certificateForm.n_country_id}
                onChange={handleCertificateInputChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.countryId} value={country.countryId}>
                    {country.country}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certificate Date</Form.Label>
              <DatePicker
                selected={certificateForm.c_cert_date}
                onChange={(date) => handleDateChange(date, "c_cert_date")}
                className="form-control"
                dateFormat="yyyy-MM-dd"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <DatePicker
                selected={certificateForm.c_exp_date}
                onChange={(date) => handleDateChange(date, "c_exp_date")}
                className="form-control"
                dateFormat="yyyy-MM-dd"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="c_status"
                value={certificateForm.c_status}
                onChange={handleCertificateInputChange}
                required
              >
                <option value="Approved">Approved</option>
                <option value="In Progress">In Progress</option>
                <option value="Ends Soon">Ends Soon</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certificate File (PDF)</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="c_comments"
                value={certificateForm.c_comments}
                onChange={handleCertificateInputChange}
                required
              />
            </Form.Group>

            <div className="text-end">
              <Button
                variant="secondary"
                onClick={() => setShowCertificateModal(false)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Test Report Modal */}
      <Modal
        show={showTestReportModal}
        onHide={() => setShowTestReportModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Test Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveTestReport}>
            <Form.Group className="mb-3">
              <Form.Label>Uploaded By</Form.Label>
              <Form.Control
                type="text"
                value={testReportForm.c_uploaded_by}
                readOnly
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>File Category</Form.Label>
              <Form.Select
                name="c_file_cat_name"
                value={testReportForm.c_file_cat_name}
                onChange={handleTestReportInputChange}
                required
              >
                <option value="">Select Category</option>
                {loadingReportCategories ? (
                  <option>Loading categories...</option>
                ) : (
                  reportCategories.map((category) => (
                    <option
                      key={category.c_category_name}
                      value={category.c_category_name}
                    >
                      {category.c_category_name}
                    </option>
                  ))
                )}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>File Type</Form.Label>
              <Form.Control type="text" value="PDF" readOnly disabled />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={testReportForm.d_date}
                readOnly
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Test Report File (PDF)</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handleTestReportFileChange}
                required
              />
            </Form.Group>

            <div className="text-end">
              <Button
                variant="secondary"
                onClick={() => setShowTestReportModal(false)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CertDBProductInfo;
