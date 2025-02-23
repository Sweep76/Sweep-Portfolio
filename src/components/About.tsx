import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Code, 
  Database, 
  Globe, 
  Heart,
  Coffee,
  Clock,
  Award,
  HeartCrack
} from 'lucide-react';
import { desc } from 'framer-motion/client';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Heart,
      label: 'Programming Languages',
      description: 'PHP | Java | Python | TypeScript | C#',
      color: 'from-red-500 to-yellow-500'
    },
    { 
      icon: Code, 
      label: 'Backend Development',
      description: 'Node.js | Php | ASP.NET | Python',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Database, 
      label: 'Database Design',
      description: 'MySQL | MongoDB | SupaBase | PostgreSQL',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Globe, 
      label: 'Frontend Development',
      description: 'Next.js | Angular | HTML | TailwindCSS',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Coffee, 
      label: 'Data Science & Analytics',
      description: 'Python | LangChain | Pytorch | Power BI',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Clock,
      label: 'Work Experience+',
      description: '1 year',
      color: 'from-purple-500 to-blue-500'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden py-20">
      {/* Animated background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="lg:col-span-1"
        >
        <div className="relative mx-auto w-48 h-48">
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
              <img 
                src="/assets/images/projects/sweep.png" 
                alt="Profile Image"
                className="w-45 h-45 rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Aspiring Software Developer skilled in developing web applications modern technologies like React.js, TypeScript, and Python. Additionally also specialize in Data Science Fields through the creation of predictive and classification models to extract actionable insights into informative business decisions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4 w-fit`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-2">{skill.label}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                  
                  <motion.div
                    className="w-full h-1 bg-gray-700/50 mt-4 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredSkill === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  >
                    <div className={`h-full bg-gradient-to-r ${skill.color}`}></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/Work-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
              <motion.span 
                className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ rotate: 90 }}
              >
                ↗
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;