
import { useEffect, useState } from "react";
import "../styles/Planner.css";

const plans = [
  {
    days: 7,
    title: "7 Days Plan",
    description: "Quick placement revision",
  },
  {
    days: 30,
    title: "30 Days Plan",
    description: "One-month preparation",
  },
  {
    days: 180,
    title: "6 Months Plan",
    description: "Complete placement preparation",
  },
];

const courseActivities = {
  BCA: [
    "Revise Computer Fundamentals",
    "Practice C Programming",
    "Study Data Structures and Algorithms",
    "Learn DBMS concepts and SQL queries",
    "Revise Object-Oriented Programming",
    "Practice HTML, CSS and JavaScript",
    "Solve coding problems",
    "Prepare technical interview questions",
    "Practice aptitude and logical reasoning",
    "Revise Operating System concepts",
    "Study Computer Networks",
    "Build or improve a mini project",
  ],

  BBA: [
    "Study Principles of Management",
    "Revise Marketing Management concepts",
    "Learn Human Resource Management",
    "Practice Business Communication",
    "Study Financial Accounting basics",
    "Learn Business Economics concepts",
    "Practice Excel and business tools",
    "Solve a business case study",
    "Revise Organizational Behaviour",
    "Practice aptitude and logical reasoning",
    "Prepare group discussion topics",
    "Practice HR interview questions",
  ],

  MBA: [
    "Study Strategic Management",
    "Revise Marketing Strategy concepts",
    "Practice Financial Analysis",
    "Study Operations Management",
    "Learn Human Resource and Leadership concepts",
    "Practice Business Analytics",
    "Analyse a real business case study",
    "Prepare a business presentation",
    "Study Business Economics",
    "Practice aptitude and reasoning",
    "Prepare management interview questions",
    "Revise leadership and decision-making concepts",
  ],

  MCA: [
    "Practice Advanced Programming concepts",
    "Practice Java or Python programming",
    "Study Data Structures and Algorithms",
    "Revise DBMS and SQL queries",
    "Study Operating System concepts",
    "Learn Computer Networks",
    "Revise Software Engineering",
    "Practice Web or Application Development",
    "Solve advanced coding problems",
    "Study Object-Oriented Programming",
    "Prepare technical interview questions",
    "Work on a software development project",
  ],
};

function getUsername() {
  return String(
    localStorage.getItem("prep2place-username") || "guest"
  )
    .trim()
    .toLowerCase();
}

function getCourse() {
  return String(
    localStorage.getItem("prep2place-course") || ""
  )
    .trim()
    .toUpperCase();
}

function getStorageKey(username, course) {
  return `prep2place-planner-${username}-${course}`;
}

function getInitialData(username, course) {
  try {
    const saved = localStorage.getItem(
      getStorageKey(username, course)
    );

    return saved
      ? JSON.parse(saved)
      : { selectedPlan: 7, completedTasks: {} };
  } catch {
    return { selectedPlan: 7, completedTasks: {} };
  }
}

