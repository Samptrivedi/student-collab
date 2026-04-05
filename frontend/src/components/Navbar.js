import React from "react";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <h2 className="logo">StudentCollab</h2>

      <div className="nav-links">
        <button onClick={() => window.location.href="/dashboard"}>
          Dashboard
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;