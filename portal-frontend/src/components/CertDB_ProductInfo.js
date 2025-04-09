import React from "react";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

const CertDB_ProductInfo = () => {
  const location = useLocation();
  const productData = location.state || {};

  return (
    <div className="row">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
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
                      <form action="" method="POST" name="productDetailsForm">
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
                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="name"
                              >
                                Product-ID
                              </label>
                              <div className="col-xl-9">
                                <input
                                  className="form-control"
                                  readOnly
                                  type="text"
                                  value={productData.productId || ""}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="name"
                              >
                                Name
                              </label>
                              <div className="col-xl-9">
                                <input
                                  className="form-control"
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder="Product Name"
                                  value={productData.companyName || ""}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="customer"
                              >
                                Company
                              </label>
                              <div className="col-xl-9">
                                <select
                                  className="form-control"
                                  id="customer"
                                  name="customer"
                                  style={{
                                    height: "38px",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                  }}
                                >
                                  <option>one</option>
                                  <option>two</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="comment"
                              >
                                Comment
                              </label>
                              <div className="col-xl-9">
                                <textarea
                                  className="form-control"
                                  id="comment"
                                  name="comment"
                                  rows="11"
                                  cols="40"
                                >
                                  {productData.comments || ""}
                                </textarea>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-xl-3 col-form-label"
                                htmlFor="text-input"
                              >
                                Product Manager
                              </label>
                              <div className="col-xl-9 col-form-label">
                                <div>
                                  <select
                                    name="customer_product_manager[]"
                                    className="form-control select2 select2-hidden-accessible"
                                    multiple=""
                                    data-select2-id="1"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                  >
                                    {productData.productManager ? (
                                      <option
                                        value={productData.productManager}
                                        selected
                                      >
                                        {productData.productManager}
                                      </option>
                                    ) : null}
                                  </select>
                                </div>
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
                              name="generalButtonEOL"
                              id="generalButtonEOL"
                              className="btn btn-danger"
                            >
                              Set all Certs for this Product immediately EOL
                            </button>
                            <button
                              type="submit"
                              className="btn btn-secondary"
                              id="generalButtonDele"
                              name="general"
                              value="prodGeneralDele"
                            >
                              <i className="fa fa-fw fa-archive"></i> Archive
                            </button>
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
                      <form method="post" action="">
                        <div
                          className="card mb-3"
                          style={{ border: "1px solid #dbdbd9" }}
                        >
                          <div className="card-header">
                            <i className="fa fa-satellite-dish"></i>
                            Product Technologies
                          </div>
                          <div className="card-body">
                            <div className="card">
                              <div className="card-header">Technologies</div>
                              <div className="card-body">
                                <div className="form-group row mb-1">
                                  <div className="col-xl-12 col-lg-12">
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="1"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="1"
                                      />{" "}
                                      <label for="1" className="mr-1">
                                        125 kHz: Immobiliser
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="2"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="2"
                                      />{" "}
                                      <label for="2" className="mr-1">
                                        13,56 MHz: NFC
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="3"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="3"
                                      />{" "}
                                      <label for="3" className="mr-1">
                                        315 MHz: SRD
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="4"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="4"
                                      />{" "}
                                      <label for="4" className="mr-1">
                                        433 MHz: SRD
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="5"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="5"
                                      />{" "}
                                      <label for="5" className="mr-1">
                                        868 MHz: SRD
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="15"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="15"
                                      />{" "}
                                      <label for="15" className="mr-1">
                                        868 MHz: RFID
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="12"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="12"
                                      />{" "}
                                      <label for="12" className="mr-1">
                                        920 MHz: RFID
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="16"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="16"
                                      />{" "}
                                      <label for="16" className="mr-1">
                                        920 MHz: SRD
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="7"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="7"
                                      />{" "}
                                      <label for="7" className="mr-1">
                                        2,4 GHz: BT
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="13"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="13"
                                      />{" "}
                                      <label for="13" className="mr-1">
                                        2,4 GHz: WLAN
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="33"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="33"
                                      />{" "}
                                      <label for="33" className="mr-1">
                                        2,4 Ghz: ISM PP
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="8"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="8"
                                      />{" "}
                                      <label for="8" className="mr-1">
                                        5 GHz: WLAN Master
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="14"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="14"
                                      />{" "}
                                      <label for="14" className="mr-1">
                                        5 GHz: WLAN Client
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="17"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="17"
                                      />{" "}
                                      <label for="17" className="mr-1">
                                        Receiver: Rx only
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="9"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="9"
                                      />{" "}
                                      <label for="9" className="mr-1">
                                        24 GHz: Radar
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="18"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="18"
                                      />{" "}
                                      <label for="18" className="mr-1">
                                        24 GHz UWB: Radar
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="19"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="19"
                                      />{" "}
                                      <label for="19" className="mr-1">
                                        60 GHz: Radar
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="10"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="10"
                                      />{" "}
                                      <label for="10" className="mr-1">
                                        76-77 GHz: Radar
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="23"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="23"
                                      />{" "}
                                      <label for="23" className="mr-1">
                                        77-81 GHz: Radar
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="11"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="11"
                                      />{" "}
                                      <label for="11" className="mr-1">
                                        120 GHz: Radar
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="20"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="20"
                                      />{" "}
                                      <label for="20" className="mr-1">
                                        600-900 MHz: 5G Low-Band{" "}
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="26"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="26"
                                      />{" "}
                                      <label for="26" className="mr-1">
                                        1-6 GHz: 5G Mid-Band
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="27"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="27"
                                      />{" "}
                                      <label for="27" className="mr-1">
                                        24-40 GHz: 5G High-Band{" "}
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="28"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="28"
                                      />{" "}
                                      <label for="28" className="mr-1">
                                        450-900 MHz: 4G LTE Low-Band{" "}
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="29"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="29"
                                      />{" "}
                                      <label for="29" className="mr-1">
                                        1-3 GHz: 4G LTE Mid-Band
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="30"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="30"
                                      />{" "}
                                      <label for="30" className="mr-1">
                                        3-4 GHz: 4G LTE High-Band{" "}
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="21"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="21"
                                      />{" "}
                                      <label for="21" className="mr-1">
                                        800-960 MHz: 3G UMTS
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="31"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="31"
                                      />{" "}
                                      <label for="31" className="mr-1">
                                        1,5-2,2 GHz: 3G UMTS
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="22"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="22"
                                      />{" "}
                                      <label for="22" className="mr-1">
                                        6-9 GHz: UWB
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="24"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="24"
                                      />{" "}
                                      <label for="24" className="mr-1">
                                        125 kHz: WPT
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="25"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="25"
                                      />{" "}
                                      <label for="25" className="mr-1">
                                        360 kHz: WPT
                                      </label>
                                    </div>
                                    <div className="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">
                                      {" "}
                                      <input
                                        id="32"
                                        type="checkbox"
                                        name="frequencies[]"
                                        value="32"
                                      />{" "}
                                      <label for="32" className="mr-1">
                                        1-2 GHz: GNSS (Rx only)
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-right">
                            <button
                              type="submit"
                              name="save_technologies"
                              className="btn btn-primary"
                            >
                              <i className="fa fa-fw fa-save"></i> Save
                            </button>
                          </div>
                        </div>
                      </form>

                      <form method="post" action="">
                        <div
                          className="card mb-3"
                          style={{ border: "1px solid #dbdbd9" }}
                        >
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
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile-1"
                role="tabpanel"
                aria-labelledby="profile-tab">
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
                    Certificates
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">

                    <div style={{ textAlign: 'right', marginBottom: '10px'}}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<span>+</span>}
                        >
                          Add Test Certificates
                        </Button>
                      </div>

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
                          <tr>
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
                            <td>Afghanistan</td>
                            <td className="text-center">2025-01-24</td>
                            <td className="text-center">
                              <span
                                style={{ lineHeight: "20px", fontSize: "20px" }}
                              >
                                ∞
                              </span>
                            </td>
                            <td className="text-center">
                              <span
                                className="fa fa-lg fa-fw fa-star"
                                style={{ color: "#66cc99" }}
                              ></span>
                            </td>
                            <td className="text-left"></td>
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
                                style={{ color: "#666666" }}
                              ></span>
                              <span
                                className="fa fa-lg fa-fw fa-comments"
                                style={{ color: "#666666" }}
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>




              <div
                className="tab-pane fade"
                id="profile-3"
                role="tabpanel"
                aria-labelledby="profile-tab">
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
                    Test Reports
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">

                      <div style={{ textAlign: 'right', marginBottom: '10px'}}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<span>+</span>}
                        >
                          Add Test Report
                        </Button>
                      </div>

                      <table className="table table-hover table-striped mb-3">
                        <thead className="thead-light">
                          <tr>
                            <th width="5%">
                              <input type="checkbox" />
                            </th>
                            <th width="35%">Exhibit Name</th>
                            <th width="15%">File Category</th>
                            <th width="10%">Filetype</th>
                            <th width="10%">Date</th>
                            <th width="10%">Uploaded by</th>
                            <th width="10%">Allow Deletion</th>
                            <th width="10%" className="text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>
                              <a
                                href="/download.php?fid=tzJ3dA4HqCxtimsLk4Mx9KoR0gFu5Wm13ApeL1KztjA"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Test_Report_EMC_36174286380.pdf
                              </a>
                            </td>
                            <td>Test Report EMC</td>
                            <td>
                              <div>application/pdf</div>
                              <div className="small text-muted">0.03 MB</div>
                            </td>
                            <td>2025-03-25 01:50:09</td>
                            <td>richa@c-prav.com</td>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td className="text-right buttons">
                              <a
                                className="btn btn-sm btn-outline-gray-500 mr-1"
                                href="/product_detail_exhibits_edit.php?pid=1938&id=tzJ3dA4HqCxtimsLk4Mx9KoR0gFu5Wm13ApeL1KztjA"
                                title="Edit Testreport"
                              >
                                <i className="fa fa-fw fa-edit"></i>
                              </a>
                              <a
                                className="btn btn-sm btn-outline-gray-500 mr-1"
                                href="#"
                                title="Archive Testreport"
                              >
                                <i className="fa fa-fw fa-archive"></i>
                              </a>
                              <a
                                className="btn btn-sm btn-outline-gray-500 mr-1"
                                href="#"
                                title="Delete Exhibit"
                              >
                                <i className="fa fa-fw fa-trash ibl-color-negative"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>



                    </div>
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

export default CertDB_ProductInfo;
