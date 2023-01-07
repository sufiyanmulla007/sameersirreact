import React from 'react'
import { useState } from 'react';

const Previous = () => {
const[Count,setCount]=useState(1);
const updatecounter=()=>{
    setCount(Math.floor(Math.random()*10))
}
  return (
    <>
    <div>
    <h1>Previous state</h1>
    <h2>{Count}</h2>
    <button onClick={updatecounter}>counter</button>
    </div>
    </>
  );
};

export default Previous;
