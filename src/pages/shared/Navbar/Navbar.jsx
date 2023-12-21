import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/task-logo.png"
import Hamburger from 'hamburger-react'
import "./Navbar.css"
import { useState } from "react";
const navLinks = [
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "Home",
    to: "/",
  },
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "About",
    to: "/about",
  },
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "Contact",
    to: "/contact",
  },
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "FAQ",
    to: "/faqs",
  },
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "Login",
    to: "/login",
  },
  {
    id: Math.floor(Date.now() + Math.random()).toString(32),
    label: "Register",
    to: "/register",
  },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="z-50">
       {/* Navbar for large and medium device  */}
      <div className="md:flex justify-between md:items-center mt-5 mb-16 hidden">
      <div><img className="w-32" src={logo} alt="" /></div>
      <ul className="flex items-center gap-10 animated-border">
        {navLinks.map((linkItem) => (
          <li key={linkItem.id}>
            <NavLink to={linkItem.to}>{linkItem.label}</NavLink>
          </li>
        ))}
      </ul>
      </div>

      {/* Mobile Menu  */}
      <div className="mb-5 md:hidden relative">
      <div className="flex justify-between items-center">
        <img className="w-32 my-3" src={logo} alt="" />
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className={`animated-border space-y-4 duration-500 absolute z-55 bg-[#298892] w-full min-h-screen text-white p-3 ${isOpen ? 'left-0' : 'left-[-900px]'}`}>
        {navLinks.map((linkItem) => (
          <li key={linkItem.id}>
            <NavLink onClick={()=>setOpen(false)} to={linkItem.to}>{linkItem.label}</NavLink>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
