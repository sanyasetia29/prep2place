
import { Link } from "react-router-dom";

function SubjectCard({ name, description, link }) {
  return (
    <div className="subject-card">
      <div className="subject-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <Link to={link || "/preparation"} className="subject-button">
        Start Learning →
      </Link>
    </div>
  );
}

export default SubjectCard;
