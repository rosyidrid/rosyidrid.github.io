import { useState } from 'react';
import ProjectModal from './ProjectModal';
import type { Project } from './ProjectModal';

// import taskConnect1 from '../assets/projects/task-connect/1.png';
// import taskConnect2 from '../assets/projects/task-connect/2.png';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Task Connect',
    shortDescription: 'A web-based employee and task management platform that helps businesses streamline work schedules, team communication, and attendance tracking efficiently.',
    longDescription: `Task Connect is a web-based application designed to help companies and organizations manage daily operations in one centralized platform. It offers features such as shift scheduling and task assignment. With a clean, modern interface and multiple sign-in options (Google, email, phone number, and QR code), Task Connect ensures both flexibility and security for users. I developed this project from scratch, frontend and backend implementation, authentication system, and deployment. Task Connect is fully integrated with the Joglo.ink ecosystem and is used in real-world business environments that require efficiency and real-time collaboration.`,
    images: [
      // taskConnect1,
      // taskConnect2,
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'NestJS', 'NextAuth', 'JWT'],
    liveUrl: 'https://task.joglo.ink',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">My <span className="text-blue-600">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={`${100 * (index + 1)}`}
              onClick={() => handleOpenModal(project)}
            >
              <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{project.shortDescription}</p>
                <button
                  className="text-blue-600 font-semibold hover:underline text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};


export default Projects;
