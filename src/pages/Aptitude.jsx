
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import aptitudeData from "../data/aptitudeData.json";
import "../styles/Aptitude.css";
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";



function Aptitude() {
  const { topic } = useParams();

  const selectedTopic = decodeURIComponent(topic || "").trim();

  const normalizeTopic = (value) =>
    String(value || "").trim().toLowerCase();

  const username = String(
    localStorage.getItem("prep2place-username") || ""
  )
    .trim()
    .toLowerCase();

  const [backendQuestions, setBackendQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);

  const topics = [
    "Percentage",
    "Average",
    "Ratio & Proportion",
    "Profit & Loss",
    "Time & Work",
    "Time, Speed & Distance",
    "Simple & Compound Interest",
    "Number System",
    "HCF & LCM",
    "Probability",
    "Permutation & Combination",
    "Data Interpretation",
    "Mixture & Alligation",
  ];

  // Each student's quiz unlock is stored separately.
  const unlockKey = username
    ? `prep2place-unlocked-${username}-${normalizeTopic(
        selectedTopic
      )}`
    : null;

  const [isUnlocked, setIsUnlocked] = useState(() =>
    Boolean(
      username &&
        selectedTopic &&
        localStorage.getItem(unlockKey) === "true"
    )
  );

  // Load questions from backend.
  useEffect(() => {
    let cancelled = false;

    async function loadQuestions() {
      if (!selectedTopic) {
        setBackendQuestions([]);
        setLoadError("");
        setLoading(false);
        return;
      }

      setLoading(true);
      setLoadError("");

      try {
        const response = await fetch(
          `${API_BASE}/aptitude-questions?topic=${encodeURIComponent(
            selectedTopic
          )}`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to load questions."
          );
        }

        if (!cancelled) {
          const questions = Array.isArray(data.questions)
            ? data.questions
            : [];

          setBackendQuestions(questions);
        }
      } catch {
        if (!cancelled) {
          setBackendQuestions([]);
          setLoadError(
            "Backend questions could not be loaded. Showing saved practice questions instead."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadQuestions();

    return () => {
      cancelled = true;
    };
  }, [selectedTopic]);

  // Use backend questions first, then local JSON questions.
  const topicQuestions = selectedTopic
    ? (
        backendQuestions.length > 0
          ? backendQuestions
          : aptitudeData.filter(
              (item) =>
                normalizeTopic(item.topic) ===
                normalizeTopic(selectedTopic)
            )
      ).filter(
        (item) =>
          normalizeTopic(item.topic) ===
          normalizeTopic(selectedTopic)
      )
    : [];

  const question = topicQuestions[currentQuestion];

  // Reset the quiz when the selected topic or student changes.
  useEffect(() => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setTestCompleted(false);
    setSaveMessage("");

    setIsUnlocked(
      Boolean(
        username &&
          selectedTopic &&
          localStorage.getItem(unlockKey) === "true"
      )
    );
  }, [selectedTopic, username, unlockKey]);

  const checkAnswer = (option) => {
    if (selectedAnswer !== "" || !question) return;

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  // Save the completed quiz result to the backend.
  const saveQuizResult = async (
    finalScore,
    totalQuestions
  ) => {
    try {
      const savedUser = JSON.parse(
        localStorage.getItem("prep2place-user") || "null"
      );

      const studentUsername = String(
        savedUser?.username ||
          localStorage.getItem("prep2place-username") ||
          ""
      ).trim();

      const studentName = String(
        savedUser?.name || ""
      ).trim();

      const studentEmail = String(
        savedUser?.email || ""
      ).trim();

      if (
        !studentUsername ||
        studentUsername.toLowerCase() === "admin" ||
        savedUser?.role?.toLowerCase() === "admin"
      ) {
        setSaveMessage(
          "Result not saved. Please log in with your student account."
        );
        return;
      }

      const response = await fetch(
        `${API_BASE}/quiz-attempts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: studentUsername,
            studentName,
            studentEmail,
            topic: selectedTopic,
            score: Number(finalScore),
            totalQuestions: Number(totalQuestions),
          }),
        }
      );

      const data = await response.json();

      console.log("Quiz save status:", response.status);
      console.log("Quiz save response:", data);

      if (!response.ok || !data.success) {
        setSaveMessage(
          data.message || "Unable to save quiz result."
        );
        return;
      }

      setSaveMessage("Quiz result saved successfully!");
    } catch (error) {
      console.error("Quiz save error:", error);

      setSaveMessage(
        "Could not connect to the backend. Check that the server is running on port 5000."
      );
    }
  };

  const nextQuestion = async () => {
    if (!question || selectedAnswer === "") return;

    if (currentQuestion < topicQuestions.length - 1) {
      setSelectedAnswer("");
      setCurrentQuestion((previous) => previous + 1);
      return;
    }

    const totalQuestions = topicQuestions.length;

    const finalScore =
      score + (selectedAnswer === question.answer ? 1 : 0);

    setScore(finalScore);
    setTestCompleted(true);

    await saveQuizResult(finalScore, totalQuestions);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setTestCompleted(false);
    setSaveMessage("");
  };

  // Topic selection page.
  if (!selectedTopic) {
    return (
      <div className="aptitude-page">
        <h1>Aptitude Preparation</h1>

        <p>
          Choose a topic and learn its concepts before the quiz.
        </p>

        <div className="question-container">
          <div className="question-card">
            <h2>Choose a Topic</h2>

            <div className="options">
              {topics.map((item) => (
                <Link
                  key={item}
                  to={`/learn/${encodeURIComponent(item)}`}
                >
                  <button>{item}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Require login before taking the quiz.
  if (!username) {
    return (
      <div className="aptitude-page">
        <div className="question-container">
          <div className="question-card">
            <h1>Please Log In</h1>

            <p>
              Log in to access your personal quiz and save your
              preparation progress.
            </p>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Main quiz stays locked until this student passes the Concept Check.
  if (!isUnlocked) {
    return (
      <div className="aptitude-page">
        <div className="question-container">
          <div className="question-card">
            <h1>🔒 Main Quiz Locked</h1>
            <h2>{selectedTopic}</h2>

            <p>
              Learn this topic and pass the concept check to unlock
              the main quiz.
            </p>

            <div className="options">
              <Link
                to={`/learn/${encodeURIComponent(selectedTopic)}`}
              >
                <button>Learn Topic</button>
              </Link>

              <Link
                to={`/concept-check/${encodeURIComponent(
                  selectedTopic
                )}`}
              >
                <button>Take Concept Check</button>
              </Link>

              <Link to="/aptitude">
                <button>Choose Another Topic</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="aptitude-page">
        <div className="question-container">
          <div className="question-card">
            <h2>Loading {selectedTopic} questions...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (topicQuestions.length === 0) {
    return (
      <div className="aptitude-page">
        <div className="question-container">
          <div className="question-card">
            <h1>No Questions Found</h1>

            <p>
              No questions are available for {selectedTopic}.
            </p>

            {loadError && <p>{loadError}</p>}

            <Link to="/aptitude">
              <button>Back to Topics</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Quiz result analysis.
  if (testCompleted) {
    const totalQuestions = topicQuestions.length;
    const incorrect = totalQuestions - score;

    const accuracy = Math.round(
      (score / totalQuestions) * 100
    );

    let performance;
    let message;
    let recommendation;

    if (accuracy >= 80) {
      performance = "Excellent!";
      message =
        "You have a strong understanding of this topic.";
      recommendation =
        "Move to another topic and continue your preparation.";
    } else if (accuracy >= 50) {
      performance = "Good Effort!";
      message =
        "You understand some concepts, but there is room to improve.";
      recommendation =
        "Review the questions you answered incorrectly and practise again.";
    } else {
      performance = "Needs Improvement";
      message =
        "Revise the basic concepts before attempting the quiz again.";
      recommendation =
        "Visit the learning page, revise the formulas, and retake the quiz.";
    }

    return (
      <div className="aptitude-page">
        <div className="question-container">
          <div className="question-card">
            <h1>🎯 Quiz Completed!</h1>
            <h2>{selectedTopic} — Result Analysis</h2>

            <h2>
              Your Score: {score} / {totalQuestions}
            </h2>

            <p>
              Accuracy: <strong>{accuracy}%</strong>
            </p>

            <p>
              Correct Answers: <strong>{score}</strong>
            </p>

            <p>
              Incorrect Answers: <strong>{incorrect}</strong>
            </p>

            {saveMessage && (
              <p role="status">{saveMessage}</p>
            )}

            {loadError && <p>{loadError}</p>}

            <hr />

            <h2>{performance}</h2>
            <p>{message}</p>

            <div className="answer-result">
              <h3>Recommended Next Step</h3>
              <p>{recommendation}</p>
            </div>

            <div className="options">
              <button onClick={restartQuiz}>
                Retake Quiz
              </button>

              <Link
                to={`/learn/${encodeURIComponent(selectedTopic)}`}
              >
                <button>Revise Topic</button>
              </Link>

              <Link to="/aptitude">
                <button>Choose Another Topic</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active quiz.
  return (
    <div className="aptitude-page">
      <h1>{selectedTopic} Main Quiz</h1>

      <p>
        Practice questions and improve your placement skills.
      </p>

      {loadError && <p>{loadError}</p>}

      <div className="question-container">
        <div className="question-card">
          <p>
            Question {currentQuestion + 1} of{" "}
            {topicQuestions.length}
          </p>

          <p>Score: {score}</p>

          <h2>{question.question}</h2>

          <div className="options">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => checkAnswer(option)}
                disabled={selectedAnswer !== ""}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer !== "" && (
            <div className="answer-result">
              {selectedAnswer === question.answer ? (
                <h3>✅ Correct!</h3>
              ) : (
                <h3>❌ Incorrect!</h3>
              )}

              <p>
                Correct Answer:{" "}
                <strong>{question.answer}</strong>
              </p>

              <p>{question.explanation}</p>

              {selectedAnswer !== question.answer &&
                question.commonMistake && (
                  <p>
                    💡 Common Mistake:{" "}
                    {question.commonMistake}
                  </p>
                )}

              <button
                className="next-btn"
                onClick={nextQuestion}
              >
                {currentQuestion === topicQuestions.length - 1
                  ? "Finish Test"
                  : "Next Question →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Aptitude;
