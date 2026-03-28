import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '', priority: 'medium', dueDate: '' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
      />
      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task description"
      />
      <div className="task-form__row">
        <div className="task-form__field">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <Input
          label="Due Date"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
