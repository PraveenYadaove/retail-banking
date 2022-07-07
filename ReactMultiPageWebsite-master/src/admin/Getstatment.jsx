
import React,{ useEffect, useState } from "react";
import AdminNavigation from './AdminNavigation';


function Getstatment() {
    const[students,setStudents]=useState([]);
    const[statements,setstatement]=useState([]);
    const[user,setuser]=useState("");
    const[title,setvalue]=useState([]);
    const k=["tid","senderid","receiveid","beforebalance","creditbalance" ,"debitbalance","afterbalance","reason"];    

useEffect(()=>{
        fetch("http://localhost:8080/customer/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result); 
         
        }
      )
      },[])
      const handleClick=(e)=>{
        const student={"senderid":e};
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
    }
    return (
        <div className="home">
      <AdminNavigation />
      <div style={{marginLeft:"50px",marginTop:"10px"}}>
        <select onChange={(e)=>{handleClick(e.target.value)}} className="form-select">
        <option selected disabled>Account No</option>
        {students.map(student=><option value={student.cid}>{student.cid}</option>)}
        </select>
        <br/>
        <input id="myInput" type="text" placeholder="Search.." style={{marginTop:"10px"}}></input>
        
      <div className="table-responsive-sm" style={{ background: "white"}}>
        <table className="table table-bordered table-hover" style={{fontSize:"0.5em", marginTop:"15px"}}>
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

export default Getstatment;