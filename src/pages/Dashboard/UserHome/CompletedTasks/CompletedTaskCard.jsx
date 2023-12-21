
const CompletedTaskCard = ({taskItem}) => {
    const {title, description, priority, deadline} = taskItem || {};
  return (
    <div className='border-[1px] border-gray-300 p-2 shadow-lg rounded-lg space-y-5'>
    <h3 className='font-medium'>{title}</h3>
    <div className='flex gap-3 items-center'>
    <p>{priority}</p>
    <p>|</p>
    <p>{deadline}</p>
    </div>
    <div className='flex gap-5'>
        <button className='flex gap-2 items-center bg-[#00A4B7] px-4 py-2 rounded-lg text-white'>
        Incomplete
        </button>
    </div>
</div>
  )
}

export default CompletedTaskCard