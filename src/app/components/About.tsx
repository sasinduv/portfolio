import { motion } from 'motion/react';
import { User, Target, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <User size={24} />,
      title: 'Education',
      description: 'Computer Science Undergraduate - University of Ruhuna',
    },
    {
      icon: <Target size={24} />,
      title: 'Experience',
      description: 'POS & CAFM systems development',
    },
    {
      icon: <Users size={24} />,
      title: 'Soft Skills',
      description: 'Teamwork, Communication, Time Management',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate Computer Science undergraduate at the University of Ruhuna with hands-on experience 
                in developing robust systems including POS and CAFM solutions. I thrive in collaborative environments 
                and excel at applying modern development practices to create efficient, scalable applications. My goal 
                is to leverage my technical skills and soft skills to contribute meaningfully to innovative projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
