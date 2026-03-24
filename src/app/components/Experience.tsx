import { motion } from 'motion/react';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Bank Trainee',
      company: "People's Bank",
      period: '2023',
      description: 'Gained hands-on experience in banking operations and customer service',
      highlights: [
        'Banking operations experience',
        'Customer handling and service',
        'Financial transaction processing',
      ],
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * highlightIndex }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-300">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
