import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar-content">
          <Link className="logo" to="/">Puneet</Link>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/work">Portfolio</Link>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="flex flex-col h-full font-bold text-[#333] tracking-wider text-[14px]">
            <div className="flex flex-col border-b-[0.5px] p-[32px] pt-0 h-min gap-[16px] w-[100%] justify-start flex-none relative border-[#A0A5AC]">
              <Link to="/">
                <span className="font-[Caveat] py-[6px] text-[32px] px-[12px] rounded-lg logo">Puneet</span>
              </Link>
              <Link className="mt-[4px] uppercase text-lg" to="/about">About</Link>
              <Link className="text-lg uppercase" to="/work">Portfolio</Link>
            </div>

            <div className="border-b-[0.5px] p-[32px] pb-0 pt-0 h-min flex-none w-[100%] relative justify-start border-[#A0A5AC]">
              <div className="flex flex-col pt-[36px] h-min gap-[10px] w-[100%] justify-start">
                <h1 className="font-semibold mb-[4px] uppercase text-[#A0A5AC] tracking-[.2em]">Work</h1>
                <Link to="/work/uidesign">UI Design</Link>
                <Link to="/work/web-development">Web Development</Link>
                <Link to="/work/photography">Photography</Link>
              </div>

              <div className="flex flex-col pt-[48px] h-min gap-[10px] pb-[36px] w-[100%] justify-start">
                <h1 className="font-semibold mb-[4px] uppercase text-[#A0A5AC] tracking-[.2em]">Favourites</h1>
                <Link to="/higrowcasestudy">HiGrow</Link>
                <Link to="/firstportfolio">First Portfolio</Link>
              </div>
            </div>

            <div className="flex flex-col p-[32px] pt-[24px] h-min gap-[10px] w-[100%] justify-start">
              <h1 className="font-semibold mb-[4px] uppercase text-[#A0A5AC] tracking-[.2em]">Socials</h1>
              <Link to="/higrowcasestudy">Mail</Link>
              <Link to="/firstportfolio">Youtube</Link>
              <Link to="/firstportfolio">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
