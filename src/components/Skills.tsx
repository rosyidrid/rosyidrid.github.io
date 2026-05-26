import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql, SiFlutter, SiNestjs,
  SiExpress, SiPostgresql, SiKotlin, SiVite, SiJira,
  SiPostman, SiRedis, SiDart, SiPhp, SiLaravel,
} from 'react-icons/si';

const categories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Vite"],
    icons: [
      <FaReact style={{ color: "#22d3ee" }} />,
      <SiNextdotjs style={{ color: "#f0f0f0" }} />,
      <SiTypescript style={{ color: "#3b82f6" }} />,
      <SiTailwindcss style={{ color: "#14b8a6" }} />,
      <SiVite style={{ color: "#a855f7" }} />,
    ],
  },
  {
    label: "Backend",
    skills: ["NestJS", "Laravel", "Node.js", "Express", "PHP"],
    icons: [
      <SiNestjs style={{ color: "#ef4444" }} />,
      <SiLaravel style={{ color: "#ef4444" }} />,
      <FaNodeJs style={{ color: "#22c55e" }} />,
      <SiExpress style={{ color: "#f0f0f0" }} />,
      <SiPhp style={{ color: "#818cf8" }} />,
    ],
  },
  {
    label: "Mobile",
    skills: ["Flutter", "Dart", "Kotlin", "React Native"],
    icons: [
      <SiFlutter style={{ color: "#38bdf8" }} />,
      <SiDart style={{ color: "#60a5fa" }} />,
      <SiKotlin style={{ color: "#f97316" }} />,
      <FaReact style={{ color: "#22d3ee" }} />,
    ],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis"],
    icons: [
      <SiPostgresql style={{ color: "#60a5fa" }} />,
      <SiMysql style={{ color: "#60a5fa" }} />,
      <SiRedis style={{ color: "#ef4444" }} />,
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "Figma", "Jira", "Postman"],
    icons: [
      <FaGitAlt style={{ color: "#f97316" }} />,
      <FaFigma style={{ color: "#ec4899" }} />,
      <SiJira style={{ color: "#3b82f6" }} />,
      <SiPostman style={{ color: "#f97316" }} />,
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
        className="skills-grid"
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
            02 / Skills
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
            Tech Stack
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "32px",
                  alignItems: "center",
                  padding: "24px 0",
                  borderTop: i === 0 ? "1px solid #1e1e1e" : "none",
                  borderBottom: "1px solid #1e1e1e",
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "#555",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </span>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.skills.map((skill, si) => (
                    <div
                      key={skill}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        padding: "6px 12px",
                        border: "1px solid #1e1e1e",
                        backgroundColor: "#111",
                        transition: "border-color 0.2s, background-color 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#333";
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = "#161616";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e1e";
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = "#111";
                      }}
                    >
                      <span style={{ fontSize: "14px", display: "flex" }}>
                        {cat.icons[si]}
                      </span>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          color: "#888",
                          fontWeight: 400,
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
