'use client';
import { interviews } from '@/data/interviews';
import { motion } from 'framer-motion';

export default function Conversations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-playfair text-center mb-8 bg-gradient-to-r from-white to-ether bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Conversations in the Dark
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-16 text-soft/70 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        YouTube interviews with the architects of the question. Long-form explorations of reality&apos;s code.
      </motion.p>

      <div className="space-y-8">
        {interviews.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h2 className="text-3xl font-playfair mb-6 text-ether">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.videos.map((video, vidIndex) => (
                <motion.div
                  key={video.id}
                  className="bg-deep/30 rounded-xl overflow-hidden border border-ether/20 backdrop-blur-md hover:border-ether/50 transition-all"
                  initial={{ opacity: 0, x: vidIndex % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: vidIndex * 0.05 }}
                >
                  <div className="aspect-video bg-void">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      className="w-full h-full"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair mb-2">{video.title}</h3>
                    <p className="text-sm text-soft/60 mb-2">{video.guests} • {video.duration}</p>
                    <p className="text-sm text-soft/80">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
