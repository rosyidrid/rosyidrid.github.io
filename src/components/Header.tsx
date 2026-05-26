import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "14px",
              fontWeight: 500,
              color: "#f0f0f0",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            RR<span style={{ color: "#c8ff00" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#555555",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://docs.google.com/document/d/1TLJEE5fVVUUC7O_X_flZqUy-wXmGAR56/edit?usp=sharing&ouid=101248039682369145296&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                color: "#000",
                backgroundColor: "#c8ff00",
                padding: "7px 16px",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Resume
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "#f0f0f0",
                transition: "transform 0.3s",
                transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "#f0f0f0",
                opacity: mobileOpen ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "#f0f0f0",
                transition: "transform 0.3s",
                transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "32px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#f0f0f0",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "12px",
                    color: "#c8ff00",
                    marginRight: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  0{i + 1}
                </span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
