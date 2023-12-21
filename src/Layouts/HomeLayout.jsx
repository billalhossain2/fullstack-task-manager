import React from 'react'
import Navbar from '../pages/shared/Navbar/Navbar'
import Footer from '../pages/shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeLayout = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-3'>
    <Navbar></Navbar>
      <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default HomeLayout