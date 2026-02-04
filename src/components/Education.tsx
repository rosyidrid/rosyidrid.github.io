const educations = [
    {
        degree: "Bachelor's Degree in Informatics",
        institution: "Ahmad Dahlan University",
        location: "Yogyakarta, Indonesia",
        period: "September 2019 – September 2023",
        gpa: "3.48/4.00",
        achievements: [
            "Graduated on time with excellent academic performance",
            "Participated in the Certified Internship and Independent Study Program at the House of Representatives of Indonesia (DPR RI) as a Mobile Programmer"
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    My <span className="text-blue-500">Education</span>
                </h2>

                {educations.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 md:flex items-start gap-6 group"
                    >
                        <div className="hidden md:block p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                            </svg>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{edu.degree}</h3>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300 border border-white/5">
                                    GPA: {edu.gpa}
                                </span>
                            </div>

                            <div className="text-blue-400 font-medium mb-1">{edu.institution}</div>
                            <div className="text-slate-500 text-sm mb-6">{edu.period}</div>

                            <ul className="space-y-3">
                                {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
