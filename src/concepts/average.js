const averageConcepts = {
  title: "Average",

  introduction: `
    Average is a mathematical measure that represents the
    central or typical value of a group of numbers.

    In aptitude, average helps us understand the overall
    value of a group without studying every value separately.
    It is widely used in questions involving marks, ages,
    salaries, production, runs and data analysis.

    The basic idea is to distribute the total equally among
    all the items. The average tells us how much each item
    would receive if the total were shared equally.
  `,

  sections: [
    {
      title: "1. Understanding the Basic Concept of Average",

      explanation: `
        An average is calculated by adding all the given values
        and dividing their sum by the total number of values.

        For example, consider the numbers 10, 20 and 30.
        Their total is 60. If 60 is distributed equally among
        three numbers, each receives 20. Therefore, their
        average is 20.

        The average does not mean that every individual value
        must equal the average. It represents the equal share
        of the total.

        Important: Count the number of observations, not the
        number of different values. If a value appears twice,
        it must be counted twice.
      `,

      formulas: [
        "Average = Sum of all observations / Number of observations",
        "Sum of observations = Average × Number of observations"
      ],

      examples: [
        {
          question: "Find the average of 12, 18, 24 and 26.",

          solution: [
            "Step 1: Add the values: 12 + 18 + 24 + 26 = 80.",
            "Step 2: Count the values. There are 4 observations.",
            "Step 3: Average = 80 / 4.",
            "Answer: 20."
          ]
        }
      ]
    },

    {
      title: "2. Finding the Total When Average Is Given",

      explanation: `
        Sometimes the average and the number of observations
        are given, but the total is unknown.

        Since average represents the total divided equally
        among all observations, we can reverse the formula
        by multiplying the average by the number of observations.

        This method is especially useful in questions about
        average marks, average salary, average age and average
        production.
      `,

      formulas: [
        "Total = Average × Number of observations"
      ],

      examples: [
        {
          question: "The average marks of 8 students are 75. Find their total marks.",

          solution: [
            "Average marks = 75.",
            "Number of students = 8.",
            "Total marks = 75 × 8.",
            "Answer: 600 marks."
          ]
        }
      ]
    },

    {
      title: "3. Finding a Missing Number",

      explanation: `
        In missing-number problems, the average of a group
        is given along with some known values. One value is
        unknown and must be calculated.

        The most reliable method is to find the total of the
        complete group first. Then subtract the sum of the
        known values.

        Remember that the number of observations includes
        the missing value.
      `,

      formulas: [
        "Complete Total = Average × Number of observations",
        "Missing Value = Complete Total - Sum of known values"
      ],

      examples: [
        {
          question: "The average of 5 numbers is 16. Four numbers are 10, 12, 18 and 20. Find the fifth number.",

          solution: [
            "Step 1: Total of all 5 numbers = 16 × 5 = 80.",
            "Step 2: Sum of known numbers = 10 + 12 + 18 + 20 = 60.",
            "Step 3: Missing number = 80 - 60.",
            "Answer: 20."
          ]
        }
      ]
    },

    {
      title: "4. Effect of Adding a New Value",

      explanation: `
        When a new value is added to a group, both the total
        and the number of observations change.

        The new average depends on whether the added value is
        greater than, equal to or less than the old average.

        If the new value is greater than the old average,
        the average increases. If it is smaller, the average
        decreases. If it is equal, the average remains unchanged.

        This happens because the new value pulls the group's
        average towards itself.
      `,

      formulas: [
        "New Average = (Old Total + New Value) / (Old Count + 1)"
      ],

      examples: [
        {
          question: "The average of 4 numbers is 15. A fifth number, 25, is added. Find the new average.",

          solution: [
            "Step 1: Old total = 15 × 4 = 60.",
            "Step 2: New total = 60 + 25 = 85.",
            "Step 3: New count = 5.",
            "New average = 85 / 5.",
            "Answer: 17."
          ]
        }
      ]
    },

    {
      title: "5. Effect of Removing a Value",

      explanation: `
        When one observation is removed, its value is subtracted
        from the total and the number of observations decreases
        by one.

        Do not divide the old total by the new count without
        first removing the value that is no longer included.

        Removing a value above the old average generally lowers
        the average. Removing a value below the old average
        generally raises it.
      `,

      formulas: [
        "New Average = (Old Total - Removed Value) / (Old Count - 1)"
      ],

      examples: [
        {
          question: "The average of 5 numbers is 20. One number, 30, is removed. Find the new average.",

          solution: [
            "Step 1: Old total = 20 × 5 = 100.",
            "Step 2: Remaining total = 100 - 30 = 70.",
            "Step 3: Remaining count = 4.",
            "New average = 70 / 4.",
            "Answer: 17.5."
          ]
        }
      ]
    },

    {
      title: "6. Replacement and Change in Average",

      explanation: `
        Replacement problems occur when one member or item is
        removed and another is included in its place.

        Instead of calculating the entire new total, we can
        compare the old value with the replacement value.

        If the new value is greater, the total increases by
        the difference. If it is smaller, the total decreases
        by the difference.

        The number of observations stays the same during a
        one-for-one replacement.
      `,

      formulas: [
        "Change in Total = New Value - Old Value",
        "Change in Average = Change in Total / Number of observations"
      ],

      examples: [
        {
          question: "The average of 10 students increases by 2 marks when one student is replaced. If the old student's marks were 55, find the new student's marks.",

          solution: [
            "Step 1: Increase in average = 2.",
            "Step 2: Increase in total = 2 × 10 = 20.",
            "Step 3: New student's marks = 55 + 20.",
            "Answer: 75 marks."
          ]
        }
      ]
    },

    {
      title: "7. Combined Average of Two Groups",

      explanation: `
        A combined average represents the average of two or
        more groups considered together.

        The overall average is not necessarily the simple
        average of the group averages. Each group may contain
        a different number of observations.

        First calculate the total of each group using its
        average and group size. Add the group totals, then
        divide by the total number of observations.

        This method gives each individual observation equal
        importance.
      `,

      formulas: [
        "Combined Average = (n₁a₁ + n₂a₂) / (n₁ + n₂)",
        "n₁, n₂ = Group sizes",
        "a₁, a₂ = Group averages"
      ],

      examples: [
        {
          question: "Class A has 20 students with an average score of 60. Class B has 30 students with an average score of 70. Find the combined average.",

          solution: [
            "Step 1: Class A total = 20 × 60 = 1200.",
            "Step 2: Class B total = 30 × 70 = 2100.",
            "Step 3: Combined total = 1200 + 2100 = 3300.",
            "Step 4: Total students = 20 + 30 = 50.",
            "Combined average = 3300 / 50.",
            "Answer: 66."
          ]
        }
      ]
    },

    {
      title: "8. Weighted Average",

      explanation: `
        A weighted average is used when different values have
        different levels of importance or represent different
        quantities.

        For example, a student's final grade may depend on
        examinations that carry different weightages. Similarly,
        the average price of items depends on how many items
        were purchased at each price.

        Multiply each value by its weight, add these products,
        and divide by the sum of the weights.

        When all weights are equal, the weighted average becomes
        the ordinary arithmetic average.
      `,

      formulas: [
        "Weighted Average = Sum of (Value × Weight) / Sum of weights"
      ],

      examples: [
        {
          question: "A student scores 80 in a test weighted 40% and 70 in a test weighted 60%. Find the weighted average.",

          solution: [
            "Step 1: First weighted score = 80 × 0.40 = 32.",
            "Step 2: Second weighted score = 70 × 0.60 = 42.",
            "Step 3: Add the weighted scores: 32 + 42 = 74.",
            "Answer: 74."
          ]
        }
      ]
    },

    {
      title: "9. Average of Consecutive Numbers",

      explanation: `
        Consecutive numbers follow one another in order, such
        as 4, 5, 6, 7 and 8.

        When the numbers form an equally spaced sequence,
        the average equals the middle value if the number
        of terms is odd.

        If the number of terms is even, the average is the
        mean of the two middle values. This works because
        values on opposite sides of the center balance each
        other equally.

        For an arithmetic sequence, the average is also equal
        to the average of the first and last terms.
      `,
      formulas: [
        "Average of an arithmetic sequence = (First Term + Last Term) / 2"
      ],
      examples: [
        {
          question: "Find the average of 11, 13, 15, 17 and 19.",
          solution: [
            "First term = 11.",
            "Last term = 19.",
            "Average = (11 + 19) / 2.",
            "Answer: 15."
          ]
        }
      ]
    },

    {
      title: "10. Average Speed: An Important Difference",

      explanation: `
        Average speed is total distance divided by total time.
        It is not always equal to the arithmetic average of
        two speeds.

        If a person travels different distances at different
        speeds, calculate the total distance and divide it by
        the total time taken.

        For equal distances travelled at two speeds, the
        average speed is the harmonic mean of those speeds.
        For equal time intervals, the average speed is the
        arithmetic mean of the speeds.
      `,

      formulas: [
        "Average Speed = Total Distance / Total Time",
        "For equal distances at speeds u and v: Average Speed = 2uv / (u + v)"
      ],

      examples: [
        {
          question: "A car travels 60 km at 30 km/h and another 60 km at 60 km/h. Find its average speed.",

          solution: [
            "Step 1: First journey time = 60 / 30 = 2 hours.",
            "Step 2: Second journey time = 60 / 60 = 1 hour.",
            "Step 3: Total distance = 120 km.",
            "Step 4: Total time = 3 hours.",
            "Average speed = 120 / 3.",
            "Answer: 40 km/h."
          ]
        }
      ]
    },

    {
      title: "11. Shortcuts and Useful Observations",

      explanation: `
        Average questions can often be solved faster by using
        the relationship between average, total and count.

        If every value increases by the same amount, the
        average increases by that amount.

        If every value is multiplied by the same number, the
        average is multiplied by that number.

        If the average of a group changes, multiply the
        difference in average by the number of observations
        to find the change in total.

        For equally spaced values, the average can often be
        found from the first and last values without adding
        every number separately.
      `,

      formulas: [
        "Change in Total = Change in Average × Number of observations",
        "New Average after adding k to every value = Old Average + k",
        "New Average after multiplying every value by k = Old Average × k"
      ]
    },

    {
      title: "12. Common Mistakes in Average Problems",

      explanation: `
        Mistake 1: Dividing by the wrong number of observations.
        Always count all values, including repeated values.

        Mistake 2: Taking the simple average of two group
        averages when the group sizes are different.
        Use the combined-average formula instead.

        Mistake 3: Forgetting to remove an old value from
        the total in a replacement problem.

        Mistake 4: Assuming average speed is always the
        arithmetic mean of two speeds. Use total distance
        divided by total time.

        Mistake 5: Rounding values too early. Keep exact
        values until the final step whenever possible.
      `
    }
  ],

  revision: [
    "Average = Sum of observations / Number of observations.",
    "Total = Average × Number of observations.",
    "Find a missing value by subtracting known values from the complete total.",
    "Adding or removing a value changes both the total and the count.",
    "In replacement problems, the count remains unchanged.",
    "Use group sizes when calculating a combined average.",
    "Weighted averages account for different weights.",
    "For equally spaced numbers, average = (first + last) / 2.",
    "Average speed = Total distance / Total time.",
    "Check the base count and avoid rounding too early."
  ]
};

export default averageConcepts;
