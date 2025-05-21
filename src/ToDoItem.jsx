import { useState } from "react";

const ToDoItem = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleEdit = () => {
    if (editText.trim() !== "") {
      onEdit(task.id, editText);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg shadow-sm border hover:shadow-md transition duration-300 bg-gradient-to-r from-white to-gray-50">
      
      <div className="flex flex-wrap items-center gap-3 justify-start">
        {/* Checkbox and task text/input */}
        <div className="flex items-center gap-3 flex-grow">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5 accent-green-500"
          />
          {isEditing ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border rounded px-2 py-1 w-full text-sm"
            />
          ) : (
            <span
              className={`text-base transition-all duration-300 ${
                task.completed ? "line-through text-gray-400 italic" : "text-gray-800"
              }`}
            >
              {task.text}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {isEditing ? (
            <button
              onClick={handleEdit}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition duration-200 text-sm"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition duration-200 text-sm"
            >
              Edit
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="mt-2 text-sm text-center w-full">
          <p className="text-gray-700 mb-2">Are you sure you want to delete this task?</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={confirmDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Yes
            </button>
            <button
              onClick={cancelDelete}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
