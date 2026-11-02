
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const questionSets = {
  percentage: [
    { question: "What does percentage mean?", options: ["Per ten", "Per hundred", "Per thousand", "Per one"], answer: "Per hundred" },
    { question: "What is 20% of 100?", options: ["10", "15", "20", "25"], answer: "20" },
    { question: "A student gets 40 marks out of 50. What is the percentage?", options: ["60%", "70%", "80%", "90%"], answer: "80%" },
    { question: "Which formula is used to calculate percentage?", options: ["(Part / Total) × 100", "(Total / Part) × 100", "Part + Total", "Part × Total"], answer: "(Part / Total) × 100" },
    { question: "What is 50% of 200?", options: ["50", "75", "100", "150"], answer: "100" },
  ],

  average: [
    { question: "What is the formula for calculating average?", options: ["Total × Number of values", "Total sum / Number of values", "Number of values / Total sum", "Total sum + Number of values"], answer: "Total sum / Number of values" },
    { question: "What is the average of 10, 20, and 30?", options: ["15", "20", "25", "30"], answer: "20" },
    { question: "The average of 5 numbers is 12. What is their total sum?", options: ["50", "55", "60", "65"], answer: "60" },
    { question: "The average of 4 numbers is 15. If 20 is added as a fifth number, what is the new average?", options: ["15", "16", "17", "18"], answer: "16" },
    { question: "The average age of 6 students is 14 years. What is their total age?", options: ["72 years", "78 years", "84 years", "90 years"], answer: "84 years" },
  ],

  "ratio & proportion": [
    { question: "What does a ratio compare?", options: ["Two quantities", "Only percentages", "Only fractions", "Two equations only"], answer: "Two quantities" },
    { question: "Simplify the ratio 12:18.", options: ["2:3", "3:2", "4:5", "6:9"], answer: "2:3" },
    { question: "Divide ₹500 in the ratio 2:3. What is the first share?", options: ["₹100", "₹200", "₹250", "₹300"], answer: "₹200" },
    { question: "If 4:5 = 20:x, what is the value of x?", options: ["15", "20", "25", "30"], answer: "25" },
    { question: "If 6 workers finish a job in 8 days, how many days will 12 workers take at the same rate?", options: ["2 days", "4 days", "8 days", "16 days"], answer: "4 days" },
  ],

  "profit & loss": [
    { question: "When does a seller make a profit?", options: ["Selling Price < Cost Price", "Selling Price > Cost Price", "Selling Price = Cost Price", "None of these"], answer: "Selling Price > Cost Price" },
    { question: "What is the formula for Profit?", options: ["CP - SP", "SP + CP", "SP - CP", "CP × SP"], answer: "SP - CP" },
    { question: "A product costs ₹500 and sells for ₹600. What is the profit?", options: ["₹50", "₹100", "₹150", "₹200"], answer: "₹100" },
    { question: "A product costs ₹800 and sells for ₹1,000. What is the profit percentage?", options: ["20%", "25%", "30%", "15%"], answer: "25%" },
    { question: "An item costs ₹400 and is sold for ₹320. Find the loss percentage.", options: ["10%", "15%", "20%", "25%"], answer: "20%" },
  ],

  "time & work": [
    { question: "If a person completes a work in 10 days, what is their one-day work?", options: ["1/5", "1/10", "1/15", "10"], answer: "1/10" },
    { question: "A can complete a work in 6 days. How much work does A complete in one day?", options: ["1/3", "1/6", "1/2", "6"], answer: "1/6" },
    { question: "A can finish a job in 10 days and B in 15 days. How long will they take together?", options: ["5 days", "6 days", "8 days", "12 days"], answer: "6 days" },
    { question: "If 5 workers complete a job in 12 days, how many days will 10 workers take?", options: ["4 days", "6 days", "8 days", "10 days"], answer: "6 days" },
    { question: "A completes a work in 8 days. B completes the same work in 4 days. Who works faster?", options: ["A", "B", "Both equally", "Cannot say"], answer: "B" },
  ],

  "time, speed & distance": [
    { question: "What is the formula for Speed?", options: ["Time ÷ Distance", "Distance ÷ Time", "Distance × Time", "Distance + Time"], answer: "Distance ÷ Time" },
    { question: "A car travels 120 km in 2 hours. What is its speed?", options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"], answer: "60 km/h" },
    { question: "How much time is needed to travel 150 km at 50 km/h?", options: ["2 hours", "3 hours", "4 hours", "5 hours"], answer: "3 hours" },
    { question: "Convert 36 km/h into metres per second.", options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"], answer: "10 m/s" },
    { question: "If distance remains the same and speed doubles, what happens to travel time?", options: ["It doubles", "It becomes half", "It remains the same", "It becomes four times"], answer: "It becomes half" },
  ],

  "simple & compound interest": [
    { question: "Find SI on ₹2,000 at 5% for 2 years.", options: ["₹100", "₹200", "₹300", "₹400"], answer: "₹200" },
    { question: "What is the formula for Simple Interest?", options: ["(P × R × T) / 100", "P + R + T", "P × R + T", "(P × T) / R"], answer: "(P × R × T) / 100" },
    { question: "Principal is ₹1,000 and SI is ₹200. Find amount.", options: ["₹800", "₹1,000", "₹1,200", "₹1,400"], answer: "₹1,200" },
    { question: "Convert 6 months into years.", options: ["2 years", "1/2 year", "1/3 year", "1 year"], answer: "1/2 year" },
    { question: "P = ₹1,000, SI = ₹200, T = 2 years. Find rate.", options: ["5%", "10%", "15%", "20%"], answer: "10%" },
  ],

  "number system": [
    { question: "Which of these is a natural number?", options: ["-2", "0", "5", "1.5"], answer: "5" },
    { question: "Which of these is a whole number?", options: ["-3", "-1", "0", "-5"], answer: "0" },
    { question: "Which of these is a prime number?", options: ["9", "15", "17", "21"], answer: "17" },
    { question: "Which of these is an irrational number?", options: ["1/2", "0.25", "√2", "4"], answer: "√2" },
    { question: "Is 234 divisible by 3?", options: ["Yes", "No", "Only by 2", "Cannot be determined"], answer: "Yes" },
  ],

  "hcf & lcm": [
    { question: "Find the HCF of 12 and 18.", options: ["2", "3", "6", "9"], answer: "6" },
    { question: "Find the LCM of 4 and 6.", options: ["8", "10", "12", "24"], answer: "12" },
    { question: "Find the HCF of 8 and 12.", options: ["2", "4", "6", "8"], answer: "4" },
    { question: "Find the LCM of 5 and 10.", options: ["5", "10", "15", "50"], answer: "10" },
    { question: "HCF is 3, LCM is 24, and one number is 6. Find the other number.", options: ["8", "10", "12", "18"], answer: "12" },
  ],

  probability: [
    { question: "What is the probability of getting a head on a fair coin?", options: ["0", "1/4", "1/2", "1"], answer: "1/2" },
    { question: "How many outcomes are possible when rolling one die?", options: ["4", "5", "6", "8"], answer: "6" },
    { question: "What is the probability of rolling an even number on a fair die?", options: ["1/6", "1/3", "1/2", "2/3"], answer: "1/2" },
    { question: "What is the probability of an impossible event?", options: ["0", "1/2", "1", "2"], answer: "0" },
    { question: "A standard deck has 52 cards. Find the probability of drawing a king.", options: ["1/4", "1/13", "1/26", "4/13"], answer: "1/13" },
  ],

  "mixture & alligation": [
    { question: "10 kg rice costs ₹20/kg and 10 kg costs ₹40/kg. Find the mean price.", options: ["₹20/kg", "₹25/kg", "₹30/kg", "₹40/kg"], answer: "₹30/kg" },
    { question: "In what ratio should ₹20/kg and ₹40/kg rice be mixed to get ₹30/kg?", options: ["1:2", "2:1", "1:1", "3:1"], answer: "1:1" },
    { question: "A mixture contains 3 litres of milk and 2 litres of water. Find the total quantity.", options: ["3 litres", "4 litres", "5 litres", "6 litres"], answer: "5 litres" },
    { question: "Mix 20% and 50% solutions to obtain a 30% solution. Find the ratio.", options: ["1:2", "2:1", "1:1", "3:2"], answer: "2:1" },
    { question: "A 10-litre container has 2 litres of milk removed and replaced with water. How much milk remains?", options: ["6 litres", "7 litres", "8 litres", "9 litres"], answer: "8 litres" },
  ],

  "permutation & combination": [
    { question: "Find 5 factorial (5!).", options: ["25", "60", "100", "120"], answer: "120" },
    { question: "In permutation, does order matter?", options: ["Yes", "No", "Never", "Only for zero"], answer: "Yes" },
    { question: "In how many ways can 2 students be selected from 5 students?", options: ["5", "10", "15", "20"], answer: "10" },
    { question: "In how many ways can 3 students be arranged from 5 students in 3 positions?", options: ["10", "20", "60", "120"], answer: "60" },
    { question: "In how many ways can 4 different books be arranged on a shelf?", options: ["8", "12", "16", "24"], answer: "24" },
  ],

  "data interpretation": [
    { question: "Sales are 120 units on Monday and 150 on Tuesday. Find total sales.", options: ["250", "260", "270", "280"], answer: "270" },
    { question: "A value increases from 200 to 250. Find the percentage increase.", options: ["20%", "25%", "30%", "50%"], answer: "25%" },
    { question: "A pie chart represents 200 students. How many are represented by a 90° sector?", options: ["25", "40", "50", "90"], answer: "50" },
    { question: "Production over 3 days is 100, 120 and 140 units. Find the average.", options: ["100", "110", "120", "130"], answer: "120" },
    { question: "A value decreases from 80 to 60. Find the percentage decrease.", options: ["20%", "25%", "30%", "40%"], answer: "25%" },
  ],
};

const normalizeTopic = (value = "") =>
  decodeURIComponent(value)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

const topicAliases = {
  "simple interest": "simple & compound interest",
  "compound interest": "simple & compound interest",
  "ratio and proportion": "ratio & proportion",
  "profit and loss": "profit & loss",
  "time speed distance": "time, speed & distance",
  "time, speed and distance": "time, speed & distance",
  "hcf and lcm": "hcf & lcm",
  "permutation and combination": "permutation & combination",
};

function ConceptCheck() {
  const { topic } = useParams();

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const topicKey = normalizeTopic(topic || "");
  const questionKey = topicAliases[topicKey] || topicKey;

  const username = String(
    localStorage.getItem("prep2place-username") || ""
  ).trim().toLowerCase();

  const completedKey = username
    ? `prep2place-completed-${username}`
    : null;

  const unlockKey = username
    ? `prep2place-unlocked-${username}-${topicKey}`
    : null;

  const questions = questionSets[questionKey] || [];
  const question = questions[current];
  const passed = score >= 4;

  const checkAnswer = () => {
    if (!selected || !question || finished) return;

    const newScore =
      score + (selected === question.answer ? 1 : 0);

    setScore(newScore);

    if (current === questions.length - 1) {
      setFinished(true);

      if (newScore >= 4 && username) {
        localStorage.setItem(unlockKey, "true");

        let completed = [];

        try {
          completed = JSON.parse(
            localStorage.getItem(completedKey) || "[]"
          );

          if (!Array.isArray(completed)) completed = [];
        } catch {
          completed = [];
        }

        if (!completed.includes(topicKey)) {
          completed.push(topicKey);
          localStorage.setItem(
            completedKey,
            JSON.stringify(completed)
          );
        }

        window.dispatchEvent(
          new Event("prep2place-progress-updated")
        );
      } else if (unlockKey) {
        localStorage.removeItem(unlockKey);
      }
    } else {
      setCurrent((previous) => previous + 1);
      setSelected("");
    }
  };

  const restartCheck = () => {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="concept-page">
      <style>{`
        .concept-page {
          --primary: #6651ad;
          --primary-dark: #49377f;
          --lavender: #f3f0ff;
          --text: #292443;
          --muted: #77738b;
          width: 100%;
          min-height: 82vh;
          padding: 55px 5%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          background: #f8f7fc;
          font-family: Inter, "Segoe UI", sans-serif;
        }

        .concept-card {
          width: 100%;
          max-width: 1050px;
          padding: 45px 55px;
          background: #fff;
          border: 1px solid #e9e5f5;
          border-radius: 22px;
          box-shadow: 0 15px 45px rgba(48, 38, 95, .08);
          box-sizing: border-box;
        }

        .concept-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 32px;
        }

        .concept-topic {
          color: var(--primary);
          background: var(--lavender);
          padding: 9px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        .concept-count {
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
        }

        .concept-progress {
          height: 7px;
          width: 100%;
          margin-bottom: 35px;
          overflow: hidden;
          border-radius: 20px;
          background: #eeebf6;
        }

        .concept-progress-fill {
          height: 100%;
          border-radius: 20px;
          background: linear-gradient(90deg, #6651ad, #a18ce2);
          transition: width .3s ease;
        }

        .concept-question-number {
          margin: 0 0 13px;
          color: var(--primary);
          font-size: 14px;
          font-weight: 700;
        }

        .concept-card h1 {
          margin: 0 0 16px;
          color: var(--text);
          font-size: 32px;
          line-height: 1.3;
        }

        .concept-card h2 {
          margin: 0 0 25px;
          color: var(--text);
          font-size: 23px;
          line-height: 1.55;
          font-weight: 650;
        }

        .concept-subtitle {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        .concept-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin: 30px 0;
        }

        .concept-option {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 68px;
          padding: 15px 18px;
          border: 1.5px solid #e7e3f0;
          border-radius: 13px;
          background: #fff;
          color: #39344f;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: all .2s ease;
        }

        .concept-option:hover {
          border-color: #9b89d5;
          background: #faf9ff;
          transform: translateY(-2px);
        }

        .concept-option.selected {
          border-color: var(--primary);
          background: #f3f0ff;
          color: var(--primary-dark);
          box-shadow: 0 0 0 2px rgba(102, 81, 173, .08);
        }

        .concept-option-letter {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #f0edf8;
          color: #6f6297;
          font-size: 13px;
          font-weight: 700;
        }

        .concept-option.selected .concept-option-letter {
          background: var(--primary);
          color: #fff;
        }

        .concept-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 30px;
        }

        .concept-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 13px 25px;
          border: 0;
          border-radius: 11px;
          background: linear-gradient(135deg, #6651ad, #8874ca);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all .2s ease;
        }

        .concept-btn:hover {
          background: linear-gradient(135deg, #4d3a8c, #725bb8);
          transform: translateY(-2px);
          box-shadow: 0 7px 18px rgba(102, 81, 173, .2);
        }

        .concept-btn:disabled {
          opacity: .45;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .concept-result {
          text-align: center;
          padding: 20px 10px;
        }

        .concept-result-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 82px;
          height: 82px;
          margin: 0 auto 24px;
          border-radius: 50%;
          background: #f0edff;
          color: var(--primary);
          font-size: 38px;
        }

        .concept-result h1 {
          font-size: 34px;
          margin-bottom: 12px;
        }

        .concept-result h2 {
          font-size: 22px;
          margin: 12px 0;
        }

        .concept-score {
          display: inline-block;
          margin: 22px 0;
          padding: 14px 28px;
          border: 1px solid #e8e2f7;
          border-radius: 13px;
          background: #f8f6ff;
          color: var(--primary-dark);
          font-size: 25px;
          font-weight: 800;
        }

        .concept-result-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 25px;
        }

        .concept-secondary {
          background: #f0edfa;
          color: var(--primary-dark);
        }

        .concept-secondary:hover {
          background: #e5dff6;
        }

        .concept-error {
          text-align: center;
          padding: 30px 10px;
        }

        .concept-error h1 {
          font-size: 28px;
        }

        @media (max-width: 700px) {
          .concept-page {
            min-height: 75vh;
            padding: 25px 4%;
          }

          .concept-card {
            padding: 27px 20px;
            border-radius: 16px;
          }

          .concept-top {
            margin-bottom: 23px;
          }

          .concept-card h1 {
            font-size: 26px;
          }

          .concept-card h2 {
            font-size: 19px;
          }

          .concept-options {
            grid-template-columns: 1fr;
            gap: 11px;
            margin: 22px 0;
          }

          .concept-option {
            min-height: 58px;
            padding: 12px;
            font-size: 14px;
          }

          .concept-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .concept-btn {
            width: 100%;
            box-sizing: border-box;
          }

          .concept-result h1 {
            font-size: 27px;
          }

          .concept-result-actions {
            flex-direction: column;
          }
        }
      `}</style>

      {!username ? (
        <div className="concept-card concept-error">
          <h1>Please log in first</h1>
          <p className="concept-subtitle">
            Log in to save your progress separately.
          </p>
          <Link to="/login" className="concept-btn">
            Login
          </Link>
        </div>
      ) : questions.length === 0 ? (
        <div className="concept-card concept-error">
          <h1>Topic not found</h1>
          <p className="concept-subtitle">
            No Concept Check questions are available for "{topic}".
          </p>
          <Link to="/aptitude" className="concept-btn">
            Back to Aptitude
          </Link>
        </div>
      ) : finished ? (
        <div className="concept-card">
          <div className="concept-result">
            <div className="concept-result-icon">
              {passed ? "✓" : "↻"}
            </div>

            {passed ? (
              <>
                <h1>Congratulations!</h1>
                <h2>You are allowed to take the main quiz!</h2>
                <p className="concept-subtitle">
                  Great work! You have successfully understood the concepts.
                </p>
                <div className="concept-score">
                  {score} / {questions.length}
                </div>
                <p className="concept-subtitle">
                  Your main quiz is now unlocked.
                </p>
                <div className="concept-result-actions">
                  <Link
                    to={`/aptitude/${encodeURIComponent(topicKey)}`}
                    className="concept-btn"
                  >
                    Start Main Quiz →
                  </Link>
                  <Link
                    to="/aptitude"
                    className="concept-btn concept-secondary"
                  >
                    Back to Aptitude
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1>Keep Learning!</h1>
                <h2>You didn't understand these concepts well enough yet.</h2>
                <p className="concept-subtitle">
                  Your score is {score}/{questions.length}. Please revise
                  the lesson carefully and try again.
                </p>
                <div className="concept-score">
                  {score} / {questions.length}
                </div>
                <div className="concept-result-actions">
                  <button
                    className="concept-btn"
                    onClick={restartCheck}
                  >
                    Try Again
                  </button>
                  <Link
                    to={`/learn/${encodeURIComponent(topicKey)}`}
                    className="concept-btn concept-secondary"
                  >
                    Revise Concepts
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="concept-card">
          <div className="concept-top">
            <span className="concept-topic">
              {topicKey} · Concept Check
            </span>
            <span className="concept-count">
              {current + 1} / {questions.length}
            </span>
          </div>

          <div className="concept-progress">
            <div
              className="concept-progress-fill"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <p className="concept-question-number">
            QUESTION {current + 1}
          </p>

          <h2>{question.question}</h2>

          <div className="concept-options">
            {question.options.map((option, index) => (
              <button
                key={option}
                className={`concept-option ${
                  selected === option ? "selected" : ""
                }`}
                onClick={() => setSelected(option)}
              >
                <span className="concept-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </button>
            ))}
          </div>

          <div className="concept-actions">
            <span className="concept-count">
              Select one correct answer
            </span>

            <button
              className="concept-btn"
              onClick={checkAnswer}
              disabled={!selected}
            >
              {current === questions.length - 1
                ? "Finish Concept Check"
                : "Next Question →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConceptCheck;
