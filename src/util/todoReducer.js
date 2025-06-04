// Manage the state of a to-do app (state) based on dispatched actions.
function todoReducer(state, action) {
  // Handle different action types using a switch statement.
  switch (action.type) {
    // Add a new todo item
    case 'ADD_TODO':
      return {
        ...state, // Spread the current state to preserve existing state properties
        todos: [
          ...state.todos, // Copy existing todos
          {
            ...action.payload, // Spread any additional properties from the dispatched action
            id: Date.now(), // Generate a unique ID based on the current timestamp
            completed: false, // New todos are not completed by default
            createdAt: new Date().toISOString(), // Timestamp of creation
          },
        ],
      };

    //Toggle the completion status of a todo item
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          // Check if the current todo matches the ID from action.payload
          todo.id === action.payload
            ? // If yes, toggle its 'completed' status
              { ...todo, completed: !todo.completed }
            : // If not, leave it unchanged
              todo
        ),
      };

    // Delete a todo by its ID
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    // Set a general filter (e.g., all, active, completed)
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload, // Update the filter value in the state
      };

    // Set a priority filter (e.g., high, medium, low)
    case 'SET_PRIORITY_FILTER':
      return {
        ...state,
        priorityFilter: action.payload, // Update the priority filter value
      };

    // Change the sorting method (e.g., by date, by priority)
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload, // Update the sorting method
      };

    // If no action matches, return the current state unchanged
    default:
      return state;
  }
}

export default todoReducer;
