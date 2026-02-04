import { useState } from 'react';
import ProjectModal from './ProjectModal';
import type { Project } from './ProjectModal';

// task connect
// import taskConnect1 from '../assets/projects/task-connect/1.png';
// import taskConnect2 from '../assets/projects/task-connect/2.png';
// import taskConnect3 from '../assets/projects/task-connect/3.jpg';

// playbook sales force
import playbookSalesForce1 from '../assets/projects/playbook/1.png';
import playbookSalesForce2 from '../assets/projects/playbook/2.png';
import playbookSalesForce3 from '../assets/projects/playbook/3.png';

// daftrix
import daftrix1 from '../assets/projects/daftrix/1.png';
import daftrix2 from '../assets/projects/daftrix/2.png';
import daftrix3 from '../assets/projects/daftrix/3.png';
import daftrix4 from '../assets/projects/daftrix/4.png';
import daftrix5 from '../assets/projects/daftrix/5.png';

// digiscore
import digiscore1 from '../assets/projects/digiscore/1.png';
import digiscore2 from '../assets/projects/digiscore/2.png';

const projectsData: Project[] = [
  //   {
  //     title: 'Task Connect',
  //     shortDescription: 'A web-based employee and task management platform that helps businesses streamline work schedules, team communication, and attendance tracking efficiently.',
  //     longDescription: `
  // Task Connect is a web-based application designed to help companies and organizations manage daily operations in one centralized platform. 

  // It offers features such as shift scheduling and task assignment. With a clean, modern interface and multiple sign-in options (Google, email, phone number, and QR code), Task Connect ensures both flexibility and security for users. 

  // I developed and maintained this project, frontend and backend implementation, authentication system, and deployment. Task Connect is fully integrated with the Joglo.ink ecosystem and is used in real-world business environments that require efficiency and real-time collaboration.`,
  //     images: [
  //       taskConnect1,
  //       taskConnect2,
  //       taskConnect3,
  //     ],
  //     tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'NestJS', 'NextAuth', 'JWT', 'Prisma ORM', 'React Native'],
  //     liveUrl: 'https://task.joglo.ink',
  //   },
  {
    title: 'Playbook Sales Force',
    shortDescription: 'A mobile and web-based sales tracking app built with Flutter and Laravel, designed to monitor real-time sales visits, prevent fraudulent reporting, and improve overall team productivity.',
    longDescription: `
Playbook Sales Force is a full-stack application developed to enhance field sales productivity through real-time tracking and transparent reporting. As a Full Stack Developer, I built the mobile frontend using Flutter and the backend API using Laravel, creating a seamless system for both sales agents and supervisors.

The application utilizes Location-Based Service (LBS) to verify sales visits by capturing GPS coordinates during outlet check-ins, ensuring that every visit is genuine and trackable. It provides a reliable reporting system that helps eliminate fake reports and supports management in evaluating team performance with accurate, real-time data.

With a clean UI and intuitive UX, the app is optimized for field usability, allowing sales agents to report quickly while giving supervisors full visibility into daily activities. The system is also scalable and can be easily integrated with other enterprise tools if needed.
    `,
    images: [
      playbookSalesForce1,
      playbookSalesForce2,
      playbookSalesForce3,
    ],
    tags: ['Flutter', 'Dart', 'MySQL', 'Laravel'],
    liveUrl: '',
    sourceUrl: '',
  },
  // {
  //   title: 'Wage Connect',
  //   shortDescription: 'Wage Connect',
  //   longDescription: `Wage Connect`,
  //   images: [],
  //   tags: ['Vite', 'React', 'TypeScript', 'React Strap', 'MySQL', 'Node.js', 'Express.js', 'Redis', 'Prisma ORM'],
  //   liveUrl: '',
  //   sourceUrl: '',
  // },
  {
    title: 'DIGISCORE - Digital Scoring System for Martial Arts',
    shortDescription: 'Built a cross-platform real-time scoring system for martial arts tournaments with multi-arena and multi-category support, used in major regional and national events.',
    longDescription: `Developed a comprehensive digital scoring system for martial arts tournaments, enabling real-time synchronization between judge devices and public displays using Socket.IO. The system includes a Flutter-based mobile app for judges and a Vite.js web panel for administrators, ensuring smooth coordination across multiple arenas and categories. Features include automated match result reporting and a scalable architecture that has been successfully deployed in prominent events such as Balikpapan Open 1, Multievent Kota, Walikota Cup (Balikpapan) 2025 and Military Tournament VI/MLW 2025.`,
    images: [
      digiscore1,
      digiscore2,
    ],
    tags: ['Flutter', 'Dart', 'MySQL', 'Express.js', 'Vite.js', 'Socket.io', 'Sequelize'],
    liveUrl: '',
    sourceUrl: '',
  },
  {
    title: 'DAFTRIX – Digital Registration & Management System',
    shortDescription: 'Created a web-based registration platform for martial arts tournaments with auto-grouping, admin dashboard, and DIGISCORE integration.',
    longDescription: `Developed a web-based registration system tailored for martial arts tournaments, featuring participant data management, verification workflow, and automatic grouping by category. The frontend was built with Next.js for a fast and responsive user experience, while the backend used Express.js for reliable and scalable services. Included an intuitive admin dashboard with printable participant reports to streamline event operations. Fully integrated with DIGISCORE to ensure a seamless experience across the tournament's digital ecosystem. Successfully deployed in events such as the Walikota Cup (Balikpapan) 2024 and Military Tournament VI/MLW 2025.`,
    images: [
      daftrix1,
      daftrix2,
      daftrix3,
      daftrix4,
      daftrix5,
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chackra UI', 'PostgreSQL', 'Express.js', 'NextAuth', 'Sequelize'],
    liveUrl: 'https://pendaftarans.com',
    sourceUrl: '',
  },
  // {
  //   title: 'Module Device (fingerspot.io)',
  //   shortDescription: 'Module Device (fingerspot.io)',
  //   longDescription: `Module Device (fingerspot.io)`,
  //   images: [],
  //   tags: ['Flutter', 'Dart', 'Express.js', 'MySQL', 'SQLite', 'TCP Connection', 'FFmpeg', 'Socket'],
  //   liveUrl: '',
  //   sourceUrl: '',
  // },
  // {
  //   title: 'Module Chat (fingerspot.io)',
  //   shortDescription: 'Module Chat (fingerspot.io)',
  //   longDescription: `Module Chat (fingerspot.io)`,
  //   images: [],
  //   tags: ['Flutter', 'Dart', 'Express.js', 'MySQL', 'Socket.io'],
  //   liveUrl: '',
  //   sourceUrl: '',
  // },
  // {
  //   title: 'PUSH SDK (fingerspot.io)',
  //   shortDescription: 'PUSH SDK (fingerspot.io)',
  //   longDescription: `PUSH SDK (fingerspot.io)`,
  //   images: [],
  //   tags: ['Express.js', 'MySQL', 'Socket.io'],
  //   liveUrl: '',
  //   sourceUrl: '',
  // },
  // {
  //   title: 'STELA - DPR RI',
  //   shortDescription: 'STELA - DPR RI',
  //   longDescription: `STELA - DPR RI`,
  //   images: [],
  //   tags: ['Kotlin', 'Retrofit'],
  //   liveUrl: '',
  //   sourceUrl: '',
  // },
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
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                onClick={() => handleOpenModal(project)}
              >
                {/* Image Overlay Gradient */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {project.tags[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex -space-x-2">
                      {/* Mini tech stack icons or generic circles if no icons */}
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-slate-500">
                          #
                        </div>
                      ))}
                    </div>
                    <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};


export default Projects;
