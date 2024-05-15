import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-neutral-500 p-1 m-1" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-white mb-3">
          Creación de Tareas
        </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          required
          placeholder="Tarea titulo..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          required
          placeholder="Descripcion..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div className="grid grid-cols-3 ">
          <button className="bg-indigo-300 px-3 py-1 col-start-3">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default FormTask;
