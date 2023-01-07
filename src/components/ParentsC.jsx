import React from 'react'
import ChildC from './ChildC';

const ParentsC = () => {
const parentsAlert=(item)=>{
    alert(item);
}
  return (
    <>
    <div>
      <h1>Parents Component</h1>
      <h2>Lifting state up</h2>
      <ChildC alert={parentsAlert}/>
    </div>
    </>
  );
};

export default ParentsC;
