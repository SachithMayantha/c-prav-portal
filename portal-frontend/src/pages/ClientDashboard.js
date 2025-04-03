import React from "react";
import CertDB from "./CertDB";
import {
    Route,
    Routes,
  } from "react-router-dom";

const ClientDashboard = () => {
    return <div><h1>Welcome to the Client Dashboard!</h1>
    <Routes>
    <Route path="/cert-db" element={<CertDB />} /> </Routes></div>;
};

export default ClientDashboard;