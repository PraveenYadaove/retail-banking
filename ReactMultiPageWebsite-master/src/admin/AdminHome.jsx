import React, { useEffect, useState } from 'react';

import AdminNavigation from './AdminNavigation';



function AdminHome() {
    const[students,setStudents]=useState([]);
  const[title,setvalue]=useState([]);
  const k=["Accountno","Username","Balance","Mobile"];
    useEffect(()=>{
        fetch("http://localhost:8080/customer/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
          setvalue(k);
          console.log(result);
        }
      )
      },[])
    return (
        <div className="home">
      <AdminNavigation />
      <div style={{marginLeft:"50px",marginTop:"10px"}}>
      <input id="myInput" type="text" placeholder="Search.." style={{marginBottom:"10px"}}></input>
      <div className="table-responsive-sm">

      <table className="table table-bordered table-hover" style={{background: "white"}}>
        <thead>
          <tr style={{fontSize:"25px"}}>
          {title.map(v=><th>{v}</th>)}
          </tr>
        </thead>
        <tbody>
          {students.map(student=>(<tr key={student.id}>
          <td style={{fontSize:"15px"}}>{student.cid}</td>
          <td style={{fontSize:"15px"}}>{student.username}</td>
          <td style={{fontSize:"15px"}}>{student.cbalance}</td>
          <td style={{fontSize:"15px"}}>{student.mobile}</td>

          </tr>))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
     );
}

export default AdminHome;