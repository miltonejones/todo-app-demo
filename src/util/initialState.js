export const initialState = {
  todos: [
    {
      id: 1,
      title: 'Learn React Hooks',
      completed: false,
      priority: 'High',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Complete practice project',
      completed: true,
      priority: 'Medium',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 3,
      title: 'Review JavaScript fundamentals',
      completed: false,
      priority: 'Low',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
  ],
  filter: 'all',
  priorityFilter: 'all',
  sortBy: 'createdAt',
};
