import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center md:text-left"
          >
            © {new Date().getFullYear()} Sasindu Gihan. All rights reserved.
          </motion.p>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
              <Heart size={16} className="fill-red-500 text-red-500" />
            </motion.div>
            <span>by Sasindu</span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 text-gray-400"
          >
            <a href="#home" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
