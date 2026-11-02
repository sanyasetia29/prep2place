
import { useState } from "react";
import "../styles/ProgrammingQuiz.css";

const questions = [
  // C
  {
    language: "C",
    question: "Which symbol ends a statement in C?",
    options: [":", ";", ".", ","],
    answer: ";",
    explanation: "C statements generally end with a semicolon."
  },
  {
    language: "C",
    question: "Which function displays output in C?",
    options: ["scanf()", "main()", "printf()", "input()"],
    answer: "printf()",
    explanation: "printf() displays formatted output on the screen."
  },
  {
    language: "C",
    question: "Which format specifier is used for an int in printf()?",
    options: ["%f", "%c", "%s", "%d"],
    answer: "%d",
    explanation: "%d is commonly used to print an integer."
  },
  {
    language: "C",
    question: "What is the index of the first element in a C array?",
    options: ["1", "-1", "0", "2"],
    answer: "0",
    explanation: "C arrays use zero-based indexing."
  },
  {
    language: "C",
    question: "Which loop executes its body at least once?",
    options: ["for", "while", "do-while", "None of these"],
    answer: "do-while",
    explanation: "A do-while loop checks its condition after executing the body."
  },

  // C++
  {
    language: "C++",
    question: "Which operator is used with cout to display output?",
    options: [">>", "<<", "==", "&&"],
    answer: "<<",
    explanation: "The insertion operator << sends output to cout."
  },
  {
    language: "C++",
    question: "Which header is commonly used for cout and cin?",
    options: ["<stdio.h>", "<string.h>", "<iostream>", "<math.h>"],
    answer: "<iostream>",
    explanation: "<iostream> provides standard input and output stream objects."
  },
  {
    language: "C++",
    question: "Which keyword declares a class in C++?",
    options: ["structonly", "class", "define", "object"],
    answer: "class",
    explanation: "The class keyword defines a class in C++."
  },
  {
    language: "C++",
    question: "Which OOP concept allows one class to acquire another class's properties?",
    options: ["Inheritance", "Compilation", "Iteration", "Looping"],
    answer: "Inheritance",
    explanation: "Inheritance lets a derived class use accessible features of a base class."
  },
  {
    language: "C++",
    question: "What is the default access level for members of a C++ class?",
    options: ["public", "protected", "private", "global"],
    answer: "private",
    explanation: "Members of a class are private by default in C++."
  },

  // Java
  {
    language: "Java",
    question: "Which keyword declares a class in Java?",
    options: ["function", "class", "define", "newclass"],
    answer: "class",
    explanation: "The class keyword declares a class in Java."
  },
  {
    language: "Java",
    question: "Which method is the usual entry point of a Java application?",
    options: ["start()", "run()", "main()", "execute()"],
    answer: "main()",
    explanation: "A standard Java application starts execution from its main method."
  },
  {
    language: "Java",
    question: "Which data type stores true or false values in Java?",
    options: ["int", "String", "boolean", "double"],
    answer: "boolean",
    explanation: "The boolean type stores either true or false."
  },
  {
    language: "Java",
    question: "Which keyword creates an object in Java?",
    options: ["class", "this", "static", "new"],
    answer: "new",
    explanation: "The new keyword creates an object."
  },
  {
    language: "Java",
    question: "Which method returns the length of a Java String named name?",
    options: ["name.length", "name.length()", "name.size()", "length(name)"],
    answer: "name.length()",
    explanation: "Java String uses the length() method to return the number of characters."
  },

  // SQL
  {
    language: "SQL",
    question: "Which SQL command retrieves data from a table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: "SELECT",
    explanation: "SELECT retrieves data from one or more database tables."
  },
  {
    language: "SQL",
    question: "Which clause filters rows based on a condition?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
    answer: "WHERE",
    explanation: "WHERE selects rows that satisfy the specified condition."
  },
  {
    language: "SQL",
    question: "Which command adds a new row to a table?",
    options: ["INSERT INTO", "ADD ROW", "NEW DATA", "UPDATE"],
    answer: "INSERT INTO",
    explanation: "INSERT INTO adds new records to a database table."
  },
  {
    language: "SQL",
    question: "Which clause sorts query results?",
    options: ["WHERE", "VALUES", "ORDER BY", "SET"],
    answer: "ORDER BY",
    explanation: "ORDER BY sorts the returned rows in ascending or descending order."
  },
  {
    language: "SQL",
    question: "Which function counts rows in a query result?",
    options: ["SUM()", "COUNT()", "TOTALROW()", "NUMBER()"],
    answer: "COUNT()",
    explanation: "COUNT() returns the number of rows or non-NULL values, depending on its argument."
  },

  // HTML
  {
    language: "HTML",
    question: "What is the purpose of HTML?",
    options: [
      "Style a webpage",
      "Structure webpage content",
      "Store database records",
      "Manage server memory"
    ],
    answer: "Structure webpage content",
    explanation: "HTML defines the structure and meaning of webpage content."
  },
  {
    language: "HTML",
    question: "Which tag creates a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: "<a>",
    explanation: "The anchor tag <a> creates a hyperlink, usually with an href attribute."
  },
  {
    language: "HTML",
    question: "Which tag creates the largest standard heading?",
    options: ["<h6>", "<head>", "<heading>", "<h1>"],
    answer: "<h1>",
    explanation: "<h1> is the highest-level standard HTML heading."
  },
  {
    language: "HTML",
    question: "Which attribute provides alternative text for an image?",
    options: ["src", "alt", "href", "titleonly"],
    answer: "alt",
    explanation: "The alt attribute provides a text alternative for an image."
  },
  {
    language: "HTML",
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: "<ul>",
    explanation: "<ul> defines an unordered list; each item normally uses <li>."
  },

  // CSS
  {
    language: "CSS",
    question: "What is the main purpose of CSS?",
    options: [
      "Structure page content",
      "Style webpage elements",
      "Query a database",
      "Create Java classes"
    ],
    answer: "Style webpage elements",
    explanation: "CSS controls the presentation and layout of webpage elements."
  },
  {
    language: "CSS",
    question: "Which property changes text color?",
    options: ["font-style", "background", "color", "text-size"],
    answer: "color",
    explanation: "The color property sets the foreground color of text."
  },
  {
    language: "CSS",
    question: "Which selector targets an element with id=\"header\"?",
    options: [".header", "#header", "*header", "header#all"],
    answer: "#header",
    explanation: "A hash symbol followed by an ID selects the element with that ID."
  },
  {
    language: "CSS",
    question: "Which CSS layout system is designed for one-dimensional layouts?",
    options: ["Flexbox", "SQL Grid", "HTML Flow", "Database layout"],
    answer: "Flexbox",
    explanation: "Flexbox is designed to arrange items along one main axis."
  },
  {
    language: "CSS",
    question: "Which property adds space inside an element's border?",
    options: ["margin", "padding", "outline", "gap-only"],
    answer: "padding",
    explanation: "Padding is the space between an element's content and its border."
  },

  // JavaScript
  {
    language: "JavaScript",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "fixed", "define"],
    answer: "let",
    explanation: "let declares a block-scoped variable that can be reassigned."
  },
  {
    language: "JavaScript",
    question: "Which method adds an item to the end of an array?",
    options: ["pop()", "shift()", "push()", "join()"],
    answer: "push()",
    explanation: "push() adds one or more elements to the end of an array."
  },
  {
    language: "JavaScript",
    question: "Which operator checks strict equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    explanation: "=== compares values without converting their types."
  },
  {
    language: "JavaScript",
    question: "What does typeof \"Hello\" return?",
    options: ["text", "String", "string", "char"],
    answer: "string",
    explanation: "typeof returns the lowercase string \"string\" for a string value."
  },
  {
    language: "JavaScript",
    question: "Which array property returns the number of elements?",
    options: ["size", "count", "length", "total"],
    answer: "length",
    explanation: "The length property reports the number of elements in an array."
  },

  // React
  {
    language: "React",
    question: "What is React mainly used for?",
    options: [
      "Building user interfaces",
      "Managing SQL tables only",
      "Compiling C programs",
      "Designing computer hardware"
    ],
    answer: "Building user interfaces",
    explanation: "React is a JavaScript library for building user interfaces."
  },
  {
    language: "React",
    question: "What is a React component?",
    options: [
      "A reusable UI building block",
      "A database query",
      "A CSS property",
      "A Java compiler"
    ],
    answer: "A reusable UI building block",
    explanation: "Components let you split a user interface into reusable pieces."
  },
  {
    language: "React",
    question: "Which Hook is commonly used to add state to a function component?",
    options: ["useRoute()", "useState()", "useClass()", "useStyle()"],
    answer: "useState()",
    explanation: "useState() adds state to a function component."
  },
  {
    language: "React",
    question: "What are props used for in React?",
    options: [
      "Passing data to components",
      "Deleting the browser",
      "Writing SQL queries",
      "Changing Java data types"
    ],
    answer: "Passing data to components",
    explanation: "Props pass data from a parent component to a child component."
  },
  {
    language: "React",
    question: "Which syntax is commonly used to describe UI inside React JavaScript?",
    options: ["SQL", "JSX", "JVM", "XML query"],
    answer: "JSX",
    explanation: "JSX lets developers write HTML-like syntax in JavaScript to describe UI."
  }
];

