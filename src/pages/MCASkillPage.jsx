
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MCASkillPage.css";

const activities = {
  coding: {
    title: "Advanced Coding",
    questions: [
      {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        answer: "Stack",
        explanation: "Stack follows Last In, First Out.",
      },
      {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
        answer: "O(log n)",
        explanation: "Binary search halves the search space in each step.",
      },
      {
        question: "Which keyword creates a class in Java?",
        options: ["function", "define", "class", "new"],
        answer: "class",
        explanation: "The class keyword declares a class in Java.",
      },
    ],
  },

  debugging: {
    title: "Code Detective",
    questions: [
      {
        question: "What is wrong with: int x = 'hello'; in Java?",
        options: [
          "Nothing",
          "Text is assigned to an int",
          "Missing variable name",
          "Missing semicolon",
        ],
        answer: "Text is assigned to an int",
        explanation: "An int variable cannot store a String value.",
      },
      {
        question: "Which operator checks strict equality in JavaScript?",
        options: ["=", "===", "=>", "+="],
        answer: "===",
        explanation: "The === operator compares value and type.",
      },
      {
        question: "Which loop can run forever if its condition never changes?",
        options: ["for", "while", "do...while", "All of these"],
        answer: "All of these",
        explanation: "Any loop can become infinite if its stopping condition is never reached.",
      },
    ],
  },

  sql: {
    title: "SQL Mission",
    questions: [
      {
        question: "Which SQL command retrieves data?",
        options: ["GET", "SELECT", "OPEN", "SHOWDATA"],
        answer: "SELECT",
        explanation: "SELECT retrieves data from a table.",
      },
      {
        question: "Which clause filters rows?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
        answer: "WHERE",
        explanation: "WHERE filters rows using a condition.",
      },
      {
        question: "Which SQL function counts rows?",
        options: ["SUM()", "COUNT()", "NUMBER()", "ROWS()"],
        answer: "COUNT()",
        explanation: "COUNT() counts rows matching the query.",
      },
    ],
  },

  quiz: {
    title: "Technical Quiz",
    questions: [
      {
        question: "Which component executes program instructions?",
        options: ["CPU", "Monitor", "Keyboard", "Printer"],
        answer: "CPU",
        explanation: "The CPU executes instructions and processes data.",
      },
      {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "SQL", "C"],
        answer: "CSS",
        explanation: "CSS controls the appearance and layout of web pages.",
      },
      {
        question: "Which protocol is commonly used to transfer web pages?",
        options: ["HTTP", "SMTP", "POP3", "SSH"],
        answer: "HTTP",
        explanation: "HTTP is used to transfer web resources.",
      },
    ],
  },
};

function MCASkillPage({ type = "coding" }) {
  const activity = activities[type] || activities.coding;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = activity.questions[current];

  function checkAnswer() {
    if (!selected || checked) return;
    setChecked(true);

    if (selected === question.answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (current < activity.questions.length - 1) {
      setCurrent((previous) => previous + 1);
      setSelected("");
      setChecked(false);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected("");
    setChecked(false);
    setScore(0);
    setFinished(false);
  }

  return (
    <main className="mca-activity-page">
      <header className="mca-activity-header">
        <Link to="/mca-skill-arena" className="mca-back">
          ← Back to MCA Skill Arena
        </Link>
        <span className="mca-label">PREP 2 PLACE • MCA</span>
        <h1>{activity.title}</h1>
        <p>Practice, check your answers and improve your skills.</p>
      </header>

      {!finished ? (
        <section className="mca-question-card">
          <div className="mca-progress">
            Question {current + 1} of {activity.questions.length}
          </div>

          <div className="mca-progress-track">
            <div
              className="mca-progress-fill"
              style={{
                width: `${((current + 1) / activity.questions.length) * 100}%`,
              }}
            />
          </div>

          <h2>{question.question}</h2>

          <div className="mca-options">
            {question.options.map((option) => (
              <button
                type="button"
                key={option}
                disabled={checked}
                className={`mca-option ${
                  selected === option ? "selected" : ""
                } ${
                  checked && option === question.answer ? "correct" : ""
                } ${
                  checked && selected === option && option !== question.answer
                    ? "wrong"
                    : ""
                }`}
                onClick={() => setSelected(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {checked && (
            <div className="mca-explanation">
              <strong>
                {selected === question.answer ? "Correct!" : "Not quite!"}
              </strong>
              <p>{question.explanation}</p>
            </div>
          )}

          {!checked ? (
            <button
              type="button"
              className="mca-primary-btn"
              disabled={!selected}
              onClick={checkAnswer}
            >
              Check Answer
            </button>
          ) : (
            <button
              type="button"
              className="mca-primary-btn"
              onClick={nextQuestion}
            >
              {current === activity.questions.length - 1
                ? "View Result"
                : "Next Question →"}
            </button>
          )}
        </section>
      ) : (
        <section className="mca-result-card">
          <div className="mca-result-icon">🏆</div>
          <h2>Activity Completed!</h2>
          <p>
            Your score: <strong>{score} / {activity.questions.length}</strong>
          </p>
          <p>
            {score === activity.questions.length
              ? "Excellent! You answered every question correctly."
              : "Good effort! Review the explanations and try again."}
          </p>
          <button className="mca-primary-btn" onClick={restart}>
            Try Again
          </button>
          <Link to="/mca-skill-arena" className="mca-result-back">
            Back to Skill Arena
          </Link>
        </section>
      )}
    </main>
  );
}

export default MCASkillPage;
