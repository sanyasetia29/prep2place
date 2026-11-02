import "../styles/About.css";

function About() {
  const courses = [
    {
      icon: "💻",
      title: "BCA",
      description: "Programming, technical skills and IT placement preparation.",
    },
    {
      icon: "📊",
      title: "BBA",
      description: "Business knowledge, aptitude and communication skills.",
    },
    {
      icon: "🎯",
      title: "MBA",
      description: "Management concepts, business aptitude and interview skills.",
    },
    {
      icon: "🖥️",
      title: "MCA",
      description: "Advanced computing, coding practice and technical interviews.",
    },
  ];

  const features = [
    {
      icon: "🧠",
      title: "Aptitude Practice",
      description:
        "Improve quantitative aptitude, logical reasoning and problem-solving.",
    },
    {
      icon: "📅",
      title: "Study Planner",
      description:
        "Organise preparation with 7-day, 30-day and 6-month study plans.",
    },
    {
      icon: "💬",
      title: "Interview Preparation",
      description:
        "Practise common interview questions and improve communication.",
    },
    {
      icon: "⌨️",
      title: "Skill Development",
      description:
        "Learn concepts, practise coding and build confidence step by step.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-tag">ABOUT OUR PLATFORM</span>
        <h1>Welcome to Prep 2 Place</h1>
        <p>
          Your learning companion for placement preparation.
          Learn new skills, practise regularly and prepare for
          your career with confidence.
        </p>
      </section>

      <section className="about-intro">
        <div className="about-intro-icon">🚀</div>
        <div>
          <h2>Our Purpose</h2>
          <p>
            Prep 2 Place is a student-focused placement preparation
            platform designed to help college students prepare for
            placement opportunities in an organised way. It brings
            learning resources, aptitude practice, coding activities,
            study planning and interview preparation together in one place.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-heading">
          <span>WHAT YOU CAN DO</span>
          <h2>Everything You Need to Prepare</h2>
          <p>
            Build your skills through regular practice and structured learning.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature) => (
            <div className="about-feature-card" key={feature.title}>
              <div className="about-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section about-courses-section">
        <div className="about-section-heading">
          <span>MADE FOR STUDENTS</span>
          <h2>Four Courses, One Platform</h2>
          <p>
            Resources for the four courses supported by our college.
          </p>
        </div>

        <div className="about-course-grid">
          {courses.map((course) => (
            <div className="about-course-card" key={course.title}>
              <span>{course.icon}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-goal">
        <span>🌟</span>
        <h2>Learn Today. Prepare for Tomorrow.</h2>
        <p>
          Our goal is to make placement preparation more organised,
          accessible and easier to follow—one step at a time.
        </p>
      </section>
    </div>
  );
}

export default About;
