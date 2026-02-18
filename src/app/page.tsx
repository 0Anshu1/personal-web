import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceTree from "@/components/ExperienceTree";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <div id="experience">
        <ExperienceTree />
      </div>
      <Projects />
      <Skills />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Anshu Saini. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
