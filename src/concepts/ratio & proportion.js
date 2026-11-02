const ratioProportionConcepts = {
  title: "Ratio & Proportion",

  introduction: `Ratio and Proportion is an important topic in quantitative aptitude. It helps us compare quantities and understand the relationship between different values. These concepts are commonly used in placement exams, competitive exams, business calculations, and everyday situations.`,

  sections: [
    {
      title: "1. Understanding Ratio",
      explanation: `A ratio compares two quantities of the same kind. It tells us how many times one quantity is compared with another. A ratio is written using a colon (:). For example, if there are 10 boys and 15 girls, the ratio of boys to girls is 10:15. Dividing both terms by 5 gives the simplest ratio 2:3. The order of quantities is important: boys to girls is not the same as girls to boys.`,

      formulas: [
        "Ratio of a to b = a:b = a/b",
        "Simplest ratio: Divide both terms by their HCF."
      ],

      examples: [
        {
          question: "Simplify the ratio 24:36.",
          solution: [
            "Step 1: Find the HCF of 24 and 36, which is 12.",
            "Step 2: Divide both terms by 12.",
            "24 ÷ 12 = 2 and 36 ÷ 12 = 3.",
            "Answer: 2:3."
          ]
        },
        {
          question: "There are 12 boys and 18 girls. Find the ratio of boys to girls.",
          solution: [
            "Ratio = 12:18.",
            "Divide both terms by their HCF, 6.",
            "Answer: 2:3."
          ]
        }
      ]
    },

    {
      title: "2. Equivalent Ratios",
      explanation: `Equivalent ratios have the same value even when their numbers are different. We can make an equivalent ratio by multiplying or dividing both terms by the same non-zero number. For example, 2:3, 4:6, and 6:9 are equivalent ratios.`,

      formulas: [
        "a:b = (a × k):(b × k)",
        "Here, k is the same non-zero number for both terms."
      ],

      examples: [
        {
          question: "Find a ratio equivalent to 5:7 with the first term equal to 20.",
          solution: [
            "Step 1: 5 × 4 = 20.",
            "Step 2: Multiply the second term by 4 as well.",
            "7 × 4 = 28.",
            "Answer: 20:28."
          ]
        }
      ]
    },

    {
      title: "3. Dividing a Quantity in a Given Ratio",
      explanation: `When a total quantity is divided in a ratio, first add the terms of the ratio. Divide the total by this sum to find the value of one part. Then multiply by each ratio term to find each share.`,

      formulas: [
        "Total parts = a + b",
        "First share = Total × a/(a+b)",
        "Second share = Total × b/(a+b)"
      ],

      examples: [
        {
          question: "Divide ₹600 between A and B in the ratio 2:3.",
          solution: [
            "Step 1: Total parts = 2 + 3 = 5.",
            "Step 2: Value of one part = ₹600 ÷ 5 = ₹120.",
            "Step 3: A's share = 2 × ₹120 = ₹240.",
            "Step 4: B's share = 3 × ₹120 = ₹360.",
            "Answer: A gets ₹240 and B gets ₹360."
          ]
        }
      ]
    },

    {
      title: "4. Understanding Proportion",
      explanation: `Proportion means that two ratios are equal. If a:b = c:d, the four quantities are in proportion. We write this as a:b::c:d. In this expression, a and d are called extremes, while b and c are called means.`,

      formulas: [
        "a:b = c:d",
        "a/b = c/d",
        "a × d = b × c",
        "Product of extremes = Product of means"
      ],

      examples: [
        {
          question: "Are 2:3 and 8:12 in proportion?",
          solution: [
            "Step 1: Compare the ratios 2/3 and 8/12.",
            "Step 2: Cross multiply: 2 × 12 = 24.",
            "Step 3: 3 × 8 = 24.",
            "Both products are equal.",
            "Answer: Yes, they are in proportion."
          ]
        }
      ]
    },

    {
      title: "5. Finding a Missing Value in Proportion",
      explanation: `When three values are known and one value is missing, use cross multiplication to find the unknown value. Make sure the ratios are arranged in the correct order before calculating.`,

      formulas: [
        "If a/b = c/x, then a × x = b × c",
        "Therefore, x = (b × c)/a"
      ],

      examples: [
        {
          question: "Find x if 4:5 = 20:x.",
          solution: [
            "Step 1: Write 4/5 = 20/x.",
            "Step 2: Cross multiply: 4x = 5 × 20.",
            "Step 3: 4x = 100.",
            "Step 4: x = 100 ÷ 4 = 25.",
            "Answer: x = 25."
          ]
        }
      ]
    },

    {
      title: "6. Direct Proportion",
      explanation: `Two quantities are in direct proportion when they increase or decrease together in the same ratio. For example, if one notebook costs ₹20, buying more notebooks increases the total cost proportionally, assuming the price per notebook stays the same.`,

      formulas: [
        "y ∝ x",
        "y/x = constant",
        "y₁/x₁ = y₂/x₂"
      ],

      examples: [
        {
          question: "If 4 notebooks cost ₹80, what is the cost of 7 notebooks?",
          solution: [
            "Step 1: Cost of one notebook = ₹80 ÷ 4 = ₹20.",
            "Step 2: Cost of 7 notebooks = 7 × ₹20.",
            "Answer: ₹140."
          ]
        }
      ]
    },

    {
      title: "7. Inverse Proportion",
      explanation: `Two quantities are in inverse proportion when one increases and the other decreases so that their product remains constant. For example, when more workers do the same amount of work at the same rate, the time required usually decreases.`,

      formulas: [
        "x ∝ 1/y",
        "x₁ × y₁ = x₂ × y₂"
      ],

      examples: [
        {
          question: "6 workers complete a job in 10 days. How many days will 12 workers take, assuming equal working rates?",
          solution: [
            "Step 1: More workers mean fewer days, so this is inverse proportion.",
            "Step 2: 6 × 10 = 12 × x.",
            "Step 3: 60 = 12x.",
            "Step 4: x = 60 ÷ 12 = 5.",
            "Answer: 5 days."
          ]
        }
      ]
    },

    {
      title: "8. Combining Ratios",
      explanation: `Sometimes two ratios share a common quantity. To combine them, make the common term equal in both ratios, then compare the remaining terms. This method is useful when three quantities are related through two different ratios.`,

      formulas: [
        "For A:B and B:C, make B equal in both ratios before combining."
      ],

      examples: [
        {
          question: "If A:B = 2:3 and B:C = 4:5, find A:B:C.",
          solution: [
            "Step 1: A:B = 2:3. Multiply both terms by 4 to get 8:12.",
            "Step 2: B:C = 4:5. Multiply both terms by 3 to get 12:15.",
            "Step 3: The common B value is now 12.",
            "Answer: A:B:C = 8:12:15."
          ]
        }
      ]
    },

    {
      title: "9. Ratio Changes When Quantities Change",
      explanation: `When a value is added to or removed from one or both quantities, the ratio changes. Use the new quantities to form the new ratio. Do not assume the original ratio remains the same after a change.`,

      formulas: [
        "New ratio = New first quantity : New second quantity"
      ],

      examples: [
        {
          question: "The ratio of two numbers is 3:5. If both are multiplied by 2, what is the new ratio?",
          solution: [
            "Step 1: The new ratio is (3 × 2):(5 × 2).",
            "Step 2: This becomes 6:10.",
            "Step 3: Simplify by dividing both terms by 2.",
            "Answer: 3:5. Multiplying both terms by the same number does not change the ratio."
          ]
        }
      ]
    },

    {
      title: "10. Common Mistakes",
      explanation: `Avoid these mistakes while solving ratio and proportion questions.`,

      formulas: [
        "Keep the order of quantities consistent.",
        "Simplify a ratio by dividing both terms by the same HCF.",
        "When dividing a total, add the ratio terms first.",
        "Use direct proportion when quantities change together.",
        "Use inverse proportion when one increases as the other decreases and their product remains constant."
      ],

      examples: [
        {
          question: "A total of ₹400 is divided in the ratio 1:3. Why is the first share not ₹100 automatically in every problem?",
          solution: [
            "For this particular question, total parts = 1 + 3 = 4.",
            "One part = ₹400 ÷ 4 = ₹100.",
            "The first share is ₹100 and the second is ₹300.",
            "Always calculate the total parts before finding each share."
          ]
        }
      ]
    }
  ],

  revision: [
    "Ratio compares two quantities and is written as a:b.",
    "Simplify a ratio by dividing both terms by their HCF.",
    "To divide a total in a ratio, add the ratio terms first.",
    "In proportion, the product of extremes equals the product of means.",
    "Direct proportion: both quantities change in the same direction.",
    "Inverse proportion: one increases as the other decreases, with a constant product.",
    "For combined ratios, make the shared term equal before combining."
  ]
};

export default ratioProportionConcepts;