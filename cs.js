// Computer Science curriculum — algorithms, data structures, theory.
window.CONTENT = window.CONTENT || {};
window.CONTENT.cs = [
  {
    id: "big-o-complexity",
    title: "Big-O Notation & Complexity",
    level: "basic",
    summary: "Asymptotic growth. $O(1), O(\\log n), O(n), O(n\\log n), O(n^2), O(2^n)$. Worst, average, best cases.",
    examples: [
      { title: "Example 1 — Classify a loop", prompt: "Single for-loop from $1$ to $n$. Complexity?", steps: [
        { label: "Count", body: "$n$ iterations, each constant work." },
        { label: "Class", body: "$O(n)$ — linear." }
      ], answer: "$O(n)$" },
      { title: "Example 2 — Nested loops", prompt: "Double loop, both from $1$ to $n$. Complexity?", steps: [
        { label: "Count", body: "$n \\cdot n = n^2$ iterations." },
        { label: "Class", body: "$O(n^2)$." }
      ], answer: "$O(n^2)$" },
      { title: "Example 3 — Halving", prompt: "Loop where $n$ halves each step. Complexity?", steps: [
        { label: "Count", body: "Halving needs $\\log_2 n$ steps." },
        { label: "Class", body: "$O(\\log n)$." }
      ], answer: "$O(\\log n)$" },
      { title: "Example 4 — Identify dominating term", prompt: "$T(n) = 3n^2 + 5n + 100$. Big-O?", steps: [
        { label: "Drop lower terms", body: "$n^2$ dominates for large $n$." },
        { label: "Drop constants", body: "$O(n^2)$." }
      ], answer: "$O(n^2)$" }
    ],
    tasks: [
      { q: "Lookup in a sorted array via binary search?", a: "$O(\\log n)$" },
      { q: "Linear search?", a: "$O(n)$" },
      { q: "Bubble sort worst case?", a: "$O(n^2)$" },
      { q: "Merge sort?", a: "$O(n\\log n)$" },
      { q: "Hash table average lookup?", a: "$O(1)$" },
      { q: "Hash table worst case?", a: "$O(n)$" },
      { q: "Brute-force traveling salesman?", a: "$O(n!)$" },
      { q: "$O(n) + O(n^2) = ?$", a: "$O(n^2)$" },
      { q: "$O(n) \\cdot O(\\log n) = ?$", a: "$O(n\\log n)$" },
      { q: "Constant time means?", a: "Independent of input size" }
    ]
  },
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    level: "intermediate",
    summary: "Bubble, insertion, selection, merge, quick, heap sort. Time and space trade-offs.",
    examples: [
      { title: "Example 1 — Bubble sort idea", prompt: "Sort $[5, 2, 4, 1]$ ascending by bubble sort.", steps: [
        { label: "Pass 1", body: "$[2, 4, 1, 5]$ (largest bubbles up)." },
        { label: "Pass 2", body: "$[2, 1, 4, 5]$." },
        { label: "Pass 3", body: "$[1, 2, 4, 5]$." }
      ], answer: "Repeated adjacent swaps; $O(n^2)$." },
      { title: "Example 2 — Merge sort recurrence", prompt: "$T(n) = 2T(n/2) + O(n)$. Solve.", steps: [
        { label: "Master theorem", body: "Case 2 with $a = 2, b = 2, f(n) = n$. $\\log_b a = 1$, matches $f$." },
        { label: "Result", body: "$T(n) = O(n\\log n)$." }
      ], answer: "$O(n\\log n)$" },
      { title: "Example 3 — Quicksort partition", prompt: "Why is quicksort fast on average?", steps: [
        { label: "Good pivot", body: "Splits array roughly in half → recursion depth $\\log n$." },
        { label: "Random pivot", body: "Average case $O(n\\log n)$." },
        { label: "Bad case", body: "Sorted input with first-element pivot → $O(n^2)$." }
      ], answer: "Avg $O(n\\log n)$, worst $O(n^2)$; in practice very fast." }
    ],
    tasks: [
      { q: "Best sorting comparison-based time?", a: "$O(n\\log n)$" },
      { q: "Quicksort worst case?", a: "$O(n^2)$" },
      { q: "Merge sort space?", a: "$O(n)$" },
      { q: "Heap sort time?", a: "$O(n\\log n)$" },
      { q: "Stable sort means?", a: "Preserves order of equal-key elements" },
      { q: "Bubble sort stable?", a: "Yes" },
      { q: "Counting sort time when range $k$ small?", a: "$O(n + k)$" },
      { q: "Comparison sort lower bound?", a: "$\\Omega(n\\log n)$" },
      { q: "In-place sort means?", a: "$O(1)$ extra space (or $O(\\log n)$ for recursion)" },
      { q: "Sorted-in-mostly array: insertion sort?", a: "$O(n)$ best case" }
    ]
  },
  {
    id: "data-structures",
    title: "Data Structures — Arrays, Lists, Hashes, Trees",
    level: "basic",
    summary: "Arrays, linked lists, stacks, queues, hash tables, trees, heaps. Time complexity of operations.",
    examples: [
      { title: "Example 1 — Array vs linked list", prompt: "Random access on each?", steps: [
        { label: "Array", body: "$O(1)$ — direct index." },
        { label: "Linked list", body: "$O(n)$ — must walk from head." }
      ], answer: "Array: $O(1)$, Linked list: $O(n)$" },
      { title: "Example 2 — Hash collisions", prompt: "Hash table with chaining. Two keys hash to same bucket. Effect?", steps: [
        { label: "Mechanism", body: "Both stored as a linked list in that bucket." },
        { label: "Lookup", body: "Must scan the chain — worst case $O(n)$ if many collisions." }
      ], answer: "Slower lookup; rehash if load factor high." },
      { title: "Example 3 — Stack operations", prompt: "Push $A, B, C$ then pop twice. What remains?", steps: [
        { label: "Stack LIFO", body: "Pushing: stack becomes $[A, B, C]$ (top = $C$)." },
        { label: "Pop ×2", body: "Pops $C$ then $B$. Remaining: $[A]$." }
      ], answer: "$[A]$ — just $A$." }
    ],
    tasks: [
      { q: "Array random access?", a: "$O(1)$" },
      { q: "Linked list insert at head?", a: "$O(1)$" },
      { q: "Linked list search?", a: "$O(n)$" },
      { q: "Hash table avg insert?", a: "$O(1)$" },
      { q: "Balanced BST search?", a: "$O(\\log n)$" },
      { q: "Stack: LIFO or FIFO?", a: "LIFO" },
      { q: "Queue: LIFO or FIFO?", a: "FIFO" },
      { q: "Heap (binary): find min?", a: "$O(1)$" },
      { q: "Heap insert?", a: "$O(\\log n)$" },
      { q: "Trie: prefix lookup time on word length $L$?", a: "$O(L)$" }
    ]
  },
  {
    id: "recursion-dp",
    title: "Recursion & Dynamic Programming",
    level: "intermediate",
    summary: "Base case + recursive case. Memoization. Tabulation. Optimal substructure.",
    examples: [
      { title: "Example 1 — Fibonacci recursive", prompt: "Naive recursive Fibonacci complexity?", steps: [
        { label: "Tree", body: "Each call makes 2 calls → tree has $\\approx \\varphi^n$ leaves." },
        { label: "Class", body: "$O(\\varphi^n) \\approx O(1.618^n)$ — exponential." }
      ], answer: "Exponential — too slow." },
      { title: "Example 2 — Memoized Fibonacci", prompt: "Add memoization. Complexity?", steps: [
        { label: "Each Fib(k)", body: "Computed once, then cached." },
        { label: "Total", body: "$n$ unique calls, each $O(1)$ work → $O(n)$ time, $O(n)$ space." }
      ], answer: "$O(n)$" },
      { title: "Example 3 — Coin change", prompt: "Find fewest coins to make amount $A$ from denominations $\\{1, 5, 10, 25\\}$.", steps: [
        { label: "Recurrence", body: "$f(A) = 1 + \\min_c f(A - c)$ over valid $c$, with $f(0) = 0$." },
        { label: "Tabulation", body: "Bottom-up array of size $A + 1$, fill in order." },
        { label: "Complexity", body: "$O(A \\cdot |\\text{coins}|)$ time." }
      ], answer: "Greedy works for canonical US coins; general case needs DP." }
    ],
    tasks: [
      { q: "DP requires what property?", a: "Optimal substructure + overlapping subproblems" },
      { q: "Top-down DP technique?", a: "Memoization" },
      { q: "Bottom-up DP technique?", a: "Tabulation" },
      { q: "Knapsack DP complexity?", a: "$O(nW)$" },
      { q: "LCS DP complexity?", a: "$O(nm)$" },
      { q: "Recursion needs?", a: "Base case + recursive case" },
      { q: "Tail recursion can be?", a: "Optimized to a loop" },
      { q: "Tower of Hanoi $n$ disks moves?", a: "$2^n - 1$" },
      { q: "Stack overflow risk in deep recursion?", a: "Yes — convert to iteration or use trampolining" },
      { q: "Greedy vs DP: when does greedy fail?", a: "When local optimum isn't global" }
    ]
  },
  {
    id: "graph-algorithms",
    title: "Graphs & Graph Algorithms",
    level: "intermediate",
    summary: "BFS, DFS, Dijkstra, Bellman-Ford, MST (Kruskal/Prim), topological sort.",
    examples: [
      { title: "Example 1 — BFS vs DFS", prompt: "When use BFS vs DFS?", steps: [
        { label: "BFS", body: "Finds shortest path (in terms of edges) on unweighted graph. Uses queue." },
        { label: "DFS", body: "Explores deep first. Useful for cycle detection, topological sort, connected components. Uses stack/recursion." }
      ], answer: "BFS for shortest unweighted path; DFS for structure analysis." },
      { title: "Example 2 — Dijkstra", prompt: "Shortest path with non-negative weights. Complexity?", steps: [
        { label: "With binary heap", body: "$O((V + E)\\log V)$." },
        { label: "With Fibonacci heap", body: "$O(E + V\\log V)$." }
      ], answer: "$O((V+E)\\log V)$ typical." },
      { title: "Example 3 — MST", prompt: "Kruskal's algorithm idea?", steps: [
        { label: "Sort edges", body: "Ascending by weight." },
        { label: "Greedy union-find", body: "Add edge if it connects two previously-disjoint components." },
        { label: "Stop", body: "After $V - 1$ edges added." }
      ], answer: "$O(E \\log E)$ with union-find." }
    ],
    tasks: [
      { q: "BFS uses?", a: "Queue" },
      { q: "DFS uses?", a: "Stack (or recursion)" },
      { q: "Dijkstra fails when?", a: "Negative edge weights" },
      { q: "Algorithm for negative weights (no negative cycle)?", a: "Bellman-Ford" },
      { q: "Bellman-Ford complexity?", a: "$O(VE)$" },
      { q: "Floyd-Warshall does what?", a: "All-pairs shortest paths" },
      { q: "Topological sort works on?", a: "DAG (directed acyclic graph)" },
      { q: "MST algorithms?", a: "Kruskal, Prim, Borůvka" },
      { q: "Connected components found via?", a: "BFS or DFS" },
      { q: "Adjacency matrix space?", a: "$O(V^2)$" }
    ]
  },
  {
    id: "automata-computability",
    title: "Automata & Computability",
    level: "advanced",
    summary: "Finite automata, regular languages, context-free grammars, Turing machines, halting problem.",
    examples: [
      { title: "Example 1 — Regular language", prompt: "Is $\\{a^n b^n : n \\geq 0\\}$ regular?", steps: [
        { label: "Pumping lemma", body: "If regular, sufficiently long string can be pumped." },
        { label: "Try", body: "Take $a^p b^p$. Any decomposition with pumped portion in the $a$'s creates unequal counts." }
      ], answer: "Not regular — it is context-free." },
      { title: "Example 2 — Halting problem", prompt: "Statement of halting problem?", steps: [
        { label: "Problem", body: "Given an arbitrary program $P$ and input $x$, decide whether $P(x)$ halts." },
        { label: "Result", body: "Undecidable: no algorithm solves it for all inputs (Turing, 1936)." }
      ], answer: "Undecidable." },
      { title: "Example 3 — Pumping lemma sketch", prompt: "What does pumping lemma say about regular languages?", steps: [
        { label: "Statement", body: "Every regular language has a pumping length $p$ such that any string $w \\in L$ with $|w| \\geq p$ can be split into $xyz$ with $|y| \\geq 1$, $|xy| \\leq p$, and $xy^iz \\in L$ for all $i \\geq 0$." }
      ], answer: "Tool to prove non-regularity." }
    ],
    tasks: [
      { q: "Chomsky type 3?", a: "Regular" },
      { q: "Chomsky type 2?", a: "Context-free" },
      { q: "Chomsky type 0?", a: "Unrestricted / Turing-recognizable" },
      { q: "DFA states for $\\{a^n : n \\geq 0\\}$?", a: "$1$ (accept any number of $a$'s)" },
      { q: "Turing machine model proposed by?", a: "Alan Turing (1936)" },
      { q: "Church-Turing thesis?", a: "Any effectively computable function is computable by a Turing machine" },
      { q: "Decidable vs recognizable?", a: "Decidable: halts on all inputs; recognizable: halts on accepts" },
      { q: "$\\{ww^R\\}$ language?", a: "Context-free (palindromes)" },
      { q: "NFA can be converted to DFA?", a: "Yes (subset construction; may blow up exponentially)" },
      { q: "Regular expression equivalent to?", a: "DFA / NFA" }
    ]
  },
  {
    id: "p-vs-np",
    title: "Complexity Classes — P, NP, NP-complete",
    level: "advanced",
    summary: "P, NP, NP-hard, NP-complete. Reductions. P = NP open problem.",
    examples: [
      { title: "Example 1 — Class definitions", prompt: "P vs NP intuitively?", steps: [
        { label: "P", body: "Decided in polynomial time." },
        { label: "NP", body: "Verified in polynomial time given a witness." },
        { label: "Question", body: "Does P = NP? Open." }
      ], answer: "P ⊆ NP; equality unknown." },
      { title: "Example 2 — NP-complete", prompt: "What is NP-complete?", steps: [
        { label: "Definition", body: "Problems in NP to which every NP problem reduces in polynomial time." },
        { label: "Examples", body: "SAT (Cook-Levin), 3-SAT, traveling salesman (decision), clique, vertex cover, subset sum." }
      ], answer: "Hardest problems in NP — solve one, solve all." },
      { title: "Example 3 — Reduction", prompt: "Reduce 3-SAT to clique?", steps: [
        { label: "Standard", body: "Make a graph node per literal in each clause; connect nodes from different clauses if compatible." },
        { label: "Claim", body: "Original 3-SAT has satisfying assignment ⟺ graph has a clique of size = number of clauses." }
      ], answer: "Standard textbook reduction." }
    ],
    tasks: [
      { q: "First proven NP-complete problem?", a: "SAT (Cook-Levin, 1971)" },
      { q: "Class of problems solvable in poly time?", a: "P" },
      { q: "NP-hard means?", a: "At least as hard as NP-complete (not necessarily in NP)" },
      { q: "Subset sum in NP?", a: "Yes" },
      { q: "Sorting in P?", a: "Yes" },
      { q: "Halting problem in NP?", a: "No (undecidable)" },
      { q: "Million-dollar Clay problem?", a: "P vs NP" },
      { q: "$O(n^{100})$ in P?", a: "Yes (still polynomial)" },
      { q: "PSPACE includes NP?", a: "Yes (PSPACE ⊇ NP, both ⊇ P)" },
      { q: "Approximation often used for what?", a: "NP-hard optimization" }
    ]
  },
  {
    id: "discrete-cs",
    title: "Discrete Mathematics for CS",
    level: "basic",
    summary: "Sets, logic, induction, counting, modular arithmetic.",
    examples: [
      { title: "Example 1 — Induction", prompt: "Prove $1 + 2 + \\ldots + n = n(n+1)/2$ by induction.", steps: [
        { label: "Base", body: "$n = 1$: LHS = $1$, RHS = $1 \\cdot 2/2 = 1$. ✓" },
        { label: "Step", body: "Assume true for $k$. Then sum to $k+1$ = $k(k+1)/2 + (k+1) = (k+1)(k+2)/2$. ✓" }
      ], answer: "True for all $n \\geq 1$." },
      { title: "Example 2 — Modular arithmetic", prompt: "Compute $7^{100} \\pmod 5$.", steps: [
        { label: "Reduce base", body: "$7 \\equiv 2 \\pmod 5$." },
        { label: "Power", body: "$2^4 = 16 \\equiv 1 \\pmod 5$. So $2^{100} = (2^4)^{25} \\equiv 1 \\pmod 5$." }
      ], answer: "$1 \\pmod 5$" },
      { title: "Example 3 — Counting", prompt: "How many bit strings of length $8$ have exactly three $1$'s?", steps: [
        { label: "Binomial", body: "$\\binom{8}{3} = 56$." }
      ], answer: "$56$" }
    ],
    tasks: [
      { q: "$|A \\cup B| = ?$", a: "$|A| + |B| - |A \\cap B|$" },
      { q: "Propositional law: $\\neg(p \\wedge q) = ?$", a: "$\\neg p \\vee \\neg q$" },
      { q: "$7 \\bmod 3$?", a: "$1$" },
      { q: "$-7 \\bmod 5$ (positive remainder)?", a: "$3$" },
      { q: "Number of subsets of an $n$-element set?", a: "$2^n$" },
      { q: "Permutations of $n$ items?", a: "$n!$" },
      { q: "Pigeonhole: $n+1$ items, $n$ boxes?", a: "At least one box has $\\geq 2$" },
      { q: "Induction has how many steps?", a: "Base + inductive" },
      { q: "Contrapositive of $p \\Rightarrow q$?", a: "$\\neg q \\Rightarrow \\neg p$" },
      { q: "$\\gcd(12, 18)$?", a: "$6$" }
    ]
  },
  {
    id: "info-theory",
    title: "Information Theory Basics",
    level: "intermediate",
    summary: "Entropy $H = -\\sum p_i \\log p_i$. Source coding. Channel capacity.",
    examples: [
      { title: "Example 1 — Entropy of a fair coin", prompt: "$P(H) = P(T) = 0.5$. Entropy (bits)?", steps: [
        { label: "Compute", body: "$H = -0.5\\log_2 0.5 - 0.5\\log_2 0.5 = 0.5 + 0.5 = 1$ bit." }
      ], answer: "$1$ bit" },
      { title: "Example 2 — Biased coin", prompt: "$P(H) = 0.9$. Entropy?", steps: [
        { label: "Compute", body: "$H = -0.9\\log_2 0.9 - 0.1\\log_2 0.1 \\approx 0.469$ bits." }
      ], answer: "$\\approx 0.469$ bits" },
      { title: "Example 3 — Huffman", prompt: "Why Huffman optimal among prefix codes?", steps: [
        { label: "Construction", body: "Combines least-probable symbols first." },
        { label: "Result", body: "Achieves average code length within 1 bit of entropy." }
      ], answer: "Optimal prefix-free code for known symbol probabilities." }
    ],
    tasks: [
      { q: "Entropy unit?", a: "Bits (with log base 2)" },
      { q: "Max entropy of $n$-symbol source?", a: "$\\log_2 n$ bits" },
      { q: "Entropy of certain event?", a: "$0$" },
      { q: "Shannon source coding theorem?", a: "Compression bounded by entropy" },
      { q: "Channel capacity at noiseless BSC?", a: "$1$ bit/use" },
      { q: "Mutual information $I(X;Y) = 0$ implies?", a: "$X$ and $Y$ independent" },
      { q: "Kraft inequality bounds?", a: "Codeword lengths in a prefix-free code" },
      { q: "Cross entropy compares?", a: "Two probability distributions" },
      { q: "KL divergence is what?", a: "Asymmetric measure of distribution difference" },
      { q: "Arithmetic coding achieves?", a: "Compression rate arbitrarily close to entropy" }
    ]
  },
  {
    id: "ml-basics",
    title: "Machine Learning — Foundations",
    level: "intermediate",
    summary: "Supervised vs unsupervised. Loss functions. Gradient descent. Overfitting.",
    examples: [
      { title: "Example 1 — Linear regression closed form", prompt: "Least squares solution for $y = X\\beta$?", steps: [
        { label: "Loss", body: "$L = \\|y - X\\beta\\|^2$." },
        { label: "Solution", body: "$\\hat\\beta = (X^TX)^{-1}X^Ty$ (when $X^TX$ invertible)." }
      ], answer: "$\\hat\\beta = (X^TX)^{-1}X^Ty$" },
      { title: "Example 2 — Gradient descent step", prompt: "Update rule?", steps: [
        { label: "Rule", body: "$\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$." },
        { label: "$\\eta$", body: "Learning rate — too small: slow; too large: divergence." }
      ], answer: "$\\theta \\leftarrow \\theta - \\eta \\nabla L$" },
      { title: "Example 3 — Bias-variance", prompt: "Tradeoff?", steps: [
        { label: "Bias", body: "Error from oversimplified model (underfitting)." },
        { label: "Variance", body: "Error from sensitivity to training data (overfitting)." },
        { label: "Total", body: "Test error = bias² + variance + noise." }
      ], answer: "Reduce one, the other typically grows — find sweet spot." }
    ],
    tasks: [
      { q: "Supervised learning needs?", a: "Labels" },
      { q: "Clustering is what type?", a: "Unsupervised" },
      { q: "Logistic regression for?", a: "Binary classification" },
      { q: "Cross-entropy loss for?", a: "Classification" },
      { q: "MSE loss for?", a: "Regression" },
      { q: "Overfitting symptom?", a: "Low train error, high test error" },
      { q: "Regularization purpose?", a: "Reduce overfitting" },
      { q: "L1 vs L2 regularization?", a: "L1 sparsifies; L2 shrinks" },
      { q: "Train/val/test split typical?", a: "Common: 70/15/15 or 80/10/10" },
      { q: "Why need validation set?", a: "Hyperparameter tuning without test leakage" }
    ]
  },
  {
    id: "databases-sql",
    title: "Databases & SQL",
    level: "basic",
    summary: "Relational model. Tables, keys, normalization. Basic SQL queries.",
    examples: [
      { title: "Example 1 — Basic SELECT", prompt: "Get names of users older than 25 from `users` table.", steps: [
        { label: "Query", body: "`SELECT name FROM users WHERE age > 25;`" }
      ], answer: "Filter rows, project columns." },
      { title: "Example 2 — JOIN", prompt: "Get user names and their order totals.", steps: [
        { label: "Inner join", body: "`SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;`" }
      ], answer: "Matches rows on a key." },
      { title: "Example 3 — Normalization", prompt: "Why split user info from orders into separate tables?", steps: [
        { label: "Avoid duplication", body: "User's name stored once, not repeated per order." },
        { label: "Easier updates", body: "Change name in one place." },
        { label: "Cost", body: "Need JOINs to assemble views." }
      ], answer: "Third normal form: each fact stored once." }
    ],
    tasks: [
      { q: "Primary key property?", a: "Unique, not null" },
      { q: "Foreign key references?", a: "Primary key of another (or same) table" },
      { q: "SQL count rows in table T?", a: "`SELECT COUNT(*) FROM T;`" },
      { q: "SQL aggregate by column?", a: "`GROUP BY`" },
      { q: "1NF means?", a: "Atomic values, no repeating groups" },
      { q: "BCNF stricter than which?", a: "3NF" },
      { q: "ACID stands for?", a: "Atomicity, Consistency, Isolation, Durability" },
      { q: "Index trade-off?", a: "Faster reads, slower writes, more space" },
      { q: "Left join returns?", a: "All from left + matches from right (NULLs otherwise)" },
      { q: "NoSQL examples?", a: "MongoDB, Redis, Cassandra" }
    ]
  },
  {
    id: "os-fundamentals",
    title: "Operating Systems",
    level: "intermediate",
    summary: "Processes, threads, scheduling, virtual memory, file systems, concurrency.",
    examples: [
      { title: "Example 1 — Process vs thread", prompt: "Key difference?", steps: [
        { label: "Process", body: "Separate address space, OS-managed isolation." },
        { label: "Thread", body: "Shares address space with other threads in same process — cheap context switch, shared globals." }
      ], answer: "Process: isolation. Thread: shared memory." },
      { title: "Example 2 — Deadlock", prompt: "Four conditions?", steps: [
        { label: "Conditions", body: "Mutual exclusion, hold-and-wait, no preemption, circular wait." },
        { label: "Avoid", body: "Break any one (e.g., total order on lock acquisition)." }
      ], answer: "Coffman conditions." },
      { title: "Example 3 — Virtual memory", prompt: "Why use paging?", steps: [
        { label: "Goals", body: "Each process sees a flat virtual address space; OS maps pages to physical RAM or disk." },
        { label: "Benefits", body: "Isolation, simpler allocation, swapping to disk." }
      ], answer: "Abstraction + isolation + efficient memory use." }
    ],
    tasks: [
      { q: "Context switch cost: process vs thread?", a: "Process higher (TLB flush, etc.)" },
      { q: "Mutex prevents?", a: "Concurrent access to critical section" },
      { q: "Semaphore generalizes?", a: "Mutex (counts available resources)" },
      { q: "Page fault triggers?", a: "Trap into OS to fetch page" },
      { q: "TLB caches?", a: "Recent virtual-to-physical translations" },
      { q: "Preemptive scheduling means?", a: "OS can interrupt running task" },
      { q: "Round-robin scheduling: each gets?", a: "A fixed time slice" },
      { q: "File system inode stores?", a: "File metadata + pointers to data blocks" },
      { q: "Race condition cause?", a: "Unsynchronized access to shared state" },
      { q: "Producer-consumer needs?", a: "Bounded buffer + synchronization" }
    ]
  }
];
