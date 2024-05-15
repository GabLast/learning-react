import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-xl">No data</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-1">
      {tasks.map((it) => (
        <TaskCard key={it.id} task={it} />
      ))}
    </div>
  );
}

export default TaskList;
