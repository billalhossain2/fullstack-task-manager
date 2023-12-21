import { Link } from "react-router-dom";
import logo from "../../../assets/task-logo.png"
import "./Navbar.css"
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
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center my-5">
      <div><img className="w-32" src={logo} alt="" /></div>
      <ul className="flex items-center gap-10 animated-border">
        {navLinks.map((linkItem) => (
          <li key={linkItem.id}>
            <Link to={linkItem.to}>{linkItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
