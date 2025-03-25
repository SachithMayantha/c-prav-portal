import React, { Component } from "react";

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
                        <a className="nav-link" href="index.html">
                            <span className="menu-title">Dashboard</span>
                            <i className="icon-screen-desktop menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item nav-category"><span className="nav-link">Registration</span></li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#forms" aria-expanded="false" aria-controls="forms">
                            <span className="menu-title2">Dashboard</span>
                            <i className="icon-layers menu-icon"></i>
                        </a>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                            <span className="menu-title">Icons</span>
                            <i className="icon-globe menu-icon"></i>
                        </a>
                        <div className="collapse" id="icons">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#forms" aria-expanded="false" aria-controls="forms">
                            <span className="menu-title">Forms</span>
                            <i className="icon-book-open menu-icon"></i>
                        </a>
                        <div className="collapse" id="forms">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/forms/basic_elements.html">Form Elements</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                            <span className="menu-title">Charts</span>
                            <i className="icon-chart menu-icon"></i>
                        </a>
                        <div className="collapse" id="charts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                            <span className="menu-title">Tables</span>
                            <i className="icon-grid menu-icon"></i>
                        </a>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic Table</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category"><span className="nav-link">Extra Pages</span></li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                            <span className="menu-title">User Pages</span>
                            <i className="icon-disc menu-icon"></i>
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category"><span className="nav-link">Help</span></li>
                    <li className="nav-item">
                        <a className="nav-link" href="../../docs/documentation.html" target="_blank">
                            <span className="menu-title">Documentation</span>
                            <i className="icon-folder-alt menu-icon"></i>
                        </a>
                    </li> */}
                </ul>
            </nav>

        )

    }

}