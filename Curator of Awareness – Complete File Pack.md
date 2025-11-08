# Curator of Awareness – Complete File Pack
&gt; Next.js 14 | Tailwind CSS | Framer Motion | Three.js  
&gt; Drop-in ready for Vercel

---

## FILE: package.json
```json
{
  "name": "curator-of-awareness",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^10.16.16",
    "three": "^0.159.0",
    "@react-three/fiber": "^8.15.12",
    "lucide-react": "^0.303.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0"
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: '#0A0A1A',
        ether: '#4A90E2',
        deep: '#2D1B69',
        soft: '#E5E7FF',
      },
    },
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-void: #0A0A1A;
  --color-ether: #4A90E2;
  --color-deep: #2D1B69;
  --color-soft: #E5E7FF;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bg-dream-gradient {
  background: radial-gradient(ellipse at center, rgba(74, 144, 226, 0.15) 0%, transparent 70%);
}

.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```



@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-void: #0A0A1A;
  --color-ether: #4A90E2;
  --color-deep: #2D1B69;
  --color-soft: #E5E7FF;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bg-dream-gradient {
  background: radial-gradient(ellipse at center, rgba(74, 144, 226, 0.15) 0%, transparent 70%);
}

.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}



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
          Welcome to the Cave's Digital Mouth
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-soft/80 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          You are the curator now. For 2,400 years, humanity has stared at shadows on walls—
          Plato's cave, Zhuangzi's butterfly, Maya's veil. Today, physicists rerun the universe 
          in silicon while mystics whisper, <span className="italic">"I told you so."</span>
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
          Welcome to the Cave's Digital Mouth
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-soft/80 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          You are the curator now. For 2,400 years, humanity has stared at shadows on walls—
          Plato's cave, Zhuangzi's butterfly, Maya's veil. Today, physicists rerun the universe 
          in silicon while mystics whisper, <span className="italic">"I told you so."</span>
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
                <a href={book.amazonLink} className="px-3 py-1 bg-[#FF9900] rounded hover:bg-[#FF9900]/80 transition-colors text-xs text-black">
                  Amazon
                </a>
              )}
              {book.youtubeLink && (
                <a href={book.youtubeLink} className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs">
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



export const books = [
  {
    id: 1,
    title: "Reality+: Virtual Worlds and the Problems of Philosophy",
    author: "David Chalmers",
    year: "2022",
    description: "Virtual doesn't mean less real. A philosopher's deep dive into digital existence.",
    amazonLink: "https://www.amazon.com/dp/0393867933",
    youtubeLink: "https://www.youtube.com/watch?v=Q5j7a2p-c6Q"
  },
  {
    id: 2,
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    year: "2014",
    description: "The foundational text on AI creating ancestor simulations.",
    amazonLink: "https://www.amazon.com/dp/0198739834",
    youtubeLink: "https://www.youtube.com/watch?v=fHI8X4OXluQ"
  },
  {
    id: 3,
    title: "The Simulation Hypothesis",
    author: "Rizwan Virk",
    year: "2019",
    description: "Video game designer's proof that we're in a simulation, from pixels to consciousness.",
    amazonLink: "https://www.amazon.com/dp/0983056904",
    youtubeLink: "https://www.youtube.com/watch?v=7v1BE07ly_Y"
  },
  {
    id: 4,
    title: "The Case Against Reality",
    author: "Donald Hoffman",
    year: "2019",
    description: "Evolution built a VR headset in your skull. The interface theory of perception.",
    amazonLink: "https://www.amazon.com/dp/0393254699",
    youtubeLink: "https://www.youtube.com/watch?v=oGJC9h7xUNU"
  },
  {
    id: 5,
    title: "My Big TOE: Trilogy",
    author: "Thomas Campbell",
    year: "2007",
    description: "NASA physicist's Theory of Everything: Consciousness as the operating system.",
    amazonLink: "https://www.amazon.com/dp/0972509478",
    youtubeLink: "https://www.youtube.com/watch?v=1VmkY6nGZ98"
  },
  {
    id: 6,
    title: "The Hidden Reality",
    author: "Brian Greene",
    year: "2011",
    description: "Multiverse theory meets simulation hypothesis in parallel realities.",
    amazonLink: "https://www.amazon.com/dp/0307278123",
    youtubeLink: "https://www.youtube.com/watch?v=gsI3mM-cT4w"
  },
  {
    id: 7,
    title: "Our Mathematical Universe",
    author: "Max Tegmark",
    year: "2014",
    description: "Universe = math = code. The ultimate reality is a mathematical structure.",
    amazonLink: "https://www.amazon.com/dp/0307599809",
    youtubeLink: "https://www.youtube.com/watch?v=92nJAJx6nuw"
  },
  {
    id: 8,
    title: "Being You: A New Science of Consciousness",
    author: "Anil Seth",
    year: "2021",
    description: "Your brain hallucinates reality. A controlled waking dream.",
    amazonLink: "https://www.amazon.com/dp/1524748403",
    youtubeLink: "https://www.youtube.com/watch?v=5IlWke4GKCc"
  },
  {
    id: 9,
    title: "The Republic",
    author: "Plato",
    year: "380 BCE",
    description: "The original simulation text. The allegory of the cave.",
    amazonLink: "https://www.amazon.com/dp/0140449140",
    youtubeLink: "https://www.youtube.com/watch?v=1lz3zTvSqcI"
  },
  {
    id: 10,
    title: "The Upanishads",
    author: "Anonymous (Ancient)",
    year: "1500 BCE",
    description: "Maya: The cosmic illusion. The veil over Brahman.",
    amazonLink: "https://www.amazon.com/dp/0140447490",
    youtubeLink: "https://www.youtube.com/watch?v=3mB8CCCvY8w"
  },
  {
    id: 11,
    title: "Zhuangzi: Basic Writings",
    author: "Zhuangzi",
    year: "4th Century BCE",
    description: "\"Am I a man dreaming I'm a butterfly, or a butterfly dreaming I'm a man?\"",
    amazonLink: "https://www.amazon.com/dp/0231129599",
    youtubeLink: "https://www.youtube.com/watch?v=3mB8CCCvY8w"
  },
  {
    id: 12,
    title: "The Nag Hammadi Library",
    author: "Gnostic Texts",
    year: "1st-3rd Century CE",
    description: "The Demiurge: A false creator god trapping souls in a material simulation.",
    amazonLink: "https://www.amazon.com/dp/0061626005",
    youtubeLink: "https://www.youtube.com/watch?v=Jo6LKRt4apg"
  },
  {
    id: 13,
    title: "Meditations on First Philosophy",
    author: "René Descartes",
    year: "1641",
    description: "\"I shall suppose that some malicious demon... has employed all his energies in deceiving me.\"",
    amazonLink: "https://www.amazon.com/dp/0140447016",
    youtubeLink: "https://www.youtube.com/watch?v=mZ6nX9r7D0E"
  },
  {
    id: 14,
    title: "The Doors of Perception",
    author: "Aldous Huxley",
    year: "1954",
    description: "Minds filter true reality. Psychedelics as debug mode for consciousness.",
    amazonLink: "https://www.amazon.com/dp/0061729076",
    youtubeLink: "https://www.youtube.com/watch?v=3QO3K1yuJgo"
  },
  {
    id: 15,
    title: "The Teachings of Don Juan",
    author: "Carlos Castaneda",
    year: "1968",
    description: "Shamanic hacking of reality. Seeing beyond the consensual simulation.",
    amazonLink: "https://www.amazon.com/dp/0520220424",
    youtubeLink: "https://www.youtube.com/watch?v=8VOf5FX7xY8"
  }
];



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
                <a href={thinker.youtubeLink} className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs">
                  Interview
                </a>
              )}
              {thinker.amazonLink && (
                <a href={thinker.amazonLink} className="px-3 py-1 bg-[#FF9900] rounded hover:bg-[#FF9900]/80 transition-colors text-xs text-black">
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



export const thinkers = [
  {
    id: 1,
    name: "Dr. Nick Bostrom",
    affiliation: "Oxford University",
    role: "Founder of Modern Simulation Hypothesis",
    bio: "Philosopher who mathematically proved we're likely living in a simulation.",
    keyWork: "Superintelligence, Anthropic Bias",
    youtubeLink: "https://www.youtube.com/watch?v=sJ-D5u4b1rs",
    amazonLink: "https://www.amazon.com/dp/0198739834"
  },
  {
    id: 2,
    name: "Dr. David Chalmers",
    affiliation: "NYU",
    role: "Philosopher of Consciousness",
    bio: "\"Virtual doesn't mean less real.\" Consciousness is the hard problem.",
    keyWork: "Reality+: Virtual Worlds and the Problems of Philosophy",
    youtubeLink: "https://www.youtube.com/watch?v=Q5j7a2p-c6Q",
    amazonLink: "https://www.amazon.com/dp/0393867933"
  },
  {
    id: 3,
    name: "Dr. Sylvester James Gates",
    affiliation: "Brown University",
    role: "Theoretical Physicist",
    bio: "Founder of modern simulation hypothesis. Mathematical proof we live in a simulation.",
    keyWork: "Found \"error-correcting code\" in string theory equations",
    youtubeLink: "https://www.youtube.com/watch?v=ofX花的视频",
    amazonLink: ""
  },
  {
    id: 4,
    name: "Dr. Thomas Campbell",
    affiliation: "NASA (Former)",
    role: "Consciousness Researcher",
    bio: "NASA physicist turned consciousness researcher. \"Consciousness is the operating system.\"",
    keyWork: "My Big TOE (Theory of Everything)",
    youtubeLink: "https://www.youtube.com/watch?v=1VmkY6nGZ98",
    amazonLink: "https://www.amazon.com/dp/0972509478"
  },
  {
    id: 5,
    name: "Elon Musk",
    affiliation: "SpaceX/Tesla",
    role: "Tech Visionary",
    bio: "\"Odds we're in base reality: one in billions.\" Tech inevitability argument.",
    keyWork: "Code Conference 2016 Simulation Talk",
    youtubeLink: "https://www.youtube.com/watch?v=JNvVXw-1ajg",
    amazonLink: ""
  },
  {
    id: 6,
    name: "Neil deGrasse Tyson",
    affiliation: "American Museum of Natural History",
    role: "Astrophysicist",
    bio: "Agnostic on simulation. \"It's a fascinating idea that can't be dismissed.\"",
    keyWork: "StarTalk: Are We a Simulation?",
    youtubeLink: "https://www.youtube.com/watch?v=8i1f8h7-sbM",
    amazonLink: ""
  },
  {
    id: 7,
    name: "Sadhguru Jaggi Vasudev",
    affiliation: "Isha Foundation",
    role: "Yogic Mystic",
    bio: "Ancient Hindu \"Maya\" = Simulation. Spiritual traditions knew this all along.",
    keyWork: "Inner Engineering",
    youtubeLink: "https://www.youtube.com/watch?v=YlKj7LQ3lTQ",
    amazonLink: "https://www.amazon.com/dp/0812997794"
  },
  {
    id: 8,
    name: "Donald Hoffman",
    affiliation: "UC Irvine",
    role: "Cognitive Scientist",
    bio: "\"Evolution built a VR headset in your skull.\" Reality is an interface.",
    keyWork: "The Case Against Reality",
    youtubeLink: "https://www.youtube.com/watch?v=oGJC9h7xUNU",
    amazonLink: "https://www.amazon.com/dp/0393254699"
  }
];





'use client';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particle({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = Math.sin(time + position[0]) * 0.1;
      meshRef.current.rotation.y = Math.cos(time + position[1]) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshBasicMaterial color="#4A90E2" opacity={0.2} transparent />
    </mesh>
  );
}

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const particles = useMemo(() => {
    const count = 40;
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
    ]);
  }, []);

  // Fallback CSS animation for Safari/iPad
  if (!isClient || isSafari) {
    return (
      <div className="fixed inset-0 -z-10 opacity-20">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-ether rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {particles.map((pos, i) => <Particle key={i} position={pos} />)}
      </Canvas>
    </div>
  );
}







