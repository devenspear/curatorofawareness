'use client';
import { thinkers } from '@/data/thinkers';
import { motion } from 'framer-motion';

export default function Thinkers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-playfair text-center mb-8 bg-gradient-to-r from-white to-ether bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Shadow-Makers
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-16 text-soft/70 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The architects of the question. Meet the physicists, philosophers, and mystics mapping the cave.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {thinkers.map((thinker, index) => (
          <motion.div
            key={thinker.id}
            className="bg-deep/30 rounded-xl p-6 border border-ether/20 backdrop-blur-md hover:border-ether/50 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="text-2xl font-playfair mb-2">{thinker.name}</h3>
            <p className="text-ether mb-3">{thinker.affiliation}</p>
            <p className="text-sm text-soft/60 mb-4">{thinker.role}</p>
            <p className="text-sm text-soft/80 mb-4">{thinker.bio}</p>

            <div className="space-y-2">
              <h4 className="font-semibold">Key Work:</h4>
              <p className="text-sm text-soft/80">{thinker.keyWork}</p>
            </div>

            <div className="mt-4 flex gap-2">
              {thinker.youtubeLink && (
                <a href={thinker.youtubeLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs">
                  Interview
                </a>
              )}
              {thinker.amazonLink && (
                <a href={thinker.amazonLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-[#FF9900] rounded hover:bg-[#FF9900]/80 transition-colors text-xs text-black">
                  Amazon
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
