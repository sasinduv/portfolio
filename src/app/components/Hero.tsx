import { motion } from 'motion/react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import profileImage from 'figma:asset/58ea2aa72d70027e432bddd295341529da1a93dd.png';

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-blue-400 mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Sasindu Gihan
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Software Engineering Undergraduate
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              Passionate about building scalable systems and modern web applications
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleClick(e, '#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-white flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://github.com/sasinduv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              
              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <img
                  src={profileImage}
                  alt="Sasindu Gihan"
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50 relative z-10"
                />
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin-slow"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
