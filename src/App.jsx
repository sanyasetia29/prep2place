
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Preparation from "./pages/Preparation";
import Planner from "./pages/Planner";
import Interview from "./pages/Interview";
import About from "./pages/About";
import Aptitude from "./pages/Aptitude";
import TopicLearning from "./pages/Topiclearning";
import ConceptCheck from "./pages/ConceptCheck";

import SkillArena from "./pages/SkillArena";
import Concepts from "./pages/Concepts";
import ConceptLesson from "./pages/ConceptLesson";
import FindTheError from "./pages/FindTheError";
import DailyCodePuzzle from "./pages/DailyCodePuzzle";
import ProgrammingQuiz from "./pages/ProgrammingQuiz";

import BBALesson from "./pages/BBALesson";
import BusinessCaseStudy from "./pages/BusinessCaseStudy";
import BusinessTools from "./pages/BusinessTools";
import BusinessChallenges from "./pages/BusinessChallenges";

import MCASkillPage from "./pages/MCASkillPage";
import MBASkillPage from "./pages/MBASkillPage";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";

import English from "./pages/English";
import EnglishTopic from "./pages/EnglishTopic";

function AppContent() {
  const [selectedCourse, setSelectedCourse] = useState("");

  // Session remains active during refresh.
  const [auth, setAuth] = useState(() => {
    const savedUsername = sessionStorage.getItem("prep2place-username");
    const savedRole = sessionStorage.getItem("prep2place-role");

    if (
      savedUsername &&
      savedRole &&
      ["admin", "student"].includes(savedRole)
    ) {
      return {
        username: savedUsername,
        role: savedRole,
        isLoggedIn: true,
      };
    }

    // Clear old persistent login data.
    localStorage.removeItem("prep2place-username");
    localStorage.removeItem("prep2place-role");

    return {
      username: "",
      role: "",
      isLoggedIn: false,
    };
  });

  const { username, role, isLoggedIn } = auth;
  const location = useLocation();

  // Login Handler
  const handleLogin = (user) => {
    if (!user?.username || !user?.role) {
      console.error("Login response must contain username and role.");
      return;
    }

    const cleanUsername = user.username.trim();
    const userRole = String(user.role).trim().toLowerCase();

    if (!["admin", "student"].includes(userRole)) {
      console.error("Invalid user role:", userRole);
      return;
    }

    // Session storage controls login duration.
    sessionStorage.setItem("prep2place-username", cleanUsername);
    sessionStorage.setItem("prep2place-role", userRole);

    // Keep existing project features compatible.
    localStorage.setItem("prep2place-username", cleanUsername);
    localStorage.setItem("prep2place-role", userRole);

    setAuth({
      username: cleanUsername,
      role: userRole,
      isLoggedIn: true,
    });
  };

  // Logout Handler
  const handleLogout = () => {
    sessionStorage.removeItem("prep2place-username");
    sessionStorage.removeItem("prep2place-role");

    localStorage.removeItem("prep2place-username");
    localStorage.removeItem("prep2place-role");

    setAuth({
      username: "",
      role: "",
      isLoggedIn: false,
    });

    setSelectedCourse("");
    window.location.href = "/login";
  };

  // Student Protected Pages
  const protectedPage = (page) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    if (role === "admin") {
      return <Navigate to="/admin" replace />;
    }

    return page;
  };

  // Admin Protected Page
  const adminPage = (page) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    if (role !== "admin") {
      return <Navigate to="/home" replace />;
    }

    return page;
  };

  // Default Redirect
  const homeRedirect = () => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    return (
      <Navigate
        to={role === "admin" ? "/admin" : "/home"}
        replace
      />
    );
  };

  // Hide Navbar on Login and Register pages.
  const hideNavbar = ["/login", "/register"].includes(
    location.pathname
  );

  return (
    <>
      {isLoggedIn && !hideNavbar && (
        <Navbar onLogout={handleLogout} role={role} />
      )}

      <Routes>
        {/* Default Route */}
        <Route path="/" element={homeRedirect()} />

        {/* Login */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Student Home */}
        <Route
          path="/home"
          element={protectedPage(<Home username={username} />)}
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={protectedPage(
            <Courses setSelectedCourse={setSelectedCourse} />
          )}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={protectedPage(
            <Dashboard
              selectedCourse={selectedCourse}
              username={username}
              onLogout={handleLogout}
            />
          )}
        />

        {/* Preparation */}
        <Route
          path="/preparation"
          element={protectedPage(
            <Preparation selectedCourse={selectedCourse} />
          )}
        />

        {/* Planner */}
        <Route
          path="/planner"
          element={protectedPage(<Planner />)}
        />

        {/* Interview */}
        <Route
          path="/interview"
          element={protectedPage(<Interview />)}
        />

        {/* About */}
        <Route
          path="/about"
          element={protectedPage(<About />)}
        />

        {/* Aptitude */}
        <Route
          path="/aptitude"
          element={protectedPage(<Aptitude />)}
        />

        <Route
          path="/aptitude/:topic"
          element={protectedPage(<Aptitude />)}
        />

        {/* Aptitude Learning */}
        <Route
          path="/learn/:topic"
          element={protectedPage(<TopicLearning />)}
        />

        <Route
          path="/concept-check/:topic"
          element={protectedPage(<ConceptCheck />)}
        />

        {/* English */}
        <Route
          path="/english"
          element={protectedPage(<English />)}
        />

        <Route
          path="/english/:topic"
          element={protectedPage(<EnglishTopic />)}
        />

        {/* BCA Skill Arena */}
        <Route
          path="/skill-arena"
          element={protectedPage(<SkillArena />)}
        />

        <Route
          path="/skill-arena/concepts"
          element={protectedPage(<Concepts />)}
        />

        <Route
          path="/skill-arena/concepts/:language/:index"
          element={protectedPage(<ConceptLesson />)}
        />

        <Route
          path="/skill-arena/find-the-error"
          element={protectedPage(<FindTheError />)}
        />

        <Route
          path="/skill-arena/daily-puzzle"
          element={protectedPage(<DailyCodePuzzle />)}
        />

        <Route
          path="/skill-arena/quiz"
          element={protectedPage(<ProgrammingQuiz />)}
        />

        {/* BBA Skill Arena */}
        <Route
          path="/bba-skill-arena"
          element={protectedPage(<SkillArena />)}
        />

        <Route
          path="/bba-skill-arena/concepts"
          element={protectedPage(<Concepts />)}
        />

        <Route
          path="/bba-skill-arena/concepts/:topic"
          element={protectedPage(<BBALesson />)}
        />

        <Route
          path="/bba-skill-arena/case-study"
          element={protectedPage(<BusinessCaseStudy />)}
        />

        <Route
          path="/bba-skill-arena/business-tools"
          element={protectedPage(<BusinessTools />)}
        />

        <Route
          path="/bba-skill-arena/challenges"
          element={protectedPage(<BusinessChallenges />)}
        />

        {/* MCA Skill Arena */}
        <Route
          path="/mca-skill-arena"
          element={protectedPage(<SkillArena />)}
        />

        <Route
          path="/mca-skill-arena/advanced-coding"
          element={protectedPage(<MCASkillPage type="coding" />)}
        />

        <Route
          path="/mca-skill-arena/code-detective"
          element={protectedPage(<MCASkillPage type="debugging" />)}
        />

        <Route
          path="/mca-skill-arena/sql-mission"
          element={protectedPage(<MCASkillPage type="sql" />)}
        />

        <Route
          path="/mca-skill-arena/technical-quiz"
          element={protectedPage(<MCASkillPage type="quiz" />)}
        />

        {/* MBA Skill Arena */}
        <Route
          path="/mba-skill-arena"
          element={protectedPage(<SkillArena />)}
        />

        <Route
          path="/mba-skill-arena/marketing"
          element={protectedPage(<MBASkillPage type="marketing" />)}
        />

        <Route
          path="/mba-skill-arena/finance"
          element={protectedPage(<MBASkillPage type="finance" />)}
        />

        <Route
          path="/mba-skill-arena/leadership"
          element={protectedPage(<MBASkillPage type="leadership" />)}
        />

        <Route
          path="/mba-skill-arena/business-strategy"
          element={protectedPage(<MBASkillPage type="strategy" />)}
        />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={adminPage(<AdminPanel />)}
        />

        {/* Optional Skill Arena URL */}
        <Route
          path="/skill-arena/:course"
          element={protectedPage(<SkillArena />)}
        />

        {/* Unknown URLs */}
        <Route
          path="*"
          element={homeRedirect()}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
