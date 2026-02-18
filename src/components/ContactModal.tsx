"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass w-full max-w-md p-8 rounded-[32px] border-white/10 shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors group"
              >
                <X className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">Let's Connect</h3>
                <p className="text-zinc-500 text-sm">I'm always open to discussing new projects, creative ideas or opportunities.</p>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/sainianshu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0077B5]/10 border border-white/5 hover:border-[#0077B5]/20 transition-all group"
                >
                  <div className="p-3 bg-[#0077B5]/10 rounded-xl text-[#0077B5]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-black text-zinc-500 tracking-wider">LinkedIn</p>
                    <p className="text-white font-bold group-hover:text-[#0077B5] transition-colors">Anshu Saini</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-[#0077B5]" />
                </a>

                <a 
                  href="https://github.com/0Anshu1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="p-3 bg-white/5 rounded-xl text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-black text-zinc-500 tracking-wider">GitHub</p>
                    <p className="text-white font-bold group-hover:text-emerald-400 transition-colors">@0Anshu1</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                </a>

                <a 
                  href="mailto:anshucodes4u@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/20 transition-all group"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-black text-zinc-500 tracking-wider">Email</p>
                    <p className="text-white font-bold group-hover:text-emerald-400 transition-colors">anshucodes4u@gmail.com</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase font-black text-zinc-500 tracking-wider">Phone</p>
                    <p className="text-white font-bold">+91 83066 29224</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
