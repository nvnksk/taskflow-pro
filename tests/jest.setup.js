// Add any global test setup here
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI = 'mongodb://localhost:27017/taskflow-test';
process.env.JWT_SECRET = 'test-secret-key';