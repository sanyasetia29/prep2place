
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard({ selectedCourse, username, onLogout }) {
  const displayName =
    username ||
    localStorage.getItem("prep2place-username") ||
    "Student";

  const course =
    selectedCourse ||
    localStorage.getItem("prep2place-course");

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <section className="dashboard-header">
          <div className="dashboard-welcome">
            <span className="dashboard-label">STUDENT DASHBOARD</span>
            <h1>Welcome back, {displayName}!</h1>
            <p>
              Your placement preparation journey continues here.
              Keep learning, practising and moving closer to your goals.
            </p>
          </div>

          <button
            className="dashboard-logout"
            onClick={onLogout}
            type="button"
          >
            Logout
          </button>
        </section>

        <section className="dashboard-course-card">
          <div className="dashboard-card-icon">🎓</div>

          <div className="dashboard-course-info">
            <span className="dashboard-label">YOUR SELECTED COURSE</span>
            <h2>{course || "No Course Selected"}</h2>
            <p>
              {course
                ? "Continue learning with activities designed for your course."
                : "Select your course to get started with your preparation."}
            </p>
          </div>

          {!course && (
            <Link to="/courses" className="dashboard-action-link">
              Select Course →
            </Link>
          )}
        </section>

        <div className="dashboard-section-heading">
          <div>
            <span className="dashboard-label">YOUR LEARNING SPACE</span>
            <h2>Continue Your Preparation</h2>
            <p>Choose an area and start improving your skills.</p>
          </div>
        </div>

        <section className="dashboard-card-grid">

          <article className="dashboard-card aptitude-card">
            <div className="dashboard-card-top">
              <span className="dashboard-card-icon">🧠</span>
              <span className="dashboard-card-tag">PRACTICE</span>
            </div>

            <h3>Aptitude Practice</h3>
            <p>
              Improve your logical thinking and problem-solving
              skills with aptitude concepts and quizzes.
            </p>

            <Link to="/aptitude" className="dashboard-action-link">
              Start Practising <span>→</span>
            </Link>
          </article>

          <article className="dashboard-card english-card">
            <div className="dashboard-card-top">
              <span className="dashboard-card-icon">📘</span>
              <span className="dashboard-card-tag">LEARNING</span>
            </div>

            <h3>English Skills</h3>
            <p>
              Strengthen your grammar, vocabulary and reading
              skills for placement assessments.
            </p>

            <Link to="/english" className="dashboard-action-link">
              Explore English <span>→</span>
            </Link>
          </article>

          <article className="dashboard-card planner-card">
            <div className="dashboard-card-top">
              <span className="dashboard-card-icon">📅</span>
              <span className="dashboard-card-tag">PLANNING</span>
            </div>

            <h3>Study Planner</h3>
            <p>
              Organise your preparation, manage learning activities
              and stay consistent with your goals.
            </p>

            <Link to="/planner" className="dashboard-action-link">
              Explore Planner <span>→</span>
            </Link>
          </article>

        </section>
      </div>
    </div>
  );
}

export default Dashboard;
