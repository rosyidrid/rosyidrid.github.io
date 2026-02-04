import SocialLinks from './SocialLinks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';


const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'Flutter Developer',
      'Problem Solver',
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center relative pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl px-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-blue-400 font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Welcome to my portfolio
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ridho</span>
        </h1>

        <div className="h-10 md:h-16 mb-8 text-xl md:text-3xl lg:text-4xl text-slate-300 font-light">
          I am a <span className="text-white font-semibold">{text}</span>
          <Cursor cursorColor="#3b82f6" />
        </div>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          Building seamless digital experiences with modern technologies.
          Focusing on performance, design, and scalability.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://docs.google.com/document/d/1TLJEE5fVVUUC7O_X_flZqUy-wXmGAR56/edit?usp=sharing&ouid=101248039682369145296&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Download CV
          </a>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden md:block">|</span>
            <SocialLinks />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className="text-slate-500 text-sm">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
