import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  if (!project) return null;

  const prev = () => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setImgIndex((i) => (i + 1) % project.images.length);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
        }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          backgroundColor: "#111",
          border: "1px solid #1e1e1e",
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#555",
            zIndex: 10,
            padding: "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          <FaTimes size={18} />
        </button>

        {/* Image carousel */}
        <div style={{ position: "relative", backgroundColor: "#0a0a0a", height: "300px" }}>
          <img
            src={project.images[imgIndex]}
            alt={`${project.title} screenshot`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid #222",
                  color: "#888",
                  cursor: "pointer",
                  padding: "8px 10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid #222",
                  color: "#888",
                  cursor: "pointer",
                  padding: "8px 10px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                <FaChevronRight size={14} />
              </button>
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "16px",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  color: "#444",
                  letterSpacing: "0.1em",
                }}
              >
                {imgIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#f0f0f0",
              letterSpacing: "-0.02em",
              margin: "0 0 16px 0",
            }}
          >
            {project.title}
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
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
                {tag}
              </span>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid #1e1e1e",
              paddingTop: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.8,
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {project.longDescription.trim()}
            </p>
          </div>

          {project.liveUrl && (
            <div style={{ marginTop: "28px", borderTop: "1px solid #1e1e1e", paddingTop: "24px" }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#000",
                  backgroundColor: "#c8ff00",
                  padding: "10px 24px",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <FaExternalLinkAlt size={10} />
                View Live
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
