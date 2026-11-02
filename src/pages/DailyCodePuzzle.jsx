
import { useEffect, useState } from "react";
import "../styles/DailyCodePuzzle.css";

const puzzles = [
  // C
  {
    language: "C",
    level: "Easy",
    title: "Print a Number",
    question: "What will this code print?",
    code: `#include <stdio.h>

int main() {
    printf("%d", 10);
    return 0;
}`,
    answer: "10",
    hint: "Check the value inside printf.",
    explanation: "The %d format specifier prints an integer. The value passed is 10."
  },
  {
    language: "C",
    level: "Medium",
    title: "Increment Operator",
    question: "What is the output?",
    code: `#include <stdio.h>

int main() {
    int x = 5;
    x++;
    printf("%d", x);
    return 0;
}`,
    answer: "6",
    hint: "The ++ operator increases the value by one.",
    explanation: "x starts at 5. After x++, its value becomes 6."
  },
  {
    language: "C",
    level: "Hard",
    title: "Loop Sum",
    question: "What is printed?",
    code: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 4; i++) {
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
    answer: "10",
    hint: "Add the values of i during every loop iteration.",
    explanation: "The loop adds 1 + 2 + 3 + 4, giving 10."
  },

  // C++
  {
    language: "C++",
    level: "Easy",
    title: "Addition",
    question: "What is the output?",
    code: `#include <iostream>
using namespace std;

int main() {
    cout << 7 + 3;
    return 0;
}`,
    answer: "10",
    hint: "The + operator adds two numbers.",
    explanation: "7 + 3 equals 10, which is printed by cout."
  },
  {
    language: "C++",
    level: "Medium",
    title: "Array Access",
    question: "What is printed?",
    code: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {10, 20, 30};
    cout << nums[1];
    return 0;
}`,
    answer: "20",
    hint: "Array indexing starts at zero.",
    explanation: "nums[0] is 10 and nums[1] is 20."
  },
  {
    language: "C++",
    level: "Hard",
    title: "Function Result",
    question: "What is the output?",
    code: `#include <iostream>
using namespace std;

int square(int n) {
    return n * n;
}

int main() {
    cout << square(4);
    return 0;
}`,
    answer: "16",
    hint: "The function multiplies its argument by itself.",
    explanation: "square(4) returns 4 * 4, which is 16."
  },

  // Java
  {
    language: "Java",
    level: "Easy",
    title: "Print Text",
    question: "What will this program print?",
    code: `class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`,
    answer: "Hello",
    hint: "Look at the text inside the quotation marks.",
    explanation: "System.out.println prints Hello and moves to a new line."
  },
  {
    language: "Java",
    level: "Medium",
    title: "If Condition",
    question: "What is the output?",
    code: `class Main {
    public static void main(String[] args) {
        int age = 20;
        if (age >= 18) {
            System.out.println("Eligible");
        } else {
            System.out.println("Not Eligible");
        }
    }
}`,
    answer: "Eligible",
    hint: "Check whether 20 is at least 18.",
    explanation: "The condition is true, so Eligible is printed."
  },
  {
    language: "Java",
    level: "Hard",
    title: "Array Length",
    question: "What is the output?",
    code: `class Main {
    public static void main(String[] args) {
        int[] values = {2, 4, 6, 8};
        System.out.println(values.length);
    }
}`,
    answer: "4",
    hint: "Count the elements in the array.",
    explanation: "The array contains four elements, so values.length is 4."
  },

  // SQL
  {
    language: "SQL",
    level: "Easy",
    title: "Select All Rows",
    question: "What does this query retrieve?",
    code: `SELECT * FROM Students;`,
    answer: "All columns from Students",
    hint: "The asterisk represents every column.",
    explanation: "SELECT * retrieves all columns from the Students table. The query returns its rows."
  },
  {
    language: "SQL",
    level: "Medium",
    title: "Filter Students",
    question: "Which student's row is returned?",
    code: `SELECT name
FROM Students
WHERE marks = 90;`,
    answer: "Students with marks 90",
    hint: "Look at the condition after WHERE.",
    explanation: "The WHERE clause filters rows to those whose marks equal 90. The query returns their names."
  },
  {
    language: "SQL",
    level: "Hard",
    title: "Count Records",
    question: "What does this query return?",
    code: `SELECT COUNT(*)
FROM Students;`,
    answer: "Number of rows",
    hint: "COUNT is an aggregate function.",
    explanation: "COUNT(*) returns the number of rows in the Students table."
  },
  // HTML
  {
    language: "HTML",
    level: "Easy",
    title: "Heading Tag",
    question: "Which text appears as the main heading?",
    code: `<h1>Welcome</h1>`,
    answer: "Welcome",
    hint: "Text appears between the opening and closing tags.",
    explanation: "The h1 element displays Welcome as a level-one heading."
  },
  {
    language: "HTML",
    level: "Medium",
    title: "Create a Link",
    question: "What is the purpose of this HTML?",
    code: `<a href="https://example.com">Visit</a>`,
    answer: "Creates a link",
    hint: "The a element is used for hyperlinks.",
    explanation: "The anchor element creates a clickable link. Its href attribute specifies the destination."
  },
  {
    language: "HTML",
    level: "Hard",
    title: "Form Input",
    question: "What type of input is created?",
    code: `<input type="email" />`,
    answer: "Email input",
    hint: "Read the value of the type attribute.",
    explanation: "The email input is designed for entering an email address and may receive browser validation."
  },

  // CSS
  {
    language: "CSS",
    level: "Easy",
    title: "Text Color",
    question: "What color will the paragraph text be?",
    code: `p {
    color: red;
}`,
    answer: "Red",
    hint: "The color property controls text color.",
    explanation: "The CSS color property sets the paragraph text color to red."
  },
  {
    language: "CSS",
    level: "Medium",
    title: "Center Text",
    question: "How is the text aligned?",
    code: `.title {
    text-align: center;
}`,
    answer: "Center",
    hint: "Check the value of text-align.",
    explanation: "text-align: center centers inline content such as text within its block."
  },
  {
    language: "CSS",
    level: "Hard",
    title: "Flexbox Layout",
    question: "What does this rule do?",
    code: `.container {
    display: flex;
    justify-content: center;
}`,
    answer: "Centers items horizontally",
    hint: "In the default row direction, justify-content controls the main axis.",
    explanation: "With the default flex-direction: row, justify-content: center centers items along the horizontal main axis."
  },

  // JavaScript
  {
    language: "JavaScript",
    level: "Easy",
    title: "Print a Number",
    question: "What is the output?",
    code: `let x = 5;
console.log(x);`,
    answer: "5",
    hint: "Check the value stored in x.",
    explanation: "x stores 5, so console.log prints 5."
  },
  {
    language: "JavaScript",
    level: "Medium",
    title: "Array Access",
    question: "What is printed?",
    code: `let fruits = ["Apple", "Mango", "Grapes"];
console.log(fruits[1]);`,
    answer: "Mango",
    hint: "The first array index is zero.",
    explanation: "Index 0 contains Apple and index 1 contains Mango."
  },
  {
    language: "JavaScript",
    level: "Hard",
    title: "Function Return",
    question: "What is the output?",
    code: `function add(a, b) {
    return a + b;
}

console.log(add(4, 6));`,
    answer: "10",
    hint: "Substitute the arguments into the function.",
    explanation: "The function returns 4 + 6, which is 10."
  },

  // React
  {
    language: "React",
    level: "Easy",
    title: "JSX Heading",
    question: "What text will this component display?",
    code: `function App() {
    return <h1>Hello React</h1>;
}`,
    answer: "Hello React",
    hint: "Read the text inside the h1 element.",
    explanation: "The component returns an h1 element containing Hello React."
  },
  {
    language: "React",
    level: "Medium",
    title: "Props",
    question: "What will the component display?",
    code: `function Greeting({ name }) {
    return <p>Hello {name}</p>;
}

// Rendered as:
<Greeting name="Sam" />`,
    answer: "Hello Sam",
    hint: "The name prop is passed the value Sam.",
    explanation: "The component receives name as Sam and inserts it into the paragraph."
  },
  {
    language: "React",
    level: "Hard",
    title: "State Update",
    question: "What number is displayed after clicking the button once?",
    code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
    {count}
</button>`,
    answer: "1",
    hint: "The initial count is zero and the click handler adds one.",
    explanation: "The state starts at 0. Clicking the button calls setCount with count + 1, so the displayed count becomes 1. This snippet assumes useState has been imported and the code is inside a component."
  }
];

