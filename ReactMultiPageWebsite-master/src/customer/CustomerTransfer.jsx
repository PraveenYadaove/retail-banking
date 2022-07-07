

import React,{  useState } from "react";
import CustomerNavigation from './CustomerNavigation';
import UserProfile from "./Userprofile";
import { useNavigate } from 'react-router-dom';

function CustomerTransfer() {
    const navigate = useNavigate();
    const[students,setStudents]=useState([]);
    const[toid,settoid]=useState("");
    const[bal,setbal]=useState("");
    function refreshPage() { window. location. reload(false); }
    const storebal=(v,afterbal)=>
    {
     console.log(v);  
     console.log(afterbal);  
     fetch("http://localhost:8080/customer/update/"+afterbal+"/"+v+"/",{
           method:"PUT",
       })
        .then(response => response.text())
         .then(response => {
           
        
         })
    }
    
    const storesat=(v,r,bal,re,rx,data,y)=>
    {
     const student={"senderid":v,"receiveid":r,"beforebalance":bal,"debitbalance":re,"creditbalance":rx,"afterbalance":data,"reason":y};
     fetch("http://localhost:8080/transaction/add",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(student)
       })
        .then(response => response.text())
         .then(response => {
           
           
         })
    }

    const mydep=(receive,sender)=>{
        const student={"cid":receive};
        fetch("http://localhost:8080/customer/getbalance",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      })
       .then(response => response.text())
        .then(response => {
          const data=parseFloat(response)+parseFloat(bal);
          console.log(data);
          console.log(bal);
          console.log(response);
              storebal(receive,data);
              storesat(receive,sender,response,bal,0,data,"transfer");
          })
          
  
      }
    const mywit=(receive,sender)=>
    {
        const student={"cid":UserProfile.getName()};
        fetch("http://localhost:8080/customer/getbalance",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      })
       .then(response => response.text())
        .then(response => {
          const data=response-bal;
          
          if(data>=0)
          {
            if(data>=500)
            {
              console.log(data);
              storebal(sender,data);
              storesat(sender,receive,response,0,bal,data,"transfer");
            }
            else{
             const afterbal=(data-(data*0.05));
             
             storesat(sender,receive,response,0,bal,data,"transfer");
             storebal(sender,afterbal);
             storesat(sender,receive,data,0,data*0.05,afterbal,"Minimum Balance Charge");
            }
          }
          else
          {
            alert("Invalid Balance");
          }
         
          
          })
          
  
      }
    

    const handleClick=(e)=>{
        console.log(toid);
         mydep(toid,UserProfile.getName());
        mywit(toid,UserProfile.getName());
        alert("transfer success");
         navigate("/customerhome");
    }
    
    return (
        <div className="home">
       <CustomerNavigation/>
       <div style={{marginLeft:"50px",marginTop:"10px"}}>
        <h1 style={{textAlign:"center", color:"white"}}>Transfer</h1>
        <div className="input-group" >
              <span className="input-group-text">Enter Sender Account no</span>
              <input type="text" className="form-control" placeholder="Sender id" onChange={(e)=>settoid(e.target.value)}/>
            </div>
          
            <div className="input-group" style={{marginTop:"10px"}}>
              <span className="input-group-text">Enter amount to Deposit</span>
              <input type="text" className="form-control" placeholder="Amount" onChange={(e)=>setbal(e.target.value)}/>
            </div>
            
            <br />
            <input type="submit" className="btn btn-primary" style={{width:"30%"}} onClick={handleClick}/>
       </div>
    </div>
     );
}

export default CustomerTransfer;