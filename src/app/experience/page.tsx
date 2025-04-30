type Project = {
  name: string;
  description: string;
  techStack?: string[];
};

type Role = {
  title: string;
  company: string;
  period: string;
  location?: string;
  employmentType?: string;
  summary?: string[];
  highlights?: string[];
  projects?: Project[];
  skills?: string[];
};

type School = {
  degree: string;
  school: string;
  period: string;
};

// Newest first
const roles: Role[] = [
  {
    title: "Software Engineer Contractor",
    company: "Mercor",
    period: "Jan 2026 – Present",
    employmentType: "Part-time, Project-based",
    summary: ["Worked on projects focused on LLM-generated software and AI-assisted development."],
    projects: [
      {
        name: "LLM Code Evaluation",
        description:
          "Reviewed and validated AI-generated implementations across Java, Python, JavaScript, and TypeScript, focusing on correctness, edge cases, code quality, and adherence to requirements.",
      },
      {
        name: "Coding Project Leadership",
        description:
          "Led a coding-domain project involving 2,000+ tasks, coordinating contributors, resolving technical issues, and working with project managers to maintain project quality and delivery.",
      },
    ],
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Linux", "Git"],
  },
  {
    title: "Software Engineer",
    company: "Salesforce",
    period: "Jan 2022 – Mar 2025",
    summary: [
      "I worked on Salesforce Payments, a distributed SaaS platform supporting thousands of merchants with online payment processing, checkout experiences, payment links, transaction management, and integrations with third-party payment providers. I contributed to enhancing the platform’s payment reliability and transaction visibility, working full-stack across customer-facing experiences, backend services, internal tools, and automated testing.",
    ],
    projects: [
      {
        name: "PayNow with Products",
        description:
          "Pay Now is a single-link payment solution that makes collecting payments simple and easy. Built a customer-facing payment experience that allows merchants to create payment links with products.",
        techStack: ["TypeScript", "CSS", "HTML"],
      },
      {
        name: "Payment Activity Timeline",
        description:
          "Built an API and merchant-facing experience for viewing payment activities, payment statuses, and transaction information, including metadata from Stripe.",
        techStack: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
      },
      {
        name: "Payment Orchestration",
        description:
          "Developed backend services supporting end-to-end payment workflows, including payment processing, cancellation, error handling, and interactions with third-party payment providers.",
        techStack: ["Java", "Spring Boot", "REST APIs", "AWS"],
      },
      {
        name: "Internal Payment Debugging Tool",
        description:
          "Designed and built an internal tool that helps engineers investigate and troubleshoot payment issues in customer production orgs by bringing together information from different parts of the payment system. The tool also supports retrying payment transactions to help recover failed transactions.",
        techStack: ["Java", "REST APIs"],
      },
      {
        name: "Payments Automation Setup",
        description:
          "Owned the payments automation setup workflow in the Starter Pro Suite, guiding customers through onboarding and enabling them to connect a Stripe merchant account, create payment links, and access their transaction dashboard after completing setup.",
        techStack: ["TypeScript", "HTML", "CSS"],
      },
      {
        name: "Testing & Production Support",
        description:
          "Built automated tests to simulate payment workflows and supported production payment systems by investigating issues across APIs, application logs, metrics, and databases.",
        techStack: ["JUnit", "Jest", "CodeceptJS", "Splunk", "Grafana"],
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Optofidelity Inc.",
    period: "Sept 2021 – Dec 2021",
    highlights: [
      "Write and debug Python scripts for the test automation machine and customize scripts for each client",
      "Setup, configure and troubleshoot Linux Server on the test automation machine for the clients",
    ],
    skills: ["Python", "Linux"],
  },
  {
    title: "iOS Developer Intern",
    company: "Capital Securities Corp.",
    period: "March 2021 – June 2021",
    location: "Taiwan",
    highlights: [
      "Deliver new iOS features in stock market and registration app in Objective-C and Swift",
      "Enhanced and modified more than 20 bugs and released a new version of the app to the market in Objective-C",
      "Modified codes with biometric login, xib interface, login credentials and API gateway requests",
    ],
    skills: ["Objective-C", "Swift", "iOS"],
  },
  {
    title: "Software QA Intern (Automation Team)",
    company: "KaiOS Technologies, Inc.",
    period: "Nov 2020 – May 2021",
    location: "Taiwan",
    highlights: [
      "Performed KaiOS system testing for weekly sanity tests to provide system stability for end-users",
      "Helped to test and implement KaiPay features to KaiOS system to enhance user payment experience",
      "Enhanced more than 15 automation test scripts in Python for MTBF and UI tests of KaiOS system with Jenkins in scrum agile development cycle",
    ],
    skills: ["Python", "Jenkins"],
  },
];

const education: School[] = [
  {
    degree: "B.S. Computer Science",
    school: "San Jose State University",
    period: "2017 – 2021",
  },
];

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <li
          key={tag}
          className="rounded-full bg-gradient-to-r from-sky/25 to-periwinkle/25 border border-periwinkle/30 px-3 py-1 text-xs font-medium text-violet-blue"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-ink">
        My <span className="gradient-text">Experience</span>
      </h1>
      <p className="text-ink/70 mb-12">Where I&apos;ve worked and what I&apos;ve built along the way.</p>

      <ol className="relative border-l-2 border-periwinkle/40 ml-3 space-y-10">
        {roles.map(role => (
          <li key={`${role.company}-${role.title}`} className="relative pl-8">
            <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-gradient-to-br from-sky to-violet-blue ring-4 ring-background" />
            <div className="glow-card p-6">
              <p className="text-sm font-medium text-periwinkle mb-1">
                {role.period}
                {role.location && <span className="text-ink/50"> · {role.location}</span>}
                {role.employmentType && <span className="text-ink/50"> · {role.employmentType}</span>}
              </p>
              <h2 className="text-xl font-semibold text-ink">{role.title}</h2>
              <p className="font-medium text-violet-blue mb-3">{role.company}</p>

              {role.summary && (
                <div className="space-y-3">
                  {role.summary.map(paragraph => (
                    <p key={paragraph} className="text-ink/80 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              )}

              {role.highlights && (
                <ul className="list-disc pl-5 space-y-1 text-ink/80">
                  {role.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {role.projects && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/50 mb-3">Key Projects</h3>
                  <div className="space-y-4">
                    {role.projects.map(project => (
                      <div
                        key={project.name}
                        className="rounded-xl border-l-4 border-periwinkle bg-gradient-to-r from-sky/10 to-periwinkle/10 p-4"
                      >
                        <h4 className="font-semibold text-ink">{project.name}</h4>
                        <p className="mt-1 text-sm text-ink/75 leading-relaxed">{project.description}</p>
                        {project.techStack && (
                          <div className="mt-3">
                            <TagList tags={project.techStack} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {role.skills && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/50 mb-3">Tech</h3>
                  <TagList tags={role.skills} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl md:text-3xl font-extrabold mt-16 mb-6 text-ink">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="space-y-4">
        {education.map(school => (
          <div key={school.school} className="glow-card p-6">
            <p className="text-sm font-medium text-periwinkle mb-1">{school.period}</p>
            <h3 className="text-lg font-semibold text-ink">{school.degree}</h3>
            <p className="text-violet-blue">{school.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
