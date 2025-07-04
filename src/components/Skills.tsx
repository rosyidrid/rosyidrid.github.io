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
} from 'react-icons/si';

const skillsData = [
    { name: 'JavaScript', icon: <FaJsSquare className="w-12 h-12 text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-500" /> },
    { name: 'React', icon: <FaReact className="w-12 h-12 text-cyan-400" /> },
    { name: 'Express.js', icon: <SiExpress className="w-12 h-12 text-black" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    { name: 'NestJS', icon: <SiNestjs className="w-12 h-12 text-red-600" /> },
    { name: 'MySQL', icon: <SiMysql className="w-12 h-12 text-blue-600" /> },
    { name: 'Flutter', icon: <SiFlutter className="w-12 h-12 text-sky-500" /> },
    { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
    { name: 'Figma', icon: <FaFigma className="w-12 h-12 text-purple-500" /> },
    { name: 'React Native', icon: <FaReact className="w-12 h-12 text-cyan-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-blue-600" /> },
    { name: 'Kotlin', icon: <SiKotlin className="w-12 h-12 text-red-600" /> },
    { name: 'Vite', icon: <SiVite className="w-12 h-12 text-blue-600" /> },
    { name: 'Notion', icon: <SiNotion className="w-12 h-12" /> },
    { name: 'Jira', icon: <SiJira className="w-12 h-12 text-blue-600" /> },
    { name: 'Bitbucket', icon: <SiBitbucket className="w-12 h-12 text-blue-600" /> },
    { name: 'Postman', icon: <SiPostman className="w-12 h-12 text-orange-600" /> },
    { name: 'Redis', icon: <SiRedis className="w-12 h-12 text-red-600" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">My <span className="text-blue-600">Skills</span></h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 border border-slate-200/80 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:shadow-blue-500/10"
                            data-aos="fade-up"
                            data-aos-delay={`${100 * (index % 5)}`}
                        >
                            {skill.icon}
                            <p className="mt-4 text-md font-semibold text-slate-700">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
