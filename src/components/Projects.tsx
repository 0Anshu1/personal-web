"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Lightbulb, Target, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Verity-AI",
    problem: "Financial institutions and companies face high friction during customer onboarding and manual document verification.",
    solution: "An end-to-end document intelligence and KYC platform powered by AI to automate verification and onboarding seamlessly.",
    link: "#",
    githubFE: "https://github.com/0Anshu1/verity-frontend",
    githubBE: "https://github.com/0Anshu1/verity-backend",
    tags: ["AI", "Python", "React", "Node.js","Machine Learning"]
  },
  {
    title: "Bit-Branch",
    problem: "IIITDM Kancheepuram students needed a centralized, synchronized portal for study materials and exam practice.",
    solution: "A custom platform synced with Google Classroom for materials, PYQs, and real-time exam scenario practice.",
    link: "https://69960f67fe642700091c1540--bit-branch.netlify.app/",
    github: "https://github.com/0Anshu1/bit-branch",
    tags: ["Typescript", "Next.js","Supabase"]
  },
  {
    title: "CollabUp",
    problem: "Students struggle to find cross-discipline partners for projects and hackathons.",
    solution: "Engineered a peer-discovery ecosystem with RAG-based recommendations and AI assistants.",
    link: "https://collabup.live/",
    githubFE: "https://github.com/0Anshu1/collabup-fe",
    githubBE: "https://github.com/0Anshu1/collabup-be",
    tags: ["React", "Flask", "GenAI", "VectorDB","Firebase"],
    award: "Hacksagon'2025 Top Performer"
  },
  {
    title: "RefactorLens",
    problem: "Manual code refactoring and legacy analysis are slow and error-prone.",
    solution: "AI-powered tool using AST analysis for automated refactoring suggestions across multiple languages.",
    link: "https://refactorlens-moej6ujvt-anshu-sainis-projects-acfddb97.vercel.app/",
    githubFE: "https://github.com/0Anshu1/refactorlens-fe",
    githubBE: "https://github.com/0Anshu1/refactorlens-be",
    tags: ["React", "Node.js", "Python", "AST"]
  }
]

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-emerald-500">Creations</span></h2>
          <p className="text-zinc-500">Building software that solves complex problems with simple interfaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-emerald-500/20 transition-all flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                   {project.award && (
                     <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase rounded-full mb-4">
                        <Sparkles className="w-3 h-3" /> {project.award}
                     </div>
                   )}
                   <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                </div>
                <div className="flex gap-2 items-center">
                   {project.github && (
                     <a href={project.github} title="View Source" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-zinc-500 hover:text-white">
                        <Github className="w-5 h-5" />
                     </a>
                   )}
                   {project.githubFE && (
                     <a href={project.githubFE} title="Frontend Source" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-zinc-500 hover:text-white flex flex-col items-center">
                        <Github className="w-5 h-5" />
                        <span className="text-[8px] mt-1 font-bold opacity-50">FE</span>
                     </a>
                   )}
                   {project.githubBE && (
                     <a href={project.githubBE} title="Backend Source" className="p-2 hover:bg-white/5 rounded-xl transition-colors text-zinc-500 hover:text-white flex flex-col items-center">
                        <Github className="w-5 h-5" />
                        <span className="text-[8px] mt-1 font-bold opacity-50">BE</span>
                     </a>
                   )}
                   {project.link !== "#" && (
                     <a href={project.link} className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl transition-colors text-emerald-400">
                        <ExternalLink className="w-5 h-5" />
                     </a>
                   )}
                </div>
              </div>
              
              <div className="space-y-6 flex-grow mb-8">
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase font-black mb-1">The Challenge</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] text-emerald-500/40 uppercase font-black mb-1">The Solution</p>
                  <p className="text-zinc-300 text-sm font-medium leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-zinc-500 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
