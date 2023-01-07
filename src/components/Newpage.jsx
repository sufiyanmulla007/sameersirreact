import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Newpage = () => {
  return (
    <>
    <div>
      <h1>this is NestedRouteing</h1>
    </div>
    <Link to="/Company">Company</Link>
    <br />
    <Link to="/Other">Other</Link>
    <Outlet/>
    </>
  );
};

export default Newpage;
