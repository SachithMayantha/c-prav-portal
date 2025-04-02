import React, { Component } from "react";
import { Link } from "react-router-dom";  // <-- Add this import

export class Menu extends Component {

    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item navbar-brand-mini-wrapper">
                        <a className="nav-link navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                    </li>
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="profile-image">
                                <img className="img-xs rounded-circle" src="images/faces/face8.jpg" alt="profile image" />
                                <div className="dot-indicator bg-success"></div>
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">Sahan Rasanjana</p>
                                <p className="designation">Administrator</p>
                            </div>
                            <div className="icon-container">
                                <i className="icon-bubbles"></i>
                                <div className="dot-indicator bg-danger"></div>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Dashboard</span>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <span className="menu-title">Dashboard</span>
                            <i className="icon-screen-desktop menu-icon"></i>
                        </Link>
                    </li>

                    <li className="nav-item nav-category"><span className="nav-link">Certificates</span></li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/cert-db">
                            <span className="menu-title2">Cert-DB</span>
                            <i className="icon-layers menu-icon"></i>
                        </Link>
                    </li>

                </ul>
            </nav>
        )
    }

}

export default Menu;