function getTodayPuzzle() {
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const start = new Date(2026, 0, 1);

  const dayNumber = Math.floor(
    (today - start) / (1000 * 60 * 60 * 24)
  );

  const index = ((dayNumber % puzzles.length) + puzzles.length) % puzzles.length;

  return {
    day: index + 1,
    puzzle: puzzles[index]
  };
}

export default function DailyCodePuzzle() {
  const { day, puzzle } = getTodayPuzzle();

  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [level, setLevel] = useState("All");
  const [language, setLanguage] = useState("All");
  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (submitted) return;

    const updateElapsed = () => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    };

    updateElapsed();

    const timer = setInterval(updateElapsed, 1000);
    return () => clearInterval(timer);
  }, [submitted, startTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const normalize = (value) =>
    String(value).trim().replace(/\s+/g, " ").toLowerCase();

  const isCorrect = normalize(answer) === normalize(puzzle.answer);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answer.trim() || submitted) return;

    setElapsed(Math.floor((Date.now() - startTime) / 1000));
    setSubmitted(true);
  };

  const resetPuzzle = () => {
    setAnswer("");
    setSubmitted(false);
    setShowHint(false);
    setElapsed(0);
  };

  const languages = [
    "All",
    "C",
    "C++",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const levels = ["All", "Easy", "Medium", "Hard"];

  const filteredPuzzles = puzzles.filter((item) => {
    const matchesLanguage =
      language === "All" || item.language === language;
    const matchesLevel = level === "All" || item.level === level;

    return matchesLanguage && matchesLevel;
  });

  return (
    <main className="daily-puzzle-page">
      <section className="daily-puzzle-card">
        <p className="puzzle-day">DAILY CHALLENGE · DAY {day}</p>

        <h1>Daily Code Puzzle</h1>

        <p className="puzzle-subtitle">
          Practise C, C++, Java, SQL, HTML, CSS, JavaScript and React
          with one coding challenge at a time.
        </p>

        <div className="puzzle-timer">
          <span>⏱ Time spent</span>
          <strong>{formatTime(elapsed)}</strong>
        </div>

        <div className="puzzle-filters">
          <label>
            Technology
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              {languages.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Difficulty
            <select
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            >
              {levels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="puzzle-meta">
          <span>{puzzle.language}</span>
          <span>{puzzle.level}</span>
        </div>

        <h2>{puzzle.title}</h2>
        <p>{puzzle.question}</p>

        <pre className="puzzle-code">
          <code>{puzzle.code}</code>
        </pre>

        {showHint && (
          <div className="puzzle-hint">
            <strong>Hint:</strong> {puzzle.hint}
          </div>
        )}

        {!submitted && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="puzzle-answer">Write your answer</label>

            <textarea
              id="puzzle-answer"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Type your answer here..."
              rows={4}
              required
            />

            <div className="puzzle-actions">
              <button
                type="button"
                onClick={() => setShowHint((previous) => !previous)}
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              <button type="submit">Submit Answer</button>
            </div>
          </form>
        )}

        {submitted && (
          <section className="daily-puzzle-solution">
            <h3>
              {isCorrect
                ? "Great job! Your answer is correct."
                : "Not quite! Learn from the solution."}
            </h3>

            <p>
              <strong>Time taken:</strong> {formatTime(elapsed)}
            </p>

            <h3>Correct Answer</h3>

            <pre className="puzzle-code">
              <code>{puzzle.answer}</code>
            </pre>

            <h3>Explanation</h3>
            <p>{puzzle.explanation}</p>

            <button type="button" onClick={resetPuzzle}>
              Try Again
            </button>
          </section>
        )}

        <section className="puzzle-practice-list">
          <h3>Explore More Puzzles</h3>
          <p>
            {filteredPuzzles.length} puzzles match your selected filters.
            The daily challenge above changes automatically by date.
          </p>

          <div className="puzzle-list-grid">
            {filteredPuzzles.map((item, index) => (
              <article className="puzzle-list-item" key={`${item.language}-${item.title}`}>
                <span>{item.language}</span>
                <h4>{item.title}</h4>
                <p>{item.level}</p>
                <button
                  type="button"
                  onClick={() => {
                    setAnswer("");
                    setSubmitted(false);
                    setShowHint(false);
                    setElapsed(0);
                    // Keep the daily challenge fixed; use filters to explore topics.
                    setLanguage(item.language);
                    setLevel(item.level);
                  }}
                >
                  Filter this type
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
