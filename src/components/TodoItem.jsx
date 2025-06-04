// TodoItem Component

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  // Helper function to determine the CSS class based on the priority level
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high'; // High priority styling
      case 'Medium':
        return 'priority-medium'; // Medium priority styling
      case 'Low':
        return 'priority-low'; // Low priority styling
      default:
        return ''; // Default (no special priority class)
    }
  };

  return (
    // Outer container for the todo item
    <div
      className={`todo-item ${
        todo.completed ? 'completed' : '' // Adds 'completed' class if the item is marked done
      } ${getPriorityClass(todo.priority)}`}
    >
      {/* Inner container for title, checkbox, and priority badge */}
      <div className="todo-content">
        {/* Checkbox to toggle the completion status of the todo */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)} // Calls toggleTodo with the item's ID when changed
          className="todo-checkbox"
        />

        {/* Displays the title of the todo item */}
        <span className="todo-title">{todo.title}</span>

        {/* Sisplays the priority badge */}
        <span className={`priority-badge ${getPriorityClass(todo.priority)}`}>
          {todo.priority}
        </span>
      </div>

      {/* Delete the todo item */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-btn"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
