import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
