import React from 'react'
import CompletedTaskCard from './CompletedTaskCard'

const CompletedTasks = ({allTasks}) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {
            allTasks?.filter(item=>item.status === "completed").map((taskItem, index) => <CompletedTaskCard key={index} taskItem={taskItem}></CompletedTaskCard>)
        }
    </div>
  )
}

export default CompletedTasks