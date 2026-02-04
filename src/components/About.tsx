import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-600/10 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="backdrop-blur-xl bg-slate-900/40 border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h2 className="text-xl md:text-5xl font-bold text-center text-white mb-10 tracking-tight">
                        About <span className="text-blue-500">Me</span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-300 leading-loose font-light text-center">
                        I am a <span className="text-white font-semibold">Full-Stack Developer</span> with <span className="text-white font-semibold">3+ years of experience</span> building robust web and mobile applications.
                        My stack includes <span className="text-blue-400">Flutter</span>, <span className="text-blue-400">React/Next.js</span>, <span className="text-blue-400">NestJS</span>, and <span className="text-blue-400">Laravel</span>.
                        <br className="my-4 block" />
                        I specialize in creating scalable, secure, and production-ready solutions.
                        Passionate about designing efficient systems and continuously learning to keep up with the latest industry trends.
                    </p>

                    {/* <div className="mt-12 flex justify-center gap-4 flex-wrap">
                        {['Scalable Systems', 'Clean Architecture', 'Modern UI/UX'].map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors cursor-default"
                            >
                                # {tag}
                            </span>
                        ))}
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
