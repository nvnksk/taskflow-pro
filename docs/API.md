# API Documentation

## Base URL

```
http://localhost:3000/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth

#### POST /api/auth/register
Register a new user.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "user": { "_id": "...", "name": "John Doe", "email": "john@example.com" },
  "token": "jwt-token-here"
}
```

#### POST /api/auth/login
Login with existing credentials.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "user": { "_id": "...", "name": "John Doe", "email": "john@example.com" },
  "token": "jwt-token-here"
}
```

#### POST /api/auth/logout
Logout the current user.

**Response (200):**
```json
{ "message": "Logged out successfully" }
```

### Tasks

#### GET /api/tasks
Get all tasks for the authenticated user.

**Response (200):** Array of task objects.

#### POST /api/tasks
Create a new task.

**Body:**
```json
{
  "title": "My Task",
  "description": "Task description",
  "priority": "medium",
  "dueDate": "2026-04-01"
}
```

**Response (201):** The created task object.

#### GET /api/tasks/:id
Get a specific task by ID.

#### PUT /api/tasks/:id
Update a task.

#### DELETE /api/tasks/:id
Delete a task.

### Users

#### GET /api/users/:id
Get user profile by ID (authenticated).
