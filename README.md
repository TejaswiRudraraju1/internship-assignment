# Internship Assignment – Backend & Frontend Project
## Overview
This project is a **Backend Developer (Intern) Assignment** completed as part of an internship task. It demonstrates:
- Secure and scalable backend APIs with JWT authentication and role-based access (user/admin)
- CRUD operations for tasks
- API documentation via Swagger
- Basic frontend to interact with backend APIs

---

## Project Structure
assignment/
│
├─ backend/ # Node.js + Express backend
│ ├─ src/
│ │ ├─ routes/ # API routes (auth, tasks, protected, users)
│ │ ├─ models/ # Mongoose models (User, Task)
│ │ ├─ middleware/ # Auth & protected middleware
│ │ ├─ server.js # Backend entry point
│ │ └─ swagger.js # Swagger setup
│ ├─ package.json
│ └─ .env # Environment variables
│
└─ frontend/ # React frontend
├─ src/
├─ package.json
└─ public/

## Features

### Backend
- **User Registration & Login** with hashed passwords (bcrypt) and JWT authentication
- **Role-Based Access Control** for user/admin routes
- **CRUD APIs** for tasks
- **Input Validation & Error Handling** using `express-validator`
- **API Documentation** available at `/api-docs` (Swagger)
- **MongoDB** as the database

### Frontend
- Simple **React.js** frontend
- User can register, login, access protected dashboard
- Perform CRUD operations on tasks
- Displays success/error messages from backend

### Database
This project uses MongoDB. Make sure to have a MongoDB instance running and set the `MONGO_URI` in a `.env` file.

### Security
- JWT token handling
- Password hashing
- Input validation/sanitization

## Getting Started
### Backend
1. Go to backend folder:
   ```bash
   cd backend
Install dependencies:

npm install
Create .env file (example included as .env.txt):
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/internDB
JWT_SECRET=Assignment@123
Start the server:
npm start
Access Swagger docs:
http://localhost:5000/api-docs
Frontend
Go to frontend folder:
cd frontend
Install dependencies:
npm install
Start React app:
npm start
App will run at http://localhost:3000

API Endpoints
Auth
POST /api/v1/auth/register – Register new user
POST /api/v1/auth/login – Login user

Tasks
GET /api/v1/tasks – Get all tasks (user)
POST /api/v1/tasks – Create task
PUT /api/v1/tasks/:id – Update task
DELETE /api/v1/tasks/:id – Delete task

Protected

GET /api/v1/protected/user – Access for logged-in users
GET /api/v1/protected/admin – Access for admin only

Users (Admin only)

GET /api/v1/users – List all users
PUT /api/v1/users/:id – Update user info

Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, Swagger

Frontend: React.js
Others: express-validator, cors, morgan

Notes
JWT authentication required for protected routes
Use Swagger docs or frontend UI to test APIs
This project structure supports adding more modules or microservices in the future

Author
Tejaswi Rudraraju
