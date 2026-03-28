# Architecture

## Overview

TaskFlow Pro is a full-stack task management SaaS application with a React frontend and Next.js API backend, using MongoDB for data persistence.

## Client Architecture

The client follows **Atomic Design** principles:

```
client/src/
├── components/
│   ├── atoms/       → Basic UI elements (Button, Input, Card)
│   ├── molecules/   → Composite components (TaskItem, TaskForm, Header)
│   ├── organisms/   → Complex sections (TaskList, Sidebar, Dashboard)
│   └── templates/   → Page layouts (MainLayout)
├── hooks/           → Custom React hooks (useTasks, useAuth, useFetch)
├── store/           → Redux Toolkit state management
│   └── slices/      → Feature-based slices (tasks, auth, ui)
├── services/        → API communication layer
├── styles/          → SCSS with white-label architecture
│   ├── variables/   → Design tokens (_colors, _typography, _spacing, _brand)
│   ├── mixins/      → Reusable SCSS mixins
│   ├── base/        → Reset and global styles
│   ├── components/  → Component-specific styles
│   └── utilities/   → Helper and layout utilities
├── utils/           → Validators, formatters, constants
└── types/           → JSDoc type definitions
```

## Server Architecture

The server uses Next.js API routes with a service layer pattern:

```
server/src/
├── pages/api/       → API route handlers
├── models/          → Mongoose schemas
├── middleware/       → Auth, validation, CORS, error handling
├── services/        → Business logic layer
├── utils/           → JWT, validators, constants
├── config/          → Database, env, constants
├── lib/             → Database connection helper
└── types/           → TypeScript type definitions
```

## Data Flow

1. **Client** dispatches Redux actions
2. **Redux Thunks** call service functions
3. **Services** make HTTP requests via Axios
4. **API Routes** validate and process requests
5. **Service Layer** handles business logic
6. **Models** interact with MongoDB

## White-Label Support

The SCSS architecture supports white-labeling through `_brand.scss` variables that override default design tokens.
