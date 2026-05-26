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
    shortDescription: 'Mobile and web-based sales tracking app built with Flutter and Laravel, designed to monitor real-time sales visits and improve team productivity.',
    longDescription: `Playbook Sales Force is a full-stack application developed to enhance field sales productivity through real-time tracking and transparent reporting. Built the mobile frontend using Flutter and backend API using Laravel.

The application utilizes Location-Based Service (LBS) to verify sales visits by capturing GPS coordinates during outlet check-ins, ensuring every visit is genuine and trackable. Provides a reliable reporting system that helps eliminate fake reports and supports management in evaluating team performance with accurate, real-time data.`,
    images: [playbookSalesForce1, playbookSalesForce2, playbookSalesForce3],
    tags: ['Flutter', 'Dart', 'MySQL', 'Laravel'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: 'DIGISCORE',
    shortDescription: 'Real-time digital scoring system for martial arts tournaments with multi-arena support. Used in major regional and national events.',
    longDescription: `Developed a comprehensive digital scoring system for martial arts tournaments, enabling real-time synchronization between judge devices and public displays using Socket.IO. The system includes a Flutter-based mobile app for judges and a Vite.js web panel for administrators.

Successfully deployed in prominent events: Balikpapan Open 1, Multievent Kota, Walikota Cup (Balikpapan) 2025, and Military Tournament VI/MLW 2025.`,
    images: [digiscore1, digiscore2],
    tags: ['Flutter', 'Dart', 'MySQL', 'Express.js', 'Vite.js', 'Socket.io', 'Sequelize'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: 'DAFTRIX',
    shortDescription: 'Web-based registration platform for martial arts tournaments with auto-grouping, admin dashboard, and DIGISCORE integration.',
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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <section
        id="projects"
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
          className="proj-grid"
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
              05 / Projects
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
              Selected Work
            </h2>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {projectsData.map((project, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(project)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    borderTop: "1px solid #1e1e1e",
                    padding: "28px 0",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "24px",
                    alignItems: "center",
                    transition: "background-color 0.15s",
                    backgroundColor: hovered === i ? "#0f0f0f" : "transparent",
                    marginLeft: hovered === i ? "-16px" : "0",
                    paddingLeft: hovered === i ? "16px" : "0",
                  }}
                  className="proj-row"
                >
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "11px",
                      color: hovered === i ? "#c8ff00" : "#333",
                      letterSpacing: "0.1em",
                      transition: "color 0.2s",
                      minWidth: "28px",
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
                        color: hovered === i ? "#f0f0f0" : "#aaa",
                        letterSpacing: "-0.01em",
                        transition: "color 0.2s",
                        marginBottom: "4px",
                      }}
                    >
                      {project.title}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: "10px",
                            color: "#444",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail on hover */}
                  <div
                    style={{
                      width: "80px",
                      height: "52px",
                      overflow: "hidden",
                      opacity: hovered === i ? 1 : 0,
                      transition: "opacity 0.3s",
                      flexShrink: 0,
                    }}
                    className="proj-thumb"
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "grayscale(30%)",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      color: hovered === i ? "#c8ff00" : "#222",
                      transition: "color 0.2s, transform 0.2s",
                      transform: hovered === i ? "translateX(4px)" : "none",
                      display: "inline-block",
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #1e1e1e" }} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .proj-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .proj-thumb {
            display: none !important;
          }
          .proj-row {
            grid-template-columns: auto 1fr auto !important;
          }
        }
      `}</style>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
