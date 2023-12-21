import React, { useState } from 'react'
import Badge from '../../../components/Badge'
import AllTasks from './AllTasks/AllTasks'
import CompletedTasks from './CompletedTasks/CompletedTasks'
import OngoingTasks from './OngoingTasks/OngoingTasks'
import { FaRegSquare } from "react-icons/fa";

const UserHome = () => {
  const allDemoTasks = [
    {
      "title": "Develop Website Homepage",
      "description": "Create a visually appealing homepage for the task management website using React and Tailwind CSS.",
      "deadline": "2023-02-28",
      "priority": "High"
    },
    {
      "title": "Prepare Monthly Financial Report",
      "description": "Compile and analyze financial data to create a comprehensive monthly report for the finance department.",
      "deadline": "2023-03-15",
      "priority": "Moderate",
      "status":"completed"
    },
    {
      "title": "Implement User Authentication",
      "description": "Integrate user authentication functionality to enhance security and control access to sensitive information.",
      "deadline": "2023-02-10",
      "priority": "High"
    },
    {
      "title": "Organize Team Building Event",
      "description": "Plan and coordinate a team-building event to boost team morale and strengthen collaboration among team members.",
      "deadline": "2023-04-01",
      "priority": "Low"
    },
    {
      "title": "Review Marketing Strategy",
      "description": "Evaluate the current marketing strategy and propose enhancements to increase brand visibility and customer engagement.",
      "deadline": "2023-03-05",
      "priority": "Moderate",
      "status":"completed"
    }
  ]

  const [allTasks, setAllTasks] = useState(allDemoTasks)

  return (
    <div className='bg-gray-200 min-h-screen px-4 pb-10 pt-5'>
      <div className='flex md:flex-row flex-col gap-5'>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
      </div>

      {/* All Tasks List  */}
      <h1 className='text-2xl font-medium mb-3 mt-10'>All Tasks</h1>
      <AllTasks allTasks={allTasks}></AllTasks>

      {/* Ongoing Tasks  */}
      <h1 className='text-2xl font-medium mb-3 mt-16'>Ongoing Tasks</h1>
      <OngoingTasks allTasks={allTasks}></OngoingTasks>

      {/* Completed Tasks  */}
      <h1 className='text-2xl font-medium mb-3 mt-16'>Completed Tasks</h1>
      <CompletedTasks allTasks={allTasks}></CompletedTasks>
    </div>
  )
}

export default UserHome