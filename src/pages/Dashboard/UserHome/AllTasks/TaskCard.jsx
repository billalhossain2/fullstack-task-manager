import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLoadAllTasksByEmail from "../../../../hooks/useLoadAllTasksByEmail";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TaskCard = ({ taskItem }) => {
  const axiosPublic = useAxiosPublic();
  const { _id, title, description, priority, deadline, completed } =
    taskItem || {};
  const { refetch } = useLoadAllTasksByEmail();

  const handleComplete = async () => {
    const res = await axiosPublic.patch(`/tasks/${_id}`, {
      completed: !completed,
    });
    toast.success("Completed Task Successfully", { autoClose: 1000 });
    refetch();
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      const res = await axiosPublic.delete(`/tasks/${_id}`);
      refetch();
    }
  };


  return (
    <Draggable key={_id} draggableId={_id} index={_id}>
      {
        (provider)=>(<li className="border-[1px] border-gray-300 p-2 shadow-lg rounded-lg space-y-5 mb-3" ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
        <h3 className="font-medium">{title}</h3>
        <div className="flex gap-3 items-center">
          <p>{priority}</p>
          <p>|</p>
          <p>{deadline}</p>
        </div>
        <div className="flex gap-5">
          {completed ? (
            <button onClick={handleComplete} className="flex gap-2 items-center">
              <FaRegCheckSquare className="text-2xl text-[#00A4B7]"></FaRegCheckSquare>
            </button>
          ) : (
            <button onClick={handleComplete} className="flex gap-2 items-center">
              <FaRegSquare className="text-2xl text-[#00A4B7]"></FaRegSquare>
            </button>
          )}
  
          <Link to={`/dashboard/edit-task/${_id}`}>
            <button className="flex gap-2 items-center">
              <FaEdit className="text-2xl text-[#00A4B7]"></FaEdit>
            </button>
          </Link>
  
          <button onClick={handleDelete}>
            <RiDeleteBin6Line className="text-2xl text-red-600"></RiDeleteBin6Line>
          </button>
  
          <button>
            <FaEye className="text-2xl text-[#31348cbb]"></FaEye>
          </button>
        </div>
      </li>)
      }
    </Draggable>
  );
};

export default TaskCard;
