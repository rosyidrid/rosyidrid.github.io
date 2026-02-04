import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact", isButton: true },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
          }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled
            ? "bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-full py-3 mx-4 md:mx-auto max-w-5xl shadow-2xl shadow-blue-500/5"
            : "bg-transparent"
            }`}
        >
          {/* Logo */}
          <a href="#" className="font-bold text-xl md:text-2xl tracking-tighter group">
            <span className="text-white group-hover:text-blue-400 transition-colors">Rosyidrid</span>
            <span className="text-blue-500">.com</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${link.isButton
                  ? "bg-white text-slate-900 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                  : "text-slate-300 hover:text-white hover:tracking-wide"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-slate-900/80 md:hidden flex items-center justify-center"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-light ${link.isButton
                    ? "text-blue-400 font-semibold"
                    : "text-white hover:text-blue-400"
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
