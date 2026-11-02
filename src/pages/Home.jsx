
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const TOTAL_TOPICS = 24;

const courses = [
  {
    number: "01",
    title: "BCA",
    description: "Programming, aptitude and technical skills.",
    path: "/skill-arena",
    icon: "⌘",
  },
  {
    number: "02",
    title: "BBA",
    description: "Business knowledge and management skills.",
    path: "/bba-skill-arena",
    icon: "↗",
  },
  {
    number: "03",
    title: "MCA",
    description: "Advanced coding and technical preparation.",
    path: "/mca-skill-arena",
    icon: "</>",
  },
  {
    number: "04",
    title: "MBA",
    description: "Leadership, finance and business strategy.",
    path: "/mba-skill-arena",
    icon: "✳",
  },
];

function Home({ username }) {
  const cleanUsername = String(
    username || localStorage.getItem("prep2place-username") || ""
  )
    .trim()
    .toLowerCase();

  const plannerStorageKey = `prep2place-planner-${cleanUsername || "guest"}`;

  const [progress, setProgress] = useState(0);

  const [plannerDays, setPlannerDays] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(plannerStorageKey) || "{}"
      );
      const days = Number(saved.selectedPlan);
      return [7, 30, 180].includes(days) ? days : 7;
    } catch {
      return 7;
    }
  });

  useEffect(() => {
    const updateProgress = () => {
      if (!cleanUsername) {
        setProgress(0);
        return;
      }

      try {
        const completed = JSON.parse(
          localStorage.getItem(
            `prep2place-completed-${cleanUsername}`
          ) || "[]"
        );

        const completedCount = Array.isArray(completed)
          ? new Set(completed).size
          : 0;

        setProgress(
          Math.min(100, Math.round((completedCount / TOTAL_TOPICS) * 100))
        );
      } catch {
        setProgress(0);
      }
    };

    const updatePlannerDays = () => {
      try {
        const saved = JSON.parse(
          localStorage.getItem(plannerStorageKey) || "{}"
        );
        const days = Number(saved.selectedPlan);
        setPlannerDays([7, 30, 180].includes(days) ? days : 7);
      } catch {
        setPlannerDays(7);
      }
    };

    updateProgress();
    updatePlannerDays();

    window.addEventListener("prep2place-progress-updated", updateProgress);
    window.addEventListener("prep2place-planner-updated", updatePlannerDays);
    window.addEventListener("storage", updateProgress);
    window.addEventListener("storage", updatePlannerDays);
    window.addEventListener("focus", updateProgress);
    window.addEventListener("focus", updatePlannerDays);

    return () => {
      window.removeEventListener(
        "prep2place-progress-updated",
        updateProgress
      );
      window.removeEventListener(
        "prep2place-planner-updated",
        updatePlannerDays
      );
      window.removeEventListener("storage", updateProgress);
      window.removeEventListener("storage", updatePlannerDays);
      window.removeEventListener("focus", updateProgress);
      window.removeEventListener("focus", updatePlannerDays);
    };
  }, [cleanUsername, plannerStorageKey]);

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-left">
          <span className="hero-tag">
            <span className="hero-tag-dot"></span>
            YOUR FUTURE STARTS HERE
          </span>

          <h1>
            Prepare Today.
            <br />
            <span>Get Placed Tomorrow.</span>
          </h1>

          <p className="hero-text">
            Your journey to a dream placement starts with one step.
            Learn concepts, practise aptitude, sharpen your skills and
            build the confidence to succeed.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="primary-btn">
              Explore Courses <span aria-hidden="true">→</span>
            </Link>

            <Link to="/planner" className="secondary-btn">
              <span aria-hidden="true">▦</span> Make Your Plan
            </Link>
          </div>

          <div className="hero-trust">
            <span className="trust-check">✓</span>
            Learn at your pace
            <span className="trust-divider">•</span>
            Practice with purpose
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-decoration decoration-one"></div>
          <div className="hero-decoration decoration-two"></div>

          <div className="dashboard-card">
            <div className="card-top">
              <div>
                <span className="card-eyebrow">YOUR JOURNEY</span>
                <h2>Your Preparation</h2>
                <p>Every small step counts.</p>
              </div>

              <div className="journey-icon" aria-hidden="true">
                ↗
              </div>
            </div>

            <div className="progress-box">
              <div className="progress-info">
                <span>Overall Progress</span>
                <strong>{progress}%</strong>
              </div>

              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Overall preparation progress"
              >
                <div style={{ width: `${progress}%` }}></div>
              </div>

              <p className="progress-caption">
                {progress === 0
                  ? "Your progress begins with your first topic."
                  : progress === 100
                    ? "Amazing! You have completed all tracked topics."
                    : "Keep going — you are making progress!"}
              </p>
            </div>

            <div className="mini-cards">
              <div className="mini-card">
                <span className="mini-icon subjects-icon">✳</span>
                <h3>05</h3>
                <p>Subjects</p>
              </div>

              <div className="mini-card">
                <span className="mini-icon topics-icon">◈</span>
                <h3>{TOTAL_TOPICS}</h3>
                <p>Topics</p>
              </div>

              <div className="mini-card">
                <span className="mini-icon days-icon">◷</span>
                <h3>{plannerDays}</h3>
                <p>Plan days</p>
              </div>
            </div>

            <Link to="/planner" className="card-plan-link">
              View your study plan <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="floating-note">
            <span className="floating-note-icon">✦</span>
            <div>
              <strong>Small steps, big goals</strong>
              <p>Your placement journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-courses" id="courses">
        <div className="section-heading">
          <span className="section-kicker">FIND YOUR PATH</span>
          <h2>Choose Your Course</h2>
          <p>
            A focused preparation experience designed around your
            academic journey.
          </p>
        </div>

        <div className="home-course-container">
          {courses.map((course) => (
            <article className="home-course-card" key={course.title}>
              <div className="course-card-top">
                <span className="course-number">{course.number}</span>
                <span className="course-icon" aria-hidden="true">
                  {course.icon}
                </span>
              </div>

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <Link to={course.path} className="course-link">
                Explore course <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <div className="why-intro">
            <span className="section-kicker">THE PREP 2 PLACE WAY</span>
            <h2>Prepare smarter, not just harder.</h2>
            <p>
              Build a strong foundation, practise consistently and
              understand how far you have come.
            </p>

            <Link to="/preparation" className="why-link">
              Start your preparation <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="why-features">
            <article className="feature-card">
              <div className="feature-icon feature-purple">01</div>
              <div>
                <h3>Learn the Concepts</h3>
                <p>
                  Understand the topic first, then test what you have learned.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-icon feature-pink">02</div>
              <div>
                <h3>Practise with Purpose</h3>
                <p>
                  Improve your accuracy and confidence with regular practice.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-icon feature-blue">03</div>
              <div>
                <h3>Track Your Progress</h3>
                <p>
                  Follow your preparation and stay focused on your goals.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-decoration cta-decoration-one"></div>
        <div className="cta-decoration cta-decoration-two"></div>

        <div className="cta-content">
          <span className="cta-kicker">YOUR NEXT CHAPTER BEGINS NOW</span>
          <h2>Ready to take the next step?</h2>
          <p>
            Make a plan, keep practising and move closer to your dream placement.
          </p>

          <div className="cta-buttons">
            <Link to="/planner" className="cta-primary-btn">
              Make Your Plan <span aria-hidden="true">→</span>
            </Link>
            <Link to="/preparation" className="cta-secondary-btn">
              Start Preparing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
