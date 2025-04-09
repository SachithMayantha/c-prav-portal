import React from "react";
import Profile from "./Profile";
import DashboardBtn from "./DashboardBtn";
import CertDbBtn from "./CertDbBtn";
import UsersBtn from "./UsersBtn";
import ClientDbBtn from "./Btn_ClientDB";
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
        <DashboardBtn />
        {roles.includes("client") && <CertDbBtn />}
        {roles.includes("admin" || "staff") && <ClientDbBtn />}
        {roles.includes("admin") && <UsersBtn />}
      </ul>
    </nav>
  );
};

export default Menu;
