import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceTree from "@/components/ExperienceTree";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10">
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
      </div>
    </main>
  );
}
