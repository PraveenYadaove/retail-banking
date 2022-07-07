import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import UserProfile from'../customer/Userprofile'
function About() {
  const[cid,setcid]=useState('')
  const[passwords,setAddress]=useState('')
  
  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const student={cid,passwords};
    console.log(student)
    fetch("http://localhost:8080/customer/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  })
   .then(response => response.text())
    .then(response => {
      console.log(response);
        if(response==='failed')
        {
          alert("failed");
          
        }
        else
        {
          console.log(response);
          UserProfile.setName(response);
          navigate("/customerhome");
        }
      })
}
  return (

    <div className="home">
      <Navigation/>
      <div className="container" style={{color: "red",marginTop:"2%"}}>
        
            <h1 style={{textAlign:"center",color:"white"}}>Customer login</h1>
            <div className="input-group">
              <span className="input-group-text">Id</span>
              <input type="text" className="form-control" placeholder="id" onChange={(e)=>setcid(e.target.value)}/>
            </div>
            <br />
            <div className="input-group">
              <span className="input-group-text">Password </span>
              <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <br />
            <input type="submit" className="btn btn-primary" style={{width:"30%",marginBottom:"10px"}} onClick={handleClick}/>
            <br />
            <a href="/signup" style={{color:"white"}}>SignUp</a>
        
      </div>
    </div>
  );
}

export default About;
