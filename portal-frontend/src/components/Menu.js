import React from "react";
import Profile from "./Profile";
import Btn_Dashboard from "./Btn_Dashboard";
import Btn_CertDb from "./Btn_CertDb";
import Btn_Users from "./Btn_Users";
import Btn_ClientDB from "./Btn_ClientDB";
import { useUserRoles } from "../hooks/useUserRoles";

const Menu = () => {
  const roles = useUserRoles(); // Get user roles

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item navbar-brand-mini-wrapper">
          <a
            className="nav-link navbar-brand brand-logo-mini"
            href="index.html"
          >
            {/* <img src="/images/cprav_logo.webp" alt="logo" style={{height: '65px' ,width: '80px'}}/> */}
          </a>
        </li>
        <Profile />
        <Btn_Dashboard />
        {roles.includes("client") && <Btn_CertDb />}
        {roles.includes("admin" || "staff") && <Btn_ClientDB />}
        {roles.includes("admin") && <Btn_Users />}
      </ul>
    </nav>
  );
};

export default Menu;
