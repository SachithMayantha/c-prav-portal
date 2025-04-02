import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import CertDB from './pages/CertDB';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="container-fluid page-body-wrapper">


        <Menu />

        <div className="main-panel">
          <div className="content-wrapper">


          <div className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cert-db" element={<CertDB />} />
                </Routes>
            </div>

          </div>



          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2024 Stellar. All rights reserved. <a href="#"> Terms of use</a><a href="#">Privacy Policy</a></span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="icon-heart text-danger"></i></span>
            </div>
          </footer>

        </div>

      </div>

    </>

  );
}

export default App;
