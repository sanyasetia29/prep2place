import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";

function Courses({ setSelectedCourse }) {
  const courses = [
    {
      name: "BCA",
      fullName: "Bachelor of Computer Applications",
      description:
        "Prepare for technical interviews, programming, aptitude and software development placements.",
      number: "01",
    },
    {
      name: "BBA",
      fullName: "Bachelor of Business Administration",
      description:
        "Build business knowledge, communication skills, aptitude and management interview confidence.",
      number: "02",
    },
    {
      name: "MBA",
      fullName: "Master of Business Administration",
      description:
        "Prepare for management interviews, business concepts, leadership and corporate placements.",
      number: "03",
    },
    {
      name: "MCA",
      fullName: "Master of Computer Applications",
      description:
        "Strengthen programming, technical knowledge, problem-solving and placement interview skills.",
      number: "04",
    },
  ];

  return (
    <main className="courses-page">
      <section className="courses-hero">
        <span className="courses-eyebrow">
          YOUR CAREER, YOUR PATH
        </span>

        <h1>
          Choose Your <span>Course</span>
        </h1>

        <p>
          Every career journey starts with the right preparation.
          Choose your academic course and explore a learning path
          designed to help you succeed.
        </p>

        <div className="courses-highlight">
          <span className="courses-highlight-icon">✦</span>
          Learn. Practise. Prepare. Succeed.
        </div>
      </section>

      <section className="courses-content">
        <div className="courses-section-heading">
          <div>
            <span className="courses-section-kicker">
              FIND YOUR DIRECTION
            </span>

            <h2>Explore Your Courses</h2>
          </div>

          <p>
            Select the course you are currently studying.
          </p>
        </div>

        <div className="courses-container">
          {courses.map((course) => (
            <CourseCard
              key={course.name}
              name={course.name}
              fullName={course.fullName}
              description={course.description}
              number={course.number}
              onSelect={setSelectedCourse}
            />
          ))}
        </div>

        <div className="courses-bottom-note">
          <span className="courses-note-icon">✓</span>

          <p>
            Your preparation journey will be tailored to your
            selected course.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Courses;