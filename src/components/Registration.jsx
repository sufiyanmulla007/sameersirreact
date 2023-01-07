import React, { useState } from 'react'

const Registration = () => {
const[Error,setError]=useState({
  fristname:false,
  lastname:false,
  email:false,
  password:false,
  cpassword:false,
});
const[user,setUser]=useState({
fristname:"",lastname:"",email:"",password:"",cpassword:"",
});
const handleChange=(e)=>{
  // const{name,value}=e.target
  
  // setUser({...user,[name]: value});
  setUser({...user,[e.target.name]:e.target.value})
}

const handleAdd=()=>{
const regName = /^[A-Za-z\'`~!^&*()_=+":;?\s\.\,]+$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const cpassReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if(!regName.test(user.fristname)){
    setError({...Error,fristname:true})
  }else if(!regName.test(user.lastname)){
    setError({...Error,lastname:true})
  }else if(!regEmail.test(user.email)){
    setError({...Error,email:true})
  }else if(!passReg.test(user.password)){
    setError({...Error,password:true})
  }else if(!cpassReg.test(user.cpassword)){
    setError({...Error,cpassword:true})
  }else{
    console.log("now you are officially a developer...")
  }
  
  
  // setUser(user);
  // console.log(user);
    
}
    return (
    <>
     <h1>Tekisky.Pvt.Ltd</h1>
    <div className='Maincon'>
    <h2>Ragistation</h2>
    <div>
    <label>First Name:</label><br />
    <input type="text" name='fristname' placeholder='Enter your Name'
    value={user.name}
    onChange={(e)=>handleChange(e)}
    />
    </div>
    {
      Error.fristname?
      <div className="error">Please enter valid frist name</div>
      :null
    }
    <div>
    <label>Last Name:</label><br />
    <input type="text" name='lastname' placeholder='Enter your Last Name'
     value={user.lastname}
     onChange={(e)=>handleChange(e)}
    />
    </div>
    {
      Error.lastname?
      <div className='error'>Please enter valid frist name</div>
      :null
    }
    <div>
    <label>Email:</label><br />
    <input type="email" name='email' placeholder='Enter your Email'
     value={user.email}
     onChange={(e)=>handleChange(e)}
    />
    </div>
    {
      Error.email?
      <div className='error'>Please enter valid email id</div>
      :null
    }
    <div>
    <label>Password:</label><br />
    <input type="password" name='password' placeholder='Enter your password'
     value={user.password}
     onChange={(e)=>handleChange(e)}
    />
    </div>
    {
      Error.password?
      <div className='error'>Please enter valid password</div>
      :null
    }
    <div>
    <label> Conform Password:</label><br />
    <input type="password" name='cpassword' placeholder='Enter your cpassword'
     value={user.cpassword}
     onChange={(e)=>handleChange(e)}
    />
    </div>
    {
      Error.cpassword?
      <div className='error'>Please enter cpassword</div>
      :null
    }
    <button id='btn' onClick={()=>handleAdd()}>Submit</button>
    </div>
    </>
  )
}

export default Registration;
