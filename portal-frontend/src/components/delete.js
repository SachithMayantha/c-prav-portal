import logo from './logo.svg';
import './App.css';

import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Regi_Leads } from './components/Regi_Leads';

function App() {
  return (
    <div>

      <Header />

      <div className="container-fluid page-body-wrapper">


        <Menu />

        <div className="main-panel">
          <div className="content-wrapper">

            <Regi_Leads/>

          </div>



          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2024 Stellar. All rights reserved. <a href="#"> Terms of use</a><a href="#">Privacy Policy</a></span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="icon-heart text-danger"></i></span>
            </div>
          </footer>

        </div>

      </div>


    </div>

  );
}

export default App;
