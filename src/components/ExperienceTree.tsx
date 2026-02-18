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

      <div className="container mx-auto px-4 relative max-w-5xl">
        {/* Curvy Branch SVG - Desktop (Horizontal) */}
        <div className="absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2 pointer-events-none z-0 overflow-visible hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
            <motion.path
              d="M-50 80 C 100 20, 250 140, 400 80 C 550 20, 700 140, 850 80 C 1000 20, 1150 140, 1250 80"
              fill="none"
              stroke="url(#branchGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Curvy Branch SVG - Mobile (Vertical) */}
        <div className="absolute left-8 top-0 bottom-0 w-20 pointer-events-none z-0 overflow-visible block md:hidden">
          <svg className="w-full h-full" viewBox="0 0 80 800" preserveAspectRatio="none">
            <motion.path
              d="M 40 0 C 60 150, 20 250, 40 400 C 60 550, 20 650, 40 800"
              fill="none"
              stroke="url(#branchGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10 items-center min-h-[500px]">
          {experiences.map((exp, index) => {
            const isTop = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20, y: isTop ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:items-center gap-4 ${isTop ? "md:mb-auto" : "md:mt-auto"} pl-16 md:pl-0`}
              >
                {/* Data Card - Compact */}
                <div className={`glass p-4 rounded-3xl border-white/5 hover:border-emerald-500/20 transition-all duration-500 relative bg-black/40 backdrop-blur-3xl w-full max-w-[280px] md:max-w-[240px] shadow-lg group ${isTop ? "md:order-1" : "md:order-2"}`}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {exp.period}
                      </span>
                      <Briefcase className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-black text-white group-hover:text-emerald-400 transition-colors leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-zinc-500 font-bold text-[10px]">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-1 text-[8px] text-zinc-600 font-black uppercase tracking-widest bg-white/5 w-fit px-2 py-0.5 rounded-full">
                      <MapPin className="w-2.5 h-2.5 text-emerald-500/30" />
                      {exp.location}
                    </div>

                    <p className="text-zinc-500 text-[10px] leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                {/* Hanging Connector */}
                <div className={`flex flex-col items-center absolute md:static left-8 md:left-auto -translate-x-1/2 md:translate-x-0 ${isTop ? "md:order-2" : "md:order-1"}`}>
                    <div className={`hidden md:block w-px h-12 bg-gradient-to-b ${isTop ? "from-emerald-500/30 to-transparent" : "from-transparent to-emerald-500/30"}`} />
                    <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <div className="absolute inset-0 bg-emerald-500/20 blur-sm rounded-full animate-pulse" />
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
