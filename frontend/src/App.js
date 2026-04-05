import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

// 🔐 Protected Route Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token exists → allow access
  if (token) {
    return children;
  }

  // If not → redirect to login
  return <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>

        {/* 🔓 Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Protected Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;