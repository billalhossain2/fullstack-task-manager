import { Link, Outlet } from "react-router-dom";
import logo from "../assets/task-logo.png";
import { MdAddTask } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
const Dashboard = () => {
  return (
    <div className="relative">
      <header className="flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-5 items-center px-3 bg-gray-900 text-white py-3">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div>
            <img className="w-20 shadow-lg" src={logo} alt="" />
          </div>
        </div>

        {/* Search Task Input  */}
        <div className="join">
          <div>
            <div>
              <input
                className="input w-full border-2 border-gray-600 join-item text-white bg-gray-900"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item bg-gray-800 text-white hover:bg-gray-900">Search</button>
          </div>
        </div>

        {/* User Avatar  */}
        <div className="flex md:flex-row flex-col items-center gap-3">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p>Hello, Siam Ahmed</p>
        </div>

      </header>
      <div className="drawer md:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button md:hidden visible"
          >
            Open drawer
          </label>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#00A4B7] font-bold text-white">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard">
                <FaHome className="text-2xl"></FaHome>
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/add-new-task">
                <MdAddTask className="text-2xl"></MdAddTask>
                <span>Add New Task</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/settings">
                <IoMdSettings className="text-2xl"></IoMdSettings>
                <span>Settings</span>
              </Link>
            </li>

            <li>
              <div className="divider"></div>
              <Link to="/">
                <FaHome className="text-2xl"></FaHome>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
