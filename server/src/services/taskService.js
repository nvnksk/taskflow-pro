import Task from '../models/Task';

export const getAllTasks = async (userId) => {
  return Task.find({ userId }).sort({ createdAt: -1 });
};

export const getTaskById = async (id, userId) => {
  return Task.findOne({ _id: id, userId });
};

export const createTask = async (taskData) => {
  return Task.create(taskData);
};

export const updateTask = async (id, userId, data) => {
  return Task.findOneAndUpdate({ _id: id, userId }, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteTask = async (id, userId) => {
  return Task.findOneAndDelete({ _id: id, userId });
};
