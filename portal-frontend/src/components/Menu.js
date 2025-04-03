import React, { Component } from "react";
import Profile from "./Profile";
import DashboardBtn from "./DashboardBtn";
import CertDbBtn from "./CertDbBtn";
import UsersBtn from "./UsersBtn";

export class Menu extends Component {
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item navbar-brand-mini-wrapper">
            <a
              className="nav-link navbar-brand brand-logo-mini"
              href="index.html"
            >
              <img src="/images/logo-mini.svg" alt="logo" />
            </a>
          </li>
          <Profile />
          {/* <li className="nav-item nav-category">
                        <span className="nav-link">Dashboard</span>
                    </li> */}

          <DashboardBtn />
          <CertDbBtn />
          {/* <li className="nav-item nav-category"><span className="nav-link">Certificates</span></li> */}
          <UsersBtn />
        </ul>
      </nav>
    );
  }
}

export default Menu;
