import React from 'react';
import Button from '../atoms/Button';

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <Button variant="secondary" onClick={() => onEdit(task)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </div>
    </div>
  );
}

export default TaskItem;