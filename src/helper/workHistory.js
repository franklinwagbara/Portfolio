const workHistory = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Innoscripta — Munich (01/2025 – Present)",
    responsibilities: [
      {
        id: 1,
        value:
          "Identified and resolved a latency-critical bottleneck in a multi-tenant enterprise platform, achieving an 80%+ reduction in p99 latency for a high-traffic feature under stringent SLA requirements.",
      },
      {
        id: 2,
        value:
          "Designed microfrontend integration patterns enabling independent team deployments, reducing release coordination overhead and improving frontend build times.",
      },
      {
        id: 3,
        value:
          "Recognized by engineering leadership for delivering measurable performance gains on a business-critical feature — work that directly unblocked a product milestone.",
      },
    ],
  },
  {
    id: 2,
    title: "Senior Software Engineer (Contract)",
    company: "Turing.com — Palo Alto, CA (11/2024 – 04/2025)",
    responsibilities: [
      {
        id: 1,
        value:
          "Contracted to evaluate and improve Gemini 2.5 Pro's code generation quality, specializing in .NET Core internals (async/await, threading, memory management) and modern React patterns.",
      },
      {
        id: 2,
        value:
          "Identified classes of hallucinations and anti-patterns in model output that would have caused production failures — flawed async patterns, incorrect DI lifetimes, and React component anti-patterns.",
      },
      {
        id: 3,
        value:
          "Designed real-world prompts, reference implementations, and edge-case test cases that measurably improved the model's consistency and reliability for enterprise-grade code generation.",
      },
    ],
  },
  {
    id: 3,
    title: "Lead Software Engineer",
    company: "EPS — Vilnius (01/2024 – 12/2024)",
    responsibilities: [
      {
        id: 1,
        value:
          "Led 8 engineers through a 12-month modernization of a legacy banking platform. Replaced synchronous processing bottlenecks with event-driven architecture, cutting transaction latency by 40%+ and improving throughput by 30%+.",
      },
      {
        id: 2,
        value:
          "Argued against a full rewrite in favor of targeted architectural changes — a decision that kept the system in production during migration with zero incidents attributable to the transition.",
      },
      {
        id: 3,
        value:
          "Wrote Architecture Decision Records for each major design choice, creating a decision trail that onboarded 3 new engineers in half the usual ramp-up time.",
      },
    ],
  },
  {
    id: 4,
    title: "Lead Software Engineer",
    company: "FCMB (First City Monument Bank) — Abuja (01/2024 – 12/2024, concurrent contract)",
    responsibilities: [
      {
        id: 1,
        value:
          "Architected a microservices-driven banking application using C#, ASP.NET, and event-driven patterns, deployed across Azure infrastructure.",
      },
      {
        id: 2,
        value:
          "Integrated GitHub Copilot into the team's workflow with validation guardrails, improving developer throughput by 30% while maintaining code quality across 500K+ LOC.",
      },
      {
        id: 3,
        value:
          "Established AI-generated code review protocols — trained the team to catch Copilot anti-patterns, reducing post-merge defects in AI-assisted code by a measurable margin.",
      },
    ],
  },
  {
    id: 5,
    title: "Team Lead — Chief Software Engineer & Architect",
    company: "BrandoneTech — Abuja (06/2023 – 12/2023)",
    responsibilities: [
      {
        id: 1,
        value:
          "Designed and shipped payment gateway systems for clients using C#, .NET Core, Angular, and React — handling real money movement with PCI-compliant architecture.",
      },
      {
        id: 2,
        value:
          "Introduced AI-assisted development tools that reduced prototyping time and caught integration errors earlier in the development cycle.",
      },
    ],
  },
  {
    id: 6,
    title: "Senior Software Engineer",
    company: "Brookstone — Port Harcourt (09/2019 – 09/2022)",
    responsibilities: [
      {
        id: 1,
        value:
          "Wrote the core framework code that subsequent developers consistently built upon — maintained through multiple team turnovers over 3 years.",
      },
      {
        id: 2,
        value:
          "Conducted needs analysis for 50+ customers, translating business requirements into technical proposals and vendor cost estimates.",
      },
      {
        id: 3,
        value:
          "Mentored junior and mid-level engineers across C#, .NET Core, React, and Angular, establishing team code review standards.",
      },
    ],
  },
];

export default workHistory;