function Planner() {
  const [username, setUsername] = useState(getUsername);
  const [course, setCourse] = useState(getCourse);

  const [savedData, setSavedData] = useState(() =>
    getInitialData(getUsername(), getCourse())
  );

  const storageKey = getStorageKey(username, course);

  // Detect login, logout or a change of student/course.
  useEffect(() => {
    const checkUser = () => {
      const currentUsername = getUsername();
      const currentCourse = getCourse();

      if (
        currentUsername !== username ||
        currentCourse !== course
      ) {
        setUsername(currentUsername);
        setCourse(currentCourse);
        setSavedData(
          getInitialData(currentUsername, currentCourse)
        );
      }
    };

    window.addEventListener("storage", checkUser);
    window.addEventListener("prep2place-user-changed", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener(
        "prep2place-user-changed",
        checkUser
      );
    };
  }, [username, course]);

  const selectedPlan = [7, 30, 180].includes(
    Number(savedData.selectedPlan)
  )
    ? Number(savedData.selectedPlan)
    : 7;

  const completedTasks = savedData.completedTasks || {};

  // Save progress separately for each student and course.
  useEffect(() => {
    if (
      username !== "guest" &&
      ["BCA", "BBA", "MBA", "MCA"].includes(course)
    ) {
      localStorage.setItem(storageKey, JSON.stringify(savedData));
      window.dispatchEvent(
        new Event("prep2place-planner-updated")
      );
    }
  }, [savedData, storageKey, username, course]);

  const activities = courseActivities[course] || [];

  const tasks = activities.length
    ? Array.from({ length: selectedPlan }, (_, index) => {
        const activity = activities[index % activities.length];
        return `Day ${index + 1}: ${activity}`;
      })
    : [];

  const completedCount = tasks.filter(
    (_, index) =>
      completedTasks[`${selectedPlan}-${index}`] === true
  ).length;

  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  function handlePlanChange(days) {
    setSavedData((previous) => ({
      ...previous,
      selectedPlan: Number(days),
    }));
  }

  function handleTaskChange(index) {
    const taskKey = `${selectedPlan}-${index}`;

    setSavedData((previous) => ({
      ...previous,
      completedTasks: {
        ...(previous.completedTasks || {}),
        [taskKey]: !(previous.completedTasks || {})[taskKey],
      },
    }));
  }

  // Ask students to log in before showing their personal plan.
  if (username === "guest") {
    return (
      <div className="planner-page">
        <header className="planner-heading">
          <span className="planner-tag">
            YOUR PLACEMENT JOURNEY
          </span>
          <h1>My Study Planner</h1>
          <p>Please log in to view your personal study planner.</p>
        </header>
      </div>
    );
  }

  // Do not show a generic or incorrect plan if course is missing.
  if (!["BCA", "BBA", "MBA", "MCA"].includes(course)) {
    return (
      <div className="planner-page">
        <header className="planner-heading">
          <span className="planner-tag">
            YOUR PLACEMENT JOURNEY
          </span>
          <h1>My Study Planner</h1>
          <p>
            Your course information was not found. Please log out
            and log in again. If the issue continues, your course
            may be missing from your registered account.
          </p>
          <span className="planner-user">
            Logged in as: {username}
          </span>
        </header>
      </div>
    );
  }

  return (
    <div className="planner-page">
      <header className="planner-heading">
        <span className="planner-tag">
          YOUR PLACEMENT JOURNEY
        </span>

        <h1>My Study Planner</h1>

        <p>
          Follow your course-specific targets and track your
          placement preparation progress.
        </p>

        <span className="planner-user">
          Logged in as: {username}
        </span>

        <span className="planner-user">
          Course: {course}
        </span>
      </header>

      <section className="planner-options">
        {plans.map((plan) => (
          <button
            key={plan.days}
            type="button"
            className={`planner-option ${
              selectedPlan === plan.days ? "active" : ""
            }`}
            onClick={() => handlePlanChange(plan.days)}
          >
            <span className="planner-option-icon">📅</span>
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
            <span>{plan.days} days</span>
          </button>
        ))}
      </section>

      <section className="planner-progress">
        <div className="planner-progress-info">
          <div>
            <h2>
              {plans.find(
                (plan) => plan.days === selectedPlan
              ).title}
            </h2>
            <p>
              {completedCount} of {tasks.length} tasks completed
            </p>
          </div>

          <strong>{progress}%</strong>
        </div>

        <div className="planner-progress-track">
          <div
            className="planner-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      <section className="planner-tasks">
        <div className="planner-tasks-heading">
          <h2>Daily Targets</h2>
          <span>{tasks.length} Days</span>
        </div>

        <p>
          These targets are designed for your {course} course.
          Mark each task complete after finishing it.
        </p>

        <div className="planner-task-list">
          {tasks.map((task, index) => {
            const taskKey = `${selectedPlan}-${index}`;
            const isComplete =
              completedTasks[taskKey] === true;

            return (
              <label
                key={taskKey}
                className={`planner-task ${
                  isComplete ? "completed" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={isComplete}
                  onChange={() => handleTaskChange(index)}
                />

                <span className="planner-task-text">
                  {task}
                </span>

                <span className="planner-task-status">
                  {isComplete ? "Completed" : "Pending"}
                </span>
              </label>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Planner;
