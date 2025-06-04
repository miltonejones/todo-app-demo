// TodoStats Component
const TodoStats = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  const getHighestPriorityIncomplete = () => {
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    if (incompleteTodos.length === 0) return null;

    const highPriority = incompleteTodos.find(
      (todo) => todo.priority === 'High'
    );
    if (highPriority) return highPriority;

    const mediumPriority = incompleteTodos.find(
      (todo) => todo.priority === 'Medium'
    );
    if (mediumPriority) return mediumPriority;

    return incompleteTodos.find((todo) => todo.priority === 'Low');
  };

  const highestPriorityTodo = getHighestPriorityIncomplete();

  return (
    <div className="todo-stats">
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{totalTodos}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{activeTodos}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{completedTodos}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
      {highestPriorityTodo && (
        <div className="priority-highlight">
          <strong>Next Priority:</strong> {highestPriorityTodo.title} (
          {highestPriorityTodo.priority})
        </div>
      )}
    </div>
  );
};

export default TodoStats;
