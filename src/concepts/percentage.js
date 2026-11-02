const percentageConcepts = {
  title: "Percentage",
  introduction: `
    Percentage means expressing a value as a part of 100.
    The word percent means "per hundred".

    Percentages help us compare values even when the totals
    are different. They are commonly used in marks, discounts,
    profit and loss, population growth and placement aptitude.
  `,

  sections: [
    {
      title: "1. Understanding the Meaning of Percentage",
      explanation: `
        A percentage tells us how many parts we have out of
        every 100 equal parts.

        For example, 60% means 60 parts out of 100.
        It can also be written as 60/100 or 0.60.

        The symbol % represents percentage.
      `,
      formulas: [
        "Percentage = (Part / Total) × 100"
      ],
      examples: [
        {
          question: "A student scores 40 marks out of 50. Find the percentage.",
          solution: [
            "Part = 40",
            "Total = 50",
            "Percentage = (40 / 50) × 100",
            "Answer = 80%"
          ]
        }
      ]
    },

    {
      title: "2. Converting Fractions, Decimals and Percentages",
      explanation: `
        Fractions, decimals and percentages are different ways
        of representing the same value.

        To convert a fraction into a percentage, multiply it
        by 100.

        To convert a percentage into a decimal, divide it by 100.
        To convert a decimal into a percentage, multiply it by 100.
      `,
      formulas: [
        "Fraction to Percentage = Fraction × 100",
        "Percentage to Decimal = Percentage / 100",
        "Decimal to Percentage = Decimal × 100"
      ],
      examples: [
        {
          question: "Convert 3/4 into a percentage.",
          solution: [
            "Percentage = (3 / 4) × 100",
            "Answer = 75%"
          ]
        },
        {
          question: "Convert 0.35 into a percentage.",
          solution: [
            "Percentage = 0.35 × 100",
            "Answer = 35%"
          ]
        }
      ]
    },

    {
      title: "3. Finding a Percentage of a Number",
      explanation: `
        Sometimes we know the total value and the required
        percentage, and we need to find the actual quantity.

        In this case, convert the percentage into a fraction
        by dividing it by 100, then multiply it by the total.
      `,
      formulas: [
        "Value = (Percentage / 100) × Total"
      ],
      examples: [
        {
          question: "Find 25% of 240.",
          solution: [
            "Value = (25 / 100) × 240",
            "Value = 60",
            "Answer = 60"
          ]
        }
      ]
    },

    {
      title: "4. Finding What Percentage One Number Is of Another",
      explanation: `
        When one value is compared with a total, the result
        tells us what percentage the first value represents.

        Always identify the comparison value correctly.
        The total or base value goes in the denominator.
      `,
      formulas: [
        "Percentage = (Value / Base Value) × 100"
      ],
      examples: [
        {
          question: "30 is what percentage of 120?",
          solution: [
            "Percentage = (30 / 120) × 100",
            "Answer = 25%"
          ]
        }
      ]
    },

    {
      title: "5. Percentage Increase and Decrease",
      explanation: `
        A percentage increase describes how much a value
        rises compared with its original value.

        A percentage decrease describes how much a value
        falls compared with its original value.

        In both cases, use the original value as the base.
      `,
      formulas: [
        "Percentage Change = (Change / Original Value) × 100",
        "Percentage Increase = (Increase / Original Value) × 100",
        "Percentage Decrease = (Decrease / Original Value) × 100"
      ],
      examples: [
        {
          question: "A price increases from 200 to 250. Find the percentage increase.",
          solution: [
            "Increase = 250 - 200 = 50",
            "Percentage Increase = (50 / 200) × 100",
            "Answer = 25%"
          ]
        }
      ]
    },

    {
      title: "6. Successive Percentage Changes",
      explanation: `
        Successive changes happen when a value changes more
        than once, such as a discount followed by another
        discount or an increase followed by a decrease.

        Each new percentage is applied to the value after
        the previous change, not always to the original value.
      `,
      formulas: [
        "Net Change % = a + b + (a × b / 100)"
      ],
      notes: [
        "Use a positive sign for an increase.",
        "Use a negative sign for a decrease.",
        "The formula gives the net percentage change."
      ],
      examples: [
        {
          question: "A value increases by 10% and then by 20%. Find the net increase.",
          solution: [
            "Net Change = 10 + 20 + (10 × 20 / 100)",
            "Net Change = 30 + 2",
            "Answer = 32% increase"
          ]
        }
      ]
    },

    {
      title: "7. Reverse Percentage",
      explanation: `
        Reverse percentage problems ask us to find the original
        value when the final value and percentage change are known.

        After an increase, the final value is greater than the
        original value. After a decrease, it is smaller.

        Therefore, divide the final value by the appropriate
        multiplier to recover the original value.
      `,
      formulas: [
        "Original after an increase = Final Value / (1 + Rate / 100)",
        "Original after a decrease = Final Value / (1 - Rate / 100)"
      ],
      examples: [
        {
          question: "After a 20% increase, a value becomes 600. Find the original value.",
          solution: [
            "Final Value = Original × 1.20",
            "Original = 600 / 1.20",
            "Answer = 500"
          ]
        }
      ]
    },

    {
      title: "8. Comparing Two Values Using Percentages",
      explanation: `
        Percentage comparisons depend on which value is used
        as the base.

        If A is x% more than B, the percentage is calculated
        using B as the base.

        If B is compared with A, the percentage may be different
        because the base value has changed.
      `,
      formulas: [
        "Percentage Difference = (Difference / Reference Value) × 100"
      ],
      examples: [
        {
          question: "A is 25% more than B. If B = 100, find A.",
          solution: [
            "Increase = 25% of 100 = 25",
            "A = 100 + 25",
            "Answer = 125"
          ]
        }
      ]
    },

    {
      title: "9. Common Percentage Mistakes",
      explanation: `
        Always check the base value before calculating.
        A percentage increase and an equal percentage decrease
        do not cancel each other automatically.

        For successive changes, apply each change to the updated
        value. Do not add all percentages blindly.

        Also remember that 20% of 50 is not the same as
        20% of 100 because the base values are different.
      `
    }
  ],

  revision: [
    "Percent means per hundred.",
    "Identify the base value before calculating.",
    "Convert percentages to decimals when multiplying.",
    "Use the original value to calculate percentage change.",
    "For successive changes, consider the effect of each change.",
    "For reverse percentage, work backwards from the final value."
  ]
};

export default percentageConcepts;
