import React from 'react'
import CompletedTaskCard from './CompletedTaskCard'

const CompletedTasks = ({allTasks}) => {
  return (
    <div>
       <h1 className='text-2xl font-medium mb-3'>Completed Tasks</h1>
        {
            allTasks?.filter(item=>item.completed).map((taskItem, index) => <CompletedTaskCard key={index} taskItem={taskItem}></CompletedTaskCard>)
        }
    </div>
  )
}

export default CompletedTasks