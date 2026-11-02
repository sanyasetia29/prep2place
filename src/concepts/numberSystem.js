
const numberSystemConcepts = {
  title: "Number System",

  introduction:
    "A number system is a way of classifying numbers. It is an important aptitude topic used in placement tests and competitive exams.",

  sections: [
    {
      title: "1. Natural Numbers",
      explanation:
        "Natural numbers are counting numbers starting from 1.",
      formulas: ["N = {1, 2, 3, 4, 5, ...}"],
      examples: [
        {
          question: "Is 0 a natural number?",
          solution: [
            "Natural numbers usually start from 1.",
            "Therefore, 0 is not a natural number under this convention."
          ]
        }
      ]
    },
    {
      title: "2. Whole Numbers",
      explanation:
        "Whole numbers include zero and all natural numbers.",
      formulas: ["W = {0, 1, 2, 3, 4, ...}"],
      examples: [
        {
          question: "Is 0 a whole number?",
          solution: [
            "Whole numbers start from 0.",
            "Therefore, 0 is a whole number."
          ]
        }
      ]
    },
    {
      title: "3. Integers",
      explanation:
        "Integers include negative numbers, zero and positive numbers without fractions.",
      formulas: ["Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}"],
      examples: [
        {
          question: "Is -5 an integer?",
          solution: [
            "Integers include negative whole numbers.",
            "Therefore, -5 is an integer."
          ]
        }
      ]
    },
    {
      title: "4. Rational Numbers",
      explanation:
        "A rational number can be written as p/q, where p and q are integers and q is not zero.",
      formulas: ["Rational number = p/q, q ≠ 0"],
      examples: [
        {
          question: "Is 3/4 a rational number?",
          solution: [
            "3 and 4 are integers.",
            "The denominator is not zero.",
            "Therefore, 3/4 is rational."
          ]
        }
      ]
    },
    {
      title: "5. Irrational Numbers",
      explanation:
        "Irrational numbers cannot be expressed as a ratio of two integers. Their decimal expansions are non-terminating and non-repeating.",
      formulas: ["Examples: √2, √3, π"],
      examples: [
        {
          question: "Is √2 irrational?",
          solution: [
            "√2 cannot be written as a ratio of two integers.",
            "Therefore, √2 is irrational."
          ]
        }
      ]
    },
    {
      title: "6. Even and Odd Numbers",
      explanation:
        "Even numbers are divisible by 2 without a remainder. Odd numbers leave a remainder of 1 when divided by 2.",
      formulas: [
        "Even number: n = 2k",
        "Odd number: n = 2k + 1"
      ],
      examples: [
        {
          question: "Is 27 even or odd?",
          solution: [
            "27 divided by 2 leaves remainder 1.",
            "Therefore, 27 is odd."
          ]
        }
      ]
    },
    {
      title: "7. Prime and Composite Numbers",
      explanation:
        "A prime number has exactly two positive factors: 1 and itself. A composite number has more than two positive factors. The number 1 is neither prime nor composite.",
      formulas: [
        "Prime examples: 2, 3, 5, 7, 11",
        "Composite examples: 4, 6, 8, 9, 10"
      ],
      examples: [
        {
          question: "Is 13 a prime number?",
          solution: [
            "The only positive factors of 13 are 1 and 13.",
            "Therefore, 13 is prime."
          ]
        }
      ]
    },
    {
      title: "8. Divisibility Rules",
      explanation:
        "Divisibility rules help us check whether one number divides another without performing full division.",
      formulas: [
        "Divisible by 2: last digit is 0, 2, 4, 6 or 8.",
        "Divisible by 3: sum of digits is divisible by 3.",
        "Divisible by 5: last digit is 0 or 5.",
        "Divisible by 10: last digit is 0.",
        "Divisible by 9: sum of digits is divisible by 9."
      ],
      examples: [
        {
          question: "Is 234 divisible by 3?",
          solution: [
            "Sum of digits = 2 + 3 + 4 = 9.",
            "9 is divisible by 3.",
            "Therefore, 234 is divisible by 3."
          ]
        }
      ]
    }
  ],

  revision: [
    "Natural numbers start from 1.",
    "Whole numbers include 0.",
    "Integers include negative numbers, zero and positive numbers.",
    "Rational numbers can be written as p/q, where q is not zero.",
    "√2 and π are irrational numbers.",
    "The number 2 is the only even prime number.",
    "The number 1 is neither prime nor composite.",
    "Use divisibility rules to solve questions faster."
  ]
};

export default numberSystemConcepts;
