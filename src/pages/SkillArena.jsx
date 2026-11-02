
import { Link, useLocation } from "react-router-dom";
import "../styles/SkillArena.css";

function SkillArena() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const savedCourse = (
    localStorage.getItem("prep2place-course") || "BCA"
  ).toUpperCase();

  const course = path.includes("bba")
    ? "BBA"
    : path.includes("mca")
    ? "MCA"
    : path.includes("mba")
    ? "MBA"
    : ["BCA", "BBA", "MCA", "MBA"].includes(savedCourse)
    ? savedCourse
    : "BCA";

  const courseData = {
    BCA: {
      title: "BCA Skill Arena",
      tag: "BCA LEARNING ZONE",
      description:
        "Explore programming, improve your technical knowledge and sharpen your coding skills through interactive activities.",
      subtitle: "Build your technical skills",
      activities: [
        {
          icon: "📚",
          number: "01",
          title: "Concept Corner",
          description:
            "Learn programming concepts, computer fundamentals and technical topics with simple explanations and examples.",
          link: "/skill-arena/concepts",
          color: "pink",
          label: "LEARN",
        },
        {
          icon: "🐞",
          number: "02",
          title: "Find the Error",
          description:
            "Identify coding mistakes, understand errors and improve your debugging and problem-solving skills.",
          link: "/skill-arena/find-the-error",
          color: "purple",
          label: "DEBUG",
        },
        {
          icon: "🧩",
          number: "03",
          title: "Daily Code Puzzle",
          description:
            "Challenge yourself with coding puzzles and develop logical thinking through daily practice.",
          link: "/skill-arena/daily-puzzle",
          color: "yellow",
          label: "PRACTICE",
        },
        {
          icon: "🎯",
          number: "04",
          title: "Programming Quiz",
          description:
            "Test your programming knowledge with objective questions and check your understanding.",
          link: "/skill-arena/quiz",
          color: "green",
          label: "TEST",
        },
      ],
    },

    BBA: {
      title: "BBA Skill Arena",
      tag: "BBA LEARNING ZONE",
      description:
        "Develop business understanding, strengthen management knowledge and improve your decision-making skills.",
      subtitle: "Build your business skills",
      activities: [
        {
          icon: "📚",
          number: "01",
          title: "Business Concepts",
          description:
            "Explore Marketing, Management, Human Resources and Finance through easy-to-understand concepts.",
          link: "/bba-skill-arena/concepts",
          color: "pink",
          label: "LEARN",
        },
        {
          icon: "💼",
          number: "02",
          title: "Business Case Study",
          description:
            "Understand real-world business situations and learn how to approach practical challenges.",
          link: "/bba-skill-arena/case-study",
          color: "purple",
          label: "EXPLORE",
        },
        {
          icon: "📊",
          number: "03",
          title: "Business Tools",
          description:
            "Explore Excel, SWOT analysis, business planning and other useful management tools.",
          link: "/bba-skill-arena/business-tools",
          color: "yellow",
          label: "PRACTICE",
        },
        {
          icon: "🧠",
          number: "04",
          title: "Business Challenges",
          description:
            "Improve leadership, teamwork and decision-making through practical business challenges.",
          link: "/bba-skill-arena/challenges",
          color: "green",
          label: "CHALLENGE",
        },
      ],
    },

    MCA: {
      title: "MCA Skill Arena",
      tag: "MCA LEARNING ZONE",
      description:
        "Strengthen advanced programming knowledge, explore database concepts and improve your technical problem-solving abilities.",
      subtitle: "Advance your technical knowledge",
      activities: [
        {
          icon: "💻",
          number: "01",
          title: "Advanced Coding",
          description:
            "Practice programming problems, algorithms and coding logic to improve your development skills.",
          link: "/mca-skill-arena/advanced-coding",
          color: "pink",
          label: "CODE",
        },
        {
          icon: "🐞",
          number: "02",
          title: "Code Detective",
          description:
            "Investigate coding errors, understand program behaviour and improve code quality.",
          link: "/mca-skill-arena/code-detective",
          color: "purple",
          label: "DEBUG",
        },
        {
          icon: "🗄️",
          number: "03",
          title: "SQL Mission",
          description:
            "Practice database queries, SQL commands and database management concepts.",
          link: "/mca-skill-arena/sql-mission",
          color: "yellow",
          label: "PRACTICE",
        },
        {
          icon: "🎯",
          number: "04",
          title: "Technical Quiz",
          description:
            "Evaluate your computer science knowledge through technical questions and challenges.",
          link: "/mca-skill-arena/technical-quiz",
          color: "green",
          label: "TEST",
        },
      ],
    },

    MBA: {
      title: "MBA Skill Arena",
      tag: "MBA LEARNING ZONE",
      description:
        "Develop leadership, strategic thinking, financial understanding and essential management skills.",
      subtitle: "Build your management skills",
      activities: [
        {
          icon: "📈",
          number: "01",
          title: "Marketing",
          description:
            "Understand marketing strategies, consumer behaviour, branding and market analysis.",
          link: "/mba-skill-arena/marketing",
          color: "pink",
          label: "LEARN",
        },
        {
          icon: "💰",
          number: "02",
          title: "Finance",
          description:
            "Explore budgeting, financial planning and important financial decision-making concepts.",
          link: "/mba-skill-arena/finance",
          color: "purple",
          label: "EXPLORE",
        },
        {
          icon: "👥",
          number: "03",
          title: "Leadership",
          description:
            "Improve communication, teamwork, leadership and people-management abilities.",
          link: "/mba-skill-arena/leadership",
          color: "yellow",
          label: "DEVELOP",
        },
        {
          icon: "🧠",
          number: "04",
          title: "Business Strategy",
          description:
            "Explore strategic thinking, solve business problems and understand case studies.",
          link: "/mba-skill-arena/business-strategy",
          color: "green",
          label: "CHALLENGE",
        },
      ],
    },
  };

  const selectedCourse = courseData[course];

  return (
    <main className="skill-arena">
      <div className="arena-wrapper">
        <header className="arena-heading">
          <span className="arena-tag">
            <span className="tag-dot"></span>
            {selectedCourse.tag}
          </span>

          <h1>{selectedCourse.title}</h1>

          <p>{selectedCourse.description}</p>

          <div className="arena-heading-line">
            <span></span>
            <span className="heading-star">✦</span>
            <span></span>
          </div>
        </header>

        <section className="arena-section">
          <div className="arena-section-heading">
            <div>
              <span className="section-eyebrow">EXPLORE & IMPROVE</span>
              <h2>{selectedCourse.subtitle}</h2>
            </div>

            <span className="activity-count">
              04 ACTIVITIES
            </span>
          </div>

          <div className="arena-grid">
            {selectedCourse.activities.map((item) => (
              <article
                className={`arena-card ${item.color}`}
                key={item.title}
              >
                <div className="arena-card-top">
                  <div className="arena-icon">{item.icon}</div>
                  <span className="arena-number">{item.number}</span>
                </div>

                <span className="arena-card-label">{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link className="arena-button" to={item.link}>
                  <span>Explore Now</span>
                  <span className="arena-arrow">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="arena-footer">
          <span className="footer-icon">✦</span>
          <p>
            Keep learning. Keep practising. Keep growing.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default SkillArena;
