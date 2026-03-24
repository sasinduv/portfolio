import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, GitBranch, Terminal } from 'lucide-react';

export function FloatingIcons() {
  const icons = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%' },
    { Icon: Database, delay: 1, x: '85%', y: '15%' },
    { Icon: Layout, delay: 2, x: '15%', y: '70%' },
    { Icon: Server, delay: 1.5, x: '80%', y: '60%' },
    { Icon: GitBranch, delay: 0.5, x: '50%', y: '10%' },
    { Icon: Terminal, delay: 2.5, x: '90%', y: '85%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon size={60} className="text-purple-400" />
        </motion.div>
      ))}
    </div>
  );
}
