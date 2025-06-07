# 💬 Real-Time Chat Application

A full-stack real-time chat application built using **React** for the frontend and **Node.js** for the backend, with **MongoDB Atlas** as the database. The application supports live communication using **Socket.IO**.

---

## 🔧 Tech Stack

### Frontend
- **React.js**
- Axios (for API calls)
- Socket.IO Client

### Backend
- **Node.js**
- **Express.js** – for building REST APIs
- **Mongoose** – to connect with MongoDB Atlas
- **Socket.IO** – for real-time communication
- **Nodemon** – for live-reloading the backend during development
- dotenv – for managing environment variables
- CORS – to allow cross-origin requests

### Database
- **MongoDB Atlas** – cloud-hosted MongoDB for storing users, messages, and chat data

---

## 🚀 Features

- Real-time bi-directional chat between users using Socket.IO
- Clean and responsive React UI
- REST APIs for authentication, message handling, and user management
- MongoDB schema modeling with Mongoose
- Environment-based configuration using `.env`

---

## 📁 Folder Structure

<pre> ``` CHAT-SYSTEM/ │ ├── backend/ │ ├── src/ │ │ ├── config/ # MongoDB config & env settings │ │ ├── controllers/ # Request handlers │ │ ├── middleware/ # Auth/error handlers │ │ ├── models/ # Mongoose schemas │ │ ├── routes/ # API routes │ │ ├── utils/ # Helper functions │ │ └── index.js # Entry point │ ├── .env │ ├── package.json │ ├── package-lock.json │ └── ... │ ├── front-end/ │ ├── public/ │ ├── src/ │ ├── index.html │ ├── vite.config.js │ ├── package.json │ └── ... │ └── README.md ``` </pre>


## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chat-system.git
cd chat-system