const timeWorkConcepts = {
  title: "Time & Work",

  introduction: `Time and Work is an important topic in quantitative aptitude. It explains how much work a person can complete in a given time. These questions are commonly asked in placement exams and aptitude tests. The main idea is to calculate one day's work, combine the work rates of different people, and determine the time required to complete a task.`,

  sections: [
    {
      title: "1. Basic Concept of Time and Work",
      explanation: `Work means a task that must be completed, such as building a wall, filling a tank, or completing an assignment. Time is the duration needed to complete the task. If a person completes a job in fewer days, their work rate is higher, assuming the amount of work and efficiency remain the same.`,

      formulas: [
        "Work = Efficiency × Time",
        "Work rate = Work / Time",
        "Time = Work / Work rate"
      ],

      examples: [
        {
          question: "A can complete a job in 10 days. What fraction of the work does A complete in one day?",
          solution: [
            "Total work = 1 complete job.",
            "One day's work = Total work / Number of days.",
            "One day's work = 1/10.",
            "Answer: A completes 1/10 of the work per day."
          ]
        }
      ]
    },

    {
      title: "2. Finding One Day's Work",
      explanation: `One day's work is the fraction of the total task completed in one day. If a person finishes the entire job in N days, their one-day work is 1/N. This is the foundation for solving most Time & Work questions.`,

      formulas: [
        "If A completes work in x days, A's one-day work = 1/x",
        "If B completes work in y days, B's one-day work = 1/y"
      ],

      examples: [
        {
          question: "A completes a job in 8 days. How much work does A complete in 3 days?",
          solution: [
            "One day's work = 1/8.",
            "Work in 3 days = 3 × 1/8.",
            "Answer: 3/8 of the total work."
          ]
        }
      ]
    },

    {
      title: "3. Work Done by Two People Together",
      explanation: `When two people work together, their individual work rates are added, provided they work at the same time and do not interfere with each other's work. The combined rate tells us how much of the job they complete in one day.`,

      formulas: [
        "Combined one-day work = 1/x + 1/y",
        "Time together = 1 / (1/x + 1/y)",
        "For two workers: Time together = xy/(x+y)"
      ],

      examples: [
        {
          question: "A can complete a job in 6 days and B in 3 days. How long will they take together?",
          solution: [
            "A's one-day work = 1/6.",
            "B's one-day work = 1/3.",
            "Combined work = 1/6 + 1/3 = 1/2 per day.",
            "Time = 1 ÷ 1/2.",
            "Answer: 2 days."
          ]
        }
      ]
    },

    {
      title: "4. Finding Work Using the LCM Method",
      explanation: `The LCM method makes calculations easier when work rates involve fractions. Assume the total work is the LCM of the number of days taken by the workers. Then calculate how much work each person completes in one day. Add their daily work to find the combined rate.`,

      formulas: [
        "Assumed total work = LCM of individual completion times",
        "One-day work = Total work / Days required",
        "Time together = Total work / Combined daily work"
      ],

      examples: [
        {
          question: "A completes a job in 12 days and B in 18 days. Find their time working together.",
          solution: [
            "Step 1: LCM of 12 and 18 = 36 units of work.",
            "Step 2: A's daily work = 36/12 = 3 units.",
            "Step 3: B's daily work = 36/18 = 2 units.",
            "Step 4: Combined daily work = 3 + 2 = 5 units.",
            "Step 5: Time = 36/5 = 7.2 days.",
            "Answer: 7.2 days."
          ]
        }
      ]
    },

    {
      title: "5. Efficiency and Time",
      explanation: `Efficiency means how much work a person completes in a unit of time. For the same amount of work, higher efficiency means less time is needed. Efficiency and time are inversely proportional when the total work is fixed.`,

      formulas: [
        "Efficiency ∝ 1/Time",
        "Efficiency ratio A:B = Time taken by B : Time taken by A",
        "For equal work: Efficiency × Time = Constant"
      ],

      examples: [
        {
          question: "A completes a job in 6 days and B in 9 days. Find their efficiency ratio A:B.",
          solution: [
            "For the same work, efficiency is inversely proportional to time.",
            "Efficiency ratio A:B = 9:6.",
            "Simplify by dividing both terms by 3.",
            "Answer: 3:2."
          ]
        }
      ]
    },

    {
      title: "6. Work and Wages",
      explanation: `When people work for the same task but contribute different amounts of work, wages are usually divided according to the work each person completes. If they work for the same number of days, wages are proportional to their efficiencies. If both time and efficiency differ, compare their total work contributions.`,

      formulas: [
        "Work contribution = Efficiency × Time",
        "Wage ratio = Work contribution ratio"
      ],

      examples: [
        {
          question: "A and B work for the same number of days. Their efficiencies are in the ratio 2:3. If the total wage is ₹1,000, how much does each receive?",
          solution: [
            "Wage ratio = 2:3.",
            "Total parts = 2 + 3 = 5.",
            "One part = ₹1,000/5 = ₹200.",
            "A receives 2 × ₹200 = ₹400.",
            "B receives 3 × ₹200 = ₹600.",
            "Answer: A gets ₹400 and B gets ₹600."
          ]
        }
      ]
    },

    {
      title: "7. One Person Leaves or Joins the Work",
      explanation: `Sometimes two people start a job together, but one person leaves before the job is completed. Calculate the work completed during the first period, subtract it from the total, and then use the remaining worker's rate to find the remaining time.`,

      formulas: [
        "Work completed = Daily work × Number of days",
        "Remaining work = Total work − Completed work",
        "Remaining time = Remaining work / Remaining daily rate"
      ],

      examples: [
        {
          question: "A can complete a job in 10 days and B in 15 days. They work together for 3 days, then A leaves. How many more days does B need?",
          solution: [
            "A's daily work = 1/10.",
            "B's daily work = 1/15.",
            "Together they complete 1/10 + 1/15 = 1/6 per day.",
            "Work completed in 3 days = 3 × 1/6 = 1/2.",
            "Remaining work = 1 − 1/2 = 1/2.",
            "B needs (1/2) ÷ (1/15) = 7.5 days.",
            "Answer: 7.5 more days."
          ]
        }
      ]
    },

    {
      title: "8. Men, Days, and Hours",
      explanation: `When all workers have the same efficiency, the amount of work is proportional to the number of workers and the hours they work. More workers or more working hours can reduce the number of days needed. Assume that each worker works at the same rate unless the question states otherwise.`,

      formulas: [
        "Work ∝ Workers × Days × Hours",
        "M₁ × D₁ × H₁ = M₂ × D₂ × H₂ for the same work"
      ],

      examples: [
        {
          question: "6 workers finish a job in 8 days by working 5 hours daily. How many days will 10 workers take if they work 6 hours daily?",
          solution: [
            "For the same work: 6 × 8 × 5 = 10 × D × 6.",
            "240 = 60D.",
            "D = 240/60 = 4.",
            "Answer: 4 days."
          ]
        }
      ]
    },

    {
      title: "9. Pipes and Cisterns",
      explanation: `Pipes and cisterns are applications of Time & Work. An inlet pipe fills a tank, while an outlet pipe empties it. Filling rates are treated as positive and emptying rates as negative. The net rate determines how long the tank takes to fill or empty.`,

      formulas: [
        "Inlet rate = 1 / Time taken to fill",
        "Outlet rate = −1 / Time taken to empty",
        "Net rate = Sum of all rates",
        "Filling time = 1 / Net positive rate"
      ],

      examples: [
        {
          question: "A pipe fills a tank in 6 hours and an outlet empties it in 12 hours. If both are open, how long will the empty tank take to fill?",
          solution: [
            "Inlet rate = 1/6 tank per hour.",
            "Outlet rate = −1/12 tank per hour.",
            "Net rate = 1/6 − 1/12 = 1/12.",
            "Time = 1 ÷ 1/12.",
            "Answer: 12 hours."
          ]
        }
      ]
    },

    {
      title: "10. Alternate-Day Work",
      explanation: `In alternate-day questions, workers take turns working on different days. Find the work completed during one complete cycle, such as two days when A works on day one and B works on day two. Repeat full cycles, then calculate the final partial day if required.`,

      formulas: [
        "Work in one cycle = Sum of work completed by each worker in that cycle",
        "Remaining work = Total work − Work completed in full cycles"
      ],

      examples: [
        {
          question: "A completes a job in 4 days and B in 6 days. A works on day 1, B on day 2, and they continue alternating. When is the work completed?",
          solution: [
            "A's daily work = 1/4; B's daily work = 1/6.",
            "Work in each two-day cycle = 1/4 + 1/6 = 5/12.",
            "After 2 cycles (4 days), work completed = 10/12 = 5/6.",
            "Remaining work = 1/6.",
            "On day 5, A completes 1/4, which is more than the remaining 1/6.",
            "Time needed on day 5 = (1/6) ÷ (1/4) = 2/3 day.",
            "Answer: 4⅔ days."
          ]
        }
      ]
    },

    {
      title: "11. Common Shortcuts and Observations",
      explanation: `These observations help solve common Time & Work questions quickly. Always check the conditions before applying a shortcut.`,

      formulas: [
        "If A takes x days, A's daily work = 1/x.",
        "If A and B take x and y days, together they take xy/(x+y) days.",
        "For the same work, efficiency ratio is the inverse of the time ratio.",
        "If a person's efficiency increases, the time required for the same work decreases.",
        "For pipes, subtract the outlet rate from the inlet rate."
      ],

      examples: [
        {
          question: "A takes 12 days and B takes 4 days to complete a job. How long will they take together?",
          solution: [
            "Time together = xy/(x+y).",
            "Time = (12 × 4)/(12 + 4).",
            "Time = 48/16.",
            "Answer: 3 days."
          ]
        }
      ]
    },

    {
      title: "12. Common Mistakes",
      explanation: `Avoid these mistakes when solving Time & Work questions.`,

      formulas: [
        "Do not add completion times directly when people work together.",
        "Add daily work rates, not the number of days.",
        "For the same work, efficiency and time are inversely proportional.",
        "Subtract outlet rates in pipe and cistern questions.",
        "In workers-days-hours questions, check whether the total work remains the same.",
        "In alternate-day questions, account for the final partial day."
      ],

      examples: [
        {
          question: "A completes work in 6 days and B in 3 days. Why is their combined time not 9 days?",
          solution: [
            "A's daily work = 1/6.",
            "B's daily work = 1/3.",
            "Combined daily work = 1/6 + 1/3 = 1/2.",
            "They complete half the work per day.",
            "Answer: They finish in 2 days, not 9 days."
          ]
        }
      ]
    }
  ],

  revision: [
    "Work rate = Work / Time.",
    "If a person completes work in x days, one day's work is 1/x.",
    "Combined work rates are added when people work together.",
    "For two people, combined time = xy/(x+y).",
    "For equal work, efficiency and time are inversely proportional.",
    "Wages are divided according to work contribution.",
    "For workers-days-hours questions, workers × days × hours stays constant for the same work and equal efficiency.",
    "For pipes, inlet rates are positive and outlet rates are negative.",
    "For alternate-day work, calculate full cycles and any remaining work."
  ]
};

export default timeWorkConcepts;