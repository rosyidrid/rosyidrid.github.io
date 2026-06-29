import { useState } from "react";

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company: "Fingerspot",
  //   period: "Jan 2024 — Present",
  //   skills: ["Flutter", "GetX", "Express.js", "Laravel", "Next.js", "NestJS", "React.js", "Dart"],
  //   description: [
  //     "Developed WebView-based features for the fingerspot.io app (Device & Chat modules) using Flutter with MVC architecture and GetX state management.",
  //     "Built a Push SDK using Express.js for real-time data transmission from attendance devices to server with low latency.",
  //     "Created Task Connect — a task management app using Next.js (frontend) and NestJS (backend).",
  //     "Developed Wage Connect — a payroll management system using React.js and Express.js.",
  //     "Handled deployments for Task Connect and Wage Connect using FileZilla, including SSL configuration.",
  //   ],
  // },
  {
    title: "Mobile Programmer",
    company: "PT. Tumbuh Teknologi Finansial",
    period: "Jun 2023 (1 Week)",
    skills: ["Flutter", "WebView", "API Integration"],
    description: [
      "Developed WebView interfaces for a peer-to-peer lending app.",
      "Integrated WebView with Flutter and backend APIs for reliable two-way communication.",
      "Worked under hackathon-style development cycle to accelerate MVP release.",
    ],
  },
  {
    title: "Mobile Programmer",
    company: "DPR RI (Internship)",
    period: "Aug 2022 — Dec 2022",
    skills: ["Kotlin", "Android Studio", "Retrofit", "Zend Framework"],
    description: [
      "Contributed to capstone project using Zend Framework (backend) and Retrofit (Android API integration).",
      "Developed the STELA Android app using Kotlin and Android Studio.",
      "Composed system documentation for DPR RI's web applications.",
    ],
  },
  {
    title: "Mobile Programmer",
    company: "PT. Rupi Digital Indonesia",
    period: "Jul 2021 — May 2022",
    skills: ["Flutter", "MVVM", "Provider", "Laravel", "RESTful APIs"],
    description: [
      "Developed the Playbook Sales Force mobile app using Flutter to monitor sales activity.",
      "Applied MVVM architecture with Provider for efficient state management.",
      "Built RESTful APIs with Laravel for authentication, product data, and visit reports.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      style={{
        padding: "100px 0",
        borderBottom: "1px solid #1e1e1e",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="exp-grid"
      >
        {/* Section label */}
        <div>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              color: "#555",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "block",
              paddingTop: "6px",
            }}
          >
            03 / Experience
          </span>
        </div>

        {/* Content */}
        <div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#f0f0f0",
              margin: "0 0 52px 0",
              lineHeight: 1.1,
            }}
          >
            Work History
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid #1e1e1e",
                  }}
                >
                  {/* Row header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "24px 0",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "center",
                      gap: "24px",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr auto",
                        alignItems: "center",
                        gap: "24px",
                      }}
                      className="exp-header-inner"
                    >
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "11px",
                          color: "#c8ff00",
                          letterSpacing: "0.1em",
                          minWidth: "24px",
                        }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "#f0f0f0",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {exp.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            color: "#555",
                            marginTop: "2px",
                          }}
                        >
                          {exp.company}
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "11px",
                          color: "#444",
                          letterSpacing: "0.05em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",
                        color: isOpen ? "#c8ff00" : "#333",
                        transition: "color 0.2s, transform 0.3s",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        display: "inline-block",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div
                      style={{
                        paddingBottom: "32px",
                        paddingLeft: "48px",
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "10px",
                              color: "#555",
                              border: "1px solid #1e1e1e",
                              padding: "4px 10px",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                        {exp.description.map((item, di) => (
                          <li
                            key={di}
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#666",
                              lineHeight: 1.7,
                              display: "flex",
                              gap: "12px",
                            }}
                          >
                            <span style={{ color: "#c8ff00", flexShrink: 0, marginTop: "2px" }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid #1e1e1e" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .exp-header-inner {
            grid-template-columns: auto 1fr !important;
          }
          .exp-header-inner > :nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
