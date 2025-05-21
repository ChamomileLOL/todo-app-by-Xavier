import { useState } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xl p-6">
        <Header />
        <div className="flex mb-6 gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300"
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 italic mt-6">
            No tasks yet... Add something productive! 🚀
          </p>
        ) : (
          <ToDoList
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={editTask}
          />
        )}
      </div>
    </div>
  );
};

export default App;