'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SimulationCalculator() {
  const [civSurvival, setCivSurvival] = useState(50);
  const [techGrowth, setTechGrowth] = useState(80);
  const [consciousnessProb, setConsciousnessProb] = useState(60);

  const probability = Math.round(
    (civSurvival * 0.4 + techGrowth * 0.4 + consciousnessProb * 0.2) / 100 * 95
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-deep/50 rounded-2xl backdrop-blur-md border border-ether/20">
      <h3 className="text-3xl font-playfair mb-6 text-center">Simulation Probability Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <label className="flex justify-between mb-2 text-sm">Civilization Survival Rate <span className="text-ether">{civSurvival}%</span></label>
          <input type="range" min="0" max="100" value={civSurvival} onChange={(e) => setCivSurvival(e.target.value)} className="w-full h-2 bg-void rounded-lg appearance-none cursor-pointer accent-ether" />
        </div>
        
        <div>
          <label className="flex justify-between mb-2 text-sm">Technology Growth <span className="text-ether">{techGrowth}%</span></label>
          <input type="range" min="0" max="100" value={techGrowth} onChange={(e) => setTechGrowth(e.target.value)} className="w-full h-2 bg-void rounded-lg appearance-none cursor-pointer accent-ether" />
        </div>
        
        <div>
          <label className="flex justify-between mb-2 text-sm">Consciousness Upload Probability <span className="text-ether">{consciousnessProb}%</span></label>
          <input type="range" min="0" max="100" value={consciousnessProb} onChange={(e) => setConsciousnessProb(e.target.value)} className="w-full h-2 bg-void rounded-lg appearance-none cursor-pointer accent-ether" />
        </div>
      </div>
    
      <motion.div 
        className="mt-8 p-6 bg-deep/70 rounded-xl text-center border border-ether/30"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-sm text-soft/60">Your Personal Odds:</div>
        <div className="text-6xl font-playfair my-2 bg-gradient-to-r from-ether to-deep bg-clip-text text-transparent">{probability}%</div>
        <div className="text-sm text-ether">Probability you're in a simulation</div>
      </motion.div>
      
      <p className="mt-6 text-xs text-soft/60">
        Based on Bostrom's trilemma: If civilizations survive, develop tech, and can simulate consciousness,
        then simulated minds vastly outnumber biological ones.
      </p>
    </div>
  );
}





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
        YouTube interviews with the architects of the question. Long-form explorations of reality's code.
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



