import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../store/slices/taskSlice';
import TaskList from './TaskList';
import TaskForm from '../molecules/TaskForm';

function Dashboard() {
  const dispatch = useDispatch();
  const { items: tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Dashboard;