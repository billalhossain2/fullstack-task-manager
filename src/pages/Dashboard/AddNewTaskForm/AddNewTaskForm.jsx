import React, { useState } from 'react';

const AddNewTaskForm = ({ onAddTask, onCancel }) => {
  const initialTask = {
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium', // Default priority
  };

  const [newTask, setNewTask] = useState({ ...initialTask });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    // Reset the form after submitting
    setNewTask({ ...initialTask });
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add New Task</h2>
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
            value={newTask.title}
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
            value={newTask.description}
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
            value={newTask.deadline}
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
            value={newTask.priority}
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
            className="bg-[#31348cde] text-white px-4 py-2 rounded-md hover:bg-[#31348C] focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
          >
            Add Task
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 px-4 py-2 rounded-md hover:text-gray-800 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTaskForm;
