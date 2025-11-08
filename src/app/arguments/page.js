'use client';
import SimulationCalculator from '@/components/SimulationCalculator';
import { motion } from 'framer-motion';

const argumentsList = [
  {
    id: 1,
    title: "The Probability Thesis",
    champion: "Championed by: Bostrom, Musk, Tegmark",
    claim: "If any civilization reaches post-human stage, they'll run ancestor simulations. Therefore, most minds are simulated.",
    strengths: "Logical, mathematical",
    weaknesses: "Assumes consciousness is computable",
    journey: "Use our Simulation Calculator to input your assumptions. Watch your certainty dissolve."
  },
  {
    id: 2,
    title: "The Consciousness-First Thesis",
    champion: "Championed by: Chalmers, Campbell, Hoffman",
    claim: "Consciousness is fundamental; spacetime is its rendering. We're not IN a simulation; we ARE the simulation running.",
    strengths: "Solves hard problem of consciousness",
    weaknesses: "Sounds like solipsism",
    journey: "Try the 'Consciousness Lab' - meditations that treat reality as malleable code."
  },
  {
    id: 3,
    title: "The Mystical Traditions Thesis",
    champion: "Championed by: Sadhguru, Hindu Vedanta, Gnostics",
    claim: "\"Maya,\" \"Samsara,\" \"Demiurge\" - ancients already knew. Science is just catching up.",
    strengths: "3,000+ years of experiential data",
    weaknesses: "Lacks falsifiability",
    journey: "Compare Plato's Cave to the Matrix side-by-side. The parallels are... unsettling."
  },
  {
    id: 4,
    title: "The Technological Signature Thesis",
    champion: "Championed by: Virk, Gates, Greene",
    claim: "Quantum weirdness, fine-tuning, observer effect - these are glitches in the code.",
    strengths: "Empirically grounded",
    weaknesses: "Just-so stories",
    journey: "Explore 'The Glitch Report' - user-submitted reality bugs (déjà vu, Mandela Effects)."
  }
];

export default function Arguments() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-playfair text-center mb-8 bg-gradient-to-r from-white to-ether bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Four Arguments
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-16 text-soft/70 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Four paths through the cave. Each leads to the same question, different answers.
      </motion.p>

      <div className="mb-20">
        <SimulationCalculator />
      </div>

      <div className="space-y-12">
        {argumentsList.map((arg, index) => (
          <motion.div
            key={arg.id}
            className="bg-deep/30 rounded-2xl p-8 border border-ether/20 backdrop-blur-md"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h2 className="text-3xl font-playfair mb-2">{arg.title}</h2>
            <p className="text-ether mb-4">{arg.champion}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">The Claim:</h3>
                <p className="text-soft/80">{arg.claim}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-green-400">Strengths:</h3>
                  <p className="text-soft/80">{arg.strengths}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-400">Weaknesses:</h3>
                  <p className="text-soft/80">{arg.weaknesses}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-void/50 rounded-xl">
              <h3 className="font-semibold mb-2">Your Journey:</h3>
              <p className="text-soft/80">{arg.journey}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
