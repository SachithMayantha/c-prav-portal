import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Btn_Users extends Component {
  render() {
    return (
      <div>
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            <span className="menu-title">Users</span>
            <i className="icon-layers menu-icon"></i>
          </Link>
        </li>
      </div>
    );
  }
}

export default Btn_Users;