export default function ProgrammingQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter(
    (question, index) => selected[index] === question.answer
  ).length;

  function restartQuiz() {
    setCurrent(0);
    setSelected({});
    setSubmitted(false);
  }

  const question = questions[current];
  const progress = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className="programming-quiz">
      <div className="quiz-header">
        <span className="quiz-tag">BCA • SKILL ARENA</span>
        <h1>Programming Quiz</h1>
        <p>
          Test your knowledge of C, C++, Java, SQL, HTML, CSS,
          JavaScript and React.
        </p>
        <p>{questions.length} questions · 8 technologies</p>
      </div>

      {!submitted ? (
        <div className="quiz-card">
          <div className="quiz-progress">
            <span>
              Question {current + 1} of {questions.length}
            </span>
            <span>{progress}%</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="quiz-tag">{question.language}</span>
          <h2>{question.question}</h2>

          <div className="quiz-options">
            {question.options.map((option) => (
              <button
                key={option}
                className={
                  selected[current] === option
                    ? "option selected"
                    : "option"
                }
                onClick={() =>
                  setSelected((previous) => ({
                    ...previous,
                    [current]: option
                  }))
                }
              >
                {option}
              </button>
            ))}
          </div>

          <div className="quiz-actions">
            <button
              className="previous-btn"
              disabled={current === 0}
              onClick={() => setCurrent((previous) => previous - 1)}
            >
              Previous
            </button>

            {current < questions.length - 1 ? (
              <button
                className="next-btn"
                onClick={() => setCurrent((previous) => previous + 1)}
              >
                Next Question →
              </button>
            ) : (
              <button
                className="next-btn"
                onClick={() => setSubmitted(true)}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="quiz-card result-card">
          <h2>Quiz Completed!</h2>

          <div className="score-circle">
            {score}/{questions.length}
          </div>

          <h3>
            {Math.round((score / questions.length) * 100)}% Score
          </h3>

          <p>
            {score >= 32
              ? "Excellent work! You have a strong foundation."
              : score >= 20
              ? "Good effort! Review the explanations and keep practising."
              : "Keep practising! Review each answer and try again."}
          </p>

          <h2 className="review-heading">Answer Review</h2>

          {questions.map((item, index) => {
            const isCorrect = selected[index] === item.answer;

            return (
              <div className="answer-review" key={`${item.language}-${index}`}>
                <h4>
                  {index + 1}. [{item.language}] {item.question}
                </h4>
                <p>
                  Your answer: {selected[index] || "Not answered"}
                </p>
                <p>Correct answer: {item.answer}</p>
                <small>{item.explanation}</small>
                <p>
                  <strong>{isCorrect ? "✓ Correct" : "✗ Review this answer"}</strong>
                </p>
              </div>
            );
          })}

          <button
            className="next-btn restart-btn"
            onClick={restartQuiz}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}