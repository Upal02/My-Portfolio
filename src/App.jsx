
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/aboutME';

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <section id="projects">
        {/* Projects content */}
      </section>

      <section id="contact">
        {/* Contact content */}
      </section>
    </>
  );
}

export default App;
