import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Capabilities from '../components/Capabilities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const siteUrl = 'https://akidev41.github.io/profileweb/';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sawada Aki",
    "alternateName": ["Lee Aki", "澤田明樹"],
    "jobTitle": "Product Manager",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tokyo",
      "addressCountry": "JP"
    },
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/in/aki-sawada/",
      "https://github.com/akidev41"
    ],
    "knowsAbout": [
      "Product Management",
      "User Experience Design",
      "AI Product Development",
      "Project Management",
      "Creative Team Coordination",
      "Video Editing",
      "Prototyping",
      "Agile Methodology"
    ],
    "description": "Product Manager and Creative Professional based in Tokyo. Specializing in AI-driven product development, user experience design, and turning ambitious ideas into meaningful reality."
  };

  return (
    <div className="bg-neutral-950 min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
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