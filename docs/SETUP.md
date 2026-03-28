# Setup Guide

## Local Development

1. Clone the repository
2. Install dependencies: `npm run install:all`
3. Create `.env` file from `.env.example`
4. Start with Docker: `npm run docker:up`
5. Access at http://localhost:3000

## Without Docker

```bash
# Terminal 1: Backend
cd server && npm run dev

# Terminal 2: Frontend
cd client && npm run dev