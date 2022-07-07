
import React,{ useState } from "react";
import UserProfile from "./Userprofile";
import CustomerNavigation from './CustomerNavigation';
import { useNavigate } from 'react-router-dom';


function CustomerWithdraw() {
    const navigate = useNavigate();
    const[students,setStudents]=useState([]);
    const[user,setuser]=useState("");
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
        alert("withdraw success");
        
      })
 }
 
 const storesat=(v,bal,re,data,y)=>
 {
  const student={"senderid":v,"receiveid":v,"beforebalance":bal,"debitbalance":0,"creditbalance":re,"afterbalance":data,"reason":y};
  fetch("http://localhost:8080/transaction/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
    })
     .then(response => response.text())
      .then(response => {
        
        navigate("/customerhome");
      })
 }

const mybal=(v)=>{
      const student={"cid":v};
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
            storebal(v,data);
            storesat(v,response,bal,data,"withdraw");
          }
          else{
           const afterbal=(data-(data*0.05));
           
           storesat(v,response,bal,data,"withdraw");
           storebal(v,afterbal);
           storesat(v,data,data*0.05,afterbal,"Minimum Balance Charge");
          }
        }
        else
        {
          alert("Invalid Balance");
        }
       
        
        })
        

    }
    const handleClick=(e)=>{
        mybal(UserProfile.getName());
    }

    
    return (
        <div className="home">
        <CustomerNavigation />
        <div style={{marginLeft:"50px",marginTop:"10px"}}>
        <h1 style={{color:"white", textAlign:"center"}}>WithDraw</h1>
            <div className="input-group">
              <span className="input-group-text">Enter amount to WithDraw</span>
              <input type="text" className="form-control" placeholder="Amount" onChange={(e)=>setbal(e.target.value)}/>
            </div>
            
            <br />
            <input type="submit" className="btn btn-primary" style={{width:"30%"}} onClick={handleClick}/>
       </div>
    </div>
     );
}

export default CustomerWithdraw;