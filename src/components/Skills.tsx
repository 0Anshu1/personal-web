"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Terminal, Box } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    icon: Layout,
    skills: ["React", "Node.js", "Flask", "FastAPI"]
  },
  {
    title: "AI/ML",
    icon: Box,
    skills: ["Deep Learning", "Reinforcement Learning", "Computer Vision", "LLMs", "RAG", "VectorDB"]
  },
  {
    title: "Developer Tools",
    icon: Code2,
    skills: ["Git", "Docker", "AWS", "GCP", "VS Code", "Visual Studio", "PyCharm"]
  }
]

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-emerald-500">Skills</span></h2>
            <p className="text-zinc-500 max-w-xl mx-auto">My professional toolkit based on my latest experience.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-5 h-5 text-emerald-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-zinc-400 border border-white/5"
                  >
                    {skill}
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
