import TaskCard from "./TaskCard"

const AllTasks = ({allTasks}) => {

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {
            allTasks?.map((taskItem, index) => <TaskCard key={index} taskItem={taskItem}></TaskCard>)
        }
    </div>
  )
}

export default AllTasks