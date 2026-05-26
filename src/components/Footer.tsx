const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "#333",
          letterSpacing: "0.08em",
        }}
      >
        © {new Date().getFullYear()} Muhammad Rosyid Ridho
      </span>
      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          color: "#222",
          letterSpacing: "0.08em",
        }}
      >
        Built with React + Vite
      </span>
    </footer>
  );
};

export default Footer;
