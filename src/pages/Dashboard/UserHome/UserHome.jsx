import React, { useContext, useEffect, useState } from 'react'
import Badge from '../../../components/Badge'
import AllTasks from './AllTasks/AllTasks'
import CompletedTasks from './CompletedTasks/CompletedTasks'
import OngoingTasks from './OngoingTasks/OngoingTasks'
import { FaRegSquare } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import { AuthContext } from '../../../providers/AuthProvider'

const UserHome = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext)

  const [allTasks, setAllTasks] = useState([]);
  console.log("From Home=====>", allTasks)

  useEffect(()=>{
    axiosPublic.get(`/tasks?email=${user?.email}`)
    .then(res => setAllTasks(res.data))
    .catch(error => {
      toast.error(error.message, {autoClose:3000})
    })
  }, [axiosPublic])

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