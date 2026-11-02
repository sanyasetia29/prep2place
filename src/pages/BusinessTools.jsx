
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BusinessTools.css";

const tools = [
  {
    icon: "📊",
    title: "SWOT Analysis",
    description:
      "Identify business strengths, weaknesses, opportunities and threats.",
    details: [
      "Strengths — What does the business do well?",
      "Weaknesses — What needs improvement?",
      "Opportunities — What new chances are available?",
      "Threats — What external risks could affect the business?",
    ],
  },
  {
    icon: "💰",
    title: "Budget Planner",
    description: "Calculate your monthly income, expenses and savings.",
  },
  {
    icon: "🧮",
    title: "Break-Even Calculator",
    description: "Find how many products a business must sell to cover costs.",
  },
  {
    icon: "📝",
    title: "Business Plan",
    description: "Create a simple plan for a new business idea.",
  },
];

function BusinessTools() {
  const [activeTool, setActiveTool] = useState(null);
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [fixedCost, setFixedCost] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [variableCost, setVariableCost] = useState("");
  const [businessIdea, setBusinessIdea] = useState("");
  const [customers, setCustomers] = useState("");

  const savings =
    income !== "" && expenses !== ""
      ? Number(income) - Number(expenses)
      : null;

  const breakEven =
    Number(sellingPrice) > Number(variableCost) &&
    Number(fixedCost) >= 0 &&
    fixedCost !== "" &&
    sellingPrice !== "" &&
    variableCost !== ""
      ? Math.ceil(
          Number(fixedCost) /
            (Number(sellingPrice) - Number(variableCost))
        )
      : null;

  return (
    <main className="business-tools-page">
      <Link className="tools-back-link" to="/bba-skill-arena">
        ← Back to BBA Skill Arena
      </Link>

      <header className="business-tools-header">
        <span>BBA SKILL ARENA</span>
        <h1>Business Tools</h1>
        <p>
          Explore simple tools to understand business planning,
          budgeting and decision-making.
        </p>
      </header>

      <section className="business-tools-grid">
        {tools.map((tool) => (
          <article className="business-tool-card" key={tool.title}>
            <div className="business-tool-icon">{tool.icon}</div>
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            <button
              type="button"
              className="business-tool-button"
              onClick={() =>
                setActiveTool(
                  activeTool === tool.title ? null : tool.title
                )
              }
            >
              {activeTool === tool.title ? "Close Tool ↑" : "Open Tool →"}
            </button>
          </article>
        ))}
      </section>

      {activeTool === "SWOT Analysis" && (
        <section className="business-tool-panel">
          <h2>📊 SWOT Analysis</h2>
          <p>Use these questions to analyse a business.</p>
          <div className="swot-grid">
            <div>
              <h3>Strengths</h3>
              <p>What does the business do well?</p>
            </div>
            <div>
              <h3>Weaknesses</h3>
              <p>What should the business improve?</p>
            </div>
            <div>
              <h3>Opportunities</h3>
              <p>What new opportunities can it use?</p>
            </div>
            <div>
              <h3>Threats</h3>
              <p>What risks could affect the business?</p>
            </div>
          </div>
        </section>
      )}

      {activeTool === "Budget Planner" && (
        <section className="business-tool-panel">
          <h2>💰 Monthly Budget Planner</h2>
          <label>Monthly Income (₹)</label>
          <input
            type="number"
            min="0"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter monthly income"
          />

          <label>Monthly Expenses (₹)</label>
          <input
            type="number"
            min="0"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            placeholder="Enter monthly expenses"
          />

          {savings !== null && (
            <div className="tool-result">
              {savings >= 0 ? "Monthly Savings" : "Amount Over Budget"}: ₹
              {Math.abs(savings).toLocaleString("en-IN")}
            </div>
          )}
        </section>
      )}

      {activeTool === "Break-Even Calculator" && (
        <section className="business-tool-panel">
          <h2>🧮 Break-Even Calculator</h2>

          <label>Total Fixed Costs (₹)</label>
          <input
            type="number"
            min="0"
            value={fixedCost}
            onChange={(e) => setFixedCost(e.target.value)}
            placeholder="e.g. 10000"
          />

          <label>Selling Price per Product (₹)</label>
          <input
            type="number"
            min="0"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder="e.g. 500"
          />

          <label>Variable Cost per Product (₹)</label>
          <input
            type="number"
            min="0"
            value={variableCost}
            onChange={(e) => setVariableCost(e.target.value)}
            placeholder="e.g. 300"
          />

          {fixedCost !== "" &&
            sellingPrice !== "" &&
            variableCost !== "" && (
              <div className="tool-result">
                {breakEven !== null
                  ? `Break-even point: ${breakEven} products`
                  : "Selling price must be greater than variable cost."}
              </div>
            )}
        </section>
      )}

      {activeTool === "Business Plan" && (
        <section className="business-tool-panel">
          <h2>📝 Mini a Plan</h2>

          <label>Business Idea</label>
          <textarea
            value={businessIdea}
            onChange={(e) => setBusinessIdea(e.target.value)}
            placeholder="Describe your business idea..."
          />

          <label>Target Customers</label>
          <textarea
            value={customers}
            onChange={(e) => setCustomers(e.target.value)}
            placeholder="Who will buy your product or service?"
          />

          <div className="tool-result">
            {businessIdea.trim() && customers.trim()
              ? "Your basic business plan is taking shape!"
              : "Fill in both fields to prepare your basic plan."}
          </div>
        </section>
      )}
    </main>
  );
}

export default BusinessTools;
