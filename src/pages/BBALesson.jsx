import { Link, useParams } from "react-router-dom";
import "../styles/BBALesson.css";

const lessons = {
  Marketing: {
    title: "Marketing",
    intro:
      "Learn marketing basics, branding, advertising and customer needs.",
    topics: [
      {
        heading: "1. What is Marketing?",
        note: "Marketing includes activities that help a business understand customers and provide products or services according to their needs. It includes market research, product planning, pricing, promotion and customer service.",
        example:
          "A clothing brand studies fashion trends and promotes its collection on social media.",
      },
      {
        heading: "2. Importance of Marketing",
        note: "Marketing creates awareness about products, attracts new customers, increases sales and helps businesses compete in the market.",
        example:
          "A new bakery posts pictures of its cakes online to attract customers.",
      },
      {
        heading: "3. The 4 Ps of Marketing",
        note: "Product means what a business sells. Price is the amount customers pay. Place means where the product is available. Promotion means advertising and informing customers.",
        example:
          "A bakery sells cakes, sets prices, uses its shop and advertises festival offers.",
      },
      {
        heading: "4. Market Segmentation",
        note: "Market segmentation means dividing a large market into smaller groups of customers with similar needs. Businesses may group customers by age, location, income, lifestyle or buying behaviour.",
        example:
          "A sports brand creates different shoes for school students, athletes and casual users.",
      },
      {
        heading: "5. Branding",
        note: "Branding gives a product or business a distinct identity through its name, logo, design and customer experience.",
        example:
          "A recognizable logo helps customers identify their favourite skincare brand.",
      },
      {
        heading: "6. Advertising and Promotion",
        note: "Advertising is a paid way to communicate information about products or services. Promotion can also include discounts, coupons and special offers.",
        example:
          "An online store runs advertisements and offers a festival discount.",
      },
    ],
  },

  Management: {
    title: "Management",
    intro:
      "Learn planning, leadership, motivation and business management.",
    topics: [
      {
        heading: "1. What is Management?",
        note: "Management coordinates people, money, materials and time to achieve organizational goals.",
        example:
          "A restaurant manager organizes staff duties and checks food supplies.",
      },
      {
        heading: "2. Functions of Management",
        note: "The main functions are planning, organizing, staffing, directing and controlling.",
        example:
          "A store manager sets sales targets, hires staff and reviews daily sales.",
      },
      {
        heading: "3. Planning",
        note: "Planning means deciding in advance what needs to be done, how it will be done and who will do it.",
        example:
          "A college event team prepares a budget and schedule before an event.",
      },
      {
        heading: "4. Leadership",
        note: "Leadership is the ability to guide, influence and motivate people towards a common goal.",
        example:
          "A team leader helps employees complete a project before the deadline.",
      },
      {
        heading: "5. Motivation",
        note: "Motivation encourages employees to put effort into their work through recognition, rewards and growth opportunities.",
        example:
          "A company rewards an employee for good performance.",
      },
      {
        heading: "6. Decision-Making",
        note: "Decision-making means considering possible solutions and choosing the most suitable option.",
        example:
          "A shop owner compares suppliers before purchasing stock.",
      },
    ],
  },

  "Human Resources": {
    title: "Human Resources (HR)",
    intro:
      "Learn recruitment, employee training and human resource management.",
    topics: [
      {
        heading: "1. What is Human Resource Management?",
        note: "Human Resource Management deals with hiring, training, supporting and retaining employees.",
        example:
          "An HR team hires suitable employees and explains company policies.",
      },
      {
        heading: "2. Recruitment",
        note: "Recruitment is the process of attracting people to apply for job vacancies.",
        example:
          "A company posts a job vacancy on a recruitment website.",
      },
      {
        heading: "3. Selection",
        note: "Selection means evaluating applicants and choosing a person who matches the job requirements.",
        example:
          "After interviews, a company selects a suitable candidate.",
      },
      {
        heading: "4. Training and Development",
        note: "Training improves skills for the current job, while development prepares employees for future responsibilities.",
        example:
          "A company trains new employees to use its software.",
      },
      {
        heading: "5. Performance Appraisal",
        note: "Performance appraisal reviews an employee's work against expected goals or standards.",
        example:
          "A manager reviews an employee's work quality and teamwork.",
      },
      {
        heading: "6. Employee Motivation and Retention",
        note: "Employee retention means encouraging employees to continue working with an organization.",
        example:
          "A company offers career growth opportunities and fair rewards.",
      },
    ],
  },

  Finance: {
    title: "Finance",
    intro:
      "Learn budgeting, profit and loss, cash flow and financial planning.",
    topics: [
      {
        heading: "1. What is Finance?",
        note: "Finance deals with how money is obtained, managed and used.",
        example:
          "A business estimates the money needed to purchase equipment.",
      },
      {
        heading: "2. Budgeting",
        note: "A budget is a plan showing expected income and expenses over a period.",
        example:
          "A shop plans its monthly spending on rent, salaries and stock.",
      },
      {
        heading: "3. Profit and Loss",
        note: "Profit occurs when revenue is greater than expenses. A loss occurs when expenses exceed revenue.",
        example:
          "If revenue is ₹10,000 and expenses are ₹7,000, profit is ₹3,000.",
      },
      {
        heading: "4. Saving and Investment",
        note: "Saving means keeping money for future needs. Investment means using money with the aim of earning a return, while accepting possible risks.",
        example:
          "A business saves emergency funds and considers buying new equipment.",
      },
      {
        heading: "5. Cash Flow",
        note: "Cash flow is the movement of money into and out of a business.",
        example:
          "A store receives customer payments and pays suppliers and rent.",
      },
      {
        heading: "6. Financial Planning",
        note: "Financial planning means setting financial goals and deciding how to use available funds to achieve them.",
        example:
          "A small business saves money to open another branch.",
      },
    ],
  },
};

function BBALesson() {
  const { topic } = useParams();
  const decodedTopic = decodeURIComponent(topic || "");
  const lesson = lessons[decodedTopic];

  if (!lesson) {
    return (
      <main className="bba-lesson">
        <h1>Topic not found</h1>
        <Link to="/bba-skill-arena/concepts">
          Back to Business Concepts
        </Link>
      </main>
    );
  }

  return (
    <main className="bba-lesson">
      <Link
        className="bba-back"
        to="/bba-skill-arena/concepts"
      >
        ← Back to Business Concepts
      </Link>

      <header className="bba-lesson-header">
        <span>BBA SKILL ARENA</span>
        <h1>{lesson.title}</h1>
        <p>{lesson.intro}</p>
      </header>

      <section className="bba-lesson-list">
        {lesson.topics.map((item, index) => (
          <article
            className="bba-lesson-card"
            key={item.heading}
          >
            <h2>{item.heading}</h2>

            <p>{item.note}</p>

            <div className="bba-example">
              <strong>Example:</strong> {item.example}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default BBALesson;

