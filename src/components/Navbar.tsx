"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import ContactModal from "@/components/ContactModal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-8"}`}
    >
      <div className={`max-w-6xl mx-auto px-6 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? "glass rounded-full shadow-2xl mx-4" : ""}`}>
        <div className="flex-1" />{/* Spacer where name was */}

        <div className="hidden md:flex gap-8 items-center">
          {["Experience", "Projects", "Skills"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-emerald-500 text-black text-sm font-bold rounded-full hover:bg-emerald-400 transition-all"
          >
            Let's Talk
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-4 right-4 glass rounded-3xl p-8 md:hidden z-50 shadow-2xl border-white/10"
        >
          <div className="flex flex-col gap-6 text-center">
            {["Experience", "Projects", "Skills"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-zinc-400"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false)
                setIsModalOpen(true)
              }}
              className="w-full py-4 bg-emerald-500 text-black font-bold rounded-2xl"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.nav>
  )
}
