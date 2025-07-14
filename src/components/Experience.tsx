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
    company: "Sekretariat Jenderal Dewan Perwakilan Rakyat Republik Indonesia (DPR RI)",
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
    <section id="experience" className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-8">My Work <span className="text-blue-600">Journey</span></h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-slate-300 hidden md:block" aria-hidden="true"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex md:justify-between items-center w-full flex-col md:flex-row">
              {/* Content for right side */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-5/12"></div>
                  <div className="hidden md:flex w-1/12 justify-center">
                    <div className="ml-0.5 w-4 h-4 bg-blue-500 rounded-full z-10"></div>
                  </div>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg border border-slate-200" data-aos="fade-left">
                    <h3 className="font-bold text-slate-900 text-xl">{exp.title}</h3>
                    <p className="text-sm font-semibold text-blue-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                // Content for left side
                <>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg border border-slate-200" data-aos="fade-right">
                    <h3 className="font-bold text-slate-900 text-xl">{exp.title}</h3>
                    <p className="text-sm font-semibold text-blue-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:flex w-1/12 justify-center">
                    <div className="ml-0.5 w-4 h-4 bg-blue-500 rounded-full z-10"></div>
                  </div>
                  <div className="w-full md:w-5/12"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
