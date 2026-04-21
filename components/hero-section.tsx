"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection({ onNavigate }: { onNavigate?: (view: "hero" | "projects" | "writings" | "contact" | "about") => void } = {}) {
  const [glitchActive, setGlitchActive] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 120)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-start overflow-hidden bg-background px-0 py-16 sm:min-h-screen sm:py-20">
      {/* Pixel noise overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="w-full max-w-6xl px-5 sm:px-8 md:px-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Terminal-style prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 text-foreground-secondary/60 text-sm font-mono"
          >
            <span className="text-green-500">➜</span>
            <span>~/bhabuk</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-2 h-4 bg-foreground-secondary/60 ml-1"
            />
          </motion.div>

          {/* Name with glitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <h1 
              className={`max-w-[11ch] text-3xl leading-tight sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase ${
                glitchActive ? 'glitch' : ''
              }`}
              style={{ fontFamily: 'var(--font-geist-pixel-square), monospace' }}
              data-text="Bhabuk Bhattarai"
            >
              Bhabuk Bhattarai
            </h1>
          </motion.div>

          {/* Typing effect description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-xl font-mono text-sm text-foreground-secondary/80 md:text-base"
          >
            <TypewriterText 
              text="Building experiments in code. "
              // sometimes it work sometimes I dont.
              delay={1}
            />
          </motion.div>

          {/* Command-style links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-3 pt-6 font-mono text-sm sm:gap-4"
          >
            <a
              href="#work"
              className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
            >
              <span className="text-green-500">$</span>
              <span className="group-hover:underline underline-offset-4">ls projects</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
            >
              <span className="text-green-500">$</span>
              <span className="group-hover:underline underline-offset-4">cat resume.pdf</span>
            </a>

            <a
              href="https://github.com/ftbhabuk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
            >
              <span className="text-green-500">$</span>
              <span className="group-hover:underline underline-offset-4">curl github →</span>
            </a>
          </motion.div>

          {/* Pixel grid decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="origin-left pt-10 sm:pt-12"
          >
            <div className="flex gap-1 opacity-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut" 
                  }}
                  className="w-1 h-1 bg-foreground-secondary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        
        .glitch {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) reverse both;
          color: #00ffff;
          z-index: -1;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        
        .glitch::after {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both;
          color: #ff00ff;
          z-index: -2;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  )
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 9)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-2 h-4 bg-foreground-secondary/60 ml-1"
        />
      )}
    </span>
  )
}
