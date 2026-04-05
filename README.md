# student-collab
# 🚀 StudentCollab – Full Stack Collaboration Platform

## 📌 Overview

StudentCollab is a full-stack web application that allows students to collaborate, share ideas, and interact through posts.  
It includes secure authentication, protected APIs, and a modern responsive UI.

This project demonstrates **industry-level concepts** such as:
- Full Stack Development (React + Spring Boot)
- REST APIs
- JWT Authentication
- CI/CD Pipelines
- Deployment (Render + Vercel)

---

## 🎯 Features

- 🔐 User Authentication (JWT आधारित)
- 👤 User Registration & Login
- 📝 Create & View Posts
- 🔒 Protected APIs (Token-based security)
- 🌐 Fully Responsive UI
- ⚡ Fast and Scalable Architecture

---

## 🏗️ Tech Stack

### 🔹 Frontend
- React.js
- Axios
- CSS

### 🔹 Backend
- Spring Boot
- Spring Security
- JWT Authentication
- Maven

### 🔹 Database
- H2 Database (for testing)
- MySQL (production ready)

---

## 🧠 Architecture


::contentReference[oaicite:0]{index=0}


---

## 🔐 Authentication Flow


::contentReference[oaicite:1]{index=1}


---


## 📂 Project Structure
student-collab/ │
├── backend/        # Spring Boot Application 
│ ├── controller/ 
│ ├── model/
│ ├── repository/
│ └── security/
│ 
├── frontend/       # React Application 
│  ├── components/
│  ├── services/
│  └── styles/
│ 
└── .github/# CI/CD Pipeline


---

## ⚙️ Prerequisites

Make sure you have installed:

- Java 17+
- Node.js (v16+)
- Maven
- Git

---

## 🖥️ How to Run Locally

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/student-collab.git
cd student-collab
🔹 2. Run Backend
Bash
cd backend
./mvnw spring-boot:run
👉 Backend runs on:

http://localhost:8080
🔹 3. Run Frontend
Bash
cd frontend
npm install
npm start
👉 Frontend runs on:

http://localhost:3000
🔑 API Testing (Postman)
Login API

POST /auth/login
Body:
JSON
{
  "username": "testuser",
  "password": "1234"
}
👉 Response:

JWT Token
🔐 Protected API Usage
Add header:

Authorization: Bearer <your-token>

⚙️ Environment Variables
Backend

SPRING_DATASOURCE_URL=jdbc:h2:mem:testdb
JWT_SECRET=your-secret-key
🔄 CI/CD Pipeline
This project uses GitHub Actions for:
✅ Backend Build (Maven)
✅ Frontend Build (React)
✅ Automated Testing
🧪 Testing
Run backend tests:
Bash
./mvnw test
🌟 Future Enhancements
💬 Comments system
👍 Like / Dislike feature
👤 User Profiles
📱 Mobile responsiveness improvement
🌐 Custom domain deployment
🤝 Contributing
Contributions are welcome!
Bash
git fork
git checkout -b feature-name
git commit -m "Added feature"
git push
📜 License
This project is licensed under the MIT License.
🙌 Author
Sampoorn Trivedi
⭐ Support
If you like this project:
👉 Give it a ⭐ on GitHub
👉 Share with your friends
