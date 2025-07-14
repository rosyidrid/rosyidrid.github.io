const educations = [
    {
        degree: "Bachelor's Degree in Informatics",
        institution: "Ahmad Dahlan University",
        location: "Yogyakarta, D.I.Yogyakarta",
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
        <section id="education" className="py-20" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 dark:text-slate-100">My <span className="text-blue-600">Education</span></h2>
                <div className="max-w-4xl mx-auto">
                    {educations.map((edu, index) => (
                        <div key={index} className="mb-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{edu.degree}</h3>
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-600 dark:text-slate-100">
                                    GPA: {edu.gpa}
                                </span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center text-slate-600 mb-3">
                                <span className="font-medium dark:text-slate-100">{edu.institution}</span>
                                <span className="hidden md:block mx-2">•</span>
                                <span className="dark:text-slate-100">{edu.location}</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-4 dark:text-slate-400">{edu.period}</p>
                            <ul className="list-disc pl-5 space-y-2 dark:text-slate-400">
                                {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="text-slate-700 dark:text-slate-400">
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
