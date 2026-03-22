import Connect from "@/components/Connect";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import TechnicalSkills from "@/components/TechnicalSkills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <section className="md:mx-[25%] mx-4">
        <Header />
        <Hero />
        <Summary />
        <TechnicalSkills />
        <Experience />
        <Education />
        {/*<Projects />*/}
        <Connect /> 
        <Footer />
      </section>
    </main>
  );
}
