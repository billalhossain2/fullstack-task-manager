import TaskCard from "./TaskCard";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const AllTasks = ({ allTasks }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-3">All Tasks</h1>
      <DragDropContext>
        <Droppable droppableId="tasks">
          {
            (provider)=>(<ul {...provider.droppableProps} ref={provider.innerRef}>
              {allTasks?.map((taskItem, index) => (
                <TaskCard key={index} taskItem={taskItem}></TaskCard>
              ))}
            </ul>)
          }
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default AllTasks;
