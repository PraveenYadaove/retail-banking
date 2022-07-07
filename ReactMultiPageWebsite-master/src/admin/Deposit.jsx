import React,{ useEffect, useState } from "react";
import AdminNavigation from './AdminNavigation';




function Deposit() {
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
           alert("Deposit success");
        
         })
    }
    
    const storesat=(v,bal,re,data,y)=>
    {
     const student={"senderid":v,"receiveid":v,"beforebalance":bal,"debitbalance":re,"creditbalance":0,"afterbalance":data,"reason":y};
     fetch("http://localhost:8080/transaction/add",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(student)
       })
        .then(response => response.text())
         .then(response => {
           
           refreshPage();
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
          const data=parseFloat(response)+parseFloat(bal);
          console.log(data);
          console.log(bal);
          console.log(response);
              storebal(v,data);
              storesat(v,response,bal,data,"deposit");
          })
          
  
      }
    const handleClick=(e)=>{
         mybal(user);
    }
    useEffect(()=>{
        fetch("http://localhost:8080/customer/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result); 
         
        }
      )
      },[])
    return (
        <div className="home">
      <AdminNavigation />
      <div style={{marginLeft:"50px",marginTop:"10px"}}>
        <select onChange={(e)=>setuser(e.target.value)} className="form-select">
        <option selected disabled>Account No</option>
        {students.map(student=><option value={student.cid}>{student.cid}</option>)}
        
        </select>
        <h1 style={{textAlign:"center",color:"white"}}>Deposit</h1>
            <div className="input-group">
              <span className="input-group-text">Enter amount to Deposit</span>
              <input type="text" className="form-control" placeholder="Amount" onChange={(e)=>setbal(e.target.value)}/>
            </div>
            
            <br />
            <input type="submit" className="btn btn-primary" style={{width:"30%"}} onClick={handleClick}/>
            </div>
    </div>
     );
}

export default Deposit;