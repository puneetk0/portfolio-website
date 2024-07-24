import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
    <div className="nav-left">
    <Link to="/">Puneet</Link>  
    </div>
    <div  className="nav-right">
    <Link to="/about">about</Link>  
    <Link to="/work">portfolio</Link>  
    </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
