import SocialLinks from './SocialLinks';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'I build seamless digital experiences as a full stack developer.',
      'I develop robust mobile apps as a Flutter developer.',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
  });
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-white/50 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-black/5 rounded-full px-4 py-2 mb-4" data-aos="fade-up">
            <p className="text-sm font-medium text-slate-700 tracking-wide">
              Full Stack Developer | Flutter Developer
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight" data-aos="fade-up" data-aos-delay="100">
            Hi, I'm <span className="text-blue-600">Ridho</span> 👋🏻
          </h2>
          <p className="text-xl text-slate-600 mt-6 max-w-xl h-20" data-aos="fade-up" data-aos-delay="200">
            <span>{text}</span>
            <Cursor />
          </p>
          <div className="flex items-center justify-center md:justify-start gap-6" data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://docs.google.com/document/d/1TLJEE5fVVUUC7O_X_flZqUy-wXmGAR56/edit?usp=sharing&ouid=101248039682369145296&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 hover:shadow-xl"
            >
              View CV
            </a>
            <SocialLinks />
          </div>
        </div>
        {/* Photo */}
        <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="400">
          <img
            src="/profile.jpg"
            alt="Profile photo"
            className="w-52 h-52 md:w-80 md:h-80 object-cover rounded-full shadow-lg shadow-blue-500/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
