import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'CAFM System',
      description: 'Smart facility management system designed to streamline operations and improve efficiency',
      tags: ['React', 'Node.js', 'MySQL', 'Express.js'],
      liveUrl: 'https://cafmsystem.online/',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'POS System',
      description: 'Java-based Point of Sale billing system built with MVC architecture for retail management',
      tags: ['Java', 'JavaFX', 'MVC', 'JDBC'],
      githubUrl: 'https://github.com/sasinduv/LKPOS',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'OOP Group Project',
      description: 'Collaborative object-oriented programming project demonstrating advanced OOP concepts',
      tags: ['Java', 'OOP', 'Git', 'Team Collaboration'],
      githubUrl: 'https://github.com/kivilak/OOP-Group-Project.git',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Gradient header bar */}
                <div className={`h-1 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${project.liveUrl ? 'flex-shrink-0' : 'flex-1'} px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-white flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-all duration-300`}
                    >
                      <Github size={16} />
                      {project.liveUrl ? '' : 'GitHub'}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
