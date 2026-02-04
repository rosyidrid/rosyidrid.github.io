import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    // <ThemeProvider> - Removed to enforce dark mode
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      <Header />
      <main className="flex-grow flex flex-col relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background particles or effects could go here as absolute positioned elements */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    // </ThemeProvider>
  );
}

export default App;
