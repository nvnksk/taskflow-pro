import * as taskService from '../../src/services/taskService';
import Task from '../../src/models/Task';

jest.mock('../../src/models/Task');

describe('Task Service', () => {
  const mockUserId = '507f1f77bcf86cd799439011';

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllTasks', () => {
    it('should return tasks for a user', async () => {
      const mockTasks = [
        { _id: '1', title: 'Test Task', userId: mockUserId },
      ];
      Task.find.mockReturnValue({ sort: jest.fn().mockResolvedValue(mockTasks) });

      const result = await taskService.getAllTasks(mockUserId);
      expect(result).toEqual(mockTasks);
      expect(Task.find).toHaveBeenCalledWith({ userId: mockUserId });
    });
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      const taskData = { title: 'New Task', userId: mockUserId };
      Task.create.mockResolvedValue(taskData);

      const result = await taskService.createTask(taskData);
      expect(result).toEqual(taskData);
      expect(Task.create).toHaveBeenCalledWith(taskData);
    });
  });

  describe('deleteTask', () => {
    it('should delete a task', async () => {
      Task.findOneAndDelete.mockResolvedValue({ _id: '1' });

      const result = await taskService.deleteTask('1', mockUserId);
      expect(result).toBeTruthy();
      expect(Task.findOneAndDelete).toHaveBeenCalledWith({ _id: '1', userId: mockUserId });
    });
  });
});
