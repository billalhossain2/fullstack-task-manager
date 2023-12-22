import React from 'react'
import OngoingTaskCard from './OngoingTaskCard'

const OngoingTasks = ({allTasks}) => {
  return (
    <div>
       <h1 className='text-2xl font-medium mb-3'>Ongoing Tasks</h1>
        {
            allTasks?.filter(item=>!item.completed).map((taskItem, index) => <OngoingTaskCard key={index} taskItem={taskItem}></OngoingTaskCard>)
        }
    </div>
  )
}

export default OngoingTasks