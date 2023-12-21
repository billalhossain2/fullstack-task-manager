import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TaskCard = ({taskItem}) => {
    const {title, description, priority, deadline} = taskItem || {};
  return (
    <div className='border-[1px] border-gray-300 p-2 shadow-lg rounded-lg space-y-5'>
        <h3 className='font-medium'>{title}</h3>
        <div className='flex gap-3 items-center'>
        <p>{priority}</p>
        <p>|</p>
        <p>{deadline}</p>
        </div>
        <div className='flex gap-5'>
            <button className='flex gap-2 items-center'>
            <FaRegSquare className='text-2xl text-[#00A4B7]'></FaRegSquare>
            </button>

            <Link to="/dashboard/edit-task">
            <button className='flex gap-2 items-center'>
            <FaEdit className='text-2xl text-[#00A4B7]'></FaEdit>
            </button>
            </Link>

            <button>
              <RiDeleteBin6Line className='text-2xl text-red-600'></RiDeleteBin6Line>
            </button>

            <button>
              <FaEye className='text-2xl text-[#31348cbb]'></FaEye>
            </button>
        </div>
    </div>
  )
}

export default TaskCard