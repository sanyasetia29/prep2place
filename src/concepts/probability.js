
const probabilityConcepts = {
  title: "Probability",

  introduction:
    "Probability tells us how likely an event is to happen. It is used in aptitude questions involving coins, dice, cards and other random events.",

  sections: [
    {
      title: "1. Basic Meaning of Probability",
      explanation:
        "Probability measures the chance of an event occurring. It ranges from 0 to 1, or from 0% to 100%.",
      formulas: [
        "Probability = Favorable outcomes / Total equally likely outcomes",
        "0 ≤ P(E) ≤ 1"
      ],
      examples: [
        {
          question: "What is the probability of getting a head on a fair coin?",
          solution: [
            "Favorable outcomes = 1 (Head).",
            "Total outcomes = 2 (Head, Tail).",
            "Probability = 1/2."
          ]
        }
      ]
    },
    {
      title: "2. Sample Space",
      explanation:
        "The sample space is the set of all possible outcomes of an experiment.",
      formulas: [
        "Coin sample space = {H, T}",
        "One die sample space = {1, 2, 3, 4, 5, 6}"
      ],
      examples: [
        {
          question: "How many outcomes are possible when rolling one die?",
          solution: [
            "Possible outcomes are 1, 2, 3, 4, 5 and 6.",
            "Total outcomes = 6."
          ]
        }
      ]
    },
    {
      title: "3. Probability of an Event",
      explanation:
        "An event is a result or group of results that we are interested in. Count the favorable outcomes and divide by the total equally likely outcomes.",
      formulas: [
        "P(E) = n(E) / n(S)",
        "n(E) = Number of favorable outcomes",
        "n(S) = Total outcomes in the sample space"
      ],
      examples: [
        {
          question: "What is the probability of rolling an even number on a fair die?",
          solution: [
            "Even outcomes = {2, 4, 6}.",
            "Favorable outcomes = 3; total outcomes = 6.",
            "Probability = 3/6 = 1/2."
          ]
        }
      ]
    },
    {
      title: "4. Probability of the Complement",
      explanation:
        "The complement of an event means the event does not happen. The probability of an event and its complement adds up to 1.",
      formulas: [
        "P(not E) = 1 − P(E)"
      ],
      examples: [
        {
          question: "If the probability of rain is 0.3, what is the probability of no rain?",
          solution: [
            "P(no rain) = 1 − P(rain).",
            "P(no rain) = 1 − 0.3 = 0.7."
          ]
        }
      ]
    },
    {
      title: "5. Probability of Impossible and Certain Events",
      explanation:
        "An impossible event cannot happen, so its probability is 0. A certain event always happens, so its probability is 1.",
      formulas: [
        "P(impossible event) = 0",
        "P(certain event) = 1"
      ],
      examples: [
        {
          question: "What is the probability of rolling a 7 on a normal six-sided die?",
          solution: [
            "A normal die has outcomes 1 to 6.",
            "Getting 7 is impossible.",
            "Probability = 0."
          ]
        }
      ]
    },
    {
      title: "6. Probability of Two Independent Events",
      explanation:
        "Two events are independent when the result of one does not affect the probability of the other. For independent events happening together, multiply their probabilities.",
      formulas: [
        "P(A and B) = P(A) × P(B), for independent events"
      ],
      examples: [
        {
          question: "Two fair coins are tossed. Find the probability of getting two heads.",
          solution: [
            "Probability of head on each coin = 1/2.",
            "The coin tosses are independent.",
            "P(two heads) = 1/2 × 1/2 = 1/4."
          ]
        }
      ]
    },
    {
      title: "7. Probability Using Playing Cards",
      explanation:
        "A standard deck has 52 cards: 4 suits with 13 cards each. It contains 4 kings, 4 queens, 4 jacks and 26 red cards.",
      formulas: [
        "P(drawing a king) = 4/52 = 1/13",
        "P(drawing a red card) = 26/52 = 1/2"
      ],
      examples: [
        {
          question: "What is the probability of drawing an ace from a well-shuffled standard deck?",
          solution: [
            "Number of aces = 4.",
            "Total cards = 52.",
            "Probability = 4/52 = 1/13."
          ]
        }
      ]
    }
  ],

  revision: [
    "Probability = Favorable outcomes / Total equally likely outcomes.",
    "Probability always lies between 0 and 1.",
    "An impossible event has probability 0.",
    "A certain event has probability 1.",
    "P(not E) = 1 − P(E).",
    "For independent events happening together, multiply their probabilities.",
    "A fair coin has two equally likely outcomes.",
    "A standard deck has 52 cards."
  ]
};
export default probabilityConcepts;