import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CertDbBtn extends Component {
  render() {
    return (
      <div>
        <li className="nav-item">
          <Link className="nav-link" to="/cert-db">
            <span className="menu-title">Cert-DB</span>
            <i className="icon-layers menu-icon"></i>
          </Link>
        </li>
      </div>
    );
  }
}

export default CertDbBtn;
