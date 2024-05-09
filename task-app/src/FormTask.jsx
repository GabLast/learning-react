import { useState } from "react";

function FormTask({ createTask, counter}) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: task,
      description: "nada",
      id: counter,
    };

    createTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="Tarea..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default FormTask;
