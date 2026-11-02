
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ onLogout, role }) {
  return (
    <nav className="navbar">
      <h2>Prep2Place</h2>

      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/preparation">Preparation</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/interview">Interview</Link>
        <Link to="/about">About</Link>

        {role === "admin" && (
          <Link to="/admin">Admin Panel</Link>
        )}

        <button
          type="button"
          className="logout-button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
