import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/task-logo.png";
import Hamburger from "hamburger-react";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  console.log("IsLoggedin=====> ", user);
  const handleLogout = async()=>{
    const res = await logOutUser();
    toast.success("Logout was successful!", {autoClose:1000})
  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/faqs">FAQ</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="z-50">
      {/* Navbar for large and medium device  */}
      <div className="md:flex justify-between md:items-center mt-5 mb-16 hidden">
        <div>
          <Link to="/">
          <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex items-center gap-10 animated-border">{navLinks}</ul>
      </div>

      {/* Mobile Menu  */}
      <div className="mb-5 md:hidden relative">
        <div className="flex justify-between items-center">
          <img className="w-32 my-3" src={logo} alt="" />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <ul
          className={`animated-border space-y-4 duration-500 absolute z-55 bg-[#298892] w-full min-h-screen text-white p-3 ${
            isOpen ? "left-0" : "left-[-900px]"
          }`}
        >
          {navLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
