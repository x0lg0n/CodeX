export const dsaProgram = {
  overview: {
    duration: "3 Months",
    totalHours: "300+ Hours",
    problems: "300+ Problems",
    mockInterviews: "20+ Sessions"
  },
  months: [
    {
      id: 1,
      title: "Foundation & Core Patterns",
      description: "Master fundamental data structures and basic algorithmic patterns essential for coding interviews",
      weeks: [
        {
          week: 1,
          title: "Arrays & Hashing Fundamentals",
          topics: [
            "Array manipulation and two-sum variations",
            "Hash tables for frequency counting",
            "Prefix sums and cumulative arrays",
            "Two-pointer techniques with hash maps",
            "Time and space complexity analysis"
          ],
          keyProblems: [
            "Two Sum",
            "Best Time to Buy/Sell Stock",
            "Product of Array Except Self",
            "Group Anagrams",
            "Top K Frequent Elements"
          ],
          practiceCount: {
            easy: 11,
            medium: 9,
            hard: 1
          },
          dailySchedule: "2-3 hours: 1 hour theory + 1-2 hours problem solving",
          goals: "Master basic data structures and build problem-solving fundamentals"
        },
        {
          week: 2,
          title: "Two Pointers & Sliding Window",
          topics: [
            "Opposite directional pointers",
            "Same directional pointers (fast/slow)",
            "Fixed size sliding windows",
            "Variable size sliding windows",
            "Optimization techniques"
          ],
          keyProblems: [
            "Valid Palindrome",
            "3Sum",
            "Container With Most Water",
            "Longest Substring Without Repeating Characters",
            "Minimum Window Substring"
          ],
          practiceCount: {
            easy: 10,
            medium: 14,
            hard: 2
          },
          dailySchedule: "Focus on pattern recognition and efficient array/string traversal",
          goals: "Master efficient array/string traversal techniques"
        },
        {
          week: 3,
          title: "Sorting & Searching",
          topics: [
            "Binary search template and variations",
            "Search in rotated arrays",
            "Finding ranges and peaks",
            "Merge sort applications",
            "Advanced searching techniques"
          ],
          keyProblems: [
            "Binary Search",
            "Search in Rotated Sorted Array",
            "Find First and Last Position",
            "Kth Largest Element",
            "Median of Two Sorted Arrays"
          ],
          practiceCount: {
            easy: 5,
            medium: 15,
            hard: 2
          },
          dailySchedule: "Master searching algorithms and their variations",
          goals: "Master searching algorithms and their variations"
        },
        {
          week: 4,
          title: "Linked Lists & Stacks/Queues",
          topics: [
            "Linked list reversal techniques",
            "Cycle detection (Floyd's algorithm)",
            "Merging and partitioning",
            "Monotonic stacks",
            "Queue-based BFS preparation"
          ],
          keyProblems: [
            "Reverse Linked List",
            "Linked List Cycle",
            "Merge Two Sorted Lists",
            "Valid Parentheses",
            "Daily Temperatures"
          ],
          practiceCount: {
            easy: 14,
            medium: 13,
            hard: 1
          },
          dailySchedule: "Master linear data structures and their manipulations",
          goals: "Master linear data structures and their manipulations"
        }
      ]
    },
    {
      id: 2,
      title: "Trees, Graphs & Advanced Patterns",
      description: "Master tree and graph algorithms, essential for advanced problem solving",
      weeks: [
        {
          week: 5,
          title: "Tree Fundamentals & Traversals",
          topics: [
            "DFS traversals (preorder, inorder, postorder)",
            "BFS level-order traversal",
            "Tree construction from traversals",
            "Path sum problems",
            "Tree property validation"
          ],
          keyProblems: [
            "Binary Tree Inorder Traversal",
            "Level Order Traversal",
            "Maximum Depth of Binary Tree",
            "Validate BST",
            "Path Sum II"
          ],
          practiceCount: {
            easy: 10,
            medium: 15,
            hard: 0
          },
          dailySchedule: "Focus on tree traversal patterns and recursive thinking",
          goals: "Master tree-based algorithms and traversal patterns"
        },
        {
          week: 6,
          title: "Binary Search Trees & Advanced Trees",
          topics: [
            "BST properties and operations",
            "BST validation and construction",
            "Tree diameter and height problems",
            "Lowest common ancestor",
            "Tree serialization/deserialization"
          ],
          keyProblems: [
            "Kth Smallest Element in BST",
            "Lowest Common Ancestor",
            "Binary Tree Maximum Path Sum",
            "Serialize/Deserialize Binary Tree",
            "House Robber III"
          ],
          practiceCount: {
            easy: 8,
            medium: 17,
            hard: 0
          },
          dailySchedule: "Deep dive into BST properties and complex tree algorithms",
          goals: "Master BST operations and advanced tree manipulation"
        },
        {
          week: 7,
          title: "Graph Algorithms",
          topics: [
            "Graph representation (adjacency list/matrix)",
            "DFS for connected components",
            "BFS for shortest paths",
            "Topological sorting",
            "Union-Find (Disjoint Set)"
          ],
          keyProblems: [
            "Number of Islands",
            "Clone Graph",
            "Course Schedule",
            "Word Ladder",
            "Redundant Connection"
          ],
          practiceCount: {
            easy: 5,
            medium: 15,
            hard: 3
          },
          dailySchedule: "Master graph traversal and common graph algorithms",
          goals: "Master graph traversal and common graph algorithms"
        },
        {
          week: 8,
          title: "Heaps & Priority Queues",
          topics: [
            "Min/Max heap properties",
            "K-way merge problems",
            "Top-K element problems",
            "Median finding with heaps",
            "Meeting room scheduling"
          ],
          keyProblems: [
            "Kth Largest Element",
            "Merge k Sorted Lists",
            "Top K Frequent Elements",
            "Find Median from Data Stream",
            "Meeting Rooms II"
          ],
          practiceCount: {
            easy: 6,
            medium: 12,
            hard: 2
          },
          dailySchedule: "Master heap-based algorithms and priority queue applications",
          goals: "Master heap-based algorithms and priority queue applications"
        }
      ]
    },
    {
      id: 3,
      title: "Dynamic Programming & Mock Interviews",
      description: "Master dynamic programming patterns and prepare for real interview scenarios",
      weeks: [
        {
          week: 9,
          title: "1D Dynamic Programming",
          topics: [
            "Fibonacci variations and memoization",
            "House robber problems",
            "Climbing stairs variations",
            "Longest increasing subsequence",
            "Bottom-up vs top-down approaches"
          ],
          keyProblems: [
            "Climbing Stairs",
            "House Robber",
            "Longest Increasing Subsequence",
            "Maximum Product Subarray",
            "Decode Ways"
          ],
          practiceCount: {
            easy: 5,
            medium: 20,
            hard: 2
          },
          dailySchedule: "Focus on 1D DP patterns and state transition",
          goals: "Master 1D DP patterns and optimization techniques"
        },
        {
          week: 10,
          title: "2D Dynamic Programming",
          topics: [
            "Grid-based path problems",
            "String matching and editing",
            "Knapsack variations",
            "Partition problems",
            "Multi-dimensional state spaces"
          ],
          keyProblems: [
            "Unique Paths",
            "Edit Distance",
            "Longest Common Subsequence",
            "Coin Change",
            "Best Time to Buy/Sell Stock with Cooldown"
          ],
          practiceCount: {
            easy: 5,
            medium: 15,
            hard: 3
          },
          dailySchedule: "Master 2D DP and complex state management",
          goals: "Master 2D DP and advanced optimization patterns"
        },
        {
          week: 11,
          title: "Backtracking & Advanced Techniques",
          topics: [
            "Permutations and combinations generation",
            "Sudoku and N-Queens problems",
            "Word search and path finding",
            "Bit manipulation techniques",
            "Mathematical algorithms"
          ],
          keyProblems: [
            "Generate Parentheses",
            "Word Search",
            "N-Queens",
            "Single Number",
            "Pow(x,n)"
          ],
          practiceCount: {
            easy: 8,
            medium: 15,
            hard: 4
          },
          dailySchedule: "Master backtracking and handle complex problem variations",
          goals: "Master backtracking and handle complex problem variations"
        },
        {
          week: 12,
          title: "Mock Interviews & Final Preparation",
          topics: [
            "Interview simulation and timing",
            "Communication and explanation skills",
            "System design basics (for senior roles)",
            "Behavioral interview preparation",
            "Code review and optimization"
          ],
          keyProblems: [
            "Company-specific problem patterns",
            "Mixed difficulty practice",
            "Real interview simulation",
            "Optimization discussions",
            "Edge case handling"
          ],
          practiceCount: {
            easy: 10,
            medium: 15,
            hard: 5
          },
          dailySchedule: "Daily mock interviews with focus on communication",
          goals: "Simulate real interview conditions and polish presentation skills"
        }
      ]
    }
  ],
  patterns: [
    {
      name: "Arrays & Hashing",
      problems: 26,
      difficulty: "Beginner",
      description: "Master array manipulations and hash table operations"
    },
    {
      name: "Two Pointers",
      problems: 18,
      difficulty: "Beginner",
      description: "Efficient array and string traversal techniques"
    },
    {
      name: "Sliding Window",
      problems: 12,
      difficulty: "Intermediate",
      description: "Optimize substring and subarray problems"
    },
    {
      name: "Binary Search",
      problems: 15,
      difficulty: "Intermediate",
      description: "Master searching in sorted data structures"
    },
    {
      name: "Linked Lists",
      problems: 15,
      difficulty: "Beginner",
      description: "Manipulate and traverse linked data structures"
    },
    {
      name: "Trees & BST",
      problems: 35,
      difficulty: "Intermediate",
      description: "Master tree traversals and BST operations"
    },
    {
      name: "Graphs",
      problems: 23,
      difficulty: "Advanced",
      description: "Graph traversal and connectivity algorithms"
    },
    {
      name: "Heaps",
      problems: 12,
      difficulty: "Intermediate",
      description: "Priority queue and Top-K problems"
    },
    {
      name: "Dynamic Programming",
      problems: 40,
      difficulty: "Advanced",
      description: "Optimization and memoization techniques"
    },
    {
      name: "Backtracking",
      problems: 15,
      difficulty: "Advanced",
      description: "Generate all possible solutions"
    }
  ],
  resources: [
    {
      category: "Primary Platforms",
      items: [
        "LeetCode Premium - Company-specific questions",
        "AlgoMonster - Pattern-based learning",
        "InterviewBit - Structured curriculum",
        "GeeksforGeeks - Theory and explanations",
        "HackerRank - Contest practice"
      ]
    },
    {
      category: "Study Materials",
      items: [
        "Cracking the Coding Interview - Gayle McDowell",
        "Elements of Programming Interviews - Aziz, Lee, Prakash",
        "Algorithm Design Manual - Steven Skiena",
        "Introduction to Algorithms - CLRS",
        "LeetCode Discuss - Community solutions"
      ]
    },
    {
      category: "Video Resources",
      items: [
        "NeetCode - Pattern-based explanations",
        "TechInterview - Mock interview practice",
        "Back to Back SWE - In-depth algorithms",
        "William Fiset - Data structures course",
        "Abdul Bari - Algorithm analysis"
      ]
    },
    {
      category: "Practice Platforms",
      items: [
        "Pramp - Free mock interviews",
        "InterviewBit - Coding challenges",
        "CodeSignal - Assessment practice",
        "HackerEarth - Contest participation",
        "Codeforces - Competitive programming"
      ]
    }
  ],
  companies: [
    {
      name: "Google/Alphabet",
      focus: "Tree algorithms, graph traversal, system design",
      patterns: ["DFS/BFS", "Dynamic Programming", "Complex Tree Problems"],
      tips: "Emphasize explanation and multiple solution approaches"
    },
    {
      name: "Amazon",
      focus: "Array/string manipulation, OOP design",
      patterns: ["Two Pointers", "Sliding Window", "Basic DP"],
      tips: "Balance leadership principles with coding skills"
    },
    {
      name: "Microsoft",
      focus: "Balanced across all patterns",
      patterns: ["All Fundamental Patterns"],
      tips: "Clear communication and systematic approach"
    },
    {
      name: "Facebook/Meta",
      focus: "Graph algorithms, tree traversal",
      patterns: ["BFS/DFS", "Graph Connectivity", "Tree Problems"],
      tips: "Discuss scalability and system implications"
    },
    {
      name: "Apple",
      focus: "System design + moderate coding",
      patterns: ["Clean Code", "OOP Principles"],
      tips: "Combine product thinking with technical depth"
    }
  ]
};