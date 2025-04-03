import React from "react";

const CertDB = () => {
    return (
        <div class="row">

            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <p class="card-description">Horizontal bootstrap tab</p>
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home-1" role="tab" aria-controls="home" aria-selected="false" tabindex="-1">Product Info</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile-1" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1">Certificates</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="home-1" role="tabpanel" aria-labelledby="home-tab">
                                <div class="media">

















                                    <div class="row mt-3">

                                        <div class="col-lg-12 col-xl-6">
                                            <form action="" method="POST" name="productDetailsForm">
                                                <div class="card mb-3" style={{ border: '1px solid #dbdbd9' }}>
                                                    <div class="card-header" data-tour="true" data-step="1" data-intro="Comments on certificates, both internal and external appear here.<br/>">
                                                        <div>
                                                            <i class="fa fa-fw text-muted fa-info"></i> Product Information                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="form-group row">
                                                            <label class="col-xl-3 col-form-label" for="name">Product-ID</label>
                                                            <div class="col-xl-9">
                                                                <input class="form-control" readonly="" type="text" value="7967" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-xl-3 col-form-label" for="name">Name</label>
                                                            <div class="col-xl-9">
                                                                <input class="form-control" id="name" name="name" type="text" placeholder="Product Name" value="Demo Product A" />
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-xl-3 col-form-label" for="customer">Company</label>
                                                            <div class="col-xl-9">
                                                                <select class="form-control" id="customer" name="customer" style={{ height: '38px', paddingTop: '10px', paddingBottom: '10px' }}>
                                                                    <option>one</option>
                                                                    <option>two</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-xl-3 col-form-label" for="comment">Comment</label>
                                                            <div class="col-xl-9"><textarea class="form-control" id="comment" name="comment" rows="11" cols="40">Demo Product automatically created for you by TAMSys</textarea></div>
                                                        </div>


                                                        <div class="form-group row">
                                                            <label class="col-xl-3 col-form-label" for="text-input">Product Manager</label>
                                                            <div class="col-xl-9 col-form-label">
                                                                <div>
                                                                    <select name="customer_product_manager[]" class="form-control select2 select2-hidden-accessible" multiple="" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: '100%' }}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="" style={{ width: "0.75em;" }} /></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" name="check_compliance_score" value="1" />
                                                        <input type="hidden" name="show_compliance_score" value="3" />



                                                    </div>


                                                    <div class="card-footer text-right">
                                                        <button type="submit" name="generalButtonEOL" id="generalButtonEOL" class="btn btn-danger">Set all Certs for this Product immediately EOL</button>
                                                        <button type="submit" class="btn btn-secondary" id="generalButtonDele" name="general" value="prodGeneralDele"><i class="fa fa-fw fa-archive"></i> Archive</button>
                                                        <button type="submit" class="btn btn-primary" id="generalButtonSave" name="general" value="prodGeneralSave"><i class="fa fa-fw fa-save"></i> Save</button>
                                                    </div>

                                                </div>

                                            </form>

                                            {/* <form action="" method="POST" enctype="multipart/form-data" name="prod_photos_form">
                                                <div class="card mb-3" style={{ border: '1px solid #dbdbd9' }}>
                                                    <div class="card-header" data-tour="true" data-step="2" data-intro="Here you can see the photos uploaded for this product. You can upload a total of 6 photos.<br/>"><i class="text-muted fa fa-fw fa-images"></i> Product Photos</div>
                                                    <div class="card-body">
                                                        <div class="card ibl-photoflex ">
                                                            <div class="card-header">
                                                                <span>Photo1</span>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="d-flex flex-column justify-content-center align-items-start">
                                                                    <span class="add_image">
                                                                        <input type="file" accept="image/*" data-imageid="1" class="regular-text tamsys_image_file" size="10" name="photo1" />
                                                                    </span>
                                                                    <div class="w-100 mt-1 d-none flex-row justify-content-center align-items-end image_preview preview_1" style={{ height: '160px', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}><div class="preview_info w-100 p-2 font-weight-bold text-white" style={{ textShadow: '1px 1px 1px black' }}>Photo Preview</div></div>
                                                                    <div class="mt-2 w-100 d-none photo_description1"><textarea placeholder="Optional Image Information" name="description1" style={{ width: '100%', height: '60px;' }}></textarea></div>
                                                                </div>

                                                            </div>
                                                            <div class="card-footer" style={{ height: 'auto', minHeight: '85px', maxHeight: '85px' }}>
                                                            </div>
                                                        </div>
                                                        <div class="card ibl-photoflex ">
                                                            <div class="card-header">
                                                                <span>Photo2</span>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="d-flex flex-column justify-content-center align-items-start">
                                                                    <span class="add_image">
                                                                        <input type="file" accept="image/*" data-imageid="2" class="regular-text tamsys_image_file" size="10" name="photo2" />
                                                                    </span>
                                                                    <div class="w-100 mt-1 d-none flex-row justify-content-center align-items-end image_preview preview_2" style={{ height: '160px', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}><div class="preview_info w-100 p-2 font-weight-bold text-white" style={{ textShadow: '1px 1px 1px black' }}>Photo Preview</div></div>
                                                                    <div class="mt-2 w-100 d-none photo_description2"><textarea placeholder="Optional Image Information" name="description2" style={{ width: '100%', height: '60px' }}></textarea></div>
                                                                </div>

                                                            </div>
                                                            <div class="card-footer" style={{ height: 'auto', minHeight: '85px', maxHeight: '85px;' }}>
                                                            </div>
                                                        </div>
                                                        <div class="card ibl-photoflex ">
                                                            <div class="card-header">
                                                                <span>Photo3</span>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="d-flex flex-column justify-content-center align-items-start">
                                                                    <span class="add_image">
                                                                        <input type="file" accept="image/*" data-imageid="3" class="regular-text tamsys_image_file" size="10" name="photo3" />
                                                                    </span>
                                                                    <div class="w-100 mt-1 d-none flex-row justify-content-center align-items-end image_preview preview_3" style={{ height: '160px', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}><div class="preview_info w-100 p-2 font-weight-bold text-white" style={{ textShadow: '1px 1px 1px black' }}>Photo Preview</div></div>
                                                                    <div class="mt-2 w-100 d-none photo_description3"><textarea placeholder="Optional Image Information" name="description3" style={{ width: '100%', height: '60px' }}></textarea></div>
                                                                </div>

                                                            </div>
                                                            <div class="card-footer" style={{ height: 'auto', minHeight: '85px', maxHeight: '85px' }}>
                                                            </div>
                                                        </div>











                                                        <div className="card ibl-photoflex">
                                                            <div className="card-header">
                                                                <span>Photo4</span>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="d-flex flex-column justify-content-center align-items-start">
                                                                    <span className="add_image">
                                                                        <input type="file" accept="image/*" data-imageid="4" className="regular-text tamsys_image_file" size="10" name="photo4" />
                                                                    </span>
                                                                    <div
                                                                        className="w-100 mt-1 d-none flex-row justify-content-center align-items-end image_preview preview_4"
                                                                        style={{ height: '160px', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}
                                                                    >
                                                                        <div
                                                                            className="preview_info w-100 p-2 font-weight-bold text-white"
                                                                            style={{ textShadow: '1px 1px 1px black' }}
                                                                        >
                                                                            Photo Preview
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 w-100 d-none photo_description4">
                                                                        <textarea
                                                                            placeholder="Optional Image Information"
                                                                            name="description4"
                                                                            style={{ width: '100%', height: '60px' }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer" style={{ height: 'auto', minHeight: '85px', maxHeight: '85px' }}>
                                                            </div>
                                                        </div>

                                                        <div className="card ibl-photoflex">
                                                            <div className="card-header">
                                                                <span>Photo5</span>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="d-flex flex-column justify-content-center align-items-start">
                                                                    <span className="add_image">
                                                                        <input type="file" accept="image/*" data-imageid="5" className="regular-text tamsys_image_file" size="10" name="photo5" />
                                                                    </span>
                                                                    <div
                                                                        className="w-100 mt-1 d-none flex-row justify-content-center align-items-end image_preview preview_5"
                                                                        style={{ height: '160px', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}
                                                                    >
                                                                        <div
                                                                            className="preview_info w-100 p-2 font-weight-bold text-white"
                                                                            style={{ textShadow: '1px 1px 1px black' }}
                                                                        >
                                                                            Photo Preview
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 w-100 d-none photo_description5">
                                                                        <textarea
                                                                            placeholder="Optional Image Information"
                                                                            name="description5"
                                                                            style={{ width: '100%', height: '60px' }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer" style={{ height: 'auto', minHeight: '85px', maxHeight: '85px' }}>
                                                            </div>
                                                        </div>

                                                        <div className="card ibl-photoflex">
                                                            <div className="card-header">
                                                                <span>Photo6</span>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="d-flex flex-column justify-content-center align-items-start">
                                                                    <span className="add_image">
                                                                        <input type="file" accept="image/*" data-imageid="6" className="regular-text tamsys_image_file" size="10" name="photo6" />
                                                                    </span>
                                                                    <div
                                                                        className="w-100 mt-1 d-none flex-row justify-content-center align-items-end image_preview preview_6"
                                                                        style={{ height: '160px', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}
                                                                    >
                                                                        <div
                                                                            className="preview_info w-100 p-2 font-weight-bold text-white"
                                                                            style={{ textShadow: '1px 1px 1px black' }}
                                                                        >
                                                                            Photo Preview
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2 w-100 d-none photo_description6">
                                                                        <textarea
                                                                            placeholder="Optional Image Information"
                                                                            name="description6"
                                                                            style={{ width: '100%', height: '60px' }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer" style={{ height: 'auto', minHeight: '85px', maxHeight: '85px' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-right">
                                                        <button type="submit" class="btn btn-primary" id="generalButtonSave" name="save_photos" value="Save"><i class="fa fa-fw fa-save"></i> Save</button>
                                                    </div>
                                                </div>
                                            </form>


                                            <div class="card" style={{ border: '1px solid #dbdbd9' }}>
                                                <div class="card-header">
                                                    Product Compliance Score Evolution
                                                </div>
                                                <div className="card-body">
                                                    <div
                                                        id="productComplianceScoreEvolution"
                                                        data-highcharts-chart="0"
                                                        style={{ overflow: "hidden" }}
                                                    >
                                                        <div
                                                            id="highcharts-onwyust-0"
                                                            dir="ltr"
                                                            className="highcharts-container"
                                                            style={{
                                                                position: "relative",
                                                                overflow: "hidden",
                                                                width: "438px",
                                                                height: "400px",
                                                                textAlign: "left",
                                                                lineHeight: "normal",
                                                                zIndex: 0,
                                                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                                userSelect: "none",
                                                                fontFamily: "Roboto, Tahoma",
                                                            }}
                                                        >
                                                            <svg
                                                                version="1.1"
                                                                className="highcharts-root"
                                                                style={{ fontFamily: "Roboto, Tahoma", fontSize: "12px" }}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="438"
                                                                height="400"
                                                                viewBox="0 0 438 400"
                                                            >
                                                                <desc>Created with Highcharts 8.2.0</desc>
                                                                <defs>
                                                                    <clipPath id="highcharts-onwyust-1-">
                                                                        <rect x="0" y="0" width="352" height="261" fill="none"></rect>
                                                                    </clipPath>
                                                                </defs>
                                                                <rect
                                                                    fill="#ffffff"
                                                                    className="highcharts-background"
                                                                    x="0"
                                                                    y="0"
                                                                    width="438"
                                                                    height="400"
                                                                    rx="0"
                                                                    ry="0"
                                                                ></rect>
                                                                <rect
                                                                    fill="none"
                                                                    className="highcharts-plot-background"
                                                                    x="76"
                                                                    y="47"
                                                                    width="352"
                                                                    height="261"
                                                                ></rect>
                                                                <g className="highcharts-pane-group" data-z-index="0"></g>
                                                                <g className="highcharts-grid highcharts-xaxis-grid" data-z-index="1">
                                                                    <path
                                                                        fill="none"
                                                                        data-z-index="1"
                                                                        className="highcharts-grid-line"
                                                                        d="M 427.5 47 L 427.5 308"
                                                                        opacity="1"
                                                                    ></path>
                                                                    <path
                                                                        fill="none"
                                                                        data-z-index="1"
                                                                        className="highcharts-grid-line"
                                                                        d="M 75.5 47 L 75.5 308"
                                                                        opacity="1"
                                                                    ></path>
                                                                </g>
                                                                <g className="highcharts-grid highcharts-yaxis-grid" data-z-index="1">
                                                                    <path
                                                                        fill="none"
                                                                        stroke="#e6e6e6"
                                                                        strokeWidth="1"
                                                                        data-z-index="1"
                                                                        className="highcharts-grid-line"
                                                                        d="M 76 178.5 L 428 178.5"
                                                                        opacity="1"
                                                                    ></path>
                                                                </g>
                                                                <rect
                                                                    fill="none"
                                                                    className="highcharts-plot-border"
                                                                    data-z-index="1"
                                                                    x="76"
                                                                    y="47"
                                                                    width="352"
                                                                    height="261"
                                                                ></rect>
                                                                <g className="highcharts-axis highcharts-xaxis" data-z-index="2">
                                                                    <text
                                                                        x="252"
                                                                        data-z-index="7"
                                                                        textAnchor="middle"
                                                                        transform="translate(0,0)"
                                                                        className="highcharts-axis-title"
                                                                        style={{ color: "#666666", fill: "#666666" }}
                                                                        y="346"
                                                                    >
                                                                        <tspan>Calendar Week</tspan>
                                                                    </text>
                                                                    <path
                                                                        fill="none"
                                                                        className="highcharts-axis-line"
                                                                        stroke="#ccd6eb"
                                                                        strokeWidth="1"
                                                                        data-z-index="7"
                                                                        d="M 76 308.5 L 428 308.5"
                                                                    ></path>
                                                                </g>
                                                                <g className="highcharts-axis highcharts-yaxis" data-z-index="2">
                                                                    <text
                                                                        x="24.453125"
                                                                        data-z-index="7"
                                                                        textAnchor="middle"
                                                                        transform="translate(0,0) rotate(270 24.453125 177.5)"
                                                                        className="highcharts-axis-title"
                                                                        style={{ color: "#666666", fill: "#666666" }}
                                                                        y="177.5"
                                                                    >
                                                                        <tspan>Compliance Score</tspan>
                                                                    </text>
                                                                    <path
                                                                        fill="none"
                                                                        className="highcharts-axis-line"
                                                                        data-z-index="7"
                                                                        d="M 76 47 L 76 308"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div> */}


                                        </div>



                                        <div class="col-lg-12 col-xl-6">


                                            <form method="post" action="">
                                                <div class="card mb-3" style={{ border: '1px solid #dbdbd9' }}>
                                                    <div class="card-header">
                                                        <i class="fa fa-satellite-dish"></i>
                                                        Product Technologies
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="card">
                                                            <div class="card-header">
                                                                Technologies
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="form-group row mb-1">
                                                                    <div class="col-xl-12 col-lg-12">
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="1" type="checkbox" name="frequencies[]" value="1" />    <label for="1" class="mr-1">125 kHz: Immobiliser</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="2" type="checkbox" name="frequencies[]" value="2" />    <label for="2" class="mr-1">13,56 MHz: NFC</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="3" type="checkbox" name="frequencies[]" value="3" />    <label for="3" class="mr-1">315 MHz: SRD</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="4" type="checkbox" name="frequencies[]" value="4" />    <label for="4" class="mr-1">433 MHz: SRD</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="5" type="checkbox" name="frequencies[]" value="5" />    <label for="5" class="mr-1">868 MHz: SRD</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="15" type="checkbox" name="frequencies[]" value="15" />    <label for="15" class="mr-1">868 MHz: RFID</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="12" type="checkbox" name="frequencies[]" value="12" />    <label for="12" class="mr-1">920 MHz: RFID</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="16" type="checkbox" name="frequencies[]" value="16" />    <label for="16" class="mr-1">920 MHz: SRD</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="7" type="checkbox" name="frequencies[]" value="7" />    <label for="7" class="mr-1">2,4 GHz: BT</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="13" type="checkbox" name="frequencies[]" value="13" />    <label for="13" class="mr-1">2,4 GHz: WLAN</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="33" type="checkbox" name="frequencies[]" value="33" />    <label for="33" class="mr-1">2,4 Ghz: ISM PP</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="8" type="checkbox" name="frequencies[]" value="8" />    <label for="8" class="mr-1">5 GHz: WLAN Master</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="14" type="checkbox" name="frequencies[]" value="14" />    <label for="14" class="mr-1">5 GHz: WLAN Client</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="17" type="checkbox" name="frequencies[]" value="17" />    <label for="17" class="mr-1">Receiver: Rx only</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="9" type="checkbox" name="frequencies[]" value="9" />    <label for="9" class="mr-1">24 GHz: Radar</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="18" type="checkbox" name="frequencies[]" value="18" />    <label for="18" class="mr-1">24 GHz UWB: Radar</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="19" type="checkbox" name="frequencies[]" value="19" />    <label for="19" class="mr-1">60 GHz: Radar</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="10" type="checkbox" name="frequencies[]" value="10" />    <label for="10" class="mr-1">76-77 GHz: Radar</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="23" type="checkbox" name="frequencies[]" value="23" />    <label for="23" class="mr-1">77-81 GHz: Radar</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="11" type="checkbox" name="frequencies[]" value="11" />    <label for="11" class="mr-1">120 GHz: Radar</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="20" type="checkbox" name="frequencies[]" value="20" />    <label for="20" class="mr-1">600-900 MHz: 5G Low-Band </label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="26" type="checkbox" name="frequencies[]" value="26" />    <label for="26" class="mr-1">1-6 GHz: 5G Mid-Band</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="27" type="checkbox" name="frequencies[]" value="27" />    <label for="27" class="mr-1">24-40 GHz: 5G High-Band </label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="28" type="checkbox" name="frequencies[]" value="28" />    <label for="28" class="mr-1">450-900 MHz: 4G LTE Low-Band </label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="29" type="checkbox" name="frequencies[]" value="29" />    <label for="29" class="mr-1">1-3 GHz: 4G LTE Mid-Band</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="30" type="checkbox" name="frequencies[]" value="30" />    <label for="30" class="mr-1">3-4 GHz: 4G LTE High-Band </label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="21" type="checkbox" name="frequencies[]" value="21" />    <label for="21" class="mr-1">800-960 MHz: 3G UMTS</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="31" type="checkbox" name="frequencies[]" value="31" />    <label for="31" class="mr-1">1,5-2,2 GHz: 3G UMTS</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="22" type="checkbox" name="frequencies[]" value="22" />    <label for="22" class="mr-1">6-9 GHz: UWB</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="24" type="checkbox" name="frequencies[]" value="24" />    <label for="24" class="mr-1">125 kHz: WPT</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="25" type="checkbox" name="frequencies[]" value="25" />    <label for="25" class="mr-1">360 kHz: WPT</label></div>
                                                                        <div class="mr-3 float-left bg-gray-100 pl-1 pr-1 mb-1">    <input id="32" type="checkbox" name="frequencies[]" value="32" />    <label for="32" class="mr-1">1-2 GHz: GNSS (Rx only)</label></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-right">
                                                        <button type="submit" name="save_technologies" class="btn btn-primary"><i class="fa fa-fw fa-save"></i> Save</button>
                                                    </div>
                                                </div>
                                            </form>


                                            <form method="post" action="">
                                                <div class="card mb-3" style={{ border: '1px solid #dbdbd9' }}>
                                                    <div class="card-header" data-tour="true" data-step="3" data-intro="Here you can see the product ID with further information.<br/>">
                                                        <i class="fa fa-table"></i>
                                                        Product-ID (PID)                            <div class="card-actions">
                                                            <div id="pidWidgetModeToggle"></div>
                                                            <a data-tour="true" data-step="4" data-intro="If you want to edit the product ID, click here.<br/>" href="product_pid.php?pid=kmxAjihHd20Lek1soPZO8L86jrPj5Z1meoQy6mk0jcMQ8Wb" title="" data-original-title="Edit PID"><i class="fa fa-fw fa-edit"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="pidOemWidget" id="PID_OEM_TARGET_DIV"></div>
                                                    <div class="card-body pidSysWidget" id="pidCards">
                                                        <div class="card">
                                                            <div class="card-header">
                                                                Basic Keys                                    <div class="card-actions"><a href="product_detail?pid=kmxAjihHd20Lek1soPZO8L86jrPj5Z1meoQy6mk0jcMQ8Wb&amp;pidExport=bmMOpA4PgOQ-tPVbcmRBmGc72NA9DPfb8Krw0kWg2-2cqW2" target="_blank"><i class="fas fa-file-export" title="" data-original-title="Export Basic PID Keys"></i></a></div>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="alert alert-warning">No PID available.</div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="card-footer pidSysWidget">
                                                        <div id="pidReviewStatus">
                                                            <div class="text-muted pb-3"><i class="fa fa-fw fa-info-square pr-4"></i>Currently, this PID is not undergoing Customer review.</div>                            </div>


                                                    </div>
                                                </div>
                                            </form>
                                        </div>


                                    </div>











                                </div>
                            </div>




                            <div class="tab-pane fade" id="profile-1" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="card card_product_detail_certificates" style={{ border: '1px solid #dbdbd9' }}>
                                    <div className="card-header" data-tour="true" data-step="1" data-intro="Here you can see a list of all certificates in this product. The number in brackets shows how many certificates there are.">
                                        <i className="fa fa-lg fa-fw fa-file-certificate"></i> Certificates (33)
                                        <div id="date_export_expiring_certificates" style={{ float: 'right' }} className="hidden">
                                            <form action="?pid=lP5Ssi4FekRMs4QVoOdHhKk8Cep6KZ0fB_KOkRAKywGw_83" method="post">
                                                {/* Date input fields and export button are commented out */}
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th width="72"></th>
                                                        <th className="column-min-width-110"><span>Country</span></th>
                                                        <th className="column-min-width-110 text-center"><span>Cert.D.</span></th>
                                                        <th className="column-min-width-110 text-center"><span>Exp.D.</span></th>
                                                        <th className="column-min-width-110 text-center"><span>Status</span></th>
                                                        <th className="column-min-width-110 text-center"><span>Progress</span></th>
                                                        <th className="column-min-width-110 text-center"><span>Certificate</span></th>
                                                        <th className="text-center column-min-width-90"><span>Com.</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a className="btn btn-sm btn-outline-gray-500" href="#" title="Cert Files"><i className="fas fa-search"></i></a>
                                                            <a className="btn btn-sm btn-outline-gray-500" href="#" title="Info"><i className="fas fa-info"></i></a>
                                                        </td>
                                                        <td>Afghanistan</td>
                                                        <td className="text-center">2025-01-24</td>
                                                        <td className="text-center"><span style={{ lineHeight: '20px', fontSize: '20px' }}>∞</span></td>
                                                        <td className="text-center"><span className="fa fa-lg fa-fw fa-star" style={{ color: '#66cc99' }}></span></td>
                                                        <td className="text-left"></td>
                                                        <td className="text-center">
                                                            <a className="ibl-lightbox" href="#" style={{ cursor: 'pointer' }}>
                                                                <span className="fa fa-lg fa-fw far fa-file-alt" style={{ color: '#666666' }}></span>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fa fa-lg fa-fw fa-comment" style={{ color: '#666666' }}></span>
                                                            <span className="fa fa-lg fa-fw fa-comments" style={{ color: '#666666' }}></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a className="btn btn-sm btn-outline-gray-500" href="#" title="Cert Files"><i className="fas fa-search"></i></a>
                                                            <a className="btn btn-sm btn-outline-gray-500" href="#" title="Info"><i className="fas fa-info"></i></a>
                                                        </td>
                                                        <td>Afghanistan</td>
                                                        <td className="text-center">2025-01-24</td>
                                                        <td className="text-center"><span style={{ lineHeight: '20px', fontSize: '20px' }}>∞</span></td>
                                                        <td className="text-center"><span className="fa fa-lg fa-fw fa-star" style={{ color: '#66cc99' }}></span></td>
                                                        <td className="text-left"></td>
                                                        <td className="text-center">
                                                            <a className="ibl-lightbox" href="#" style={{ cursor: 'pointer' }}>
                                                                <span className="fa fa-lg fa-fw far fa-file-alt" style={{ color: '#666666' }}></span>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fa fa-lg fa-fw fa-comment" style={{ color: '#666666' }}></span>
                                                            <span className="fa fa-lg fa-fw fa-comments" style={{ color: '#666666' }}></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a className="btn btn-sm btn-outline-gray-500" href="#" title="Cert Files"><i className="fas fa-search"></i></a>
                                                            <a className="btn btn-sm btn-outline-gray-500" href="#" title="Info"><i className="fas fa-info"></i></a>
                                                        </td>
                                                        <td>Afghanistan</td>
                                                        <td className="text-center">2025-01-24</td>
                                                        <td className="text-center"><span style={{ lineHeight: '20px', fontSize: '20px' }}>∞</span></td>
                                                        <td className="text-center"><span className="fa fa-lg fa-fw fa-star" style={{ color: '#66cc99' }}></span></td>
                                                        <td className="text-left"></td>
                                                        <td className="text-center">
                                                            <a className="ibl-lightbox" href="#" style={{ cursor: 'pointer' }}>
                                                                <span className="fa fa-lg fa-fw far fa-file-alt" style={{ color: '#666666' }}></span>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="fa fa-lg fa-fw fa-comment" style={{ color: '#666666' }}></span>
                                                            <span className="fa fa-lg fa-fw fa-comments" style={{ color: '#666666' }}></span>
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

        </div>);
};

export default CertDB;