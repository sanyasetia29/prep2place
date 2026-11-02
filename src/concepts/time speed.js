const timeSpeedDistanceConcepts = {
  title: "Time, Speed & Distance",

  introduction: `Time, Speed and Distance is an important quantitative aptitude topic used in placement exams. It explains the relationship between the distance travelled, the speed of movement, and the time taken. These concepts are useful for solving questions about cars, trains, runners, boats, and everyday journeys.`,

  sections: [
    {
      title: "1. Understanding Distance, Speed and Time",
      explanation: `Distance is the total length of the path travelled. Speed tells us how much distance is covered in a unit of time. Time is the duration taken to cover a distance. If any two values are known, the third can be calculated using the basic formula.`,

      formulas: [
        "Speed = Distance / Time",
        "Distance = Speed × Time",
        "Time = Distance / Speed"
      ],

      examples: [
        {
          question: "A car travels 150 km in 3 hours. Find its average speed.",
          solution: [
            "Distance = 150 km.",
            "Time = 3 hours.",
            "Speed = Distance / Time.",
            "Speed = 150 / 3.",
            "Answer: 50 km/h."
          ]
        }
      ]
    },

    {
      title: "2. Units of Speed",
      explanation: `Speed is commonly measured in kilometres per hour (km/h) or metres per second (m/s). Always check the units in a question before applying a formula. Convert units when distance and time use different measurement systems.`,

      formulas: [
        "km/h to m/s: Multiply by 5/18.",
        "m/s to km/h: Multiply by 18/5."
      ],

      examples: [
        {
          question: "Convert 72 km/h into metres per second.",
          solution: [
            "Step 1: Multiply the speed by 5/18.",
            "Step 2: 72 × 5/18 = 4 × 5.",
            "Answer: 20 m/s."
          ]
        },
        {
          question: "Convert 15 m/s into kilometres per hour.",
          solution: [
            "Step 1: Multiply the speed by 18/5.",
            "Step 2: 15 × 18/5 = 3 × 18.",
            "Answer: 54 km/h."
          ]
        }
      ]
    },

    {
      title: "3. Average Speed",
      explanation: `Average speed is the total distance travelled divided by the total time taken. It is not always the simple average of two speeds. If equal distances are travelled at two different speeds, use the special formula below.`,

      formulas: [
        "Average speed = Total distance / Total time",
        "For equal distances at speeds u and v: Average speed = 2uv/(u+v)"
      ],

      examples: [
        {
          question: "A person travels 60 km at 30 km/h and another 60 km at 60 km/h. Find the average speed.",
          solution: [
            "Time for first part = 60/30 = 2 hours.",
            "Time for second part = 60/60 = 1 hour.",
            "Total distance = 120 km.",
            "Total time = 3 hours.",
            "Average speed = 120/3.",
            "Answer: 40 km/h."
          ]
        }
      ]
    },

    {
      title: "4. Relationship Between Speed and Time",
      explanation: `For a fixed distance, speed and time are inversely proportional. If speed increases, the time required decreases. If speed decreases, the time required increases. This relationship is useful in questions about reaching a destination earlier or later.`,

      formulas: [
        "For fixed distance: Speed₁ × Time₁ = Speed₂ × Time₂",
        "Time₂ = (Speed₁ × Time₁) / Speed₂"
      ],

      examples: [
        {
          question: "A car takes 5 hours to cover a journey at 60 km/h. How long will it take at 75 km/h for the same distance?",
          solution: [
            "Time₂ = (60 × 5)/75.",
            "Time₂ = 300/75.",
            "Answer: 4 hours."
          ]
        }
      ]
    },

    {
      title: "5. Relative Speed",
      explanation: `Relative speed is the speed at which the distance between two moving objects changes. When two objects move in opposite directions, their speeds are added. When they move in the same direction, their speeds are subtracted to find the relative speed, assuming both move along the same straight path.`,

      formulas: [
        "Opposite directions: Relative speed = u + v",
        "Same direction: Relative speed = |u − v|",
        "Time to meet or catch up = Distance between objects / Relative speed"
      ],

      examples: [
        {
          question: "Two runners move towards each other at 5 m/s and 3 m/s. They are 80 metres apart. When will they meet?",
          solution: [
            "Relative speed = 5 + 3 = 8 m/s.",
            "Time = Distance / Relative speed.",
            "Time = 80/8.",
            "Answer: 10 seconds."
          ]
        },
        {
          question: "Two cars travel in the same direction at 70 km/h and 50 km/h. If the faster car is 40 km behind, how long will it take to catch up?",
          solution: [
            "Relative speed = 70 − 50 = 20 km/h.",
            "Time = 40/20.",
            "Answer: 2 hours."
          ]
        }
      ]
    },

    {
      title: "6. Trains Crossing a Pole or Platform",
      explanation: `When a train crosses a pole or a person standing still, it must cover a distance equal to its own length. When it crosses a platform, it must cover the combined length of the train and the platform. Convert speed into metres per second when lengths are in metres and time is in seconds.`,

      formulas: [
        "Time to cross a pole = Train length / Speed",
        "Time to cross a platform = (Train length + Platform length) / Speed"
      ],

      examples: [
        {
          question: "A train 180 metres long travels at 54 km/h. How long does it take to cross a pole?",
          solution: [
            "Convert 54 km/h to m/s: 54 × 5/18 = 15 m/s.",
            "Distance to cross = 180 metres.",
            "Time = 180/15.",
            "Answer: 12 seconds."
          ]
        },
        {
          question: "A 120-metre train crosses a 180-metre platform at 15 m/s. Find the time taken.",
          solution: [
            "Total distance = 120 + 180 = 300 metres.",
            "Time = 300/15.",
            "Answer: 20 seconds."
          ]
        }
      ]
    },

    {
      title: "7. Boats and Streams",
      explanation: `In boat and stream questions, the speed of the boat in still water and the speed of the stream determine the actual speed. When the boat moves downstream, the stream helps it. When it moves upstream, the stream opposes it.`,

      formulas: [
        "Downstream speed = Boat speed + Stream speed",
        "Upstream speed = Boat speed − Stream speed",
        "Boat speed in still water = (Downstream speed + Upstream speed)/2",
        "Stream speed = (Downstream speed − Upstream speed)/2"
      ],

      examples: [
        {
          question: "A boat's downstream speed is 12 km/h and its upstream speed is 8 km/h. Find its speed in still water and the stream speed.",
          solution: [
            "Boat speed = (12 + 8)/2 = 10 km/h.",
            "Stream speed = (12 − 8)/2 = 2 km/h.",
            "Answer: Boat = 10 km/h; stream = 2 km/h."
          ]
        }
      ]
    },

    {
      title: "8. Meeting and Catch-Up Problems",
      explanation: `When two people start from different places and move towards each other, their combined distance is the initial distance between them. When one person starts later or follows another in the same direction, use relative speed to calculate when they meet or catch up.`,

      formulas: [
        "Moving towards each other: Time = Initial distance / (u + v)",
        "Same direction: Time to catch up = Initial gap / (Faster speed − Slower speed)"
      ],

      examples: [
        {
          question: "Two towns are 210 km apart. Two vehicles start towards each other at 60 km/h and 45 km/h. When will they meet?",
          solution: [
            "Combined speed = 60 + 45 = 105 km/h.",
            "Time = 210/105.",
            "Answer: 2 hours."
          ]
        }
      ]
    },

    {
      title: "9. Circular Tracks",
      explanation: `When two runners move on a circular track, they meet when the relative distance travelled equals the track's circumference or a multiple of it. Use the sum of speeds when they run in opposite directions and the difference when they run in the same direction.`,

      formulas: [
        "Opposite directions: Meeting time = Track length / (u + v)",
        "Same direction: Catch-up time = Track length / |u − v|"
      ],

      examples: [
        {
          question: "Two runners run on a 400-metre track at 6 m/s and 4 m/s in opposite directions. When will they meet for the first time after starting together?",
          solution: [
            "Relative speed = 6 + 4 = 10 m/s.",
            "Time = 400/10.",
            "Answer: 40 seconds."
          ]
        }
      ]
    },

    {
      title: "10. Stoppage and Effective Speed",
      explanation: `If a vehicle stops during a journey, its overall average speed decreases because the total time includes the stoppage. For questions involving a regular journey and stops, calculate total distance and divide it by the complete elapsed time, including stops.`,

      formulas: [
        "Overall average speed = Total distance / Total elapsed time",
        "Total elapsed time = Moving time + Stoppage time"
      ],

      examples: [
        {
          question: "A bus travels 120 km in 2 hours and then stops for 30 minutes. Find its average speed for the entire period.",
          solution: [
            "Total distance = 120 km.",
            "Total elapsed time = 2 + 0.5 = 2.5 hours.",
            "Average speed = 120/2.5.",
            "Answer: 48 km/h."
          ]
        }
      ]
    },

    {
      title: "11. Shortcuts and Useful Observations",
      explanation: `These shortcuts help solve common aptitude questions quickly. First check whether the distance is fixed, equal, or changing before selecting a formula.`,

      formulas: [
        "For equal distances, average speed = 2uv/(u+v).",
        "For equal time intervals, average speed = (u+v)/2.",
        "For fixed distance, speed and time are inversely proportional.",
        "Convert km/h to m/s by multiplying by 5/18.",
        "Convert m/s to km/h by multiplying by 18/5.",
        "For relative speed, add speeds in opposite directions and subtract in the same direction."
      ],

      examples: [
        {
          question: "A person travels for equal amounts of time at 40 km/h and 60 km/h. Find the average speed.",
          solution: [
            "For equal time intervals, average speed = (40 + 60)/2.",
            "Answer: 50 km/h."
          ]
        }
      ]
    },

    {
      title: "12. Common Mistakes",
      explanation: `Avoid these common errors when solving Time, Speed and Distance problems.`,

      formulas: [
        "Do not use the equal-distance average-speed formula for equal time intervals.",
        "Convert units before combining distance, speed, and time.",
        "Use total distance divided by total time for average speed.",
        "Remember that train crossing a platform requires train length plus platform length.",
        "For boats, downstream speed is greater than upstream speed when the stream is flowing.",
        "Use relative speed for meeting and catch-up problems."
      ],

      examples: [
        {
          question: "A person travels equal distances at 30 km/h and 60 km/h. Why isn't the average speed 45 km/h?",
          solution: [
            "For equal distances, average speed = 2uv/(u+v).",
            "Average speed = (2 × 30 × 60)/(30 + 60).",
            "Average speed = 3600/90.",
            "Answer: 40 km/h, not 45 km/h."
          ]
        }
      ]
    }
  ],

  revision: [
    "Speed = Distance / Time.",
    "Distance = Speed × Time.",
    "Time = Distance / Speed.",
    "Convert km/h to m/s using 5/18.",
    "Convert m/s to km/h using 18/5.",
    "Average speed = Total distance / Total time.",
    "For equal distances, average speed = 2uv/(u+v).",
    "Relative speed is the sum for opposite directions and the difference for the same direction.",
    "Train crossing a platform covers train length plus platform length.",
    "Downstream speed = Boat speed + Stream speed.",
    "Upstream speed = Boat speed − Stream speed."
  ]
};

export default timeSpeedDistanceConcepts;