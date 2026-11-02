
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/EnglishTopic.css";

const lessons = {
  "Parts of Speech": {
    intro: "Parts of speech describe the role a word plays in a sentence.",
    rules: [
      "Noun: names a person, place or thing.",
      "Pronoun: replaces a noun.",
      "Verb: expresses an action or state.",
      "Adjective: describes a noun.",
      "Adverb: describes a verb, adjective or another adverb."
    ],
    example: "Riya quickly reads an interesting book.",
    question: "Which word is the verb in 'Riya plays cricket'?",
    options: ["Riya", "plays", "cricket", "the"],
    answer: "plays",
    explanation: "'Plays' expresses the action."
  },
  Tenses: {
    intro: "Tenses show when an action happens: in the present, past or future.",
    rules: [
      "Present: I play every day.",
      "Past: I played yesterday.",
      "Future: I will play tomorrow."
    ],
    example: "She is studying now.",
    question: "Choose the correct past-tense sentence.",
    options: ["I go yesterday.", "I went yesterday.", "I will go yesterday.", "I going yesterday."],
    answer: "I went yesterday.",
    explanation: "'Went' is the past tense of 'go'."
  },
  Synonyms: {
    intro: "Synonyms are words with the same or nearly the same meaning.",
    rules: [
      "Learn a word with its meaning.",
      "Check the sentence context.",
      "Remember that similar words may have slightly different uses."
    ],
    example: "Happy — Joyful",
    question: "Choose a synonym of 'Happy'.",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answer: "Joyful",
    explanation: "'Joyful' means feeling great happiness."
  },
  Antonyms: {
    intro: "Antonyms are words with opposite meanings.",
    rules: [
      "Identify the meaning of the given word.",
      "Choose a word with the opposite meaning."
    ],
    example: "Hot — Cold",
    question: "Choose the antonym of 'Ancient'.",
    options: ["Old", "Historic", "Modern", "Past"],
    answer: "Modern",
    explanation: "'Modern' refers to the present or recent times."
  },
  Articles: {
    intro: "The articles a, an and the are used before nouns.",
    rules: [
      "Use 'a' before a consonant sound.",
      "Use 'an' before a vowel sound.",
      "Use 'the' for a particular or already identified thing."
    ],
    example: "She ate an apple and saw a bird.",
    question: "Choose the correct phrase.",
    options: ["a apple", "an apple", "the apple (always)", "an book"],
    answer: "an apple",
    explanation: "'Apple' begins with a vowel sound."
  },
  Prepositions: {
    intro: "Prepositions show relationships such as place, time or direction.",
    rules: [
      "'In' can describe being inside a place.",
      "'On' can describe a surface or a day.",
      "'At' can describe a specific time or place."
    ],
    example: "The book is on the table.",
    question: "The class starts ___ 9 AM.",
    options: ["in", "on", "at", "by"],
    answer: "at",
    explanation: "Use 'at' for a specific time."
  }
};

function EnglishTopic() {
  const { topic } = useParams();
  const topicName = decodeURIComponent(topic || "");
  const lesson = lessons[topicName] || {
    intro: `${topicName} is an important English preparation topic. Learn its basic rules and practise using examples.`,
    rules: [
      `Understand the meaning and purpose of ${topicName}.`,
      "Read each question carefully.",
      "Use examples to check your understanding."
    ],
    example: `Practise ${topicName} with simple English sentences.`,
    question: `Why should you practise ${topicName}?`,
    options: [
      "To improve understanding",
      "To avoid learning",
      "To ignore sentence meaning",
      "To skip practice"
    ],
    answer: "To improve understanding",
    explanation: "Practice helps strengthen your understanding of the topic."
  };

  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <main className="english-lesson-page">
      <Link to="/english" className="english-back-link">
        ← Back to English Topics
      </Link>

      <section className="english-lesson-hero">
        <span>PREP 2 PLACE · ENGLISH LEARNING</span>
        <h1>{topicName}</h1>
        <p>{lesson.intro}</p>
      </section>

      <section className="english-lesson-card">
        <h2>Learn the Concept</h2>
        <ul>
          {lesson.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </section>

      <section className="english-lesson-card">
        <h2>Example</h2>
        <p className="english-example">{lesson.example}</p>
      </section>

      <section className="english-lesson-card">
        <span className="english-practice-label">QUICK PRACTICE</span>
        <h2>{lesson.question}</h2>

        <div className="english-answer-options">
          {lesson.options.map((option) => (
            <button
              type="button"
              key={option}
              className={`english-answer-option ${
                checked && option === lesson.answer ? "correct" : ""
              } ${
                checked && selected === option && option !== lesson.answer
                  ? "wrong"
                  : ""
              }`}
              onClick={() => {
                setSelected(option);
                setChecked(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="english-check-btn"
          disabled={!selected}
          onClick={() => setChecked(true)}
        >
          Check Answer
        </button>

        {checked && (
          <p className="english-feedback">
            {selected === lesson.answer ? "Correct! " : "Not quite. "}
            {lesson.explanation}
          </p>
        )}
      </section>
    </main>
  );
}

export default EnglishTopic;
