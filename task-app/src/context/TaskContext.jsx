import { createContext, useState, useEffect } from "react";
import { tasksList as dataList } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  //se ejecuta siempre que el componente cambia
  // , [] hace que solo se ejecute cuando se crea el componente
  // , [counter] hace que solo se ejecute cuando counter cambie
  useEffect(() => {
    setTasks(dataList);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    alert(taskId + " has been deleted");

    setTasks(tasks.filter((it) => it.id != taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
