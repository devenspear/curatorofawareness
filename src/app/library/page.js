'use client';
import { books } from '@/data/books';
import { motion } from 'framer-motion';

export default function Library() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-playfair text-center mb-8 bg-gradient-to-r from-white to-ether bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Library
      </motion.h1>

      <motion.p
        className="text-xl text-center mb-16 text-soft/70 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Books that crack the code. Click to buy on Amazon (affiliate links support the portal).
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            className="bg-deep/30 rounded-xl p-6 border border-ether/20 backdrop-blur-md hover:border-ether/50 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="text-xl font-playfair mb-2">{book.title}</h3>
            <p className="text-ether mb-1">{book.author}</p>
            <p className="text-sm text-soft/60 mb-3">{book.year}</p>
            <p className="text-sm text-soft/80 mb-4">{book.description}</p>
            <div className="flex gap-2">
              {book.amazonLink && (
                <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-[#FF9900] rounded hover:bg-[#FF9900]/80 transition-colors text-xs text-black">
                  Amazon
                </a>
              )}
              {book.youtubeLink && (
                <a href={book.youtubeLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs">
                  YouTube
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
