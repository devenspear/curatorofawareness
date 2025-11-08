'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h2
          className="text-5xl md:text-8xl font-playfair mb-8 leading-tight bg-gradient-to-r from-white via-ether to-deep bg-clip-text text-transparent"
          animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          Welcome to the Cave&apos;s Digital Mouth
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-12 text-soft/80 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          You are the curator now. For 2,400 years, humanity has stared at shadows on walls—
          Plato&apos;s cave, Zhuangzi&apos;s butterfly, Maya&apos;s veil. Today, physicists rerun the universe
          in silicon while mystics whisper, <span className="italic">&quot;I told you so.&quot;</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        >
          <Link href="/arguments" className="px-8 py-4 bg-ether rounded-full font-semibold hover:bg-deep transition-all transform hover:scale-105 shadow-ether/30 shadow-lg">
            ENTER THE SIMULATION
          </Link>
          <Link href="/library" className="px-8 py-4 border border-ether rounded-full hover:bg-ether/10 transition-all transform hover:scale-105">
            EXPLORE THE LIBRARY
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 floating-animation">
        <div className="w-6 h-10 border-2 border-ether rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ether rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
