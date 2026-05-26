const Contact = () => {
  return (
    <section
      id="contact"
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
        className="contact-grid"
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
            06 / Contact
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
              margin: "0 0 12px 0",
              lineHeight: 1.1,
            }}
          >
            Let's work together.
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "#555",
              margin: "0 0 52px 0",
              lineHeight: 1.6,
            }}
          >
            Have a project or just want to say hi? Drop a message.
          </p>

          <form
            action="mailto:rosyidridho9g@gmail.com"
            method="POST"
            encType="multipart/form-data"
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {/* Name */}
            <div style={{ borderTop: "1px solid #1e1e1e" }}>
              <label
                htmlFor="name"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: "#444",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    minWidth: "60px",
                  }}
                >
                  Name
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#f0f0f0",
                    padding: "0",
                  }}
                  onFocus={(e) => (e.currentTarget.style.caretColor = "#c8ff00")}
                />
              </label>
            </div>

            {/* Email */}
            <div style={{ borderTop: "1px solid #1e1e1e" }}>
              <label
                htmlFor="email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: "#444",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    minWidth: "60px",
                  }}
                >
                  Email
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#f0f0f0",
                    padding: "0",
                  }}
                />
              </label>
            </div>

            {/* Message */}
            <div style={{ borderTop: "1px solid #1e1e1e" }}>
              <label
                htmlFor="message"
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px 0",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: "#444",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    minWidth: "60px",
                    paddingTop: "2px",
                  }}
                >
                  Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#f0f0f0",
                    resize: "none",
                    padding: "0",
                    lineHeight: 1.7,
                  }}
                />
              </label>
            </div>

            <div
              style={{
                borderTop: "1px solid #1e1e1e",
                paddingTop: "32px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="submit"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#000",
                  backgroundColor: "#c8ff00",
                  padding: "14px 36px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Alternate contact */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid #1e1e1e",
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:rosyidridho9g@gmail.com"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                color: "#444",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              rosyidridho9g@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rosyidrid/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                color: "#444",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              linkedin.com/in/rosyidrid
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: #2a2a2a;
        }
      `}</style>
    </section>
  );
};

export default Contact;
