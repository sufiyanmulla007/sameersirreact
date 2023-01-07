import React from 'react'

const ChildC = (props) => {
const data="sufiyan"
  return (
    <>
    <div>
      <h1>Child component user name:</h1>
      <button onClick={()=>props.alert(data)}>click here</button>
    </div>
    </>
  );
};

export default ChildC;
