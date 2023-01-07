import React from 'react'
import { useState } from 'react';
const Input = () => {
const [fristname,setFristName]=useState("");
const[lastname,setLastName]=useState("");
const[email,setEmail]=useState("");
const handleAdd=()=>{

  console.log("frisr===>",fristname);
  console.log("lname===>",lastname);
  console.log("e====>",email);
}
  return (
    <>
    <div>
    <label>FristName:</label>
    <input type="text" name='name' value={fristname}
    onChange={(e)=>setFristName(e.target.value)} placeholder="enter you name"
    />
    <div>
    <label>LastName</label>
    <input type="text" name='lastname' value={lastname} 
    onChange={(e)=>setLastName(e.target.value)}
    />
    <div>
      <label>Email:</label>
      <input type="email" name="email" value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
</div>
<button onClick={()=>handleAdd()}>Add</button>
    </div>
    
    </>
  );
};

export default Input;
