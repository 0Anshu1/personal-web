"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Milestone, ChevronRight } from "lucide-react"

const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "Zeex AI (IIT Madras)",
    period: "Mar 2025 - May 2025",
    location: "Chennai, India",
    desc: "Developed systems for traffic optimization and satellite imagery detection."
  },
  {
    role: "Mentee",
    company: "Linux Foundation",
    period: "Jun 2025 - Aug 2025",
    location: "Remote",
    desc: "Created frameworks for AI tools and studied mainframe modernization."
  },
  {
    role: "Python AI Intern",
    company: "OneDose AI",
    period: "Jun 2025 - Oct 2025",
    location: "Jaipur, India",
    desc: "Worked on medical verification using YOLO and integrated with AI chatbots."
  },
  {
    role: "Full Stack Engineer (Part Time)",
    company: "VoiceEval",
    period: "Dec 2025 - Jan 2026",
    location: "Remote",
    desc: "Built AI agent testing suites and a dashboard for persona simulations."
  }
]

export default function ExperienceTree() {
  return (
    <section className="py-32 relative overflow-hidden" id="experience">
      <div className="container mx-auto px-6 mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4">The <span className="text-emerald-500">Progress Path</span></h2>
        <p className="text-zinc-500 max-w-xl mx-auto">A unified view of my professional journey and growth milestones.</p>
      </div>

      <div className="container mx-auto px-6 relative max-w-4xl">
        {/* Simple Vertical Timeline Line */}
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-zinc-800 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Data Card */}
              <div className="flex-1 w-full group">
                <div className="glass p-8 rounded-[40px] border-white/5 hover:border-emerald-500/20 transition-all duration-500 relative bg-black/40 backdrop-blur-3xl hover:-translate-y-1 shadow-xl overflow-hidden">
                  <div className={`absolute -top-10 ${index % 2 === 0 ? "right-0" : "left-0"} w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl`} />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                        {exp.period}
                      </span>
                      <div className="p-2 bg-zinc-900/50 rounded-2xl border border-white/5">
                        <Briefcase className="w-5 h-5 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-zinc-400 font-bold text-lg mt-1">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-black uppercase tracking-widest bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500/50" />
                      {exp.location}
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-emerald-500/20 pl-4 py-1 italic">
                      "{exp.desc}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Marker (Normal) */}
              <div className="relative z-10 hidden md:block">
                <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full animate-pulse" />
              </div>

              {/* Spacer for balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
