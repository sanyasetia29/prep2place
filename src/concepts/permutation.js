
const permutationCombinationConcepts = {
  title: "Permutation & Combination",

  introduction:
    "Permutation and Combination are used to count different ways of arranging or selecting objects. The main difference is that order matters in permutation but does not matter in combination.",

  sections: [
    {
      title: "1. Factorial",
      explanation:
        "Factorial means multiplying a positive integer by all positive integers smaller than it down to 1. It is represented by an exclamation mark (!).",

      formulas: [
        "n! = n × (n − 1) × ... × 2 × 1",
        "0! = 1"
      ],

      examples: [
        {
          question: "Find 5!.",
          solution: [
            "5! = 5 × 4 × 3 × 2 × 1.",
            "5! = 120."
          ]
        }
      ]
    },

    {
      title: "2. Permutation",
      explanation:
        "Permutation is an arrangement of objects in which order matters. For example, ABC and BAC are different arrangements.",

      formulas: [
        "nPr = n! / (n − r)!"
      ],

      examples: [
        {
          question: "In how many ways can 3 students be arranged from 5 students in three positions?",
          solution: [
            "n = 5 and r = 3.",
            "5P3 = 5! / (5 − 3)!",
            "5P3 = 120 / 2 = 60 ways."
          ]
        }
      ]
    },

    {
      title: "3. Combination",
      explanation:
        "Combination is a selection of objects in which order does not matter. Selecting A and B is the same as selecting B and A.",

      formulas: [
        "nCr = n! / [r! × (n − r)!]"
      ],

      examples: [
        {
          question: "In how many ways can 2 students be selected from 5 students?",
          solution: [
            "n = 5 and r = 2.",
            "5C2 = 5! / (2! × 3!).",
            "5C2 = 120 / (2 × 6) = 10 ways."
          ]
        }
      ]
    },

    {
      title: "4. Difference Between Permutation and Combination",
      explanation:
        "Use permutation when the order or position is important. Use combination when you only need to select a group.",

      formulas: [
        "Permutation: Order matters.",
        "Combination: Order does not matter.",
        "nPr = nCr × r!"
      ],

      examples: [
        {
          question: "Choose a captain and vice-captain from 4 students. How many ways?",
          solution: [
            "The positions are different, so order matters.",
            "Ways = 4P2 = 4! / 2!.",
            "Ways = 4 × 3 = 12."
          ]
        }
      ]
    },

    {
      title: "5. Arranging All Objects",
      explanation:
        "When all n distinct objects are arranged in a line, the number of arrangements is n factorial.",

      formulas: [
        "Arrangements of n distinct objects = n!"
      ],

      examples: [
        {
          question: "In how many ways can 4 different books be arranged on a shelf?",
          solution: [
            "Number of books = 4.",
            "Arrangements = 4!.",
            "4! = 4 × 3 × 2 × 1 = 24 ways."
          ]
        }
      ]
    },

    {
      title: "6. Choosing When Order Does Not Matter",
      explanation:
        "Combination is useful when choosing teams, committees or groups where positions are not assigned.",

      formulas: [
        "Number of groups of r objects from n objects = nCr"
      ],

      examples: [
        {
          question: "How many 3-person teams can be selected from 6 people?",
          solution: [
            "n = 6 and r = 3.",
            "6C3 = 6! / (3! × 3!).",
            "6C3 = 20 teams."
          ]
        }
      ]
    }
  ],

  revision: [
    "Factorial: n! = n × (n − 1) × ... × 1.",
    "0! = 1.",
    "Permutation is used when order matters.",
    "Combination is used when order does not matter.",
    "nPr = n! / (n − r)!.",
    "nCr = n! / [r! × (n − r)!].",
    "nPr = nCr × r!.",
    "Arrangements of n distinct objects = n!."
  ]
};

export default permutationCombinationConcepts;
