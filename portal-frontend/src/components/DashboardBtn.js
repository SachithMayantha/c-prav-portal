import React, { Component } from "react";
import {Link} from "react-router-dom";

export class DashboardBtn extends Component {

    render() {
        return (
            <div>
                <li className="nav-item" to="/">
                        <Link className="nav-link">
                            <span className="menu-title">Dashboard</span>
                            <i className="icon-screen-desktop menu-icon"></i>
                        </Link>
                    </li>
            </div>
        )
    }
}

export default DashboardBtn;