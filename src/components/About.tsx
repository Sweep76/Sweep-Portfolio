import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiC, SiCplusplus, SiMongodb, SiTensorflow, SiMysql, SiTypescript, SiJavascript, 
  SiPostgresql, SiSharp, SiPhp, SiGraphql, SiDocker, SiKubernetes, SiTailwindcss, SiSass, SiFirebase, 
  SiDjango, SiLaravel, SiAmazon, SiNextdotjs, SiAngular, SiSupabase, SiPytorch, 
  SiPowers, SiDotnet, SiLangchain, SiPython, SiApachekafka, SiJupyter} from "react-icons/si";
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

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconData = {
    SiC: { name: "C", color: "lightblue", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    SiAmazon: {name: "Amazon", color: "orange", link: "https://aws.amazon.com"},
    FaJava: { name: "Java", color: "orange", link: "https://www.java.com/" },
    SiCplusplus: { name: "C++", color: "#00599C", link: "https://isocpp.org/" },
    SiJavascript: { name: "JavaScript", color: "#F7DF1E", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    SiTypescript: { name: "TypeScript", color: "#3178C6", link: "https://www.typescriptlang.org/" },
    SiSharp: { name: "C#", color: "grey", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    SiPython: { name: "Python", color: "yellow", link: "https://www.python.org/" },
    SiPhp: { name: "PHP", color: "#777BB4", link: "https://www.php.net/" },
    SiLaravel: { name: "Laravel", color: "#FF2D20", link: "https://laravel.com/" },
    SiMongodb: { name: "MongoDB", color: "#47A248", link: "https://www.mongodb.com/" },
    SiFirebase: { name: "Firebase", color: "#FFCA28", link: "https://firebase.google.com/" },
    SiSupabase: { name: "Supabase", color: "#3ECF8E", link: "https://supabase.com/" },
    SiPostgresql: { name: "PostgreSQL", color: "#336791", link: "https://www.postgresql.org/" },
    SiDjango: { name: "Django", color: "green", link: "https://www.djangoproject.com/" },
    FaHtml5: { name: "HTML5", color: "#E34F26", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    FaCss3Alt: { name: "CSS3", color: "#1572B6", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    FaReact: { name: "React", color: "#61DAFB", link: "https://reactjs.org/" },
    FaGitAlt: { name: "Git", color: "#F05032", link: "https://git-scm.com/" },
    SiDotnet: { name: ".NET", color: "#512BD4", link: "https://dotnet.microsoft.com/" },
    SiNextdotjs: { name: "Next.js", color: "white", link: "https://nextjs.org/" },
    SiTailwindcss: { name: "Tailwind CSS", color: "#06B6D4", link: "https://tailwindcss.com/" },
    SiMysql: { name: "MySQL", color: "#4479A1", link: "https://www.mysql.com/" },
    SiLangchain: { name: "Langchain", color: "purple", link: "https://www.langchain.com/" },
    SiPytorch: { name: "PyTorch", color: "#EE4C2C", link: "https://pytorch.org/" },
    SiPowers: { name: "Power BI", color: "#F2C811", link: "https://powerbi.microsoft.com/" },
    SiTensorflow: { name: "TensorFlow", color: "#FF6F00", link: "https://www.tensorflow.org/" },
    FaNodeJs: { name: "Node.js", color: "#8CC84B", link: "https://nodejs.org/" },
    SiPrisma: { name: "Prisma", color: "#2D3748", link: "https://www.prisma.io/" },
    SiApachekafka: { name: "Kafka", color: "purple", link: "https://kafka.apache.org/" },
    SiJupyter: {name: "Jupyter", color: "orange", link: "https://jupyter.org/"}
  };

  const skills = [
    { 
      icon: Code, 
      label: 'Programming Languages',
      icons: [SiC,  SiSharp, FaJava, SiJavascript, SiTypescript, SiPython, SiPhp],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Database, 
      label: 'Backend Technologies',
      icons: [SiLaravel, SiMongodb, SiFirebase, SiSupabase, SiMysql, SiPostgresql, SiDjango],
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Globe, 
      label: 'Web & Frameworks',
      icons: [SiDotnet, FaNodeJs, FaReact, SiNextdotjs, SiTailwindcss,  FaCss3Alt, FaHtml5],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Coffee, 
      label: 'Data Science & Analytics',
      icons: [SiJupyter, SiLangchain, SiPytorch, SiPowers, SiTensorflow, SiAmazon, SiApachekafka],
      color: 'from-red-500 to-orange-500'
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden py-20">
      {/* Background Animation */}
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
            <div className="relative mx-auto w-60 h-60">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                  <img 
                    src="/assets/images/projects/sweep.png" 
                    alt="Profile Image"
                    className="w-60 h-60 rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Aspiring Software Developer skilled in developing web applications using modern while also specializing in Data Science through the creation of predictive and classification models.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-5 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-2 w-fit`}>
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">{skill.label}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {skill.icons.map((Icon, i) => {
                      const key = Icon.name as keyof typeof iconData;
                      const { name, color, link } = iconData[key] || {};
                      return (
                        <a 
                          key={i} 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group relative"
                        >
                          <Icon 
                            className="w-8 h-8 transition-transform group-hover:scale-110" 
                            style={{ color: color || "white" }} 
                          />
                          {name && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                              {name}
                            </div>
                          )}
                        </a>
                      );
                    })}
                  </div>
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
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
