import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: "120px",
        paddingBottom: "80px",
        borderBottom: "1px solid #1e1e1e",
      }}
    >
      {/* Top label row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "auto",
          paddingTop: "0",
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "#555",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Full Stack & Mobile Developer
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "#555",
            letterSpacing: "0.1em",
          }}
        >
          Based in Indonesia
        </span>
      </div>

      {/* Main heading */}
      <div style={{ marginTop: "auto", paddingTop: "60px" }}>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(56px, 10vw, 120px)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#f0f0f0",
            margin: "0 0 32px 0",
          }}
        >
          Muhammad
          <br />
          Rosyid
          <br />
          <span style={{ color: "#c8ff00" }}>Ridho.</span>
        </h1>

        {/* Sub row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#888",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: "500px",
              margin: 0,
            }}
          >
            Building production-ready web & mobile applications.
            3+ years in Flutter, React, Next.js, NestJS, and Laravel.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <a
              href="https://docs.google.com/document/d/1TLJEE5fVVUUC7O_X_flZqUy-wXmGAR56/edit?usp=sharing&ouid=101248039682369145296&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                color: "#000",
                backgroundColor: "#c8ff00",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Download CV
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="https://github.com/rosyidrid"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#555",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/rosyidrid/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#555",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                color: "#333",
                marginLeft: "auto",
              }}
            >
              ↓ scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
