import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Security } from "@okta/okta-react";
import { oktaAuth } from "./config/OktaAuth";
import Header from "./components/Header";
import Menu from "./components/Menu";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import HomePage from "./pages/HomePage";
import PostLogin from "./pages/PostLogin";
import CustomSecureRoute from "./pages/CustomSecureRoute";
import "./App.css";
import CertDB from "./pages/CertDB";
import UserTable from "./components/UserTable";

const AppRoutes = () => {
  const navigate = useNavigate();

  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(originalUri || "/");
  };
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <div>
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Menu />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login/callback" element={<PostLogin />} />
                  <Route
                    path="/home/admin"
                    element={
                      <CustomSecureRoute>
                        <AdminDashboard />
                      </CustomSecureRoute>
                    }
                  />
                  <Route
                    path="/home/staff"
                    element={
                      <CustomSecureRoute>
                        <StaffDashboard />
                      </CustomSecureRoute>
                    }
                  />
                  <Route
                    path="/home/client"
                    element={
                      <CustomSecureRoute>
                        <ClientDashboard />
                      </CustomSecureRoute>
                    }
                  />
                  <Route
                    path="cert-db"
                    element={
                      <CustomSecureRoute>
                        <CertDB />
                        <CustomSecureRoute />
                      </CustomSecureRoute>
                    }
                  />
                  <Route
                    path="user"
                    element={
                      <CustomSecureRoute>
                        <UserTable />
                        <CustomSecureRoute />
                      </CustomSecureRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright © 2024 Stellar. All rights reserved.{" "}
                  <a href="/terms-of-use">Terms of Use</a>
                  <a href="/privacy-policy">Privacy Policy</a>
                </span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                  Hand-crafted & made with{" "}
                  <i className="icon-heart text-danger"></i>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Security>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
