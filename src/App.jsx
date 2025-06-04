import React, { useEffect, useReducer, useCallback } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import { initialState } from './util/initialState';
import todoReducer from './util/todoReducer';

const LOCAL_STORAGE_KEY = 'todoAppState';

function App() {
  // Load initial state from localStorage
  const localState = () => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : initialState;
    } catch (e) {
      console.error('Failed to load from localStorage', e);
      return initialState;
    }
  };

  // initialize the list for the reducer
  const [state, dispatch] = useReducer(todoReducer, {}, localState);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // const [state, dispatch] = useReducer(todoReducer, initialState);

  // return the list with any filters/sorts applied
  const getFilteredTodos = () => {
    return state.todos
      .filter((todo) => {
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;
      })
      .filter((todo) => {
        if (state.priorityFilter !== 'all')
          return todo.priority === state.priorityFilter;
        return true;
      })
      .sort((a, b) => {
        if (state.sortBy === 'priority') {
          const priorityRank = { Low: 1, Medium: 2, High: 3 };
          return priorityRank[b.priority] - priorityRank[a.priority];
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  };

  // UI dispatches messages to the reducer to apply changes
  return (
    <div className="App">
      <h1>Todo App</h1>

      {/* Filter and Sort Controls */}
      <div
        className="controls"
        style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}
      >
        {/* state filter selector */}
        <select
          value={state.filter}
          onChange={(e) =>
            dispatch({ type: 'SET_FILTER', payload: e.target.value })
          }
        >
          <option value="all">All Tasks</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        {/* priority filter selector */}
        <select
          value={state.priorityFilter}
          onChange={(e) =>
            dispatch({ type: 'SET_PRIORITY_FILTER', payload: e.target.value })
          }
        >
          <option value="all">All Priorities</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>

        {/* sort selector  */}
        <select
          value={state.sortBy}
          onChange={(e) =>
            dispatch({ type: 'SET_SORT_BY', payload: e.target.value })
          }
        >
          <option value="createdAt">Sort by Date</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>

      {/* statistics header  */}
      <TodoStats todos={state.todos} />

      {/* form for new to-dos */}
      <TodoForm
        addTodo={(todo) => dispatch({ type: 'ADD_TODO', payload: todo })}
      />

      {/* list of todo items  */}
      <TodoList
        todos={getFilteredTodos()}
        toggleTodo={(id) => dispatch({ type: 'TOGGLE_TODO', payload: id })}
        deleteTodo={(id) => dispatch({ type: 'DELETE_TODO', payload: id })}
      />
    </div>
  );
}

export default App;
