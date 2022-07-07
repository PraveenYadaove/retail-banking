import React from "react";
import { NavLink } from "react-router-dom";

function AdminNavigation() {
  return (
    <div className="navigation" style={{background: "linear-gradient(to right, #373b44, #4286f4)"}}>
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/createaccount">
                 Create Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/deposit">
                  Deposit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/adminwithdraw">
                  Withdraw
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/getstatement">
                  Get Statment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/adminhome">
                 Get Account Details
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

export default AdminNavigation;
