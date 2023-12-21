import React from 'react'
import OngoingTaskCard from './OngoingTaskCard'

const OngoingTasks = ({allTasks}) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {
            allTasks?.filter(item=>item.status !== "completed").map((taskItem, index) => <OngoingTaskCard key={index} taskItem={taskItem}></OngoingTaskCard>)
        }
    </div>
  )
}

export default OngoingTasks