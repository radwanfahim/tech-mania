import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { faBars, faCode, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav container mx-auto">
      <nav className="fixed z-50 top-0 left-1/2 -translate-x-1/2 bg-violet-600 w-full py-3 ">
        <ul className="md:flex items-center justify-between block container mx-auto">
          <h1 className="text-center text-xl text-white ">
            Tech Mania
            <FontAwesomeIcon
              className="text-white pl-2"
              icon={faCode}
            ></FontAwesomeIcon>
            <div
              onClick={() => setOpen(!open)}
              className="float-right mr-7 md:hidden block"
            >
              {open ? (
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              )}
            </div>
          </h1>

          <div
            className={`flex md:flex-row flex-col  md:gap-10 gap-5 text-center left-1/2 transform -translate-x-1/2 md:translate-x-0 font-medium justify-center text-lg text-white bg-violet-600 md:static md:duration-75 duration-500 md:w-auto w-full md:py-0 py-10 absolute ${
              open ? "top-10" : "top-[-1000px]"
            }`}
          >
            <Link to="home">Home</Link>
            <Link to="services">Services</Link>
            <Link to="review">Customer Review</Link>
            <Link to="contact">Contact</Link>
            <Link to="hire">Hire Us</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
