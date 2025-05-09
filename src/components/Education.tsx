import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  GraduationCap,
  School,
  BookOpen,
  Award,
  Star,
  Calendar,
  Sparkles,
  Building
} from 'lucide-react';

const Education = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      id: 1,
      title: "College",
      institution: "University of San Carlos",
      year: "Aug 2021-2025",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Dean's Lister 2024-2025",
        "Dean's Lister 2023-2024",
        "DCISM Cisco Council Member",
        "Google Developer Student Club Noogler (Member)"
      ]
    },
    {
      id: 2,
      title: "Senior High School",
      institution: "Sacred Heart School - Ateneo de Cebu",
      year: "2019-2021",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "STEM 3rd Place Quizbowl",
        "Arduino-Based Projects",
        "Extracurricular Activities",
        "Red Cross Youth Volunteerism"
      ]
    },
    {
      id: 3,
      title: "High School",
      institution: "Sacred Heart School - Ateneo de Cebu",
      year: "2015-2019",
      icon: School,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Academic Exellence",
        "Student Athlete"
      ]
    }
  ];

  return (
    <section id="education" className="relative bg-gray-900 overflow-hidden py-16">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none z-0">
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
              Education Journey
            </span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                className={`p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                  transform transition-all duration-300 hover:shadow-xl cursor-pointer
                  ${selectedCard === edu.id ? 'ring-2 ring-blue-400' : ''}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCard(selectedCard === edu.id ? null : edu.id)}
              >
                {/* Top Gradient Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${edu.color} rounded-full mb-6`}></div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color}`}>
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-gray-300 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                    {edu.grade && (
                      <p className="text-gray-300 flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {edu.grade}
                      </p>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {selectedCard === edu.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <Award className="w-4 h-4 text-yellow-400" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Connecting Lines */}
              {index < educationData.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
