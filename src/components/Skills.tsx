import {
    FaReact, FaNodeJs, FaGitAlt, FaFigma,
} from 'react-icons/fa';
import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql, SiFlutter, SiNestjs,
    SiExpress, SiPostgresql, SiKotlin, SiVite, SiJira,
    SiPostman, SiRedis, SiDart, SiPhp, SiLaravel,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsByCategory = [
    {
        category: 'Frontend Power',
        description: 'Building beautiful, responsive interfaces',
        skills: [
            { name: 'React', icon: <FaReact className="text-cyan-400" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
            { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
        ],
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        bg: "bg-gradient-to-br from-blue-900/20 to-slate-900/50"
    },
    {
        category: 'Backend Core',
        description: 'Robust and scalable server-side solutions',
        skills: [
            { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
            { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Express', icon: <SiExpress className="text-white" /> },
            { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
        ],
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
        bg: "bg-slate-900/50"
    },
    {
        category: 'Mobile Dev',
        description: 'Cross-platform mobile applications',
        skills: [
            { name: 'Flutter', icon: <SiFlutter className="text-sky-400" /> },
            { name: 'Dart', icon: <SiDart className="text-blue-400" /> },
            { name: 'Kotlin', icon: <SiKotlin className="text-orange-500" /> },
            { name: 'React Native', icon: <FaReact className="text-cyan-400" /> },
        ],
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
        bg: "bg-slate-900/50"
    },
    {
        category: 'Data & Cloud',
        description: 'Storage and infrastructure',
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
            { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
            { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
        ],
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        bg: "bg-gradient-to-bl from-purple-900/20 to-slate-900/50"
    },
    {
        category: 'Tools & DevOps',
        description: 'Workflow and efficiency',
        skills: [
            { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
            { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
            { name: 'Jira', icon: <SiJira className="text-blue-500" /> },
            { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        ],
        colSpan: "col-span-1 lg:col-span-3",
        bg: "bg-slate-900/30"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Tech <span className="text-blue-500">Stack</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A curated collection of technologies I use to build amazing products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsByCategory.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`${section.colSpan} ${section.bg} backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300 group`}
                        >
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                {section.category}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6">{section.description}</p>

                            <div className="flex flex-wrap gap-4">
                                {section.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex flex-col items-center gap-2 group/icon">
                                        <div className="text-3xl p-3 bg-white/5 rounded-xl border border-white/5 group-hover/icon:bg-white/10 group-hover/icon:scale-110 transition-all duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs text-slate-400 group-hover/icon:text-white transition-colors">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
