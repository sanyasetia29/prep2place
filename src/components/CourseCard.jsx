import { Link } from "react-router-dom";

function CourseCard({
  name,
  fullName,
  description,
  number,
  onSelect,
}) {
  const handleSelect = () => {
    onSelect?.(name);
  };

  return (
    <article className="course-card">
      <div className="course-card-top">
        <span className="course-number">{number}</span>
        <span className="course-card-symbol">✦</span>
      </div>

      <div className="course-card-info">
        <h2>{name}</h2>

        <h3>{fullName}</h3>

        <p>{description}</p>
      </div>

      <Link
        to="/preparation"
        onClick={handleSelect}
        className="course-select-link"
      >
        <span>Select Course</span>
        <span className="course-arrow">→</span>
      </Link>
    </article>
  );
}

export default CourseCard;