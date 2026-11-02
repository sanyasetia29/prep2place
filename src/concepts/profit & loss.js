const profitLossConcepts = {
  title: "Profit & Loss",

  introduction: `Profit and Loss is an important quantitative aptitude topic used in placement exams, business calculations, and everyday shopping. It helps us calculate whether a seller earns a profit or suffers a loss when selling an item. To solve these questions correctly, we must understand Cost Price, Selling Price, Profit, Loss, and their percentages.`,

  sections: [
    {
      title: "1. Understanding Cost Price and Selling Price",
      explanation: `Cost Price (CP) is the price at which an item is purchased. Selling Price (SP) is the price at which the item is sold. The difference between these two prices tells us whether a profit or loss occurs.`,

      formulas: [
        "CP = Cost Price",
        "SP = Selling Price",
        "If SP > CP, there is a profit.",
        "If SP < CP, there is a loss.",
        "If SP = CP, there is neither profit nor loss."
      ],

      examples: [
        {
          question: "A shopkeeper buys a bag for ₹500 and sells it for ₹650. Find the result.",
          solution: [
            "Cost Price = ₹500.",
            "Selling Price = ₹650.",
            "Since SP is greater than CP, there is a profit.",
            "Profit = SP − CP = ₹650 − ₹500.",
            "Answer: Profit = ₹150."
          ]
        }
      ]
    },

    {
      title: "2. Calculating Profit and Loss",
      explanation: `Profit is the amount earned when an item is sold for more than its cost price. Loss is the amount lost when an item is sold for less than its cost price. Always compare the selling price with the cost price to decide which formula to use.`,

      formulas: [
        "Profit = SP − CP",
        "Loss = CP − SP"
      ],

      examples: [
        {
          question: "An item is bought for ₹800 and sold for ₹720. Find the loss.",
          solution: [
            "CP = ₹800 and SP = ₹720.",
            "Since CP > SP, there is a loss.",
            "Loss = CP − SP = ₹800 − ₹720.",
            "Answer: Loss = ₹80."
          ]
        }
      ]
    },

    {
      title: "3. Profit Percentage",
      explanation: `Profit percentage tells us how much profit is earned compared with the cost price. Profit percentage is calculated on Cost Price, not Selling Price. This is one of the most important rules in profit and loss questions.`,

      formulas: [
        "Profit % = (Profit / CP) × 100",
        "SP = CP × (100 + Profit %)/100",
        "CP = SP × 100/(100 + Profit %)"
      ],

      examples: [
        {
          question: "A watch is bought for ₹1,000 and sold for ₹1,200. Find the profit percentage.",
          solution: [
            "Step 1: Profit = ₹1,200 − ₹1,000 = ₹200.",
            "Step 2: Profit % = (Profit / CP) × 100.",
            "Step 3: Profit % = (200 / 1,000) × 100.",
            "Answer: 20% profit."
          ]
        }
      ]
    },

    {
      title: "4. Loss Percentage",
      explanation: `Loss percentage tells us how much loss occurs compared with the cost price. Like profit percentage, loss percentage is also calculated on Cost Price.`,

      formulas: [
        "Loss % = (Loss / CP) × 100",
        "SP = CP × (100 − Loss %)/100",
        "CP = SP × 100/(100 − Loss %)"
      ],

      examples: [
        {
          question: "A phone accessory costs ₹800 and is sold for ₹600. Find the loss percentage.",
          solution: [
            "Step 1: Loss = ₹800 − ₹600 = ₹200.",
            "Step 2: Loss % = (200 / 800) × 100.",
            "Answer: 25% loss."
          ]
        }
      ]
    },

    {
      title: "5. Finding Selling Price from Profit or Loss",
      explanation: `When the cost price and profit or loss percentage are given, we can calculate the selling price directly. For profit, add the profit percentage to 100. For loss, subtract the loss percentage from 100.`,

      formulas: [
        "SP at profit p% = CP × (100 + p)/100",
        "SP at loss l% = CP × (100 − l)/100"
      ],

      examples: [
        {
          question: "An item costs ₹2,000. Find its selling price at a profit of 15%.",
          solution: [
            "CP = ₹2,000 and profit = 15%.",
            "SP = 2,000 × (100 + 15)/100.",
            "SP = 2,000 × 115/100.",
            "Answer: ₹2,300."
          ]
        },
        {
          question: "An item costs ₹1,500. Find its selling price at a loss of 10%.",
          solution: [
            "SP = 1,500 × (100 − 10)/100.",
            "SP = 1,500 × 90/100.",
            "Answer: ₹1,350."
          ]
        }
      ]
    },

    {
      title: "6. Finding Cost Price from Selling Price",
      explanation: `Sometimes the selling price and profit or loss percentage are given, and we need to find the original cost price. Rearrange the selling price formulas to find CP.`,

      formulas: [
        "CP at p% profit = SP × 100/(100 + p)",
        "CP at l% loss = SP × 100/(100 − l)"
      ],

      examples: [
        {
          question: "An item is sold for ₹920 at a profit of 15%. Find its cost price.",
          solution: [
            "CP = SP × 100/(100 + profit %).",
            "CP = 920 × 100/115.",
            "CP = 92000/115.",
            "Answer: ₹800."
          ]
        }
      ]
    },

    {
      title: "7. Marked Price and Discount",
      explanation: `Marked Price (MP) is the price printed or displayed by the seller before a discount. A discount is a reduction offered on the marked price. Discount is calculated on Marked Price, while profit or loss is calculated on Cost Price.`,

      formulas: [
        "Discount = MP − SP",
        "Discount % = (Discount / MP) × 100",
        "SP = MP × (100 − Discount %)/100"
      ],

      examples: [
        {
          question: "A shirt has a marked price of ₹2,000 and a discount of 20%. Find its selling price.",
          solution: [
            "Discount = 20% of ₹2,000 = ₹400.",
            "Selling Price = ₹2,000 − ₹400.",
            "Answer: ₹1,600."
          ]
        }
      ]
    },

    {
      title: "8. Profit After Giving a Discount",
      explanation: `A shopkeeper can offer a discount on the marked price and still earn a profit if the final selling price is greater than the cost price. To solve these questions, first calculate the discounted selling price and then compare it with the cost price.`,

      formulas: [
        "Discounted SP = MP × (100 − Discount %)/100",
        "Profit % = ((SP − CP)/CP) × 100, when SP > CP"
      ],

      examples: [
        {
          question: "An item costs ₹800. Its marked price is ₹1,200, and a discount of 10% is given. Find the profit percentage.",
          solution: [
            "Step 1: SP = ₹1,200 × 90/100 = ₹1,080.",
            "Step 2: Profit = ₹1,080 − ₹800 = ₹280.",
            "Step 3: Profit % = (280/800) × 100.",
            "Answer: 35% profit."
          ]
        }
      ]
    },

    {
      title: "9. Successive Discounts",
      explanation: `When two discounts are given one after another, we do not simply add the percentages. The second discount is applied to the price remaining after the first discount.`,

      formulas: [
        "Final SP = MP × (1 − d₁/100) × (1 − d₂/100)",
        "Equivalent discount % = d₁ + d₂ − (d₁ × d₂)/100"
      ],

      examples: [
        {
          question: "Find the equivalent discount for successive discounts of 20% and 10%.",
          solution: [
            "Equivalent discount = 20 + 10 − (20 × 10)/100.",
            "Equivalent discount = 30 − 2.",
            "Answer: 28%."
          ]
        }
      ]
    },

    {
      title: "10. Two Items Sold at the Same Selling Price",
      explanation: `When two items are sold at the same selling price, one at a profit percentage and the other at a loss percentage, the overall result depends on the cost prices. If the profit and loss percentages are equal and both are calculated on their respective cost prices, the combined result is generally a loss when the selling prices are equal.`,

      formulas: [
        "Total CP = CP₁ + CP₂",
        "Total SP = SP₁ + SP₂",
        "Overall profit or loss = Total SP − Total CP"
      ],

      examples: [
        {
          question: "Two items are each sold for ₹120. One gives a 20% profit and the other a 20% loss. Find the overall result.",
          solution: [
            "First item: CP = 120 × 100/120 = ₹100.",
            "Second item: CP = 120 × 100/80 = ₹150.",
            "Total CP = ₹250; total SP = ₹240.",
            "Loss = ₹250 − ₹240 = ₹10.",
            "Loss % = (10/250) × 100 = 4%.",
            "Answer: 4% overall loss."
          ]
        }
      ]
    },

    {
      title: "11. Common Shortcuts",
      explanation: `Shortcuts can help solve placement aptitude questions faster, but first understand the basic formulas. Use these observations only when their conditions match the question.`,

      formulas: [
        "20% profit means SP = 120% of CP.",
        "25% loss means SP = 75% of CP.",
        "If SP is 120% of CP, profit = 20%.",
        "If SP is 80% of CP, loss = 20%.",
        "For successive discounts, use the equivalent discount formula."
      ],

      examples: [
        {
          question: "An item sells for 75% of its cost price. Find the loss percentage.",
          solution: [
            "SP = 75% of CP.",
            "Loss = 100% − 75% = 25% of CP.",
            "Answer: 25% loss."
          ]
        }
      ]
    },

    {
      title: "12. Common Mistakes",
      explanation: `Avoid these common mistakes while solving profit and loss questions.`,

      formulas: [
        "Profit % and Loss % are calculated on Cost Price.",
        "Discount % is calculated on Marked Price.",
        "Do not confuse Marked Price with Cost Price.",
        "Apply successive discounts one after another.",
        "For multiple items, calculate total cost and total selling prices before finding overall profit or loss."
      ],

      examples: [
        {
          question: "An item costs ₹500 and is sold for ₹600. Why is the profit percentage 20%, not 16.67%?",
          solution: [
            "Profit = ₹600 − ₹500 = ₹100.",
            "Profit % = (Profit / CP) × 100.",
            "Profit % = (100/500) × 100 = 20%.",
            "The cost price is the base for profit percentage."
          ]
        }
      ]
    }
  ],

  revision: [
    "Cost Price (CP) is the buying price.",
    "Selling Price (SP) is the selling price.",
    "Profit = SP − CP when SP > CP.",
    "Loss = CP − SP when CP > SP.",
    "Profit % = (Profit / CP) × 100.",
    "Loss % = (Loss / CP) × 100.",
    "Discount = Marked Price − Selling Price.",
    "Discount % is calculated on Marked Price.",
    "Successive discounts should not simply be added.",
    "For overall profit or loss, compare total SP with total CP."
  ]
};

export default profitLossConcepts;