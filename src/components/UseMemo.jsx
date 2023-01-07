import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const UseMemo = () => {
const[count,setCount]=useState(0);
const[item,setItem]=useState(5);
const multicountMemo=useMemo(function multicount(){
    console.log("multicount")
    return count*5
    },[count])
  return (
    <>
    <div>
     <h1>use memo</h1> 
     <h2>count:{count}</h2>
     <h2>item:{item}</h2>
     <h2>{multicountMemo}</h2>
     <button onClick={()=>setCount(count+1)}>update count</button>
     <button onClick={()=>setItem(item*5)}>update item</button>
    </div>
    </>
  );
};

export default UseMemo;
