import { useState } from 'react';

// TodoForm Component
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = () => {
    if (title.trim()) {
      addTodo({
        title: title.trim(),
        priority,
      });
      setTitle('');
      setPriority('Medium');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="todo-form">
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter todo title..."
          className="todo-input"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleSubmit} className="add-btn">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
