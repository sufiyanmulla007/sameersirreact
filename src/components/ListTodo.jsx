import { Delete } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-bootstrap/Modal'
const ListTodo = ({id,text,deleitem}) => {
const [showeye,setShoweye]=useState(false);
const [showeyevalue,setShoweyevalue]=useState("");
  return (
    <>
    <div className='items'>
    <li>{text}</li>
    <Tooltip title="Delete">
    <Button className='dltbtn' onClick={()=>deleitem(id)}>
    <Delete/>
    </Button>
    </Tooltip>
    <Tooltip title="eye">
    <Button className='eyebtn'>
    <RemoveRedEyeIcon
    onClick={()=>{
      setShoweye(true)
      setShoweyevalue(text)
    }}
    />
    </Button>
    </Tooltip>
    </div>
    <div>
    <Modal show={showeye}>
    <h1 className='text-center'>{showeyevalue}</h1>
    <Modal.Footer>
    <Button variant="contained" href="#contained-buttons" onClick={()=>setShoweye(false)}>
     Close
    </Button>
    </Modal.Footer>
    </Modal>
    </div>
    </>
  );
};
export default ListTodo;
