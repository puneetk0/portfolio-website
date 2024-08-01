// Navbar.js
import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Fragment>
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">Puneet.</Link>  
        </div>
        <div className="nav-center">
          <input
            className="light-dark-theme"
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            aria-hidden="true"
          />
          <div
            className={`theme-toggle ${theme === 'light' ? 'sun' : 'moon'}`}
            onClick={toggleTheme}
          ></div>
        </div>
        <div className="nav-right">
          <Link to="/about">about</Link>  
          <Link to="/work">portfolio</Link>  
        </div>
      </div>
      <div className={animate ? 'fade-in' : ''}>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navbar;
