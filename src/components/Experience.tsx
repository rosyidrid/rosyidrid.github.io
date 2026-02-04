import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Fingerspot",
    period: "January 2024 – Present",
    skills: ["Flutter", "GetX", "Express.js", "Laravel", "Next.js", "NestJS", "React.js", "Dart"],
    description: [
      "Developed WebView-based features for the fingerspot.io app (Device & Chat modules) using Flutter, applying MVC architecture and GetX state management.",
      "Designed and maintained backend services for the Device module using Dart, ensuring stable and efficient mobile integration.",
      "Built a Push SDK using Express.js to support real-time data transmission from attendance devices to the server with low latency.",
      "Managed and optimized the main fingerspot.io Laravel-based website, improving database query performance and refactoring for better scalability.",
      "Created Task Connect, a task management app using Next.js (frontend), NestJS (backend), and Expo WebView for integration within the fingerspot.io app.",
      "Developed Wage Connect, a payroll management system using React.js and Express.js for real-time payroll operations.",
      "Actively involved in system requirement analysis and database relationship design for Task Connect and Wage Connect.",
      "Handled manual deployments for Task Connect and Wage Connect using FileZilla, including server setup and SSL configuration for secure connections.",
    ],
  },
  {
    title: "Mobile Programmer",
    company: "PT. Tumbuh Teknologi Finansial",
    period: "June 2023 (1 Week)",
    skills: ["Flutter", "WebView", "API Integration"],
    description: [
      "Developed WebView interfaces for a peer-to-peer lending app, ensuring responsiveness and device compatibility.",
      "Integrated WebView with Flutter and backend APIs to enable reliable two-way communication.",
      "Collaborated with cross-functional teams (frontend, backend, and UI/UX) to align interface implementation and data flow.",
      "Worked under a hackathon-style development cycle to accelerate MVP release.",
      "Prioritized rapid iteration and feature integration while maintaining UI/UX stability within tight development timelines.",
    ],
  },
  {
    title: "Mobile Programmer",
    company: "DPR RI (Internship)",
    period: "August 2022 – December 2022",
    skills: ["Kotlin", "Android Studio", "Retrofit", "Zend Framework"],
    description: [
      "Explored DPR RI’s IT operations including Command Center management, help desk systems, network infrastructure, and e-Government platforms like RITIK and SPBE.",
      "Contributed to the capstone project using Zend Framework for backend and Retrofit for Android API integration.",
      "Collaborated with UI/UX teams to design mockups for the STELA application.",
      "Developed the STELA Android app using Kotlin and Android Studio with Retrofit-based backend integration.",
      "Composed system documentation for DPR RI’s web applications.",
    ],
  },
  {
    title: "Mobile Programmer",
    company: "PT. Rupi Digital Indonesia",
    period: "July 2021 – May 2022",
    skills: ["Flutter", "MVVM", "Provider", "Laravel", "RESTful APIs"],
    description: [
      "Developed the Playbook Sales Force mobile app using Flutter to monitor sales activity.",
      "Applied the MVVM architecture to maintain structured separation between business logic and UI.",
      "Utilized Provider for efficient and scalable state management.",
      "Collaborated with backend teams to build RESTful APIs with Laravel, including endpoints for authentication, product data, and visit reports.",
      "Ensured seamless data flow through mobile–backend integration.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          My <span className="text-blue-500">Journey</span>
        </h2>

        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500/20 top-0 -translate-x-1/2 hidden md:block" />

              <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>
                <div className="w-full md:w-5/12" />

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 shadow-[0_0_10px_#3b82f6] -translate-x-[5px] md:-translate-x-1/2 top-0 mt-1.5" />

                <div className="w-full md:w-5/12">
                  <div className="bg-slate-900/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-medium text-slate-300 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded hover:bg-white/10 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
