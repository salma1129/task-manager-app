# 🧩 Task Manager App

A basic task management app using React and Laravel, helping teams keep track of their work and users manage tasks.
- 👤 **User**: Can manage their own tasks and profile.
- 👨‍💼 **Admin**: Can manage users and tasks across the entire system.

---

## ✨ Features

- 🔐 Secure authentication using **Laravel Sanctum**
- 🗂️ Task board (To Do, In Progress, Done, Canceled) with **drag and drop**
- 📝 Create, edit, delete tasks with priority and due dates
- 🧠 Filter tasks by **category, priority, and due date**
- 📌 Highlight **overdue** and **recent** tasks
- 👤 Edit profile for users
- 👥 Admin dashboard to **view activity logs**, manage users & tasks
- 📊 Admin can **filter and modify** all users’ tasks

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React (Vite)       |
| Backend    | Laravel (REST API) |
| Database   | MySQL (Workbench)  |
| Auth       | Laravel Sanctum    |
| Styling    | CSS, Tailwind  |

---

## ✅ Prerequisites

Make sure you have these installed:

- PHP ≥ 8.1  
- Composer ([Get Composer](https://getcomposer.org/download/))  
- Node.js ≥ 16 and npm ([Get Node.js](https://nodejs.org/))  
- MySQL Server (e.g., via [MySQL Workbench](https://dev.mysql.com/downloads/workbench/))  
- Git ([Get Git](https://git-scm.com/downloads))  

---

## 🚀 Getting Started

 1. Clone the Repository

git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app

2. Installation & Setup
Backend Setup
Navigate to backend:
cd backend

Install PHP dependencies:
composer install

Copy .env file and configure it:
cp .env.example .env
Update .env with your database credentials.

Generate app key:
php artisan key:generate

Run migrations:
php artisan migrate
Install and configure Laravel Sanctum (see full instructions above).

Serve the backend:
php artisan serve

Frontend Setup

Navigate to frontend:
cd ../frontend

Install Node dependencies:
npm install

Run frontend dev server:
npm run dev
Default URL: http://localhost:5173


Future Improvements
Notifications & reminders

Time tracking

Analytics dashboard

Task assignment to teams

Multi-language support
