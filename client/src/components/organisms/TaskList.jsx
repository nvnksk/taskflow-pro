import React from 'react';
import TaskItem from '../molecules/TaskItem';
import { useTasks } from '../../hooks/useTasks';

const TaskList = ({ filter }) => {
  const { tasks, toggleTask, deleteTask, loading } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  if (loading) {
    return <div className="task-list__loading">Loading tasks...</div>;
  }

  if (filteredTasks.length === 0) {
    return <div className="task-list__empty">No tasks found.</div>;
  }

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
