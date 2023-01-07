import React from "react";
import Table from "react-bootstrap/Table";
const MapFun = () => {
  //Nested array list and  useing Nested map function
  const user = [
    {name: "sufiyan",Email: "sufiyan@test.com",city:"NANDED"},
    {name: "sohel",Email: "sohel@test.com",city:"NANDED"},
    {name: "Aasim",Email: "assim@test.com",city:"NANDED"},
  ];
  return (
    <>
      <div>
      <h1>using map function And Bootstarp table</h1>
      <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td>Sr.No</td>
          <td>Name</td>
          <td>Email</td>
          <td>City</td>
        </tr>
        {
          user.map((item,index)=>
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.Email}</td>
            <td>{item.city}</td>
          </tr>
          )
        }
      </tbody>
      </Table>

      </div>
    </>
  );
};

export default MapFun;
