import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ListTodo from './ListTodo.jsx';
const TodoList = () => {
const [todo,setTodo]=useState("");
// console.log(todo);
const [add,setAdd]=useState([]);
// console.log(add);
const [validation,setValidation]=useState("");
const SetData=(e)=>{
// console.log(e.target.value);
setTodo(e.target.value)
}
const Additem=()=>{
if(todo==""){
  setValidation("Enter Your Todo")
}else{
  setAdd(()=>{
    return[...add,todo]
});
  setTodo("")
  setValidation("")
}

}
const deleitem=(id)=>{
const deledata =add.filter((el,ind)=>{
  return ind !== id
});
   setAdd(deledata)
}
  return (
    <>
    <div className='main-container'>
    <div className='todo-box'>
    <img src="https://raw.githubusercontent.com/harsh17112000/react_youtube_todo/main/public/book.png" alt="Todoimage" className='todoimg'/>
    <h2 className='heading'>Write Your Todo List Here</h2>
    <h3 className='validation'>{validation}</h3>
    <div className='input-container'>
    <input type="text" name='todo'
    onChange={SetData}
    value={todo}
    placeholder='Enter Your Task'id=''/>
    <Tooltip title="ADD">
    <Button className='addbtn' onClick={Additem}>
    <AddIcon/>
    </Button>
    </Tooltip>
    </div>
    <div className='store-container'>
    <ul>
      {
       add.map((ele,index)=>{
       return(
        <>
        <ListTodo id={index} text={ele} deleitem={deleitem} />
        </>
       )
       }) 
      }
    </ul>
    </div>
    </div>
    </div>
    </>
  );
};
export default TodoList;
