"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import ContactModal from "@/components/ContactModal"

const roles = [
  { title: "Software Developer", color: "text-blue-400" },
  { title: "AI-ML Developer", color: "text-emerald-400" },
  { title: "Full Stack Engineer", color: "text-purple-400" },
  { title: "Open Source Contributor", color: "text-orange-400" }
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex].title
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(150)
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(100)
        
        if (currentText === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex, typingSpeed])

  const currentRole = roles[roleIndex]
  const startsWithVowel = /^[aeiou]/i.test(currentRole.title)
  const article = startsWithVowel ? "An" : "A"

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                    src="/profile.jpg" 
                    alt="Anshu Saini" 
                    fill 
                    className="object-cover object-top"
                    priority
                />
            </div>
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-[32px] -z-10 blur-xl" />
          </motion.div>

          <div className="text-center md:text-left flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full mb-6 border border-emerald-500/20"
            >
              Available for Internship and Full Time Roles
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight"
            >
              I am <span className="text-emerald-500">Anshu Saini</span>
            </motion.h1>
            
            <div className="h-12 md:h-16 mb-6">
                <p className="text-xl md:text-3xl font-bold text-zinc-300">
                    {article} <span className={`${currentRole.color} border-r-2 border-emerald-500 animate-pulse inline-block min-w-[20px]`}>{currentText}</span>
                </p>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl"
            >
              I specialize in Artificial Intelligence and building scalable software that solves real-world problems.
            </motion.p>
            

          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
