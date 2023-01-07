import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ApiCalled = () => {
const[data,setData]=useState([]);
useEffect(()=>{
 fetch("https://reqres.in/api/users?page=2").then((resut)=>{
   resut.json().then((res)=>{
    // console.log(res)
     setData(res.data)
   })
 })
},[])

console.log(data);
// const DeleteUser=(id)=>{
//   // alert(id)
//  fetch(`https://reqres.in/api/users?page=2/${id}`,{
//   method:'DELETE'
//  }).then((resut)=>{
//   resut.json().then((res)=>{
//   console.log(res)
//   })
//  })
// }
  return (
    <>
    <div>
      <h1>Api called</h1>
      </div>
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
        {/* <td><button onClick={()=>DeleteUser(item.id)}>Delete User</button></td> */}
        </tr>
        </tbody>
     )
    }
    </Table>
    </div>
    </>
  );
};

export default ApiCalled;
