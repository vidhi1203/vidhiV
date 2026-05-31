// ─────────────────────────────────────────────
//  ADD NEW BLOG POSTS HERE
//  Copy a block, fill in the fields, paste at TOP.
//  url: point to blog/your-post-filename.html
//  Newest posts go at the TOP of the array.
// ─────────────────────────────────────────────

const BLOGS = [
  {
    title: "Evaluation loop for agentic systems",
    date: "March 21, 2026",
    excerpt: "Agentic systems produce multi-step trajectories involving reasoning, tool calls, and intermediate states. Failures can occur anywhere in the execution trace. This makes evaluation fundamentally harder — and non-optional.",
    url: "blog/evaluation-loop.html",
    tags: ["Agentic AI", "Evaluation", "LLMs"]
  },
  {
    title: "Model context protocol",
    date: "February 13, 2026",
    excerpt: "MCPs allow AI models to connect with real-world data and tools in a structured and reliable way. A walkthrough of MCP architecture, core primitives (tools, resources, prompts), and building a small working MCP server.",
    url: "blog/model-context-protocol.html",
    tags: ["MCP", "AI Infrastructure", "LLMs"]
  },
  {
    title: "Agentic AI",
    date: "January 23, 2026",
    excerpt: "Agentic AI is not a single model. It's a system designed to operate autonomously, coordinating multiple agents, tools, and data sources to achieve goals. A deep dive into how agentic architectures actually work.",
    url: "blog/agentic-ai.html",
    tags: ["Agentic AI", "Generative AI", "AI"]
  },
  {
    title: "Not so intelligent",
    date: "December 2025",
    excerpt: "Your favorite AI assistant isn't intelligent — and that's not a bad thing. Understanding how LLMs actually work (pattern prediction, not reasoning) will make you dramatically better at using them.",
    url: "blog/not-so-intelligent.html",
    tags: ["LLMs", "Generative AI", "Explainability"]
  },
  {
    title: "STL & MSTL: anomaly detection with seasonality",
    date: "November 2025",
    excerpt: "Z-score is context-blind. Once your data has daily patterns or long-term trends, a single global threshold fails. STL and MSTL decompose time series into trend, seasonality, and residual — letting anomalies live where they belong.",
    url: "blog/stl-mstl-anomaly.html",
    tags: ["Anomaly Detection", "Time Series", "ML"]
  },
  {
    title: "Robust Z-Score",
    date: "October 2025",
    excerpt: "One large outlier can redefine what 'normal' means, causing smaller but still important spikes to be ignored. The fix: swap mean for median, standard deviation for MAD. That's the robust z-score.",
    url: "blog/robust-z-score.html",
    tags: ["Anomaly Detection", "Statistics", "ML"]
  }
];
