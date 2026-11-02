
const simpleInterestConcepts = {
  title: "Simple Interest",

  introduction:
    "Simple Interest is the extra amount paid or earned on the original money for a specific period of time. It is commonly used in loans, savings, and banking.",

  sections: [
    {
      title: "1. What is Simple Interest?",
      explanation:
        "Simple Interest (SI) is calculated only on the original amount of money, called the Principal. It does not include interest earned in previous years.",

      formulas: [
        "Simple Interest = (P × R × T) / 100",
        "P = Principal (original amount)",
        "R = Rate of interest per year",
        "T = Time in years"
      ],

      examples: [
        {
          question:
            "Find the simple interest on ₹5,000 at 10% per annum for 2 years.",

          solution: [
            "P = ₹5,000, R = 10%, T = 2 years",
            "SI = (P × R × T) / 100",
            "SI = (5000 × 10 × 2) / 100",
            "SI = ₹1,000"
          ]
        }
      ]
    },

    {
      title: "2. Principal, Rate and Time",
      explanation:
        "Principal is the original money invested or borrowed. Rate is the interest percentage per year. Time is the duration for which the money is invested or borrowed.",

      formulas: [
        "Principal (P) = (SI × 100) / (R × T)",
        "Rate (R) = (SI × 100) / (P × T)",
        "Time (T) = (SI × 100) / (P × R)"
      ],

      examples: [
        {
          question:
            "Find the rate if P = ₹2,000, SI = ₹400 and T = 2 years.",

          solution: [
            "R = (SI × 100) / (P × T)",
            "R = (400 × 100) / (2000 × 2)",
            "R = 10% per annum"
          ]
        }
      ]
    },

    {
      title: "3. Total Amount",
      explanation:
        "The total amount is the original principal plus the interest earned or paid.",

      formulas: [
        "Amount = Principal + Simple Interest",
        "A = P + SI"
      ],

      examples: [
        {
          question:
            "Find the total amount on ₹3,000 if the simple interest is ₹600.",

          solution: [
            "Principal = ₹3,000",
            "Simple Interest = ₹600",
            "Amount = 3000 + 600",
            "Total Amount = ₹3,600"
          ]
        }
      ]
    },

    {
      title: "4. Time Conversion",
      explanation:
        "Time must be expressed in years when using the standard simple interest formula. Convert months into years before calculating.",

      formulas: [
        "Time in years = Number of months / 12",
        "6 months = 6/12 = 1/2 year",
        "3 months = 3/12 = 1/4 year"
      ],

      examples: [
        {
          question:
            "Find SI on ₹4,000 at 12% per annum for 6 months.",

          solution: [
            "P = ₹4,000, R = 12%, T = 6/12 = 1/2 year",
            "SI = (4000 × 12 × 1/2) / 100",
            "SI = ₹240"
          ]
        }
      ]
    },

    {
      title: "5. Finding the Difference in Interest",
      explanation:
        "When the principal and rate remain the same, simple interest increases directly with time. We can calculate the interest for each time period and find the difference.",

      formulas: [
        "SI = (P × R × T) / 100",
        "Difference = Longer-period SI − Shorter-period SI"
      ],

      examples: [
        {
          question:
            "Find the difference between SI for 4 years and 2 years on ₹1,000 at 5% per annum.",

          solution: [
            "SI for 4 years = (1000 × 5 × 4) / 100 = ₹200",
            "SI for 2 years = (1000 × 5 × 2) / 100 = ₹100",
            "Difference = 200 − 100 = ₹100"
          ]
        }
      ]
    }
  ],

  revision: [
    "Simple Interest is calculated only on the original principal.",
    "SI = (P × R × T) / 100.",
    "Amount = Principal + Simple Interest.",
    "Convert months into years before using the formula.",
    "Rate is usually given as a percentage per annum.",
    "Always check the units of time before calculating."
  ]
};

export default simpleInterestConcepts;
