
const mixtureAlligationConcepts = {
  title: "Mixture & Alligation",

  introduction:
    "Mixture and Alligation is an aptitude topic used to solve problems involving two or more ingredients mixed together at different prices, concentrations, or ratios.",

  sections: [
    {
      title: "1. What is a Mixture?",
      explanation:
        "A mixture is formed when two or more substances are combined. Questions often involve mixing milk and water, different types of rice, or solutions with different concentrations.",

      formulas: [
        "Total Quantity = Quantity 1 + Quantity 2",
        "Total Value = Value of each ingredient added together"
      ],

      examples: [
        {
          question: "A mixture contains 3 litres of milk and 2 litres of water. Find its total quantity.",
          solution: [
            "Milk = 3 litres.",
            "Water = 2 litres.",
            "Total quantity = 3 + 2 = 5 litres."
          ]
        }
      ]
    },

    {
      title: "2. Mean Price of a Mixture",
      explanation:
        "When two ingredients have different prices, the average price of the mixture depends on their quantities and individual prices.",

      formulas: [
        "Mean Price = Total Cost / Total Quantity",
        "Total Cost = (Q1 × P1) + (Q2 × P2)"
      ],

      examples: [
        {
          question: "10 kg of rice costs ₹40/kg and 10 kg costs ₹60/kg. Find the mean price.",
          solution: [
            "Cost of first rice = 10 × 40 = ₹400.",
            "Cost of second rice = 10 × 60 = ₹600.",
            "Total cost = ₹1,000; total quantity = 20 kg.",
            "Mean price = 1000 / 20 = ₹50/kg."
          ]
        }
      ]
    },

    {
      title: "3. What is Alligation?",
      explanation:
        "Alligation is a shortcut method to find the ratio in which two ingredients with different prices or concentrations should be mixed to obtain a desired mean price or concentration.",

      formulas: [
        "Cheaper : Dearer = (Dearer Price − Mean Price) : (Mean Price − Cheaper Price)"
      ],

      examples: [
        {
          question: "In what ratio should ₹20/kg and ₹40/kg rice be mixed to get a mixture worth ₹30/kg?",
          solution: [
            "Cheaper price = ₹20/kg.",
            "Dearer price = ₹40/kg.",
            "Cheaper : Dearer = (40 − 30) : (30 − 20).",
            "Ratio = 10 : 10 = 1 : 1."
          ]
        }
      ]
    },

    {
      title: "4. Mixing Different Concentrations",
      explanation:
        "The same alligation method can be used for solutions having different concentrations, such as 20% and 50% sugar solutions.",

      formulas: [
        "Ratio = (Higher Concentration − Mean Concentration) : (Mean Concentration − Lower Concentration)"
      ],

      examples: [
        {
          question: "In what ratio should 20% and 50% solutions be mixed to obtain a 30% solution?",
          solution: [
            "Lower concentration = 20%.",
            "Higher concentration = 50%.",
            "Ratio = (50 − 30) : (30 − 20).",
            "Ratio = 20 : 10 = 2 : 1."
          ]
        }
      ]
    },

    {
      title: "5. Replacing a Part of a Mixture",
      explanation:
        "When some quantity is removed from a well-mixed container and replaced with another liquid, the original liquid decreases after each replacement.",

      formulas: [
        "Original liquid remaining = Initial quantity × (1 − Removed quantity / Total quantity)^n",
        "n = Number of replacement operations"
      ],

      examples: [
        {
          question: "A 10-litre container is full of milk. Two litres are removed and replaced with water. How much milk remains?",
          solution: [
            "Initial milk = 10 litres.",
            "Fraction of milk remaining = 1 − 2/10 = 4/5.",
            "Milk remaining = 10 × 4/5 = 8 litres."
          ]
        }
      ]
    }
  ],

  revision: [
    "A mixture combines two or more ingredients.",
    "Mean price = Total cost / Total quantity.",
    "Alligation finds the mixing ratio for a desired mean.",
    "Cheaper : Dearer = (Dearer − Mean) : (Mean − Cheaper).",
    "The desired mean must lie between the two prices or concentrations.",
    "For repeated replacement, use the remaining fraction raised to the number of operations."
  ]
};

export default mixtureAlligationConcepts;
