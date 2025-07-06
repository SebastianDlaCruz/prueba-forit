import {
  createBrowserRouter
} from "react-router";


export const rootRouter = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const TaskList = await import('../pages/TaskList/TaskList');
      return {
        Component: TaskList.default
      }
    }
  },
  {
    path: 'task-item/:id',
    lazy: async () => {
      const taskItem = await import('../pages/TaskItem/TaskItem');
      return {
        Component: taskItem.default
      }
    }
  }
]);
