'use client'

import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, GraduationCap, Briefcase, Code, Palette, Database } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function About() {
  const skills = [
    { category: 'Programming', icon: Code, skills: ['Python', 'C', 'C++', 'Java', 'SQL', 'HTML/CSS'] },
    { category: 'AI/ML', icon: Database, skills: ['Machine Learning', 'LangChain', 'FAISS', 'RAG', 'Sentiment Analysis', 'NLP'] },
    { category: 'Tools & Tech', icon: Palette, skills: ['Streamlit', 'MySQL', 'RDBMS', 'Arduino', 'Data Structures', 'Algorithms'] },
  ]

        const experience = [
        {
          title: 'Industrial Trainee',
          company: 'Samsung Innovation Campus Programme',
          period: 'Nov 2024 - Present',
          description: 'Selected out of 900 students for the prestigious programme after 2 rounds of testing.',
          achievements: ['Learning advanced Python practices', 'Integration of machine learning', 'Working on cutting-edge AI projects']
        }
      ]

  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      school: 'RNS Institute of Technology',
      period: 'Dec 2022 - May 2026',
      description: 'CGPA: 8.72/10. Coursework includes Programming with C, Data Structures & Algorithms, Python Programming, Operating Systems, Database Management Systems, Software Engineering, Web Development, Computer Networks, Automata Theory, Introduction to Artificial Intelligence, Cloud Computing, Machine Learning.'
    },
    {
      degree: 'Grade XI-XII',
      school: 'BASE PU College',
      period: '2020 - 2022',
      description: 'Percentage: 95% (II PUC)'
    },
    {
      degree: 'Grade I-X',
      school: 'Venus International School',
      period: '2010 - 2020',
      description: 'Percentage: 94.8% (ICSE)'
    }
  ]

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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mb-8">
              I'm a passionate Computer Science student with a love for AI, machine learning, and innovative solutions. 
              Currently part of Samsung Innovation Campus Programme, let me tell you about my journey, skills, and what drives me.
            </p>
                         <motion.a
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg"
             >
               <Download className="w-5 h-5 mr-2" />
               Download Resume
             </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
                I'm a dedicated Computer Science student who believes in the power of AI and machine learning to solve real-world problems. 
                With a strong academic background and selection in Samsung Innovation Campus Programme, 
                I've had the privilege of working on diverse projects that have shaped my understanding of both technical and practical applications.
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
                When I'm not coding, you'll find me exploring new AI/ML technologies, working on innovative projects, 
                or participating in technical competitions. I believe in continuous learning and staying 
                updated with the latest advancements in artificial intelligence and machine learning.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-dark-600 dark:text-dark-300">CGPA: 8.72/10</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-dark-600 dark:text-dark-300">Bangalore, India</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-dark-600 dark:text-dark-300">Samsung Innovation Campus Trainee</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">My Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <p>Clean, maintainable code that scales</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <p>User-centered design thinking</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <p>Performance and accessibility first</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <p>Continuous learning and improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              I've developed a diverse skill set that allows me to tackle projects from concept to deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
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

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              My professional journey has been filled with exciting challenges and learning opportunities.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg border-l-4 border-primary-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{job.company}</p>
                  </div>
                  <div className="flex items-center text-dark-500 dark:text-dark-400 mt-2 md:mt-0">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {job.period}
                  </div>
                </div>
                <p className="text-dark-600 dark:text-dark-300 mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-dark-600 dark:text-dark-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              My educational background has provided me with a strong foundation in computer science and software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary-600 dark:text-primary-400">{edu.school}</p>
                  </div>
                </div>
                <p className="text-dark-500 dark:text-dark-400 mb-3">{edu.period}</p>
                <p className="text-dark-600 dark:text-dark-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
