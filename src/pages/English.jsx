import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/English.css";

function English() {
  const [activeCategory, setActiveCategory] = useState("Grammar");

  const categories = [
    {
      title: "Grammar",
      icon: "📘",
      description: "Learn grammar rules and improve sentence formation.",
      topics: [
        "Parts of Speech",
        "Tenses",
        "Articles",
        "Prepositions",
        "Subject-Verb Agreement",
      ],
    },
    {
      title: "Vocabulary",
      icon: "📚",
      description: "Build your vocabulary for placement tests.",
      topics: [
        "Synonyms",
        "Antonyms",
        "One Word Substitution",
        "Idioms and Phrases",
      ],
    },
    {
      title: "Sentence Practice",
      icon: "✍️",
      description: "Identify mistakes and improve sentence structure.",
      topics: [
        "Error Detection",
        "Sentence Correction",
        "Fill in the Blanks",
        "Sentence Rearrangement",
      ],
    },
    {
      title: "Reading Skills",
      icon: "📖",
      description: "Practise understanding passages and finding answers.",
      topics: [
        "Reading Comprehension",
        "Main Idea",
        "Inference Questions",
      ],
    },
  ];

  const selectedCategory = categories.find(
    (category) => category.title === activeCategory
  );

  return (
    <div className="english-page">
      <section className="english-hero">
        <span className="english-label">PREP 2 PLACE • ENGLISH</span>
        <h1>Improve Your English Skills</h1>
        <p>
          Build confidence in grammar, vocabulary and communication
          with focused practice for placement preparation.
        </p>
        <a href="#english-topics" className="english-hero-btn">
          Explore Topics →
        </a>
      </section>

      <section className="english-intro">
        <h2>Your English Learning Space</h2>
        <p>
          Learn important concepts, practise questions and prepare
          for English aptitude and placement assessments.
        </p>
      </section>

      <section className="english-categories" id="english-topics">
        <h2>Choose Your Learning Area</h2>
        <p className="english-section-subtitle">
          Select a category to explore its topics.
        </p>

        <div className="english-category-grid">
          {categories.map((category) => (/*hre category ke liye ek button bnate hai*/
            <button
              type="button"
              key={category.title}
              className={`english-category-card ${
                activeCategory === category.title ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              <span className="english-category-icon">
                {category.icon}
              </span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="english-explore">
                Explore topics →
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="english-topic-section">
        <div className="english-topic-heading">
          <div>
            <span className="english-label">LEARNING MODULE</span>
            <h2>{selectedCategory.title}</h2>
          </div>
          <span className="english-topic-count">
            {selectedCategory.topics.length} topics
          </span>
        </div>

        <div className="english-topic-grid">
          {selectedCategory.topics.map((topic, index) => (
            <Link
              to={`/english/${encodeURIComponent(topic)}`}
              className="english-topic-card"
              key={topic}
            >
              <span className="english-topic-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{topic}</h3>
                <p>
                  Learn concepts, read examples and practise questions.
                </p>
              </div>

              <span className="english-topic-arrow">→</span>
            </Link>
          ))}
        </div>

        
      </section>
    </div>
  );
}

export default English;
