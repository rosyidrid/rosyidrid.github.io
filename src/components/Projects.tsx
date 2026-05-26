import { useState } from 'react';
import ProjectModal from './ProjectModal';
import type { Project } from './ProjectModal';

import playbookSalesForce1 from '../assets/projects/playbook/1.png';
import playbookSalesForce2 from '../assets/projects/playbook/2.png';
import playbookSalesForce3 from '../assets/projects/playbook/3.png';

import daftrix1 from '../assets/projects/daftrix/1.png';
import daftrix2 from '../assets/projects/daftrix/2.png';
import daftrix3 from '../assets/projects/daftrix/3.png';
import daftrix4 from '../assets/projects/daftrix/4.png';
import daftrix5 from '../assets/projects/daftrix/5.png';

import digiscore1 from '../assets/projects/digiscore/1.png';
import digiscore2 from '../assets/projects/digiscore/2.png';

const projectsData: Project[] = [
  {
    title: 'Playbook Sales Force',
    shortDescription: 'Mobile and web-based sales tracking app. Monitors real-time field visits via GPS, eliminates fake reports, and improves team productivity.',
    longDescription: `Playbook Sales Force is a full-stack application developed to enhance field sales productivity through real-time tracking and transparent reporting. Built the mobile frontend using Flutter and backend API using Laravel.

The application utilizes Location-Based Service (LBS) to verify sales visits by capturing GPS coordinates during outlet check-ins, ensuring every visit is genuine and trackable. Provides a reliable reporting system that helps eliminate fake reports and supports management in evaluating team performance with accurate, real-time data.`,
    images: [playbookSalesForce1, playbookSalesForce2, playbookSalesForce3],
    tags: ['Flutter', 'Dart', 'MySQL', 'Laravel'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: 'DIGISCORE',
    shortDescription: 'Real-time digital scoring system for martial arts tournaments. Multi-arena, multi-category. Used in Walikota Cup 2025 and Military Tournament VI/MLW 2025.',
    longDescription: `Developed a comprehensive digital scoring system for martial arts tournaments, enabling real-time synchronization between judge devices and public displays using Socket.IO. The system includes a Flutter-based mobile app for judges and a Vite.js web panel for administrators.

Successfully deployed in prominent events: Balikpapan Open 1, Multievent Kota, Walikota Cup (Balikpapan) 2025, and Military Tournament VI/MLW 2025.`,
    images: [digiscore1, digiscore2],
    tags: ['Flutter', 'Dart', 'MySQL', 'Express.js', 'Vite.js', 'Socket.io', 'Sequelize'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: 'DAFTRIX',
    shortDescription: 'Web-based tournament registration platform with auto-grouping by category, admin dashboard, printable reports, and full DIGISCORE integration.',
    longDescription: `Web-based registration system tailored for martial arts tournaments. Features participant data management, verification workflow, and automatic grouping by category. Frontend built with Next.js; backend with Express.js.

Included an intuitive admin dashboard with printable participant reports. Fully integrated with DIGISCORE. Deployed in Walikota Cup (Balikpapan) 2024 and Military Tournament VI/MLW 2025.`,
    images: [daftrix1, daftrix2, daftrix3, daftrix4, daftrix5],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Express.js', 'NextAuth', 'Sequelize'],
    liveUrl: 'https://pendaftarans.com',
    sourceUrl: '',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = projectsData[activeIndex];

  return (
    <>
      <section
        id="projects"
        style={{ padding: "100px 0", borderBottom: "1px solid #1e1e1e" }}
      >
        {/* Section header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "64px",
            marginBottom: "52px",
          }}
          className="proj-header-grid"
        >
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
            05 / Projects
          </span>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#f0f0f0",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Selected Work
          </h2>
        </div>

        {/* Split layout: list left, preview right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "0",
            alignItems: "start",
          }}
          className="proj-split"
        >
          {/* Left: project list */}
          <div style={{ borderRight: "1px solid #1e1e1e" }}>
            {projectsData.map((project, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setSelected(project)}
                  style={{
                    borderTop: "1px solid #1e1e1e",
                    padding: "32px 40px 32px 0",
                    cursor: "pointer",
                    transition: "padding-left 0.2s",
                    paddingLeft: isActive ? "20px" : "0",
                    borderLeft: isActive ? "2px solid #c8ff00" : "2px solid transparent",
                  }}
                >
                  {/* Row top: number + title + arrow */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "11px",
                        color: isActive ? "#c8ff00" : "#2a2a2a",
                        letterSpacing: "0.1em",
                        transition: "color 0.2s",
                        paddingTop: "4px",
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          color: isActive ? "#f0f0f0" : "#444",
                          transition: "color 0.2s",
                          lineHeight: 1.2,
                          marginBottom: "8px",
                        }}
                      >
                        {project.title}
                      </div>
                      {/* Description — always visible */}
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "13px",
                          color: isActive ? "#666" : "#2e2e2e",
                          lineHeight: 1.7,
                          margin: "0 0 14px 0",
                          transition: "color 0.2s",
                          maxWidth: "480px",
                        }}
                      >
                        {project.shortDescription}
                      </p>
                      {/* Tags */}
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "9px",
                              color: isActive ? "#555" : "#2a2a2a",
                              border: `1px solid ${isActive ? "#2a2a2a" : "#1a1a1a"}`,
                              padding: "3px 8px",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              transition: "color 0.2s, border-color 0.2s",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        color: isActive ? "#c8ff00" : "#1e1e1e",
                        transition: "color 0.2s, transform 0.2s",
                        transform: isActive ? "translateX(4px)" : "none",
                        display: "inline-block",
                        flexShrink: 0,
                        paddingTop: "4px",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid #1e1e1e" }} />
          </div>

          {/* Right: persistent preview panel */}
          <div
            style={{
              position: "sticky",
              top: "80px",
              paddingLeft: "40px",
            }}
            className="proj-preview"
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                overflow: "hidden",
                backgroundColor: "#111",
                marginBottom: "24px",
              }}
            >
              <img
                key={activeIndex}
                src={active.images[0]}
                alt={active.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  animation: "fadeInImg 0.35s ease",
                }}
              />
            </div>

            {/* Preview info */}
            <div
              style={{
                borderTop: "1px solid #1e1e1e",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: "#333",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {activeIndex + 1} of {projectsData.length}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#888",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {active.title}
                </div>
              </div>
              <button
                onClick={() => setSelected(active)}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  color: "#000",
                  backgroundColor: "#c8ff00",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  flexShrink: 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInImg {
          from { opacity: 0; transform: scale(1.02); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 900px) {
          .proj-split {
            grid-template-columns: 1fr !important;
          }
          .proj-preview {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .proj-header-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
