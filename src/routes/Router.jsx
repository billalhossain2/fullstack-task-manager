import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FAQS from "../pages/FAQS/FAQS";
import HomeLayout from "../Layouts/HomeLayout";
import Dashboard from "../Layouts/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Settings from "../pages/Dashboard/Settings/Settings";
import AddNewTaskForm from "../pages/Dashboard/AddNewTaskForm/AddNewTaskForm";
import EditTaskForm from "../pages/Dashboard/EditTaskForm/EditTaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/faqs",
        element:<FAQS></FAQS>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  },

  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<UserHome></UserHome>
      },
      {
        path:'/dashboard/settings',
        element:<Settings></Settings>
      },
      {
        path:'/dashboard/add-new-task',
        element:<AddNewTaskForm></AddNewTaskForm>
      },
      {
        path:'/dashboard/edit-task',
        element:<EditTaskForm></EditTaskForm>
      },
    ]
  }
]);

export default router;
