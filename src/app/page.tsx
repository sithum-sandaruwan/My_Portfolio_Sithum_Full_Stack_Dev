'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="animated-background min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden border-4 border-blue-400/20 glass-effect floating">
              <Image
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
                alt="Your Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 transform translate-x-1/2 glass-effect"
            >
              <Code2 size={24} />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com" 
              className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com" 
              className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:your@email.com" 
              className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User className="text-blue-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300">
                  I'm a passionate developer with expertise in building modern web applications.
                  With a strong foundation in both frontend and backend technologies,
                  I create elegant solutions to complex problems.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                    <div key={tech} className="bg-white/5 rounded px-3 py-1">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code2 className="text-blue-400" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((project) => (
                <div key={project} className="group relative overflow-hidden rounded-lg bg-white/5">
                  <div className="aspect-video w-full relative">
                    <Image
                      src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800`}
                      alt={`Project ${project}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                    <p className="text-gray-400 mb-4">
                      A brief description of the project and the technologies used.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                        <Github size={16} />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-400" />
              Get In Touch
            </h2>
            <div className="bg-white/5 rounded-lg p-8">
              <p className="text-gray-300 mb-6">
                I'm currently open for freelance work and interesting projects.
                Feel free to reach out if you'd like to discuss potential collaborations!
              </p>
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}