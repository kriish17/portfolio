'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/kriish17', color: 'hover:text-gray-700' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/krishna-kulkarni17/', color: 'hover:text-blue-600' },
    { name: 'Email', icon: Mail, href: 'mailto:krishna.goa1708@gmail.com', color: 'hover:text-red-500' },
  ]

  const featuredProjects = [
    {
      title: 'Private Document Q&A Bot',
      description: 'Interactive web application using Streamlit with RAG, LangChain and FAISS for document analysis',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'RAG'],
      link: 'https://github.com/kriish17/RAGChatBot'
    },
    {
      title: 'Compression Buddy',
      description: 'ML model to predict optimal compression tools for files without actual compression',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'File Processing'],
      link: 'https://github.com/pranava-kp/Data-Compression'
    },
    {
      title: 'Route-Wise',
      description: 'Sentiment-driven customer support routing system for efficient ticket management',
      tech: ['Python', 'Sentiment Analysis', 'NLP', 'Machine Learning'],
      link: 'https://github.com/NishanthN27/RouteWise-A-Sentiment-Driven-Customer-Support-Routing-System'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                         <h1 className="text-5xl md:text-7xl font-bold mb-2">
               Hi, I'm{' '}
               <span className="gradient-text">Krishna</span>
             </h1>
            <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              A passionate Computer Science student and developer crafting innovative solutions with AI and machine learning
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects">
                <motion.button
                  className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary-600" />
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              I'm a Computer Science student at RNS Institute of Technology with a passion for AI, machine learning, and innovative solutions. 
              Currently selected for Samsung Innovation Campus Programme, I bring ideas to life through clean code and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
                         {[
               { title: 'Programming', skills: ['Python', 'C', 'C++', 'Java', 'SQL'] },
               { title: 'AI/ML', skills: ['Machine Learning', 'LangChain', 'FAISS', 'RAG'] },
               { title: 'Web Dev', skills: ['HTML', 'CSS', 'Streamlit', 'Database Management'] }
             ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-dark-700 rounded-full text-sm font-medium text-dark-700 dark:text-dark-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                                 <div className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
                   <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
