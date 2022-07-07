import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Navigation from './Navigation';

function Home() {

  const[username,setusername]=useState('')
  const[passwords,setpasswords]=useState('')
  const[mobile,setmobile]=useState('')
  const[bal,setbal]=useState("");
  const navigate = useNavigate();


  
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
        const data=500;
            storebal(v,data);
            storesat(v,0,data,data,"account Created");
        })
        

    }
  const handleClick=(e)=>{
    e.preventDefault()
    const student={username,mobile,passwords,"cbalance":500};
    console.log(student)
    fetch("http://localhost:8080/customer/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  })
   .then(response => response.text())
    .then(response => {
      console.log(response);
        if(response!==0)
        {
          mybal(response);
          navigate("/");
        }
        else
        {
          alert("failed");
        }
      })
}
  return (

    <div className="home">
      <Navigation/>
      <div className="container" style={{color: "red",marginTop:"2%"}}>
        
            <h1 style={{textAlign:"center", color:"white"}}>Customer Registration</h1>
            <div className="input-group">
              <span className="input-group-text">Username</span>
              <input type="text" className="form-control" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
            </div>
            <br />
            <div className="input-group">
              <span className="input-group-text">Password </span>
              <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setpasswords(e.target.value)}/>
            </div>
            <br />
            <div className="input-group">
              <span className="input-group-text">Mobile </span>
              <input type="text" className="form-control" placeholder="Mobile" onChange={(e)=>setmobile(e.target.value)}/>
            </div>
            <br />

            <input type="submit" className="btn btn-primary" style={{width:"30%"}} onClick={handleClick}/>
          
      </div>
    </div>
  );
}

export default Home;
    