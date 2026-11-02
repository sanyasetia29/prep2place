
const dataInterpretationConcepts = {
  title: "Data Interpretation",

  introduction:
    "Data Interpretation (DI) means reading and analyzing information presented in tables, bar graphs, line graphs or pie charts. It is an important aptitude topic for placement exams.",

  sections: [
    {
      title: "1. Tables",
      explanation:
        "Tables arrange information in rows and columns. Read the headings and units carefully before comparing values or performing calculations.",

      formulas: [
        "Total = Sum of the required values.",
        "Difference = Larger value − Smaller value."
      ],

      examples: [
        {
          question: "Sales were 120 units on Monday and 150 on Tuesday. Find the total sales.",
          solution: [
            "Monday sales = 120 units.",
            "Tuesday sales = 150 units.",
            "Total sales = 120 + 150 = 270 units."
          ]
        }
      ]
    },

    {
      title: "2. Bar Graphs",
      explanation:
        "A bar graph uses rectangular bars to compare values across categories. Check the scale on the vertical axis before reading the values.",

      formulas: [
        "Difference = Value of first bar − Value of second bar.",
        "Total = Sum of all category values."
      ],

      examples: [
        {
          question: "A graph shows 40 students in Class A and 60 in Class B. Find the difference.",
          solution: [
            "Class A = 40 students.",
            "Class B = 60 students.",
            "Difference = 60 − 40 = 20 students."
          ]
        }
      ]
    },

    {
      title: "3. Line Graphs",
      explanation:
        "A line graph shows changes over time. It is useful for understanding increases, decreases and trends in sales, population or production.",

      formulas: [
        "Change = Final value − Initial value",
        "Percentage change = (Change / Initial value) × 100"
      ],

      examples: [
        {
          question: "Sales increased from 200 units to 250 units. Find the percentage increase.",
          solution: [
            "Increase = 250 − 200 = 50.",
            "Percentage increase = (50 / 200) × 100.",
            "Percentage increase = 25%."
          ]
        }
      ]
    },

    {
      title: "4. Pie Charts",
      explanation:
        "A pie chart represents a total using sectors of a circle. The complete circle represents 360 degrees.",

      formulas: [
        "Sector angle = (Category value / Total value) × 360°",
        "Category value = (Sector angle / 360°) × Total value"
      ],

      examples: [
        {
          question: "A pie chart represents 200 students. What is the number of students in a 90° sector?",
          solution: [
            "Total students = 200.",
            "Sector fraction = 90 / 360 = 1/4.",
            "Students = 200 × 1/4 = 50."
          ]
        }
      ]
    },

    {
      title: "5. Percentage Calculations",
      explanation:
        "Percentages help compare a part with a total. Always identify the correct base value before calculating the percentage.",

      formulas: [
        "Percentage = (Part / Total) × 100",
        "Part = (Percentage / 100) × Total"
      ],

      examples: [
        {
          question: "A company produced 500 items, of which 125 were defective. Find the defective percentage.",
          solution: [
            "Defective items = 125.",
            "Total items = 500.",
            "Percentage = (125 / 500) × 100 = 25%."
          ]
        }
      ]
    },

    {
      title: "6. Ratio and Average in Data",
      explanation:
        "Data Interpretation questions often ask for ratios and averages across different categories or time periods.",

      formulas: [
        "Average = Sum of values / Number of values",
        "Ratio = First quantity : Second quantity"
      ],

      examples: [
        {
          question: "Production over three days was 100, 120 and 140 units. Find the average production.",
          solution: [
            "Total = 100 + 120 + 140 = 360.",
            "Number of days = 3.",
            "Average = 360 / 3 = 120 units."
          ]
        }
      ]
    },

    {
      title: "7. Tips for Solving DI Questions",
      explanation:
        "Read the question carefully before calculating. Check units, scales, time periods and whether the question asks for a total, difference, average or percentage.",

      formulas: [
        "Percentage increase = (Increase / Original value) × 100",
        "Percentage decrease = (Decrease / Original value) × 100"
      ],

      examples: [
        {
          question: "A value falls from 80 to 60. Find the percentage decrease.",
          solution: [
            "Decrease = 80 − 60 = 20.",
            "Original value = 80.",
            "Percentage decrease = (20 / 80) × 100 = 25%."
          ]
        }
      ]
    }
  ],

  revision: [
    "Read table headings and graph scales carefully.",
    "Total = Sum of the required values.",
    "Difference = Larger value − Smaller value.",
    "Percentage = (Part / Total) × 100.",
    "Average = Sum of values / Number of values.",
    "Pie chart sector angle = (Category / Total) × 360°.",
    "Percentage change is calculated using the original value.",
    "Check units before selecting your final answer."
  ]
};

export default dataInterpretationConcepts;
