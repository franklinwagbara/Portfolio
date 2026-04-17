import "./CaseStudies.scss";

const caseStudies = [
  {
    id: 1,
    tag: "Banking Modernization",
    title: "Re-architecting a Banking Settlement Platform",
    company: "EPS — Vilnius",
    role: "Lead Software Engineer",
    period: "Jan–Dec 2024",
    tldr: `Led 8 engineers through a 12-month modernization of a monolithic .NET
banking platform. Cut transaction latency by [TODO: actual %], improved
throughput by [TODO: actual %], and [TODO: specific business unlock —
e.g. "reduced end-of-day batch window from 4 hours to 47 minutes"].`,
    context: [
      "EPS operated a [TODO: X-year-old] settlement platform that processed [TODO: volume, e.g. ~2.1M transactions/day] for [TODO: N] client institutions.",
      "End-of-day batch reconciliation was taking longer every quarter and had begun bleeding into the next business day.",
      "[TODO: A new regulatory requirement] required sub-second audit trail availability — the existing system took [TODO: X] seconds.",
      "Adding a new institution took [TODO: e.g. 3 weeks] of manual configuration.",
    ],
    realProblem:
      "The stated ask was 'make it faster.' After two weeks of profiling, the actual bottleneck was clear: [TODO: describe the real bottleneck you found — e.g. a synchronous, single-threaded reconciliation loop holding a database-level lock]. Nearly every 'performance' symptom was downstream of this one design choice.",
    rejected: [
      {
        approach: "Full rewrite",
        reason:
          "[TODO: Why you rejected it — e.g. would have taken 18+ months and carried unacceptable regulatory risk]",
      },
      {
        approach: "Database sharding",
        reason:
          "[TODO: Why — e.g. would solve throughput but not latency, and multiply operational surface area]",
      },
      {
        approach: "Event-sourced rewrite of reconciliation only",
        reason:
          "[TODO: Why — e.g. would require re-training the operations team]",
      },
    ],
    whatIBuilt: [
      "[TODO: Describe key architectural change #1 — e.g. Replaced synchronous reconciliation loop with event-driven pipeline using RabbitMQ]",
      "[TODO: Key change #2 — e.g. Introduced PostgreSQL logical replication to split read/write paths]",
      "[TODO: Key change #3 — e.g. Moved batch jobs to Azure AKS with autoscaling]",
      "[TODO: Key change #4 — e.g. Wrote ADR documents covering each decision]",
    ],
    tradeoffs: [
      "[TODO: A trade-off you made and why — e.g. Chose at-least-once delivery over exactly-once]",
      "[TODO: Something you deliberately left untouched and why]",
      "[TODO: A technology you chose NOT to introduce despite pressure]",
    ],
    results: [
      "Transaction latency (p99): [TODO: X ms → Y ms]",
      "Throughput: [TODO: +X% sustained]",
      "[TODO: Other metric — e.g. End-of-day batch window: 4h → 47 min]",
      "[TODO: Other metric — e.g. New-institution onboarding: 3 weeks → 4 days]",
      "[TODO: Any reliability metric — e.g. Zero production incidents across migration]",
    ],
    wouldChange: [
      "[TODO: What you'd do differently — e.g. Under-invested in observability early, spent 6 weeks flying blind]",
      "[TODO: Another lesson — e.g. Should have brought ops team into architecture review earlier]",
    ],
    stack: [
      "C# / .NET 8",
      "PostgreSQL",
      "RabbitMQ",
      "Azure AKS",
      "Azure DevOps",
    ],
  },
  {
    id: 2,
    tag: "AI / LLM Engineering",
    title: "Catching Hallucinations in Gemini 2.5 Pro",
    company: "Turing.com — Palo Alto",
    role: "Senior Software Engineer (Contract)",
    period: "Nov 2024 – Apr 2025",
    tldr: `Contributed to the training and refinement of Gemini 2.5 Pro,
specializing in C#, .NET Core internals, and React — specifically catching
hallucinations and anti-patterns that would have shipped to millions of developers.`,
    context: [
      "Turing contracted senior engineers with deep domain expertise to evaluate and improve Gemini 2.5 Pro's code generation quality.",
      "The model needed expert validation on .NET runtime behavior, async/await patterns, threading, memory management, and modern React architecture.",
      "[TODO: Any specific scope or scale details you can share]",
    ],
    realProblem:
      "[TODO: Describe the core challenge — e.g. The model produced code that looked correct but contained subtle anti-patterns that would cause production failures at scale — things only deep domain experts would catch.]",
    rejected: [],
    whatIBuilt: [
      "[TODO: Describe your methodology — e.g. Designed real-world prompts and reference implementations covering enterprise-grade patterns]",
      "[TODO: Specific contribution — e.g. Created edge-case test cases for .NET async/await, threading, and memory management]",
      "[TODO: Specific contribution — e.g. Identified classes of hallucinations in React component architecture output]",
      "[TODO: How your work improved the model — e.g. Feedback loop that measurably improved output consistency]",
    ],
    tradeoffs: [
      "[TODO: Any interesting judgment calls you made during the work]",
    ],
    results: [
      "[TODO: Your acceptance rate or quality score if available]",
      "[TODO: Types of errors you caught — e.g. Identified X classes of hallucination patterns in .NET output]",
      "Work is now in a model used by millions of developers daily",
      "[TODO: Any other measurable impact]",
    ],
    wouldChange: [
      "[TODO: What you learned or would do differently]",
    ],
    stack: [
      "C# / .NET Core",
      "React",
      "TypeScript",
      "Prompt Engineering",
      "LLM Evaluation",
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies">
      <h5 data-aos="fade-up">Deep Dives</h5>
      <h2 data-aos="fade-up">Case Studies</h2>
      <div className="case-studies__container">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

const CaseStudyCard = ({ study, index }) => {
  return (
    <article
      className="case-study"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      <div className="case-study__header">
        <span className="case-study__tag">{study.tag}</span>
        <h3>{study.title}</h3>
        <p className="case-study__meta">
          {study.company} &middot; {study.role} &middot; {study.period}
        </p>
      </div>

      <div className="case-study__tldr">
        <strong>TL;DR</strong>
        <p>{study.tldr}</p>
      </div>

      <div className="case-study__section">
        <h4>The Context</h4>
        <ul>
          {study.context.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="case-study__section">
        <h4>The Real Problem</h4>
        <p>{study.realProblem}</p>
      </div>

      {study.rejected.length > 0 && (
        <div className="case-study__section">
          <h4>What I Considered &amp; Rejected</h4>
          <ul>
            {study.rejected.map((item, i) => (
              <li key={i}>
                <strong>{item.approach}:</strong> {item.reason}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="case-study__section">
        <h4>What I Built</h4>
        <ul>
          {study.whatIBuilt.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {study.tradeoffs.length > 0 && (
        <div className="case-study__section">
          <h4>Trade-offs &amp; Judgment Calls</h4>
          <ul>
            {study.tradeoffs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="case-study__section">
        <h4>Results</h4>
        <ul className="case-study__results">
          {study.results.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="case-study__section">
        <h4>What I'd Do Differently</h4>
        <ul>
          {study.wouldChange.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="case-study__stack">
        {study.stack.map((tech) => (
          <span key={tech} className="case-study__tech">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
