import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Navigation from './Navigation';

function Home() {

  const[aid,setaid]=useState('')
  const[passwords,setpasswords]=useState('')
  
  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const student={aid,passwords};
    console.log(student)
    fetch("http://localhost:8080/admin/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  })
   .then(response => response.text())
    .then(response => {
      console.log(response);
        if(response==='success')
        {
          navigate("/adminhome");
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
        
            <h1 style={{textAlign:"center",color:"white"}}>Admin login</h1>
            <div className="input-group" style={{marginTop:"20px"}}>
              <span className="input-group-text">Account id</span>
              <input type="text" className="form-control" placeholder="Id" onChange={(e)=>setaid(e.target.value)}/>
            </div>
            <br />
            <div className="input-group">
              <span className="input-group-text">Password </span>
              <input type="password" className="form-control" placeholder="Password" onChange={(e)=>setpasswords(e.target.value)}/>
            </div>
            <br />
            <input type="submit" className="btn btn-primary" style={{width:"30%",marginBottom:"10px"}} onClick={handleClick}/>
          
      </div>
    </div>
  );
}

export default Home;
