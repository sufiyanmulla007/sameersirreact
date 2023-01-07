import React from 'react'
import { Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div style={{justifyContent:"space-evenly", display:'flex', fontSize:"1.8rem"}}>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">ABOUT</Link>
    <br />
    <Link to="/users">Users</Link>
    <Link to="/login">Longin</Link>
    <Link to="/APi">API</Link>
    <Link to="/Previous">Previous State</Link>
    <Link to="/SearchParams">SearchParams</Link>
    <Link to="/Newpage">Newpage</Link>
    <Link to="/TodoList">TodoProject</Link>
    </div>
    </>
  )
}

export default Nav;
