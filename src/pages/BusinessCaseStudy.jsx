
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BusinessCaseStudy.css";

const caseStudies = [
  {
    category: "Marketing",
    title: "Falling Sales",
    story:
      "A clothing company notices that its sales have decreased over the last three months. Customers say that the designs are old and competitors are offering better products.",
    question: "What should the company do first?",
    options: [
      "Increase product prices immediately",
      "Understand customer needs and competitors",
      "Stop all advertisements",
      "Reduce product quality",
    ],
    answer: "Understand customer needs and competitors",
    explanation:
      "The company should understand customer preferences and study competitors before deciding on a new marketing strategy.",
  },
  {
    category: "Human Resources",
    title: "Employee Motivation",
    story:
      "A company has noticed that employees are losing interest in their work. Productivity is decreasing, and employees feel that their efforts are not appreciated.",
    question: "What is the best step for the manager?",
    options: [
      "Give employees more work without support",
      "Ignore employee complaints",
      "Recognize good work and provide growth opportunities",
      "Reduce everyone's salary",
    ],
    answer: "Recognize good work and provide growth opportunities",
    explanation:
      "Appreciation, feedback and opportunities to learn can improve employee motivation and productivity.",
  },
  {
    category: "Finance",
    title: "Business Budget",
    story:
      "A small business earns ₹50,000 in one month. Its total expenses for that month are ₹38,000.",
    question: "What is the business's profit for the month?",
    options: ["₹8,000", "₹12,000", "₹15,000", "₹18,000"],
    answer: "₹12,000",
    explanation:
      "Profit = Total Revenue − Total Expenses. Therefore, ₹50,000 − ₹38,000 = ₹12,000.",
  },
];

function BusinessCaseStudy() {
  const [current, setCurrent] = useState(0);/*current case*/
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const study = caseStudies[current];

  function checkAnswer() {
    if (selected) {
      setSubmitted(true);
    }
  }

  function nextCase() {
    if (current < caseStudies.length - 1) {
      setCurrent(current + 1);
      setSelected("");
      setSubmitted(false);
    } else {
      setCompleted(true);
    }
  }

  function startAgain() {
    setCurrent(0);
    setSelected("");
    setSubmitted(false);
    setCompleted(false);
  }

  // Completion screen after the last case study
  if (completed) {
    return (
      <main className="business-case-page">
        <section className="business-case-card completion-card">
          <div className="completion-icon">🎉</div>

          <span className="completion-tag">BBA SKILL ARENA</span>

          <h1>All Case Studies Completed!</h1>

          <p>
            Great job! You have completed all 3 business case studies.
            Keep practising your business knowledge and decision-making skills.
          </p>

          <button
            type="button"
            className="business-case-submit"
            onClick={startAgain}
          >
            Start Again
          </button>

          <Link className="business-case-back" to="/bba-skill-arena">
            ← Back to BBA Skill Arena
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="business-case-page">
      <Link className="business-case-back" to="/bba-skill-arena">
        ← Back to BBA Skill Arena
      </Link>

      <header className="business-case-header">
        <span>BBA SKILL ARENA</span>
        <h1>Business Case Study</h1>
        <p>
          Think like a business leader. Read each situation, analyse the
          problem and choose the best solution.
        </p>
      </header>

      <section className="business-case-card">
        <div className="business-case-meta">
          <span>{study.category}</span>
          <span>
            Case {current + 1} of {caseStudies.length}
          </span>
        </div>

        <h2>{study.title}</h2>

        <p className="business-case-story">{study.story}</p>

        <h3>{study.question}</h3>

        <div className="business-case-options">
          {study.options.map((option) => (
            <button
              key={option}
              type="button"
              className={`business-case-option ${
                selected === option ? "selected" : ""
              }`}
              onClick={() => {
                if (!submitted) {
                  setSelected(option);
                }
              }}
              disabled={submitted}
            >
              {option}
            </button>
          ))}
        </div>

        {!submitted ? (
          <button
            type="button"
            className="business-case-submit"
            onClick={checkAnswer}
            disabled={!selected}
          >
            Check Answer
          </button>
        ) : (
          <div
            className={`business-case-feedback ${
              selected === study.answer ? "correct" : "incorrect"
            }`}
          >
            <h3>
              {selected === study.answer
                ? "Correct answer! 🎉"
                : "Not quite! Try to learn from this case."}
            </h3>

            <p>
              <strong>Correct Answer:</strong> {study.answer}
            </p>

            <p>{study.explanation}</p>

            <button
              type="button"
              className="business-case-submit"
              onClick={nextCase}
            >
              {current === caseStudies.length - 1
                ? "Finish Case Studies"
                : "Next Case →"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default BusinessCaseStudy;
