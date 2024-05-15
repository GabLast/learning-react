import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard(data) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-600 text-white rounded-md p-2">
      <h1 className="text-xl font-bold capitalize">{data.task.title}</h1>
      <p className="text-blue-500">{data.task.description}</p>
      <button
        className="bg-red-500 rounded-md p-2 hover:bg-red-300"
        onClick={() => deleteTask(data.task.id)}
      >
        delete
      </button>
    </div>
  );
}

export default TaskCard;
