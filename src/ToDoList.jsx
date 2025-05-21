import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 italic animate-fade-in">No tasks yet. Add one!</p>
      ) : (
        tasks.map((task, index) => (
          <div key={task.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}>
            <ToDoItem
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ToDoList;
