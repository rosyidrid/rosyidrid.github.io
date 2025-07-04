const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        <span className="text-blue-600">Ridho's</span>
        <span>Portofolio</span>
      </h1>
      <nav className="flex space-x-6 justify-center items-center">
        <a href="#about" className="text-slate-600 hover:text-blue-600">About</a>
        <a href="#experience" className="text-slate-600 hover:text-blue-600">Experience</a>
        <a href="#projects" className="text-slate-600 hover:text-blue-600">Projects</a>
        <div className="flex items-center bg-blue-600 px-4 py-2 rounded-full">
          <a href="#contact" className="text-white">Contact Me</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
