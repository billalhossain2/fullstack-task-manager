import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FAQS from "../pages/FAQS/FAQS";
import HomeLayout from "../Layouts/HomeLayout";
import Dashboard from "../Layouts/Dashboard";

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
      }
    ]
  },

  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>
  }
]);

export default router;
