import React from 'react'
import { Table } from 'react-bootstrap';
const Users = () => {
const Users=[
    {name:"sufiyan", city:"Nanded",state:"Maharastra"},
    {name:"Sohel",city:"Mumbai",state:"Maharastra"},
    {name:"Aasim",city:"pune",state:"Maharastra"},
];
  return (
    <>
    <div>
      <h1>React Dynamic Routing</h1>
      <Table>
        <thead>
        <tr>
        <th>Sr.No</th>
        <th>Name</th>
        <th>city</th>
        <th>state</th>
        </tr>
        </thead>
        {
        Users.map((item,index)=>
        <tbody>
        <tr key={index}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        </tr>
        </tbody>
        )
        }
        </Table>
       
    </div>
    </>
  );
};

export default Users;
