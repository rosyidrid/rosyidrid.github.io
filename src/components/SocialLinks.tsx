import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-4" data-aos="fade-up">
      <a href="https://github.com/rosyidrid" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/rosyidrid/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-white">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
