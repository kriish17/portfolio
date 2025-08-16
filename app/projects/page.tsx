'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Code, Globe, Smartphone, Database } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Private Document Q&A Bot',
             description: 'Interactive web application using Streamlit that allows users to upload PDF documents and ask questions in natural language.',
       longDescription: 'Developed an interactive web application using Streamlit that allows users to upload PDF documents and ask questions in natural language. The system leverages Retrieval-Augmented Generation (RAG) with LangChain and FAISS to retrieve relevant document chunks and generate contextually accurate answers. This project demonstrates advanced NLP techniques and document processing capabilities.',
       category: 'ai',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'RAG', 'NLP'],
      liveUrl: 'https://github.com/kriish17/RAGChatBot',
      githubUrl: 'https://github.com/kriish17/RAGChatBot',
      featured: true
    },
    {
      id: 2,
      title: 'Compression Buddy',
             description: 'ML model to predict the most effective compression tool for a given file without applying actual compression.',
       longDescription: 'This project develops a machine learning model to predict the most effective compression tool for a given file without applying actual compression. By analyzing file characteristics and learning from past compression results, the model helps users select the optimal method for storage and transfer efficiency. The system uses advanced ML algorithms to analyze file patterns and predict compression outcomes.',
       category: 'ai',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'File Processing', 'ML Models'],
      liveUrl: 'https://github.com/pranava-kp/Data-Compression',
      githubUrl: 'https://github.com/pranava-kp/Data-Compression',
      featured: true
    },
    {
      id: 3,
      title: 'Route-Wise',
             description: 'Sentiment-driven customer support routing system for efficient ticket management.',
       longDescription: 'A sentiment-driven customer support routing system that analyzes customer queries and automatically routes them to the most appropriate support team based on sentiment analysis and content classification. This system improves response times and customer satisfaction by ensuring queries reach the right department quickly.',
       category: 'ai',
      tech: ['Python', 'Sentiment Analysis', 'NLP', 'Machine Learning', 'Classification'],
      liveUrl: 'https://github.com/NishanthN27/RouteWise-A-Sentiment-Driven-Customer-Support-Routing-System',
      githubUrl: 'https://github.com/NishanthN27/RouteWise-A-Sentiment-Driven-Customer-Support-Routing-System',
      featured: true
    },
    {
      id: 4,
      title: 'Interactive F1 App',
             description: 'A comprehensive SQL-based database for managing and analyzing Formula-1 data.',
       longDescription: 'A comprehensive SQL-based database application for managing and analyzing Formula-1 data. The system provides detailed insights into race statistics, driver performance, team analytics, and historical data. Features include complex queries, data visualization, and interactive dashboards for F1 enthusiasts and analysts.',
       category: 'web',
      tech: ['SQL', 'Database Management', 'Data Analysis', 'MySQL', 'RDBMS'],
      liveUrl: 'https://github.com/kriish17/F1App',
      githubUrl: 'https://github.com/kriish17/F1App',
      featured: false
    },
    {
      id: 5,
      title: 'Image Dataset Manager',
             description: 'A theoretical program that manages and manipulates image datasets using a linked list structure.',
       longDescription: 'A theoretical program that manages and manipulates image datasets using a linked list structure with options for insertion, deletion, sorting and display. This project demonstrates advanced data structure implementation and efficient image dataset management techniques.',
       category: 'web',
      tech: ['C++', 'Data Structures', 'Linked Lists', 'Image Processing', 'Algorithms'],
      liveUrl: 'https://github.com/kriish17/MiniProject',
      githubUrl: 'https://github.com/kriish17/MiniProject',
      featured: false
    },
    {
      id: 6,
      title: 'Smart Parking System',
             description: 'Used IR sensors and Arduino to create a microcontroller-based smart parking system.',
       longDescription: 'Used IR sensors and Arduino to create a microcontroller-based smart parking system. The system detects vehicle presence, manages parking space allocation, and provides real-time parking status updates. This project combines hardware and software to solve real-world parking management challenges.',
       category: 'ai',
      tech: ['Arduino', 'IR Sensors', 'Microcontrollers', 'C++', 'Hardware Integration'],
      liveUrl: 'https://github.com/Maulik290404/Smart_Parking_System',
      githubUrl: 'https://github.com/Maulik290404/Smart_Parking_System',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'ai', label: 'AI/ML', icon: Code }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-700">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, showcasing my skills in AI/ML, 
              data analysis, and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                                     <div className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
                     <div className="p-6">
                       {project.featured && (
                         <div className="mb-4">
                           <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                             Featured
                           </span>
                         </div>
                       )}
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-dark-100 dark:bg-dark-600 text-dark-600 dark:text-dark-300 rounded text-xs font-medium">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-dark-600 dark:text-dark-300">
                No projects found for this category. Check back soon for new projects!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      
    </div>
  )
}
