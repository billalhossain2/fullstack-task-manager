import React from 'react'

const OngoingTaskCard = ({taskItem}) => {
    const {title, description, priority, deadline} = taskItem || {};
  return (
    <div className='border-[1px] border-gray-300 p-2 shadow-lg rounded-lg space-y-5 mb-3'>
    <h3 className='font-medium'>{title}</h3>
    <div className='flex gap-3 items-center'>
    <p>{priority}</p>
    <p>|</p>
    <p>{deadline}</p>
    </div>
</div>
  )
}

export default OngoingTaskCard