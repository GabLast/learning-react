import TaskList from "./components/TaskList";
import FormTask from "./components/FormTask";

function App() {
  return (
    <main className="bg-gray-300 h-screen">
      <div className="container mx-auto">
        <FormTask />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
