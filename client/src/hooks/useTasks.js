import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, addTask, updateTask, removeTask } from '../store/slices/taskSlice';
import { useEffect } from 'react';

export const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const createTask = (taskData) => {
    dispatch(addTask(taskData));
  };

  const toggleTask = (id) => {
    const task = tasks.find((t) => t._id === id);
    if (task) {
      dispatch(updateTask({ id, data: { completed: !task.completed } }));
    }
  };

  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };

  return { tasks, loading, error, createTask, toggleTask, deleteTask };
};
