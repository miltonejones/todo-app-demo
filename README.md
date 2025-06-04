📝 React Todo App
A fully functional Todo List built with React and the useReducer hook for scalable state management. The app includes features such as priority tagging, filtering (by status and priority), and sorting (by date or priority).

🚀 Features
Add new todo items with a title and priority (Low, Medium, High)

Mark todos as completed

Delete individual todos

Filter by:

Completion status: All, Active, Completed

Priority level: All, High, Medium, Low

Sort by:

Creation date (newest first)

Priority (High → Low)

Statistics summary of active and completed todos

Clean UI with reusable components

🧱 Project Structure
bash
Copy
Edit
src/
├── App.js                # Main app component, manages state and renders UI
├── components/
│   ├── TodoForm.js       # Form to add a new todo
│   ├── TodoList.js       # Renders the list of todo items
│   ├── TodoItem.js       # Renders a single todo item
│   └── TodoStats.js      # Displays count of completed/active todos
└── util/
    ├── todoReducer.js    # Reducer to manage todo state
    └── initialState.js   # Initial state definition
🛠️ Getting Started
Prerequisites
Node.js (version 14+ recommended)

npm or yarn

Installation
bash
Copy
Edit
# Clone the repository
https://github.com/miltonejones/todo-app-demo.git

# Navigate into the project directory
cd react-todo-app

# Install dependencies
npm install
# or
yarn
Run the App
bash
Copy
Edit
npm start
# or
yarn start
Visit http://localhost:3000 in your browser.

