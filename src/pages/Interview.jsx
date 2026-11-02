
import { useState } from "react";
import "../styles/Interview.css";

function Interview() {
  const [activeCategory, setActiveCategory] = useState("HR Questions");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = {
    "HR Questions": [
      {
        question: "Tell me about yourself.",
        answer:
          "Start with your name, education, key skills, projects and career goal. Keep your answer clear and around 1–2 minutes.",
      },
      {
        question: "What are your strengths?",
        answer:
          "Mention two or three relevant strengths, such as teamwork, communication or problem-solving. Give a short example.",
      },
      {
        question: "What is your weakness?",
        answer:
          "Choose a genuine area you are improving and explain the steps you are taking to improve it.",
      },
      {
        question: "Why should we hire you?",
        answer:
          "Connect your skills, willingness to learn and relevant experience with the needs of the role.",
      },
      {
        question: "Where do you see yourself in five years?",
        answer:
          "Explain how you want to develop your skills, take on more responsibility and contribute to the organisation.",
      },
      {
        question: "Why do you want to join our company?",
        answer:
          "Talk about the company's work, the role and how the opportunity matches your career goals.",
      },
    ],

    "Communication Tips": [
      {
        question: "How should you greet an interviewer?",
        answer:
          "Smile naturally, greet them politely and wait for instructions before sitting down.",
      },
      {
        question: "What should you do if you don't know an answer?",
        answer:
          "Stay calm, be honest and explain what you do know. If appropriate, describe how you would find the answer.",
      },
      {
        question: "How can you improve your confidence?",
        answer:
          "Practise answers aloud, record yourself, maintain comfortable eye contact and take a breath before answering.",
      },
      {
        question: "How should you answer questions?",
        answer:
          "Listen carefully, answer the question directly and use a short example when it helps explain your point.",
      },
    ],

    "Interview Preparation": [
      {
        question: "What should you research before an interview?",
        answer:
          "Learn about the company, job role, required skills and recent company updates.",
      },
      {
        question: "What should you carry to an interview?",
        answer:
          "Carry your updated resume, relevant documents, a notebook and a pen if required.",
      },
      {
        question: "What questions can you ask the interviewer?",
        answer:
          "You could ask about the role's responsibilities, training opportunities, team structure or expectations for the first few months.",
      },
      {
        question: "How should you end an interview?",
        answer:
          "Thank the interviewer for their time, express your interest in the role and ask politely about the next steps.",
      },
    ],
  };

  const questions = categories[activeCategory];

  return (
    <div className="interview-page">
      <section className="interview-hero">
        <span className="interview-tag">CAREER READINESS</span>
        <h1>Common Interview Preparation</h1>
        <p>
          Build confidence, improve communication and prepare for
          interviews with practical questions and tips.
        </p>
      </section>

      <section className="interview-intro">
        <div>
          <span className="interview-icon">🎯</span>
          <h2>Prepare. Practise. Perform.</h2>
          <p>
            These resources are useful for students from BCA, BBA,
            MBA and MCA.
          </p>
        </div>

        <div className="interview-count">
          <strong>
            {Object.values(categories).reduce(
              (total, items) => total + items.length,
              0
            )}
          </strong>
          <span>Practice Resources</span>
        </div>
      </section>

      <section className="interview-content">
        <h2>Explore Interview Resources</h2>
        <p className="interview-subtitle">
          Choose a category and open a question to view its guidance.
        </p>

        <div className="interview-tabs">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => {
                setActiveCategory(category);
                setOpenQuestion(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="interview-question-list">
          {questions.map((item, index) => (
            <div className="interview-question" key={item.question}>
              <button
                className="interview-question-button"
                onClick={() =>
                  setOpenQuestion(
                    openQuestion === index ? null : index
                  )
                }
              >
                <span>
                  <span className="interview-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </span>

                <span className="interview-chevron">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </button>

              {openQuestion === index && (
                <div className="interview-answer">
                  <strong>How to answer</strong>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="interview-reminder">
        <span>💡</span>
        <div>
          <h3>Remember</h3>
          <p>
            Use these answers as guidance, not scripts to memorise.
            Give honest answers and include your own examples.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Interview;