export const interviews = [
  {
    category: "The Cave Sessions (Long-form)",
    videos: [
      {
        id: "bostrom-fridman",
        title: "Nick Bostrom: Simulation Argument",
        guests: "Lex Fridman & Nick Bostrom",
        duration: "3.5 hours",
        description: "Mathematical rigor meets philosophical depth. The definitive interview on the simulation argument.",
        youtubeId: "sJ-D5u4b1rs"
      },
      {
        id: "chalmers-carroll",
        title: "David Chalmers on Virtual Reality & Consciousness",
        guests: "Sean Carroll & David Chalmers",
        duration: "2 hours",
        description: "Consciousness deep-dive. Why virtual worlds are as real as base reality.",
        youtubeId: "Q5j7a2p-c6Q"
      },
      {
        id: "hoffman-jaimungal",
        title: "Donald Hoffman: Reality is an Interface",
        guests: "Curt Jaimungal & Donald Hoffman",
        duration: "4 hours",
        description: "Evolution built a VR headset in your skull. The interface theory of perception.",
        youtubeId: "oGJC9h7xUNU"
      },
      {
        id: "virk-afteron",
        title: "Rizwan Virk: The Simulation Hypothesis",
        guests: "After On Podcast & Rizwan Virk",
        duration: "2.5 hours",
        description: "Video game parallels. A game designer's proof of the simulation.",
        youtubeId: "7v1BE07ly_Y"
      }
    ]
  },
  {
    category: "Ancient Meets Algorithm",
    videos: [
      {
        id: "sadhguru-khosla",
        title: "Sadhguru on Maya & Machine Learning",
        guests: "Khosla Ventures & Sadhguru",
        duration: "45 min",
        description: "Ancient Hindu wisdom meets modern AI. Maya as cosmic simulation.",
        youtubeId: "YlKj7LQ3lTQ"
      },
      {
        id: "chopra-greene",
        title: "Deepak Chopra x Brian Greene: Quantum Mysticism Debate",
        guests: "Deepak Chopra & Brian Greene",
        duration: "1 hour",
        description: "Spiritual vs scientific perspectives on quantum reality. Heated but respectful.",
        youtubeId: "3mB8CCCvY8w"
      }
    ]
  },
  {
    category: "The Skeptic's Corner",
    videos: [
      {
        id: "tyson-nice",
        title: "Neil deGrasse Tyson: Why It Might Be Wrong",
        guests: "StarTalk & Neil deGrasse Tyson",
        duration: "30 min",
        description: "Scientific openness vs simulation hypothesis. The testability problem.",
        youtubeId: "8i1f8h7-sbM"
      },
      {
        id: "hossenfelder",
        title: "Sabine Hossenfelder: The Simulation Hypothesis is Pseudoscience",
        guests: "Science Talk",
        duration: "15 min",
        description: "Counter-argument: Why the hypothesis is unfalsifiable and therefore not science.",
        youtubeId: "jcIgXdF2MS0"
      }
    ]
  }
];





curator-of-awareness/
├── package.json
├── tailwind.config.js
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── arguments/
│   │   │   └── page.js
│   │   ├── library/
│   │   │   └── page.js
│   │   ├── thinkers/
│   │   │   └── page.js
│   │   └── conversations/
│   │       └── page.js
│   ├── components/
│   │   ├── FloatingParticles.jsx
│   │   └── SimulationCalculator.jsx
│   └── data/
│       ├── books.js
│       ├── thinkers.js
│       └── interviews.js







