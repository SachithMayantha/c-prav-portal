import React from "react";
import Profile from "./Profile";
import DashboardBtn from "./DashboardBtn";
import CertDbBtn from "./CertDbBtn";
import UsersBtn from "./UsersBtn";
import { useUserRoles } from "../hooks/useUserRoles";

const Menu = () => {
  const roles = useUserRoles(); // ✅ Get roles safely

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
        <DashboardBtn />
        <CertDbBtn />
        {roles.includes("admin") && <UsersBtn />}
      </ul>
    </nav>
  );
};

export default Menu;