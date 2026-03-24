import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Wrench 
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: <Code2 size={24} />,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Java', 'C', 'C#'],
    },
    {
      category: 'Frontend',
      icon: <Layout size={24} />,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['React', 'Angular', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      gradient: 'from-green-500 to-teal-500',
      skills: ['Express.js', '.NET Core'],
    },
    {
      category: 'Database',
      icon: <Database size={24} />,
      gradient: 'from-orange-500 to-red-500',
      skills: ['MySQL', 'PostgreSQL', 'JDBC'],
    },
    {
      category: 'Concepts',
      icon: <GitBranch size={24} />,
      gradient: 'from-yellow-500 to-amber-500',
      skills: ['OOP', 'MVC Architecture', 'Data Structures'],
    },
    {
      category: 'Tools',
      icon: <Wrench size={24} />,
      gradient: 'from-indigo-500 to-blue-500',
      skills: ['VS Code', 'JavaFX'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300`}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-gray-300 border border-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
