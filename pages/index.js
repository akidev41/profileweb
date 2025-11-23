import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Capabilities from '../components/Capabilities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <Hero />
      <div className="py-8 md:py-12 lg:py-16 w-full flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <About />
        <Experience />
        <Capabilities />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </div>
  );
} 