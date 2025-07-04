import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaTimes } from 'react-icons/fa';

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
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div
        className="flex justify-center items-center min-h-screen p-4"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full relative transform transition-all"
          onClick={e => e.stopPropagation()}
          data-aos="zoom-in"
          style={{ pointerEvents: 'auto' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 z-10"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>

          <div className="max-h-[90vh] overflow-y-auto">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
              {project.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="object-cover w-full h-64 md:h-96" />
                </div>
              ))}
            </Carousel>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{project.longDescription}</p>
              <div className="mt-6 flex gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                    View Live
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-full hover:bg-slate-300 transition-colors">
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectModal;
