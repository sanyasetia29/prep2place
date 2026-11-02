
const hcfLcmConcepts = {
  title: "HCF & LCM",

  introduction:
    "HCF and LCM are important aptitude concepts. HCF helps us find the greatest common factor, while LCM helps us find the smallest common multiple of numbers.",

  sections: [
    {
      title: "1. Factors and Multiples",
      explanation:
        "A factor divides a number exactly. A multiple is obtained by multiplying a number by a positive integer.",
      formulas: [
        "Factors of 12: 1, 2, 3, 4, 6, 12",
        "Multiples of 4: 4, 8, 12, 16, 20, ..."
      ],
      examples: [
        {
          question: "Is 3 a factor of 12?",
          solution: [
            "12 ÷ 3 = 4.",
            "The remainder is 0.",
            "Therefore, 3 is a factor of 12."
          ]
        }
      ]
    },
    {
      title: "2. HCF (Highest Common Factor)",
      explanation:
        "HCF is the greatest number that divides two or more numbers exactly.",
      formulas: [
        "HCF = Greatest common factor"
      ],
      examples: [
        {
          question: "Find the HCF of 12 and 18.",
          solution: [
            "Factors of 12: 1, 2, 3, 4, 6, 12.",
            "Factors of 18: 1, 2, 3, 6, 9, 18.",
            "The greatest common factor is 6.",
            "HCF = 6."
          ]
        }
      ]
    },
    {
      title: "3. LCM (Least Common Multiple)",
      explanation:
        "LCM is the smallest positive number that is a multiple of two or more numbers.",
      formulas: [
        "LCM = Smallest common positive multiple"
      ],
      examples: [
        {
          question: "Find the LCM of 4 and 6.",
          solution: [
            "Multiples of 4: 4, 8, 12, 16, ...",
            "Multiples of 6: 6, 12, 18, ...",
            "The smallest common multiple is 12.",
            "LCM = 12."
          ]
        }
      ]
    },
    {
      title: "4. Prime Factorization Method",
      explanation:
        "Write each number as a product of prime numbers. For HCF, choose common prime factors with the smallest powers. For LCM, choose all prime factors with the greatest powers.",
      formulas: [
        "HCF: Product of common prime factors with minimum powers.",
        "LCM: Product of all prime factors with maximum powers."
      ],
      examples: [
        {
          question: "Find HCF and LCM of 12 and 18.",
          solution: [
            "12 = 2² × 3.",
            "18 = 2 × 3².",
            "HCF = 2 × 3 = 6.",
            "LCM = 2² × 3² = 36."
          ]
        }
      ]
    },
    {
      title: "5. Relationship Between HCF and LCM",
      explanation:
        "For two positive integers, the product of the numbers equals the product of their HCF and LCM.",
      formulas: [
        "First number × Second number = HCF × LCM",
        "LCM = (First number × Second number) / HCF"
      ],
      examples: [
        {
          question: "The numbers are 8 and 12. Find their LCM using HCF.",
          solution: [
            "HCF of 8 and 12 = 4.",
            "LCM = (8 × 12) / 4.",
            "LCM = 96 / 4 = 24."
          ]
        }
      ]
    },
    {
      title: "6. When to Use HCF or LCM",
      explanation:
        "HCF is useful when dividing items into the largest equal groups without leftovers. LCM is useful when finding the first common time or quantity at which repeating events coincide.",
      formulas: [
        "Largest equal groups or pieces → HCF",
        "First common occurrence or repeating intervals → LCM"
      ],
      examples: [
        {
          question:
            "Two bells ring every 4 and 6 minutes. When will they ring together again?",
          solution: [
            "Find LCM of 4 and 6.",
            "LCM = 12.",
            "They will ring together again after 12 minutes."
          ]
        }
      ]
    }
  ],

  revision: [
    "A factor divides a number exactly.",
    "A multiple is obtained by multiplying a number.",
    "HCF is the greatest common factor.",
    "LCM is the smallest positive common multiple.",
    "For HCF, use the smallest powers of common prime factors.",
    "For LCM, use the greatest powers of all prime factors.",
    "For two positive integers, their product equals HCF × LCM.",
    "Largest equal grouping usually suggests HCF; repeating events usually suggest LCM."
  ]
};

export default hcfLcmConcepts;
