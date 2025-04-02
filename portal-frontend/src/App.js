import logo from './logo.svg';
import './App.css';

import { Menu } from './components/Menu';
import { Header } from './components/Header';

function App() {
  return (
    <div>

      <Header />

      <div className="container-fluid page-body-wrapper">


        <Menu />

        <div className="main-panel">
          <div className="content-wrapper">

            {/* <div className="row">
              <div className="col-md-8 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body performane-indicator-card">
                    <div className="d-sm-flex">
                      <h4 className="card-title flex-shrink-1">Performance Indicator</h4>
                      <p className="m-sm-0 ms-sm-auto flex-shrink-0">
                        <span className="data-time-range ms-0">7d</span>
                        <span className="data-time-range active">2w</span>
                        <span className="data-time-range">1m</span>
                        <span className="data-time-range">3m</span>
                        <span className="data-time-range">6m</span>
                      </p>
                    </div>
                    <div className="d-sm-flex flex-wrap mt-3">
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-primary ms-2"></span>
                        <p className="mb-0 ms-2 text-muted font-weight-semibold">Complaints (2098)</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-info ms-2"></span>
                        <p className="mb-0 ms-2 text-muted font-weight-semibold"> Task Done (1123)</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-danger ms-2"></span>
                        <p className="mb-0 ms-2 text-muted font-weight-semibold">Attends (876)</p>
                      </div>
                    </div>
                    <div className="dotted-chart-height">
                      <canvas id="performance-indicator-chart" className="mt-5"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Sessions by channel</h4>
                    <div className="aligner-wrapper py-3">
                      <div className="doughnut-chart-height">
                        <canvas id="sessionsDoughnutChart" height="210"></canvas>
                      </div>
                      <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                        <h2 className="text-center mb-0 font-weight-bold">8.234</h2>
                        <small className="d-block text-center text-muted  font-weight-semibold mb-0">Total Leads</small>
                      </div>
                    </div>
                    <div className="wrapper mt-4 d-flex flex-wrap align-items-cente">
                      <div className="d-flex">
                        <span className="square-indicator bg-danger ms-2"></span>
                        <p className="mb-0 ms-2">Assigned</p>
                      </div>
                      <div className="d-flex">
                        <span className="square-indicator bg-success ms-2"></span>
                        <p className="mb-0 ms-2">Not Assigned</p>
                      </div>
                      <div className="d-flex">
                        <span className="square-indicator bg-warning ms-2"></span>
                        <p className="mb-0 ms-2">Reassigned</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Default form</h4>
                    <p class="card-description"> Basic form layout </p>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="exampleInputUsername1">Username</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputConfirmPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                      </div>
                      {/* <div class="form-check form-check-flat form-check-primary">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input"> Remember me <i class="input-helper"/></i></label>
                      </div> */}
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Horizontal Form</h4>
                    <p class="card-description"> Horizontal form layout </p>
                    <form class="forms-sample">
                      <div class="form-group row">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" id="exampleInputUsername2" placeholder="Username" />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                          <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email" />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="exampleInputMobile" class="col-sm-3 col-form-label">Mobile</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-9">
                          <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">Re Password</label>
                        <div class="col-sm-9">
                          <input type="password" class="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                        </div>
                      </div>
                      <div class="form-check form-check-flat form-check-primary">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" /> Remember me <i class="input-helper"></i></label>
                      </div>
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>

            </div>


          </div>










          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2024 Stellar. All rights reserved. <a href="#"> Terms of use</a><a href="#">Privacy Policy</a></span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="icon-heart text-danger"></i></span>
            </div>
          </footer>

        </div>

      </div>


    </div>

  );
}

export default App;
