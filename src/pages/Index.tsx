
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Leadership from '@/components/Leadership';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import MediaEvents from '@/components/MediaEvents';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Achievements />
        <Leadership />
        <Experience />
        <Projects />
        <Research />
        <section id="media">
          <MediaEvents />
        </section>
        <Contact />
      </main>
    </div>
  );
};

export default Index;
