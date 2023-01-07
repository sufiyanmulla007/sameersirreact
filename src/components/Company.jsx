import axios from 'axios';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { padding } from '@mui/system';

const Company = () => {
const [data,setData]=useState([]);
const ApiCalled=()=>{
// console.log("click");
axios.get("https://dummyjson.com/products").then((res)=>{
// console.log(res);
setData(res.data.products)
})
}
const click=()=>{
  console.log("sufiyan");
}
  return (
    <>
    <div className='container my-3'>
    <div className='row'>
    <div className='col-4'>
    <button className='btn btn-primary' onClick={ApiCalled}>axios called</button>
    </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
      {
        data.map((item)=>{
          return(
            <Card style={{ width: '18rem', padding:"15px",margin:"15px" }}>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
             <Button variant="primary" onClick={click}>Go somewhere</Button>
            </Card.Body>
          </Card>
          )
        })
      }
    </div>
    </div>
    </>
  );
};

export default Company;
