import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Signup
} from "./components";
import {
  AdminHome,
  CreateAccount,
  Deposit,
  Getstatment,
  AdminWithdraw
} from "./admin";
import {
 CustomerDeposit,
 CustomerTransfer,
 CustomerWithdraw,
  GetTransaction,
  CustomerHome
} from "./customer";

ReactDOM.render(
  <Router>
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/deposit" element={<Deposit/>} />
      <Route path="/adminwithdraw" element={<AdminWithdraw/>} />
      <Route path="/getstatement" element={<Getstatment />} />
      <Route path="/customerdeposit" element={<CustomerDeposit />} />
      <Route path="/customertransfer" element={<CustomerTransfer/>} />
      <Route path="/customerwithdraw" element={<CustomerWithdraw />} />
      <Route path="/customergettransaction" element={<GetTransaction/>} />
      <Route path="/customerhome" element={<CustomerHome/>} />
    </Routes>
    
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
