import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import FormTask from "./FormTask";
import { tasksList as dataList } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);

  //se ejecuta siempre que el componente cambia
  // , [] hace que solo se ejecute cuando se crea el componente
  // , [counter] hace que solo se ejecute cuando counter cambie
  useEffect(() => {
    setTasks(dataList);
    setCounter(dataList.length);
  }, []);

  function createTask(task) {
    setTasks([...tasks, task]);
    setCounter(counter+1);
    // setCounter(tasks.length); no funciona en la 2da iteracion. why?
    console.log(counter)
  }

  return (
    <>
      <FormTask createTask={createTask} counter={counter} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
