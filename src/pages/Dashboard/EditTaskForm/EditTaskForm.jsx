import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams} from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const EditTaskForm = () => {
  const axiosPublic = useAxiosPublic();
  const {taskId} = useParams();
  const navigate = useNavigate()

  const loaderData = useLoaderData();
  console.log("Loader data", loaderData)

  const [updatedTask, setUpdatedTask] = useState({ ...loaderData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // onUpdateTask(updatedTask);
    console.log(updatedTask)
    const {title, description, priority, completed, email, deadline} = updatedTask;
    const res = await axiosPublic.put(`/tasks/${taskId}`, {title, description, priority, completed, email, deadline});
    toast.success("successfully updated", {autoClose:1000})
    navigate("/dashboard")
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={updatedTask.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={updatedTask.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={updatedTask.deadline}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={updatedTask.priority}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#31348ce3] text-white px-4 py-2 rounded-md hover:bg-[#31348C] focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          >
            Update Task
          </button>
          <button
            type="button"
            className="text-gray-600 px-4 py-2 rounded-md hover:text-gray-800 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
