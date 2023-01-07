import React from 'react'
import { useRef } from 'react';
const RefHook = () => {
const inputRef=useRef(null);
const handelRef=()=>{
    console.log("function called");
    // inputRef.current.value="1000"
    // inputRef.current.focus();
    inputRef.current.style.color='red'
    inputRef.current.style.display="none";
}
return (
    <>
    <div>
      <h1>Ref Hook using dom manipulate</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handelRef}>HandelInputRef</button>
    </div>
    </>
  );
};

export default RefHook;
