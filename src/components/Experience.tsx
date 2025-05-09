import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Data Analyst / Research Analyst",
      company: "Gabtech Global, LLC",
      date: "Jan 2025 - Apr 2025",
      points: [
        "Engineered end-to-end ETL pipelines for ingesting and transforming multi-source business data across departments.",
        "Conducted advanced exploratory data analysis (EDA) and developed machine learning prototypes.",
        "Collaborated cross-functionally with product and engineering teams"
      ]
    },
    {
      title: "Data Scientist Intern",
      company: "Talleco JobTarget",
      date: "Aug 2024 - Nov 2024",
      points: [
        "Trained in industry level database management skills, to maintain, analyze, and organize large datasets efficiently",
        "Communicated key insights to technical and non-technical stakeholders, and collaborated with Data Scientists",
        "Provided comprehensive data report and design through PostgreSQL using PowerBi, Amazon Quicksight, and Athena."
      ]
    },
    {
      title: "Data Analyst",
      company: "QuadX",
      date: "Jun 2023 - Sep 2023",
      points: [
        "Developed and implemented statistical models using R and Python to analyze & optimize business operations",
        "Utilized predictive modeling techniques to forecast key business metrics",
        "Designed and maintained data pipelines to ensure reliability of data-driven solutions"
      ]
    }
  ];
  
  
  return (
    <section id="experience" className="min-h-screen relative bg-gray-900 overflow-hidden py-20">
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

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.2)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: 'rgba(17, 24, 39, 0.8)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.8)' }}
              date={exp.date}
              iconStyle={{ 
                background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)' 
              }}
              icon={<Briefcase />}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {exp.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-gray-300">
                  <Building className="w-4 h-4" />
                  <h4 className="text-lg">{exp.company}</h4>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 mt-1 text-blue-500" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;