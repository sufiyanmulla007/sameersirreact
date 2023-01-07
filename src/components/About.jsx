import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
const About = () => {
const[data,setData]=useState([]);
const[first_name,setFirst_name]=useState("");
const[last_name,setLast_name]=useState("");
const[id,setId]=useState("");
const[email,setEmail]=useState("");
useEffect(()=>{
 fetch("https://reqres.in/api/users?page=2").then((resut)=>{
   resut.json().then((res)=>{
    // console.log(res)
     setData(res.data)
     setFirst_name(res.data[0].first_name)
     setLast_name(res.data[0].last_name)
     setEmail(res.data[0].email)
     setId(res.data[0].id)
   })
 })
},[])

// console.log(data);
function selectUser(id) {
console.log(id)
}
  return (
    <>
    <div>
    <Table>
    <thead>
    <tr>
    <th>Sr.No</th>
    <th>ID</th>
    <th>Frist Name</th>
    <th>Last Name</th>
    <th>Email</th>
    {/* <th>Delete</th> */}
    </tr>
    </thead>
    {
     data.map((item,index)=>
     <tbody>
        <tr key={index}>
        <td>{index+1}</td>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td><button onClick={()=>selectUser(item.id)}>Update User</button></td>
        </tr>
        </tbody>
     )
    }
    </Table>
    <div style={{textAlign:"center"}}>
    <input type="text" value={first_name} /> <br /> <br />
    <input type="text"  value={last_name}/> <br /> <br />
    <input type="text" value={id} /> <br /> <br />
    <input type="email" value={email}/> <br /> <br />
    <button>update deta</button>
    </div>
    </div>
    </>
  );
};

export default About;
