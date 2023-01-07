import React from "react";
import Table from 'react-bootstrap/Table';
import Navgation from "./Navgation";
const HandelingArray = () => {
//   const student = ["sufiyan", "sohel", "aasim", "junid", "hafiz"];
const student=[
    {name:"sufiyan",email:"sufiyan@test.com",address: [
      { pin: "431608", City: "Nanded", State: "Maharashtra", Country: "India" },
      { pin: "431609", City: "Mumbai", State: "Maharashtra", Country: "India" },
      { pin: "431601", City: "Goa", State: "Maharashtra", Country: "India" },
    ],},
    {name:"sohel",email:"sohel@test.com",address: [
      { pin: "431602", City: "Nanded", State: "Maharashtra", Country: "India" },
      { pin: "4316010", City: "Mumbai", State: "Maharashtra", Country: "India" },
      { pin: "4316011", City: "Goa", State: "Maharashtra", Country: "India" },
    ],},
    {name:"aasim",email:"aasim@test.com",address: [
      { pin: "431604", City: "Nanded", State: "Maharashtra", Country: "India" },
      { pin: "431605", City: "Mumbai", State: "Maharashtra", Country: "India" },
      { pin: "431606", City: "Goa", State: "Maharashtra", Country: "India" },
    ],},
];
  return (
    <>
    <div>
    {/* map function useing
      <h1>HandelingArray</h1>
      {student.map((data) => (
        <h1 style={{textAlign:"center"}}> my name :{data.name},{data.email}</h1>
      ))} */}
      <Navgation/>
      <h1 style={{textAlign:"center"}}>Nested Array List</h1>
       <Table striped bordered hover variant="dark">
      <thead>
          <tr>
            <th>sr.No</th>
          <th>Name</th>
          <th>email</th>
          <th>address</th>
          </tr>
      </thead>
      <tbody>
        {
        student.map((item,index)=>
        <tr key={index}>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
        <Table striped bordered hover variant="dark">
          <tbody>
          {item.address.map((Data,i)=>
          <tr key={i}>
          <td>{Data.pin}</td>
          <td>{Data.City}</td>
          <td>{Data.State}</td>
          <td>{Data.Country}</td>
          </tr>
        )
        }
        </tbody>
        </Table> 
        </td>
        </tr>
       )}
       
        </tbody>
    </Table> 
    </div>
    </>
  );
};
export default HandelingArray;
