import {
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaFigma,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiMysql,
    SiFlutter,
    SiNestjs,
    SiExpress,
    SiPostgresql,
    SiKotlin,
    SiVite,
    SiNotion,
    SiJira,
    SiBitbucket,
    SiPostman,
    SiRedis,
    SiDart,
    SiPhp,
    SiLaravel,
} from 'react-icons/si';

const skillsByCategory = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'JavaScript', icon: <FaJsSquare className="w-12 h-12 text-yellow-400" /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-500" /> },
            { name: 'Kotlin', icon: <SiKotlin className="w-12 h-12 text-red-600" /> },
            { name: 'Dart', icon: <SiDart className="w-12 h-12 text-sky-500" /> },
            { name: 'PHP', icon: <SiPhp className="w-12 h-12 text-indigo-700" /> },
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React', icon: <FaReact className="w-12 h-12 text-cyan-400" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
            { name: 'Vite', icon: <SiVite className="w-12 h-12 text-blue-600" /> },
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
            { name: 'Express.js', icon: <SiExpress className="w-12 h-12 text-black" /> },
            { name: 'NestJS', icon: <SiNestjs className="w-12 h-12 text-red-600" /> },
            { name: 'Laravel', icon: <SiLaravel className="w-12 h-12 text-red-500" /> },
        ]
    },
    {
        category: 'Mobile',
        skills: [
            { name: 'React Native', icon: <FaReact className="w-12 h-12 text-cyan-400" /> },
            { name: 'Flutter', icon: <SiFlutter className="w-12 h-12 text-sky-500" /> },
            { name: 'Kotlin', icon: <SiKotlin className="w-12 h-12 text-red-600" /> },
        ]
    },
    {
        category: 'Database',
        skills: [
            { name: 'MySQL', icon: <SiMysql className="w-12 h-12 text-blue-600" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-blue-600" /> },
            { name: 'Redis', icon: <SiRedis className="w-12 h-12 text-red-600" /> },
        ]
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
            { name: 'Figma', icon: <FaFigma className="w-12 h-12 text-purple-500" /> },
            { name: 'Postman', icon: <SiPostman className="w-12 h-12 text-orange-600" /> },
            { name: 'Notion', icon: <SiNotion className="w-12 h-12" /> },
            { name: 'Jira', icon: <SiJira className="w-12 h-12 text-blue-600" /> },
            { name: 'Bitbucket', icon: <SiBitbucket className="w-12 h-12 text-blue-600" /> },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                    My <span className="text-blue-600">Skills</span>
                </h2>

                {skillsByCategory.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12" data-aos="fade-up">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6 border-b-2 border-blue-100 pb-2">
                            {category.category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="bg-slate-50 border border-slate-200/80 rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-blue-500/10 h-full"
                                    data-aos="fade-up"
                                    data-aos-delay={`${50 * (skillIndex % 3)}`}
                                >
                                    {skill.icon}
                                    <p className="mt-3 text-sm font-medium text-slate-700">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
