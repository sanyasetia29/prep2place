
import { useEffect, useState } from "react";
import "../styles/AdminPanel.css";

const API_URL = "http://localhost:5000/api/admin";

function AdminPanel() {
  const [active, setActive] = useState("Dashboard");

  const [students, setStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState([]);

  const [studentsLoading, setStudentsLoading] = useState(false);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [attemptsLoading, setAttemptsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    topic: "Percentage",
    difficulty: "Easy",
    type: "MCQ",
    question: "",
    options: "",
    answer: "",
    explanation: "",
  };

  const [form, setForm] = useState(emptyForm);

  const courses = [
    { name: "BCA", description: "Computer Applications", color: "blue" },
    { name: "BBA", description: "Business Administration", color: "green" },
    { name: "MBA", description: "Management Studies", color: "orange" },
    { name: "MCA", description: "Computer Applications", color: "purple" },
  ];

  const adminHeaders = () => ({
    "Content-Type": "application/json",
    "x-admin-username":
      localStorage.getItem("prep2place-username") ||
      localStorage.getItem("adminUsername") ||
      localStorage.getItem("username") ||
      "",
  });

  const request = async (url, options = {}) => {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...adminHeaders(),
        ...(options.headers || {}),
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      throw new Error(
        data.message || `Request failed with status ${response.status}.`
      );
    }

    return data;
  };

  // Load registered students
  const loadStudents = async () => {
    setStudentsLoading(true);
    setError("");

    try {
      const data = await request(`${API_URL}/students`);
      setStudents(data.students || []);
    } catch (err) {
      setError(err.message || "Unable to load students.");
    } finally {
      setStudentsLoading(false);
    }
  };

  // Load questions: try the existing /questions route first.
  // If unavailable, try /aptitude-questions.
  const loadQuestions = async () => {
    setQuestionsLoading(true);
    setError("");

    try {
      let data;

      try {
        data = await request(`${API_URL}/questions`);
      } catch (firstError) {
        if (
          firstError.message.toLowerCase().includes("admin access") ||
          firstError.message.toLowerCase().includes("unauthorized") ||
          firstError.message.toLowerCase().includes("forbidden")
        ) {
          throw firstError;
        }

        data = await request(`${API_URL}/aptitude-questions`);
      }

      setQuestions(data.questions || []);
    } catch (err) {
      setError(err.message || "Unable to load questions.");
    } finally {
      setQuestionsLoading(false);
    }
  };

  // Load quiz attempts
  const loadQuizAttempts = async () => {
    setAttemptsLoading(true);
    setError("");

    try {
      const data = await request(`${API_URL}/quiz-attempts`);

      // Support either response format from the backend.
      setQuizAttempts(data.quizAttempts || data.attempts || []);
    } catch (err) {
      setError(err.message || "Unable to load quiz results.");
    } finally {
      setAttemptsLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
    loadQuestions();
    loadQuizAttempts();
  }, []);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const resetForm = () => {
    setForm({ ...emptyForm });
    setEditingId(null);
  };

  // Add or update question
  const handleQuestionSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const options = form.options
      .split("\n")
      .map((option) => option.trim())
      .filter(Boolean);

    if (!form.question.trim()) {
      setError("Please enter a question.");
      return;
    }

    if (options.length < 2) {
      setError("Please enter at least two options, one per line.");
      return;
    }

    if (!options.includes(form.answer.trim())) {
      setError("Answer must exactly match one of the options.");
      return;
    }

    const payload = {
      topic: form.topic,
      difficulty: form.difficulty,
      type: form.type,
      question: form.question.trim(),
      options,
      answer: form.answer.trim(),
      explanation: form.explanation.trim(),
    };

    try {
      const baseRoute = `${API_URL}/questions`;
      const url =
        editingId !== null
          ? `${baseRoute}/${editingId}`
          : baseRoute;

      const data = await request(url, {
        method: editingId !== null ? "PUT" : "POST",
        body: JSON.stringify(payload),
      });

      setSuccess(data.message || "Question saved successfully.");
      resetForm();
      await loadQuestions();
    } catch (err) {
      setError(err.message || "Unable to save question.");
    }
  };

  const handleEdit = (question) => {
    setEditingId(question.id ?? question._id);

    setForm({
      topic: question.topic || "Percentage",
      difficulty: question.difficulty || "Easy",
      type: question.type || "MCQ",
      question: question.question || "",
      options: (question.options || []).join("\n"),
      answer: String(question.answer ?? ""),
      explanation: question.explanation || "",
    });

    setError("");
    setSuccess("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this question?")) {
      return;
    }

    setError("");
    setSuccess("");

    try {
      const data = await request(`${API_URL}/questions/${id}`, {
        method: "DELETE",
      });

      if (editingId === id) resetForm();

      setSuccess(data.message || "Question deleted successfully.");
      await loadQuestions();
    } catch (err) {
      setError(err.message || "Unable to delete question.");
    }
  };

  const averageAccuracy = quizAttempts.length
    ? Math.round(
        quizAttempts.reduce(
          (total, attempt) => total + Number(attempt.accuracy || 0),
          0
        ) / quizAttempts.length
      )
    : 0;

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: "♙",
      color: "blue",
    },
    {
      title: "Total Courses",
      value: 4,
      icon: "▤",
      color: "green",
    },
    {
      title: "Aptitude Questions",
      value: questions.length,
      icon: "✎",
      color: "orange",
    },
    {
      title: "Quiz Attempts",
      value: quizAttempts.length,
      icon: "▥",
      color: "purple",
    },
  ];

  const menu = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Students", icon: "♙" },
    { name: "Courses", icon: "▤" },
    { name: "Aptitude Questions", icon: "✎" },
    { name: "Quiz Results", icon: "▥" },
  ];

  const openSection = (name) => {
    setActive(name);
    setError("");
    setSuccess("");

    if (name === "Students") loadStudents();
    if (name === "Aptitude Questions") loadQuestions();
    if (name === "Quiz Results") loadQuizAttempts();
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-brand-icon">P</div>
          <div>
            <h2>Prep 2 Place</h2>
            <p>ADMIN PANEL</p>
          </div>
        </div>

        <p className="admin-menu-label">MAIN MENU</p>

        <nav className="admin-menu">
          {menu.map((item) => (
            <button
              key={item.name}
              type="button"
              className={active === item.name ? "active" : ""}
              onClick={() => openSection(item.name)}
            >
              <span className="admin-menu-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <span className="admin-status-dot"></span>
          Placement Portal
          <p>Admin workspace</p>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p className="admin-breadcrumb">Workspace / {active}</p>
            <h1>{active}</h1>
            <p>Manage your placement preparation platform.</p>
          </div>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <p>Admin account</p>
            </div>
          </div>
        </header>

        {error && (
          <p role="alert" style={{ color: "#b42318", marginBottom: 16 }}>
            {error}
          </p>
        )}

        {success && (
          <p role="status" style={{ color: "#18794e", marginBottom: 16 }}>
            {success}
          </p>
        )}

        {active === "Dashboard" && (
          <>
            <section className="admin-welcome">
              <div>
                <span className="admin-eyebrow">ADMIN OVERVIEW</span>
                <h2>Welcome to your dashboard!</h2>
                <p>
                  Manage learning resources and placement preparation for
                  BCA, BBA, MBA and MCA students.
                </p>
              </div>
              <div className="admin-welcome-art">✦</div>
            </section>

            <section className="admin-section">
              <div className="admin-section-heading">
                <div>
                  <h2>Platform Overview</h2>
                  <p>Summary of your platform</p>
                </div>
              </div>

              <div className="admin-stats">
                {stats.map((stat) => (
                  <article className="admin-stat-card" key={stat.title}>
                    <div className={`admin-stat-icon ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <p>{stat.title}</p>
                    <h3>{stat.value}</h3>
                    <span>
                      {stat.title === "Total Students"
                        ? "Registered students"
                        : stat.title === "Total Courses"
                        ? "Available courses"
                        : stat.title === "Aptitude Questions"
                        ? "Questions in database"
                        : "Recorded quiz attempts"}
                    </span>
                  </article>
                ))}
              </div>
            </section>

            <section className="admin-section">
              <div className="admin-section-heading">
                <div>
                  <h2>Manage Courses</h2>
                  <p>Courses available on Prep 2 Place</p>
                </div>
                <span className="admin-count">4 courses</span>
              </div>

              <div className="admin-course-grid">
                {courses.map((course) => (
                  <article className="admin-course-card" key={course.name}>
                    <div className={`admin-course-icon ${course.color}`}>
                      {course.name}
                    </div>
                    <div>
                      <h3>{course.name}</h3>
                      <p>{course.description}</p>
                    </div>
                    <span className="admin-course-status">Listed</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="admin-section admin-quick-section">
              <div className="admin-section-heading">
                <div>
                  <h2>Quick Access</h2>
                  <p>Open a management section</p>
                </div>
              </div>

              <div className="admin-quick-actions">
                <button onClick={() => openSection("Students")}>
                  ♙ <span>View Students</span> →
                </button>
                <button onClick={() => openSection("Aptitude Questions")}>
                  ✎ <span>Aptitude Questions</span> →
                </button>
                <button onClick={() => openSection("Quiz Results")}>
                  ▥ <span>View Quiz Results</span> →
                </button>
              </div>
            </section>
          </>
        )}

        {active === "Students" && (
          <section className="admin-content-card">
            <div className="admin-section-heading">
              <div>
                <h2>Student Management</h2>
                <p>Registered student accounts</p>
              </div>
              <button onClick={loadStudents} disabled={studentsLoading}>
                {studentsLoading ? "Loading..." : "Refresh"}
              </button>
            </div>

            {studentsLoading && <p>Loading student records...</p>}

            {!studentsLoading && students.length === 0 && !error && (
              <p>No students registered yet.</p>
            )}

            {!studentsLoading && students.length > 0 && (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {["Name", "Username", "Email", "Course"].map(
                        (heading) => (
                          <th
                            key={heading}
                            style={{ textAlign: "left", padding: 12 }}
                          >
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.username || student.id}>
                        <td style={{ padding: 12 }}>{student.name}</td>
                        <td style={{ padding: 12 }}>{student.username}</td>
                        <td style={{ padding: 12 }}>{student.email}</td>
                        <td style={{ padding: 12 }}>
                          {student.course || "Not selected"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {active === "Courses" && (
          <section className="admin-content-card">
            <h2>Available Courses</h2>
            <p>These are the four courses supported by this platform.</p>

            <div className="admin-course-grid">
              {courses.map((course) => (
                <article className="admin-course-card" key={course.name}>
                  <div className={`admin-course-icon ${course.color}`}>
                    {course.name}
                  </div>
                  <div>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                  <span className="admin-course-status">Listed</span>
                </article>
              ))}
            </div>
          </section>
        )}

        {active === "Aptitude Questions" && (
          <section className="admin-content-card">
            <div className="admin-section-heading">
              <div>
                <h2>Aptitude Question Management</h2>
                <p>Add, edit, delete and manage aptitude MCQs.</p>
              </div>
              <button onClick={loadQuestions} disabled={questionsLoading}>
                {questionsLoading ? "Loading..." : "Refresh"}
              </button>
            </div>

            <form
              onSubmit={handleQuestionSubmit}
              style={{
                display: "grid",
                gap: 14,
                margin: "24px 0",
                maxWidth: 750,
              }}
            >
              <h3>{editingId !== null ? "Edit Question" : "Add New Question"}</h3>

              <label>
                Topic
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleFormChange}
                  required
                >
                  {[
                    "Percentage",
                    "Average",
                    "Profit and Loss",
                    "Simple Interest",
                    "Compound Interest",
                    "Ratio and Proportion",
                    "Time and Work",
                    "Speed, Time and Distance",
                  ].map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Difficulty
                <select
                  name="difficulty"
                  value={form.difficulty}
                  onChange={handleFormChange}
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </label>

              <label>
                Question type
                <select name="type" value={form.type} onChange={handleFormChange}>
                  <option value="MCQ">MCQ</option>
                </select>
              </label>

              <label>
                Question
                <textarea
                  name="question"
                  value={form.question}
                  onChange={handleFormChange}
                  placeholder="Enter the aptitude question"
                  rows={3}
                  required
                />
              </label>

              <label>
                Options (enter one option per line)
                <textarea
                  name="options"
                  value={form.options}
                  onChange={handleFormChange}
                  placeholder={"20\n30\n40\n50"}
                  rows={4}
                  required
                />
              </label>

              <label>
                Correct answer (must match one option)
                <input
                  name="answer"
                  value={form.answer}
                  onChange={handleFormChange}
                  placeholder="Enter correct answer"
                  required
                />
              </label>

              <label>
                Explanation
                <textarea
                  name="explanation"
                  value={form.explanation}
                  onChange={handleFormChange}
                  placeholder="Explain how to solve this question"
                  rows={3}
                  required
                />
              </label>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button type="submit">
                  {editingId !== null ? "Update Question" : "Add Question"}
                </button>
                {editingId !== null && (
                  <button type="button" onClick={resetForm}>
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            <hr />

            <h3 style={{ marginTop: 24 }}>
              Saved Questions ({questions.length})
            </h3>

            {questionsLoading && <p>Loading questions...</p>}

            {!questionsLoading && questions.length === 0 && !error && (
              <p>No aptitude questions added yet.</p>
            )}

            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              {questions.map((question) => (
                <article
                  key={question.id ?? question._id}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <p>
                    <strong>{question.topic}</strong> · {question.difficulty}
                  </p>
                  <h3>{question.question}</h3>
                  <ol type="A">
                    {(question.options || []).map((option, index) => (
                      <li key={`${question.id ?? question._id}-${index}`}>
                        {String(option)}
                      </li>
                    ))}
                  </ol>
                  <p>
                    <strong>Answer:</strong> {String(question.answer ?? "")}
                  </p>
                  <p>
                    <strong>Explanation:</strong> {question.explanation}
                  </p>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <button onClick={() => handleEdit(question)}>Edit</button>
                    <button
                      onClick={() =>
                        handleDelete(question.id ?? question._id)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {active === "Quiz Results" && (
          <section className="admin-content-card">
            <div className="admin-section-heading">
              <div>
                <h2>Quiz Results</h2>
                <p>View student scores and aptitude quiz performance.</p>
              </div>
              <button
                onClick={loadQuizAttempts}
                disabled={attemptsLoading}
              >
                {attemptsLoading ? "Loading..." : "Refresh Results"}
              </button>
            </div>

            <div className="admin-stats">
              <article className="admin-stat-card">
                <div className="admin-stat-icon purple">▥</div>
                <p>Total Attempts</p>
                <h3>{quizAttempts.length}</h3>
                <span>Recorded quiz submissions</span>
              </article>
              <article className="admin-stat-card">
                <div className="admin-stat-icon green">%</div>
                <p>Average Accuracy</p>
                <h3>{averageAccuracy}%</h3>
                <span>Across recorded attempts</span>
              </article>
            </div>

            {attemptsLoading && (
              <p style={{ marginTop: 20 }}>Loading quiz results...</p>
            )}

            {!attemptsLoading && quizAttempts.length === 0 && !error && (
              <p style={{ marginTop: 20 }}>
                No quiz attempts recorded yet. Complete a main aptitude quiz
                as a registered student first.
              </p>
            )}

            {!attemptsLoading && quizAttempts.length > 0 && (
              <div style={{ overflowX: "auto", marginTop: 24 }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: 850,
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Student Name",
                        "Email",
                        "Topic",
                        "Score",
                        "Accuracy",
                        "Attempt Date",
                      ].map((heading) => (
                        <th
                          key={heading}
                          style={{
                            textAlign: "left",
                            padding: 12,
                            borderBottom: "1px solid #e5e7eb",
                          }}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {quizAttempts.map((attempt, index) => (
                      <tr key={attempt.id ?? attempt._id ?? index}>
                        <td style={{ padding: 12 }}>
                          {attempt.studentName || "Student"}
                        </td>
                        <td style={{ padding: 12 }}>
                          {attempt.studentEmail || "—"}
                        </td>
                        <td style={{ padding: 12 }}>{attempt.topic}</td>
                        <td style={{ padding: 12, fontWeight: 600 }}>
                          {attempt.score}/{attempt.totalQuestions}
                        </td>
                        <td style={{ padding: 12 }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "5px 10px",
                              borderRadius: 20,
                              background:
                                Number(attempt.accuracy) >= 80
                                  ? "#dcfce7"
                                  : Number(attempt.accuracy) >= 50
                                  ? "#fef3c7"
                                  : "#fee2e2",
                              color:
                                Number(attempt.accuracy) >= 80
                                  ? "#166534"
                                  : Number(attempt.accuracy) >= 50
                                  ? "#92400e"
                                  : "#991b1b",
                              fontWeight: 600,
                            }}
                          >
                            {attempt.accuracy ??
                              (attempt.totalQuestions
                                ? Math.round(
                                    (Number(attempt.score || 0) /
                                      Number(attempt.totalQuestions)) *
                                      100
                                  )
                                : 0)}
                            %
                          </span>
                        </td>
                        <td style={{ padding: 12 }}>
                          {attempt.attemptedAt
                            ? new Date(attempt.attemptedAt).toLocaleString()
                            : "Not available"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default AdminPanel;
