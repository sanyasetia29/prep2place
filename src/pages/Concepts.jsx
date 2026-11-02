import { Link, useLocation } from "react-router-dom";
import "../styles/Concepts.css";

const bcaTopics = [
  {
    name: "C",
    icon: "💻",
    description: "Learn variables, loops, functions and arrays.",
  },
  {
    name: "C++",
    icon: "⚙️",
    description: "Learn classes, objects and OOP concepts.",
  },
  {
    name: "Java",
    icon: "☕",
    description: "Learn methods, arrays and object-oriented programming.",
  },
  {
    name: "SQL",
    icon: "🗄️",
    description: "Learn database queries and data management.",
  },
  {
    name: "HTML",
    icon: "🌐",
    description: "Learn webpage structure and HTML elements.",
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "Learn styling, layouts, Flexbox and Grid.",
  },
  {
    name: "JavaScript",
    icon: "✨",
    description: "Learn variables, functions, arrays and objects.",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Learn components, props, state and hooks.",
  },
];

const bbaTopics = [
  {
    name: "Marketing",
    icon: "📢",
    description: "Learn marketing basics, branding and the 4 Ps.",
  },
  {
    name: "Management",
    icon: "📋",
    description: "Learn planning, organizing, leadership and control.",
  },
  {
    name: "Human Resources",
    icon: "👥",
    description: "Learn recruitment, training and employee management.",
  },
  {
    name: "Finance",
    icon: "💰",
    description: "Learn budgeting, financial planning and basic finance.",
  },
];

function Concepts() {
  const location = useLocation();
  const isBBA = location.pathname.startsWith("/bba-skill-arena");
  const topics = isBBA ? bbaTopics : bcaTopics;

  return (
    <main className="concepts-page">
      <header className="concepts-header">
        <span>
          {isBBA ? "BBA SKILL ARENA" : "BCA SKILL ARENA"}
        </span>

        <h1>
          {isBBA ? "Business Concepts" : "Concept Corner"}
        </h1>

        <p>
          {isBBA
            ? "Explore business concepts with simple explanations and examples."
            : "Learn programming concepts with simple explanations and examples."}
        </p>
      </header>

      <section className="concepts-grid">
        {topics.map((topic, index) => (
          <article className="concept-card" key={topic.name}>
            <div className="concept-icon">{topic.icon}</div>

            <h2>{topic.name}</h2>

            <p>{topic.description}</p>

        <Link
  className="concept-button"
  to={`/skill-arena/concepts/${encodeURIComponent(topic.name)}/0`}
>
  Start Learning →
</Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Concepts;
