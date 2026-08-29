import "./CaseStudies.scss";
import { CASE_STUDIES_READY } from "../../config";

const caseStudies = [
  {
    id: 1,
    tag: "Banking Modernization",
    title: "Re-architecting a Banking Settlement Platform",
    company: "EPS — Vilnius",
    role: "Lead Software Engineer",
    period: "Jan–Dec 2024",
    tldr: `Led 8 engineers through a 12-month modernization of a legacy .NET banking platform supporting critical financial operations. Cut transaction latency by 40%+ and improved throughput by 30%+ through targeted architectural changes — not a full rewrite. Established the performance baselines and KPIs the platform still runs on.`,
    // {{ FRANKLIN: replace "critical financial operations" above with a one-phrase description
    //    e.g. "interbank settlement" or "core ledger operations" }}
    context: [
      "EPS operated a legacy monolithic banking platform supporting critical financial operations.",
      // {{ FRANKLIN: add scale — e.g. "for N client institutions" or "processing X transactions/day" }}
      // {{ FRANKLIN: approximate age — e.g. "built in 2016" or "roughly 8 years old" }}
      "The system was showing its age under growing load — engineering velocity had dropped as small changes required increasingly large coordination across the monolith.",
      "Leadership had begun weighing a full rewrite.",
    ],
    realProblem:
      "The stated ask was 'make it faster.' After initial profiling, the actual bottleneck was identified. Most of the performance symptoms the team had been firefighting were downstream of this one design choice.",
    // {{ FRANKLIN: replace the sentence above with the specific bottleneck you found —
    //    e.g. a synchronous processing loop, a database lock pattern, a specific subsystem.
    //    Be concrete. This is the highest-signal paragraph in the whole case study. }}
    rejected: [
      {
        approach: "Full rewrite",
        reason:
          "Attractive politically, but would have taken 18+ months and carried unacceptable regulatory risk during parallel-run periods.",
      },
      {
        approach: "Alternative approach #2",
        // {{ FRANKLIN: replace "Alternative approach #2" with the real alternative
        //    e.g. "Database sharding" or "Microservices decomposition" }}
        reason: "Reason pending.",
        // {{ FRANKLIN: replace with why you rejected it }}
      },
      {
        approach: "Alternative approach #3",
        // {{ FRANKLIN: replace with the third alternative you considered }}
        reason: "Reason pending.",
        // {{ FRANKLIN: replace with why you rejected it }}
      },
    ],
    whatIBuilt: [
      "Kept the existing .NET codebase. Replaced the specific synchronous bottleneck with an asynchronous, event-driven pipeline.",
      // {{ FRANKLIN: make the above more specific — what exactly did you replace and with what? }}
      "Re-designed service boundaries and data flows so hot paths no longer shared resources with batch and reporting workloads.",
      "Established performance baselines and KPIs before the migration so every change was measurable against a known starting point.",
      // {{ FRANKLIN: add any specific infrastructure or tooling you introduced —
      //    e.g. read replicas, message queue, autoscaling. Only if true. }}
      "Wrote Architecture Decision Records for each major design choice — onboarding docs the team still uses.",
    ],
    tradeoffs: [
      "Trade-off pending.",
      // {{ FRANKLIN: One explicit trade-off you made that the team pushed back on, and how you defended it. }}
      "Deliberately left certain components unchanged.",
      // {{ FRANKLIN: Something you deliberately left unchanged and why. }}
      "Chose not to introduce a specific technology despite pressure.",
      // {{ FRANKLIN: A technology or pattern you chose NOT to introduce despite pressure — and why. }}
    ],
    results: [
      "Transaction latency: 40%+ reduction (p99 baseline maintained post-migration)",
      "Throughput: 30%+ sustained improvement",
      "Migration completed with minimal production downtime; rollout was seamless across affected institutions",
      // {{ FRANKLIN: one additional business-level metric if you can share —
      //    e.g. batch window reduction, onboarding time improvement, cost reduction }}
      // {{ FRANKLIN: reliability metric — e.g. incidents attributable to migration }}
    ],
    wouldChange: [
      "Lesson learned pending.",
      // {{ FRANKLIN: One honest lesson learned — under-invested in observability?
      //    Should have brought ops in earlier? Something you'd sequence differently?
      //    This paragraph builds more trust with hiring managers than any results
      //    number, because it proves self-awareness. }}
    ],
    whatThisTaughtMe:
      "The hardest senior engineering work is often saying 'no' to the appealing rewrite. Legacy systems are load-bearing in ways the team doesn't fully understand until someone tries to replace them. 'Make it faster' is almost never the real problem statement — the first two weeks of any performance project should be spent finding what the real problem is.",
    stack: [
      "C# / .NET",
      // {{ FRANKLIN: specific .NET version if known }}
      // {{ FRANKLIN: database — Postgres? MSSQL? }}
      // {{ FRANKLIN: any message broker you actually used }}
      // {{ FRANKLIN: cloud — Azure? AWS? on-prem? }}
      "Architecture Decision Records",
      "xUnit",
    ],
  },
  {
    id: 2,
    tag: "AI / LLM Engineering",
    title: "Catching Hallucinations in Gemini 2.5 Pro",
    company: "Turing.com — Palo Alto",
    role: "Senior Software Engineer (Concurrent Contract)",
    period: "Nov 2024 – Apr 2025",
    tldr: `Five-month engagement as part of Turing's senior contributor pool, contributing to the training and refinement of Gemini 2.5 Pro. Specialized in .NET Core internals and React component architecture — catching hallucinations and anti-patterns in code the model would otherwise have shipped to millions of developers.`,
    context: [
      "Turing contracts senior engineers with deep domain expertise to evaluate and improve the code-generation quality of frontier models.",
      "The model needed expert validation on .NET runtime behavior, async/await and threading correctness, memory management, performance-sensitive patterns, and modern React (hooks, state management, component composition).",
      "Work was iterative across multiple model training cycles.",
    ],
    realProblem:
      "Frontier models produce code that looks correct. A senior engineer's job in this context is not to find 'broken' code — the code usually runs — but to find code that would fail under production conditions: race conditions under real load, memory leaks that appear at scale, DI lifetime misuses, React patterns that re-render excessively or leak handlers. These are the errors that are hardest for the model to self-correct because they require experience, not rule-following.",
    rejected: [],
    whatIBuilt: [
      "Designed real-world prompts, reference implementations, and edge-case test cases covering enterprise-grade patterns: async/await correctness, threading, memory management, DI lifetimes, React component architecture, state management, and API integration.",
      "Identified specific classes of hallucination in .NET output.",
      // {{ FRANKLIN: One specific class of hallucination you caught in .NET output —
      //    e.g. "async void in event handlers breaking exception propagation" or
      //    "incorrect IDisposable patterns in DI-scoped services". One concrete
      //    example turns this from generic to distinctive. }}
      "Identified specific React anti-patterns the model produced.",
      // {{ FRANKLIN: One specific React anti-pattern the model produced and how
      //    your test case exposed it. }}
      "Provided corrections and feedback that fed into subsequent training cycles, contributing to measurable improvements in model consistency and reliability for enterprise-grade code generation.",
    ],
    tradeoffs: [
      "Judgment call pending.",
      // {{ FRANKLIN: One interesting judgment call you made during the work —
      //    e.g. how you prioritized which errors to flag, or how you decided when
      //    model output was "good enough". }}
    ],
    results: [
      "Specific metrics subject to NDA.",
      // {{ FRANKLIN: Replace with acceptance rate or quality score if you CAN share.
      //    If under NDA, the "subject to NDA" framing itself signals credibility —
      //    keep it. }}
      "Identified recurring failure patterns in .NET async code and React component architecture that measurably improved model output quality across training cycles.",
      "Work now lives in a model used by millions of developers daily.",
    ],
    wouldChange: [
      "Reflection pending.",
      // {{ FRANKLIN: Something that surprised you or that you'd approach differently.
      //    Even "I was surprised how often the model got X right and Y consistently
      //    wrong" works here. }}
    ],
    whatThisTaughtMe:
      "Working on LLM training gave me an unusual vantage point: I saw exactly which kinds of engineering judgment are hardest for AI to replicate. The code that requires production scars to get right — lifecycle management, concurrency edge cases, scaling failure modes — is still firmly in the human domain. That shapes how I think about AI-assisted development in my own work: maximum leverage on the routine, maximum scrutiny on everything that can fail only at 3am.",
    stack: [
      "C# / .NET Core",
      "React",
      "TypeScript",
      "Prompt Engineering",
      "LLM Evaluation",
      "Edge-case Test Design",
    ],
  },
];

const CaseStudies = () => {
  if (!CASE_STUDIES_READY) return null;

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
        <h4>What I&rsquo;d Do Differently</h4>
        <ul>
          {study.wouldChange.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {study.whatThisTaughtMe && (
        <div className="case-study__section">
          <h4>What This Taught Me</h4>
          <p>{study.whatThisTaughtMe}</p>
        </div>
      )}

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
