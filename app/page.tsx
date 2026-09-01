import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Rule() {
  return <hr className="section-rule mx-auto max-w-5xl" />;
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <Rule />
        <Skills />
        <Rule />
        <Projects />
        <Rule />
        <Experience />
        <Rule />
        <Certifications />
        <Rule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
