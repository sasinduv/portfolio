import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'University of Ruhuna',
      period: '2021 - Present',
      location: 'Matara, Sri Lanka',
      status: 'In Progress',
      description: 'Pursuing a comprehensive Computer Science degree with focus on software engineering, data structures, and modern web technologies.',
      icon: <GraduationCap size={32} />,
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="md:ml-20 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                            <p className="text-xl text-purple-400 font-semibold mb-2">{edu.institution}</p>
                          </div>
                          <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-semibold">
                            {edu.status}
                          </span>
                        </div>

                        <p className="text-gray-400 mb-6">{edu.description}</p>

                        {/* Info badges */}
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                            <Calendar size={18} className="text-blue-400" />
                            <span className="text-gray-300">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                            <MapPin size={18} className="text-purple-400" />
                            <span className="text-gray-300">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
