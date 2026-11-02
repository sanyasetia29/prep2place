import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BusinessChallenges.css";

const challenges = [
  {
    category: "Leadership",
    title: "Team Conflict",
    icon: "🤝",
    situation:
      "Two employees in your team disagree about how to complete an important project. Their argument is delaying the work.",
    question: "What should you do as the team leader?",
    options: [
      "Ignore the conflict",
      "Listen to both employees and help them find a solution",
      "Immediately remove both employees",
      "Cancel the entire project",
    ],
    answer: "Listen to both employees and help them find a solution",
    explanation:
      "A good leader listens to both sides, understands the problem and encourages teamwork to find a fair solution.",
  },
  {
    category: "Marketing",
    title: "New Product Launch",
    icon: "📢",
    situation:
      "Your company is launching a new water bottle. You have a limited advertising budget and want to reach college students.",
    question: "Which action is most suitable?",
    options: [
      "Advertise only in newspapers without researching customers",
      "Spend the entire budget on office decoration",
      "Use suitable social media platforms to reach college students",
      "Avoid advertising completely",
    ],
    answer: "Use suitable social media platforms to reach college students",
    explanation:
      "Choosing channels that your target customers use can help the company promote its product within a limited budget.",
  },
  {
    category: "Finance",
    title: "Limited Budget",
    icon: "💰",
    situation:
      "Your small business has ₹20,000 available. Rent and essential bills are due, but you also want to buy expensive office furniture.",
    question: "What should you prioritise?",
    options: [
      "Buy all the furniture first",
      "Spend the money on a party",
      "Ignore the bills until next month",
      "Pay essential expenses and plan the remaining budget",
    ],
    answer: "Pay essential expenses and plan the remaining budget",
    explanation:
      "A business should prioritise essential expenses and manage its cash carefully before making non-essential purchases.",
  },
  {
    category: "Human Resources",
    title: "Employee Performance",
    icon: "🎯",
    situation:
      "An employee has missed several deadlines. You discover that the employee is unsure about the assigned tasks and expectations.",
    question: "What is the best first step?",
    options: [
      "Explain the expectations clearly and offer guidance",
      "Dismiss the employee immediately",
      "Give the employee more confusing tasks",
      "Never discuss the problem",
    ],
    answer: "Explain the expectations clearly and offer guidance",
    explanation:
      "Clear instructions, feedback and support help employees understand their responsibilities and improve performance.",
  },
];

function BusinessChallenges() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const challenge = challenges[current];

  function checkAnswer() {
    if (!selected || submitted) return;

    if (selected === challenge.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    setSubmitted(true);
  }

  function nextChallenge() {
    if (current < challenges.length - 1) {
      setCurrent((previous) => previous + 1);
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
    setScore(0);
  }

  if (completed) {
    return (
      <main className="business-challenges-page">
        <section className="challenge-card challenge-completion">
          <div className="challenge-main-icon">🏆</div>
          <span className="challenge-tag">CHALLENGE COMPLETED</span>
          <h1>Great Work!</h1>
          <p>
            You have completed all {challenges.length} business challenges.
          </p>

          <div className="challenge-score">
            <span>Your Score</span>
            <strong>
              {score} / {challenges.length}
            </strong>
          </div>

          <p>
            {score === challenges.length
              ? "Excellent! You made the right decision in every challenge."
              : "Keep practising to improve your business decision-making skills."}
          </p>

          <button
            type="button"
            className="challenge-primary-button"
            onClick={startAgain}
          >
            Try Again
          </button>

          <Link
            className="challenge-back-link"
            to="/bba-skill-arena"
          >
            ← Back to BBA Skill Arena
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="business-challenges-page">
      <Link className="challenge-back-link" to="/bba-skill-arena">
        ← Back to BBA Skill Arena
      </Link>

      <header className="business-challenges-header">
        <span>BBA SKILL ARENA</span>
        <h1>Business Challenges</h1>
        <p>
          Think critically, make decisions and test your business skills
          through real-life situations.
        </p>
      </header>

      <section className="challenge-card">
        <div className="challenge-progress-row">
          <span>{challenge.category}</span>
          <span>
            Challenge {current + 1} of {challenges.length}
          </span>
        </div>

        <div className="challenge-progress-track">
          <div
            className="challenge-progress-fill"
            style={{
              width: `${((current + 1) / challenges.length) * 100}%`,
            }}
          />
        </div>

        <div className="challenge-main-icon">{challenge.icon}</div>

        <h2>{challenge.title}</h2>
        <p className="challenge-situation">{challenge.situation}</p>

        <h3>{challenge.question}</h3>

        <div className="challenge-options">
          {challenge.options.map((option) => (
            <button
              type="button"
              key={option}
              className={`challenge-option ${
                selected === option ? "chosen" : ""
              } ${
                submitted && option === challenge.answer
                  ? "right-answer"
                  : ""
              }`}
              onClick={() => {
                if (!submitted) setSelected(option);
              }}
              disabled={submitted}
            >
              {option}
              {submitted && option === challenge.answer && (
                <span> ✓</span>
              )}
            </button>
          ))}
        </div>

        {!submitted ? (
          <button
            type="button"
            className="challenge-primary-button"
            onClick={checkAnswer}
            disabled={!selected}
          >
            Submit Answer
          </button>
        ) : (
          <div
            className={`challenge-feedback ${
              selected === challenge.answer ? "feedback-correct" : "feedback-wrong"
            }`}
          >
            <h3>
              {selected === challenge.answer
                ? "Correct Decision! 🎉"
                : "Learn from this decision"}
            </h3>

            <p>
              <strong>Best choice:</strong> {challenge.answer}
            </p>

            <p>{challenge.explanation}</p>

            <button
              type="button"
              className="challenge-primary-button"
              onClick={nextChallenge}
            >
              {current === challenges.length - 1
                ? "Finish Challenges"
                : "Next Challenge →"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default BusinessChallenges;
