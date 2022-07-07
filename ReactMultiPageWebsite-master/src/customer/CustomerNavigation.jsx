import React from "react";
import { NavLink } from "react-router-dom";


function CustomerNavigation() {
    return (
        <div className="navigation" style={{background: "linear-gradient(to right, #373b44, #4286f4)"}}>
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/customerhome">
                Customer Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customerdeposit">
                  Deposit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customerwithdraw">
                  Withdraw
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customergettransaction">
                  Get Statment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customertransfer">
                 Transfer
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
     );
}

export default CustomerNavigation;