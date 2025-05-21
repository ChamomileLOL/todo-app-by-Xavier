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
    <div
      className="flex items-center justify-between p-3 rounded-lg shadow-sm border hover:shadow-md transition duration-300 bg-gradient-to-r from-white to-gray-50"
    >
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-3 w-5 h-5 accent-green-500"
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

      <div className="ml-3 flex items-center space-x-2">
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

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center space-y-4 w-72">
            <p className="text-gray-800">Are you sure you want to delete this task?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
