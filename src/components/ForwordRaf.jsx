import React from 'react'
import { useRef } from 'react';
import RefUser from './RefUser';

const ForwordRaf = () => {
const inputRef=useRef(null);
const UpdateRef=()=>{
console.log("UpdateRef");
inputRef.current.value="10000"
}
  return (
    <>
    <div>
      <h1>Forword Raf</h1>
      <RefUser ref={inputRef}/>
      <button onClick={UpdateRef}>UPDATE INPUT</button>
    </div>
    </>
  );
};

export default ForwordRaf;
