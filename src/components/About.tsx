const About = () => {
  return (
    <section
      id="about"
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
        className="about-grid"
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
            01 / About
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
              lineHeight: 1.1,
              color: "#f0f0f0",
              margin: "0 0 32px 0",
            }}
          >
            I build things people{" "}
            <span style={{ color: "#c8ff00" }}>actually use.</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "640px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "#888",
                fontWeight: 300,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Full-Stack Developer with 3+ years building production-grade web
              and mobile applications. My work spans the full stack — from
              Flutter mobile apps to NestJS backends to Next.js frontends.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                color: "#888",
                fontWeight: 300,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              I care about clean architecture, real-world scalability, and
              shipping on time. Not just writing code — designing systems that
              hold up under load and grow with the business.
            </p>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "52px",
              paddingTop: "40px",
              borderTop: "1px solid #1e1e1e",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "3+", label: "Years experience" },
              { value: "4+", label: "Companies worked" },
              { value: "10+", label: "Projects shipped" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "#f0f0f0",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "#555",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "6px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
