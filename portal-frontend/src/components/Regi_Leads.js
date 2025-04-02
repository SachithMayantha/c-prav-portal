import React, { Component } from "react";

export class Regi_Leads extends Component {

    render() {

        return (
            <div>
                <div className="row quick-action-toolbar">
                    <div className="col-md-12 grid-margin">
                        <div className="card">
                            <div className="card-header d-block d-md-flex">
                                <h5 className="mb-0">Quick Actions</h5>
                                <p className="ms-auto mb-0">How are your active users trending overtime?<i className="icon-bulb"></i></p>
                            </div>
                            <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                    <button type="button" className="btn px-0"> <i className="icon-user me-2"></i> Add Client</button>
                                </div>
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                    <button type="button" className="btn px-0"><i className="icon-docs me-2"></i> Create Quote</button>
                                </div>
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                    <button type="button" className="btn px-0"><i className="icon-folder me-2"></i> Enter Payment</button>
                                </div>
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                    <button type="button" className="btn px-0"><i className="icon-book-open me-2"></i>Create Invoice</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    
                    <div class="col-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Basic form elements</h4>
                                <p class="card-description"> Basic form elements </p>
                                <form class="forms-sample">
                                    <div class="form-group">
                                        <label for="exampleInputName1">Name</label>
                                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail3">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword4">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleSelectGender">Gender</label>
                                        <select class="form-select" id="exampleSelectGender">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>File upload</label>
                                        <input type="file" name="img[]" class="file-upload-default" />
                                        <div class="input-group col-xs-12">
                                            <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Image" />
                                            <span class="input-group-append">
                                                <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputCity1">City</label>
                                        <input type="text" class="form-control" id="exampleInputCity1" placeholder="Location" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleTextarea1">Textarea</label>
                                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                                    <button class="btn btn-light">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )

    }

}