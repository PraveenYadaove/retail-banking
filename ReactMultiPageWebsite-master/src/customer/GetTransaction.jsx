
import React,{ useEffect, useState } from "react";
import CustomerNavigation from './CustomerNavigation';
import UserProfile from "./Userprofile";
import { useNavigate } from 'react-router-dom';


function GetTranscation() {
    
    const[statements,setstatement]=useState([]);
    
    const[title,setvalue]=useState([]);
    const k=["tid","senderid","receiveid","beforebalance","creditbalance","debitbalance","afterbalance","reason"];    


    useEffect(()=>{
        const student={"senderid":UserProfile.getName()};
        fetch("http://localhost:8080/transaction/getAllbyid",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
      
        })
        .then(res=>res.json())
        .then((result)=>{
          setstatement(result);
          setvalue(k); 
          console.log(result);
         
        })
    },[])
    return (
        <div className="home">
      <CustomerNavigation />
      <div style={{marginLeft:"50px",marginTop:"10px"}}>
        <input id="myInput" type="text" placeholder="Search.." style={{marginBottom:"10px"}}></input>
      <div className="table-responsive-sm" style={{ background: "white"}}>
        <table className="table table-bordered table-hover" style={{fontSize:"0.5em"}}>
        <thead>
          <tr style={{fontSize:"25px"}}>
          {title.map(v=><th>{v}</th>)}
          </tr>
        </thead>
        <tbody>
          {statements.map(statement=>(<tr key={statement.tid}>
            <td style={{fontSize:"15px"}}>{statement.tid}</td>
            <td style={{fontSize:"15px"}}>{statement.senderid}</td>
            <td style={{fontSize:"15px"}}>{statement.receiveid}</td>
            <td style={{fontSize:"15px"}}>{statement.beforebalance}</td>
            <td style={{backgroundColor:"green",color:"white",fontSize:"15px"}}>{statement.debitbalance}</td>
            <td style={{backgroundColor:"red",color:"white",fontSize:"15px"}}>{statement.creditbalance}</td>
            <td style={{fontSize:"15px"}}>{statement.afterbalance}</td>
            
            <td style={{fontSize:"15px"}}>{statement.reason}</td>

          

          </tr>))}
        </tbody>
      </table>
       </div>
       </div>
    </div>
     );
}

export default GetTranscation;