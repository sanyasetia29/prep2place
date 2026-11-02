import { Link, useParams } from "react-router-dom";
import percentageConcepts from "../concepts/Percentage";
import averageConcepts from "../concepts/average";
import ratioProportionConcepts from "../concepts/ratio & proportion";
import profitLossConcepts from "../concepts/profit & loss";
import timeWorkConcepts from "../concepts/time and work";
import timeSpeedDistanceConcepts from "../concepts/time speed";
import simpleInterestConcepts from "../concepts/simpleinterst";
import numberSystemConcepts from "../concepts/numberSystem";
import hcfLcmConcepts from "../concepts/hcfLcm";
import probabilityConcepts from "../concepts/probability";
import permutationCombinationConcepts from "../concepts/permutation";
import dataInterpretationConcepts from "../concepts/dataInterpretation";
import mixtureAlligationConcepts from "../concepts/mixture";
import "../styles/TopicLearning.css";
function TopicLearning() {
  const { topic } = useParams();

  const decodedTopic = decodeURIComponent(topic || "");
  const concepts =
    decodedTopic.toLowerCase() === "percentage"
      ?percentageConcepts
      :decodedTopic.toLowerCase() === "average"
      ?averageConcepts
      :decodedTopic.toLowerCase()==="ratio & proportion"
      ?ratioProportionConcepts
      :decodedTopic.toLowerCase() ==="profit & loss"
      ?profitLossConcepts
      :decodedTopic.toLowerCase() ==="time & work"
      ?timeWorkConcepts
      :decodedTopic.toLowerCase() ==="time, speed & distance"
      ?timeSpeedDistanceConcepts
       :decodedTopic.toLowerCase() ==="simple & compound interest"
      ?simpleInterestConcepts
       :decodedTopic.toLowerCase() ==="number system"
      ?numberSystemConcepts
       :decodedTopic.toLowerCase() ==="hcf & lcm"
      ?hcfLcmConcepts
       :decodedTopic.toLowerCase() ==="probability"
      ?probabilityConcepts
       :decodedTopic.toLowerCase() ==="permutation & combination"
      ?permutationCombinationConcepts
       :decodedTopic.toLowerCase() ==="data interpretation"
      ?dataInterpretationConcepts
       :decodedTopic.toLowerCase() ==="mixture & alligation"
      ?mixtureAlligationConcepts
      :null;
      
      
  if (!concepts) {
    return (
      <div className="learning-page">
        <h1>Concepts coming soon</h1>
        <p>We are preparing this topic.</p>
        <Link to="/aptitude">Back to Topics</Link>
      </div>
    );
  }

  return (
    <div className="learning-page">
      <div className="learning-header">
        <p>PREP2PLACE LEARNING CENTER</p>
        <h1>{concepts.title}</h1>
        <p>{concepts.introduction}</p>
      </div>

      <div className="learning-content">
        {concepts.sections.map((section, index) => (
          <section className="learning-card" key={section.title}>
            <h2>{section.title}</h2>

            <p>{section.explanation}</p>

            {section.formulas && (
              <div className="formula-box">
                {section.formulas.map((formula) => (
                  <p key={formula}>{formula}</p>
                ))}
              </div>
            )}

            {section.examples?.map((example) => (
              <div className="example-box" key={example.question}>
                <strong>Example</strong>
                <p>{example.question}</p>
                <ol>
                  {example.solution.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}

            {section.notes && (
              <ul>
                {section.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="learning-card">
          <h2>Quick Revision</h2>
          <ul>
            {concepts.revision.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <div className="learning-footer">
          <h2>Ready to check your understanding?</h2>
          <p>Complete the concept check before unlocking the main quiz.</p>
          <Link to={`/concept-check/${encodeURIComponent(decodedTopic)}`}>
            <button>Take Concept Check →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopicLearning;
