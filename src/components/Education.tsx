const Education = () => {
  return (
    <section
      id="education"
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
        className="edu-grid"
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
            04 / Education
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
            Education
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "start",
              borderTop: "1px solid #1e1e1e",
              paddingTop: "32px",
            }}
            className="edu-row"
          >
            <div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#f0f0f0",
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                }}
              >
                Bachelor's Degree in Informatics
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  color: "#c8ff00",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                Ahmad Dahlan University
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "#444",
                  letterSpacing: "0.08em",
                  marginBottom: "28px",
                }}
              >
                Yogyakarta, Indonesia · Sep 2019 – Sep 2023
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Graduated on time with excellent academic performance",
                  "Participated in the Certified Internship and Independent Study Program at DPR RI as a Mobile Programmer",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.7,
                    }}
                  >
                    <span style={{ color: "#c8ff00", flexShrink: 0 }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                color: "#444",
                letterSpacing: "0.08em",
                textAlign: "right",
                whiteSpace: "nowrap",
              }}
            >
              GPA 3.48 / 4.00
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .edu-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
