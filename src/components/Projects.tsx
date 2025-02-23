import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, ChevronRight, ArrowLeft, ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const handleImageClick = (e, imageSrc) => {
    e.stopPropagation();
    setFullScreenImage(imageSrc);
  };

  const projects = [
    // 1) CBN Mappo Model
    {
      title: "Multi-Agent PPO Model",
      description: "Variant of PPO which is specialized for Multi-Agent settings",
      images: [
        "/assets/images/projects/cbn.png",
        "/assets/images/projects/cbn1.png",
        // You can add more images here if desired
      ],
      tech: ["Python", "TensorFlow", "C++", "AutoGen", "Seaborn"],
      githubUrl: "https://github.com/Sweep76/BN-Mappo-Coordination",
      details: {
        overview:
          "Developed an implementation of algorithms for Deep Reinforcement Learning with continuous action spaces, specifically the Proximal Policy Optimization (PPO) algorithm. The model is specialized for multi-agent settings, where multiple agents interact with each other and the environment. The model is trained using a custom environment and evaluated on various tasks.",
        features: [
          "Hyperparameter and training curves",
          "Custom environment for multi-agent settings",
          "Evaluation on various tasks and benchmarks",
          "Model achieved strong results while exhibiting comparable sample efficiency"
          
        ],
      },
    },

    // 2) Patient Management System (Github Link Only)
    {
      title: "Patient Management System",
      description: "Full-featured Healthcare Management System",
      images: [
        "/assets/images/projects/pms.png",

        // Add more images if you have them
      ],
      tech: ["NextJs", "Tailwind CSS", "AppWrite", "Twilio"],
      githubUrl: "https://github.com/Sweep76/pms",
      details: {
        overview:
          "Built a comprehensive HealthCare Management System for Medical Record Management with Patient Privileges to Book and Schedule Doctor Appointments and Admin CRUD Operations.",
        features: [
          "Schedule Doctor Appointments with Ease",
          "Calendar Control Functionality",
          "Patient tracking and management",
          "Organized Patient Record List",
          "Admin dashboard with analytics",
          "Actionable orders"
        ],
      },
    },

    // 3) Taskify
    {
      title: "Taskify",
      description: "Task Management App for Employees with searching index function, hierarchy ranking, and Admin CRUD Operations",
      images: [
        "/assets/images/projects/tasky.png",
      ],
      tech: ["Vite", "React", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/Sweep76/Taskify-Management-Application",
      details: {
        overview:
          "A Task Management Applications that help Employees organize their responsibilities in a fast-pace corporate world",
        features: [
          "Time-based Tasks",
          "Manage Employee Tasks for Careful Review",
          "Calendar Control: Organize tasks based on priority or by time",
          "Oversee task completion progress by Admin",
        ],
      },
    },

    // 4) Ecommerce
    {
      title: "Ecommerce Website",
      description: "Website to track financial expenses through display of elaborate visual graphs",
      images: [
        "/assets/images/projects/ecommerce.JPG",
        "/assets/images/projects/ecommerce1.JPG",
        "/assets/images/projects/ecommerce2.JPG",
      ],
      tech: ["TypeScript", "NodeJS Express", "React", "TailWind CSS", "MongoDB"],
      details: {
        overview:
          "This Ecommerce Web Application serves as a economic dashboard to display list of total Sales, and track list of Product Income",
        features: [
          "Display Timely Transactions",
          "Visualize Business Insights and Milestones",
          "Effective tool to breakdown Monthly Expenditures",
          "Easy to integrate into Performance workflows",
        ],
      },
    },

    // 5) Toxic Chat
    {
      title: "Toxic Classification Model",
      description: "Dialogue models trained on human conversations inadvertently learn to generate toxic responses.",
      images: [
      "/assets/images/projects/model3.png",
      "/assets/images/projects/model2.png",
      "/assets/images/projects/model1.png",
      ],
      tech: ["Pytorch", "Jupyter Notebook", "sklearn", "transformers", "SBF_BERT_Dataset"],
      githubUrl: "https://github.com/Sweep76/toxic-classification-model",
      details: {
      overview:
        "Developed a model to classify and mitigate toxic responses generated by dialogue models trained on human conversations.",
      features: [
        "Instant text highlighting and saving",
        "Titles and tags for better note organization",
        "Real-time search and advanced tag filtering",
        "Export notes as .txt files, including metadata",
        "Local storage for offline support and privacy",
        "Future enhancements like cloud sync and imports",
      ],
      },
    },
    //
    {
      title: "Python Visualizer",
      description: "Data Visualization Tool to help understand Data",
      images: [
        "/assets/images/projects/visualizer.png",
        "/assets/images/projects/visualizer1.png",
        "/assets/images/projects/visualizer2.png",
      ],
      tech: ["Python", "Jupyter Notebook", "Seaborn", "Unittest", "Time series"],
      githubUrl: "https://github.com/Sweep76/Data-Analytics-Visualizer",
      details: {
        overview:
          "Pythong Visualier is a Data Visualization tool that helps you to understand the data in a more visual way. The libraries used are Matplotlib, Seaborn, and Pandas.",
        features: [
          "Exploratory Data Analysis",
          "Data Cleaning",
          "Data Preprocessing",
          "Data Visualization",
          "Data Analysis",
          "Data Interpretation",
        ],
      },
    },
    
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative bg-gray-900 overflow-hidden py-20"
    >
      {/* Animated background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="relative w-full mb-6 flex items-center justify-center">
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/70 p-2 rounded-full text-white hover:bg-gray-600/80 transition z-10"
                    onClick={handlePrevImage}
                  >
                    <ArrowLeft size={20} />
                  </button>

                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                    onClick={(e) => handleImageClick(e, selectedProject.images[currentImageIndex])}
                  />

                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/70 p-2 rounded-full text-white hover:bg-gray-600/80 transition z-10"
                    onClick={handleNextImage}
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-4">
                    {selectedProject.details.overview}
                  </p>

                  <h4 className="text-xl font-semibold text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="list-none space-y-2 mb-6">
                    {selectedProject.details.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.demoUrl && (
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium group"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      </motion.a>
                    )}

                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
                      >
                        <Github size={18} />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full-screen image modal */}
        <AnimatePresence>
          {fullScreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              onClick={() => setFullScreenImage(null)}
            >
              <button
                onClick={() => setFullScreenImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={fullScreenImage}
                alt="Full screen view"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;