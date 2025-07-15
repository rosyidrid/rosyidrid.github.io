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
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Header />
        <div className="flex-grow flex flex-col pt-16">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
