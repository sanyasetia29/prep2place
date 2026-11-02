
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MBASkillPage.css";

const activities = {
  marketing: {
    title: "Marketing Master",
    subtitle: "Learn marketing and customer strategy",
    questions: [
      {
        question: "What is the main purpose of market research?",
        options: [
          "To understand customers and the market",
          "To increase office expenses",
          "To avoid customer feedback",
          "To reduce product quality",
        ],
        answer: "To understand customers and the market",
        explanation: "Market research helps businesses understand customer needs and market trends.",
      },
      {
        question: "What does the 4Ps marketing mix include?",
        options: [
          "Product, Price, Place, Promotion",
          "People, Profit, Plan, Process",
          "Product, Profit, People, Planning",
          "Price, Production, Profit, People",
        ],
        answer: "Product, Price, Place, Promotion",
        explanation: "The traditional marketing mix consists of Product, Price, Place and Promotion.",
      },
      {
        question: "What is the purpose of branding?",
        options: [
          "To identify and differentiate a business",
          "To remove customer service",
          "To increase production errors",
          "To avoid advertising",
        ],
        answer: "To identify and differentiate a business",
        explanation: "Branding helps customers recognise and distinguish a business or product.",
      },
    ],
  },

  finance: {
    title: "Finance Challenge",
    subtitle: "Practice financial decision-making",
    questions: [
      {
        question: "What is profit?",
        options: [
          "Revenue minus costs",
          "Costs minus revenue",
          "Total employee count",
          "Total inventory only",
        ],
        answer: "Revenue minus costs",
        explanation: "Profit is the amount remaining when costs are deducted from revenue.",
      },
      {
        question: "What is a budget used for?",
        options: [
          "Planning income and expenses",
          "Recording attendance only",
          "Designing advertisements",
          "Selecting a company logo",
        ],
        answer: "Planning income and expenses",
        explanation: "A budget helps plan and control expected income and spending.",
      },
      {
        question: "What does ROI stand for?",
        options: [
          "Return on Investment",
          "Rate of Inventory",
          "Revenue of Industry",
          "Record of Income",
        ],
        answer: "Return on Investment",
        explanation: "ROI measures the return earned relative to an investment's cost.",
      },
    ],
  },

  leadership: {
    title: "Leadership Lab",
    subtitle: "Develop teamwork and leadership skills",
    questions: [
      {
        question: "What should an effective leader do when a team faces a problem?",
        options: [
          "Listen and help the team find a solution",
          "Ignore the team",
          "Blame one person immediately",
          "Avoid making decisions",
        ],
        answer: "Listen and help the team find a solution",
        explanation: "Effective leaders listen, assess the situation and guide the team toward solutions.",
      },
      {
        question: "Which skill helps resolve workplace disagreements?",
        options: [
          "Active listening",
          "Ignoring everyone",
          "Avoiding communication",
          "Making assumptions",
        ],
        answer: "Active listening",
        explanation: "Active listening helps people understand different viewpoints and resolve conflicts.",
      },
      {
        question: "What is delegation?",
        options: [
          "Assigning tasks and responsibility to others",
          "Doing every task alone",
          "Avoiding all responsibility",
          "Cancelling team meetings",
        ],
        answer: "Assigning tasks and responsibility to others",
        explanation: "Delegation distributes work while the leader remains accountable for overall results.",
      },
    ],
  },

  strategy: {
    title: "Business Strategy",
    subtitle: "Practice planning and business decisions",
    questions: [
      {
        question: "What does SWOT analysis examine?",
        options: [
          "Strengths, Weaknesses, Opportunities, Threats",
          "Sales, Wages, Orders, Taxes",
          "Systems, Work, Output, Targets",
          "Staff, Wealth, Operations, Training",
        ],
        answer: "Strengths, Weaknesses, Opportunities, Threats",
        explanation: "SWOT analyses internal strengths and weaknesses and external opportunities and threats.",
      },
      {
        question: "Why do businesses set objectives?",
        options: [
          "To provide clear goals and direction",
          "To avoid planning",
          "To remove all competition",
          "To stop measuring performance",
        ],
        answer: "To provide clear goals and direction",
        explanation: "Objectives guide business decisions and help measure progress.",
      },
      {
        question: "What is a competitive advantage?",
        options: [
          "A factor that helps a business perform better than competitors",
          "A list of employee holidays",
          "A company's office address",
          "A record of daily attendance",
        ],
        answer: "A factor that helps a business perform better than competitors",
        explanation: "A competitive advantage helps a business offer greater value or perform better than rivals.",
      },
    ],
  },
};

function MBASkillPage({ type = "marketing" }) {
  const activity = activities[type] || activities.marketing;

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
    <main className="mba-activity-page">
      <header className="mba-activity-header">
        <Link to="/mba-skill-arena" className="mba-back">
          ← Back to MBA Skill Arena
        </Link>

        <span className="mba-label">PREP 2 PLACE • MBA</span>
        <h1>{activity.title}</h1>
        <p>{activity.subtitle}</p>
      </header>

      {!finished ? (
        <section className="mba-question-card">
          <div className="mba-progress">
            Question {current + 1} of {activity.questions.length}
          </div>

          <div className="mba-progress-track">
            <div
              className="mba-progress-fill"
              style={{
                width: `${((current + 1) / activity.questions.length) * 100}%`,
              }}
            />
          </div>

          <h2>{question.question}</h2>

          <div className="mba-options">
            {question.options.map((option) => (
              <button
                type="button"
                key={option}
                disabled={checked}
                className={`mba-option ${
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
            <div className="mba-explanation">
              <strong>
                {selected === question.answer ? "Correct!" : "Not quite!"}
              </strong>
              <p>{question.explanation}</p>
            </div>
          )}

          {!checked ? (
            <button
              type="button"
              className="mba-primary-btn"
              disabled={!selected}
              onClick={checkAnswer}
            >
              Check Answer
            </button>
          ) : (
            <button
              type="button"
              className="mba-primary-btn"
              onClick={nextQuestion}
            >
              {current === activity.questions.length - 1
                ? "View Result"
                : "Next Question →"}
            </button>
          )}
        </section>
      ) : (
        <section className="mba-result-card">
          <div className="mba-result-icon">🏆</div>
          <h2>Activity Completed!</h2>

          <p>
            Your score: <strong>{score} / {activity.questions.length}</strong>
          </p>

          <p>
            {score === activity.questions.length
              ? "Excellent! You answered every question correctly."
              : "Good effort! Review the explanations and try again."}
          </p>

          <button
            type="button"
            className="mba-primary-btn"
            onClick={restart}
          >
            Try Again
          </button>

          <Link to="/mba-skill-arena" className="mba-result-back">
            Back to Skill Arena
          </Link>
        </section>
      )}
    </main>
  );
}

export default MBASkillPage;
