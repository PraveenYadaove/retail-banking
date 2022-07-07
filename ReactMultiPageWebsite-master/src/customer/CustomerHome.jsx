import React,{ useEffect, useState } from "react";
import CustomerNavigation from './CustomerNavigation';
import UserProfile from "./Userprofile";

function CustomerHome() {
    const[user,setuser]=useState("");
    useEffect(()=>{
        const student={"cid":UserProfile.getName()};
        fetch("http://localhost:8080/customer/getbalance",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      })
       .then(response => response.text())
        .then(response => {
            console.log(response);
            setuser(response);
            console.log(user);
        })
    });
    return (
        <div className="navigation">
            <CustomerNavigation/>
            <h1 style={{color:"white", marginTop:"20px", marginLeft:"30px"}}>Your Balance- {user} </h1>
        </div>
     );
}

export default CustomerHome;