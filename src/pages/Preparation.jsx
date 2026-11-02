
import SubjectCard from "../components/SubjectCard";
import "../styles/Preparation.css";

function Preparation({ selectedCourse }) {
  const course = selectedCourse || "BCA";

  const skillArenaLinks = {
    BCA: "/skill-arena",
    BBA: "/bba-skill-arena",
    MCA: "/mca-skill-arena",
    MBA: "/mba-skill-arena",
  };

  const subjects = [
    {
      name: "Aptitude",
      description:
        "Learn concepts and practise Percentage, Average, Profit & Loss, Ratio and more.",
      link: "/aptitude",
    },
    {
      name: "English",
      description:
        "Improve grammar, vocabulary, synonyms, antonyms and communication skills.",
      link: "/english",
    },
    {
      name: "Skill Arena",
      description: `Practise skills and activities designed for your selected course: ${course}.`,
      link: skillArenaLinks[course] || "/skill-arena",
    },
    {
      name: "Interview",
      description:
        "Prepare for HR questions, technical rounds and common interview situations.",
      link: "/interview",
    },
  ];

  return (
    <main className="preparation-page">
      <section className="preparation-hero">
        <span className="preparation-eyebrow">
          YOUR PERSONAL LEARNING SPACE
        </span>

        <h1>
          Placement <span>Preparation</span>
        </h1>

        <p>
          You selected <strong>{course}</strong>. Choose an area to practise
          and take the next step towards your placement goal.
        </p>

        <div className="preparation-course-badge">
          <span className="preparation-badge-icon">✓</span>
          Preparing for {course}
        </div>
      </section>

      <section className="preparation-content">
        <div className="preparation-section-heading">
          <div>
            <span className="preparation-section-kicker">
              YOUR LEARNING PATH
            </span>
            <h2>What would you like to prepare for?</h2>
          </div>

          <p>
            Build your foundation, improve your skills and practise
            at your own pace.
          </p>
        </div>

        <div className="subject-container">
          {subjects.map((subject, index) => (
            <div
              className={`subject-card-shell subject-${subject.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={subject.name}
            >
              <span className="subject-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <SubjectCard
                name={subject.name}
                description={subject.description}
                link={subject.link}
              />
            </div>
          ))}
        </div>

        <div className="preparation-tip">
          <span className="preparation-tip-icon">✧</span>
          <div>
            <h3>A little practice every day goes a long way.</h3>
            <p>
              Start with the area you want to improve most and
              keep building your confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Preparation;
