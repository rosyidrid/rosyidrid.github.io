import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      <a href="#about" className="text-slate-600 hover:text-blue-600 py-2 dark:text-slate-400" onClick={handleLinkClick}>About</a>
      <a href="#skills" className="text-slate-600 hover:text-blue-600 py-2 dark:text-slate-400" onClick={handleLinkClick}>Skills</a>
      <a href="#experience" className="text-slate-600 hover:text-blue-600 py-2 dark:text-slate-400" onClick={handleLinkClick}>Experience</a>
      <a href="#projects" className="text-slate-600 hover:text-blue-600 py-2 dark:text-slate-400" onClick={handleLinkClick}>Projects</a>
      <a href="#contact" className="text-white bg-blue-600 px-4 py-2 rounded-full dark:bg-blue-500 dark:text-slate-900" onClick={handleLinkClick}>Contact Me</a>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center dark:bg-slate-900/80 dark:border-slate-800">
        <a href="#" className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-blue-600">Ridho's</span>
          <span className="dark:text-slate-100">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 justify-center items-center">
          {navLinks}
        </nav>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
        </div>

        {/* Burger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-900 focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 dark:text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden dark:bg-slate-900`}
      >
        <div className="flex justify-end p-5">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-900 focus:outline-none dark:text-slate-100"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center space-y-8 text-lg">
          {navLinks}
        </nav>
      </div>
    </>
  );
};

export default Header;
