"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  BookOpen,
  Award,
  School,
  ArrowRight,
  SunMediumIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMedium } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart functionality and payment processing.",
      technologies: ["Next.js", "Stripe", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Productivity application with drag-and-drop interface and team collaboration.",
      technologies: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
    },
  ];

  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Leading the frontend development team, implementing new features, and improving application performance.",
      icon: <Briefcase className="text-blue-400" />,
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "WebSolutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB.",
      icon: <Briefcase className="text-purple-400" />,
    },
  ];

  if (!isClient) {
    return null; // Return null or a loading state during SSR
  }

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
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <div className="mb-8 relative">
              <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden border-4 border-blue-400/20 glass-effect floating">
                <Image
                  src="/images/MNM_4850.webp"
                  alt="Sithum Sandaruwan"
                  width={160}
                  height={160}
                  priority
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 transform translate-x-1/2 glass-effect"
              >
                <Code2 size={24} />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              I'm Sithum Sandaruwan
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | AI/ML Explorer | Certified Computer
              Hardware Technician
            </p>
            <div className="flex gap-6 justify-center mb-12">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/sithum-sandaruwan"
                className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/sithum-sandaruwan/"
                className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:sithumsandaruwan200123@gmail.com"
                className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://medium.com/@sithumsandaruwan200123"
                className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
              >
                <FaMedium size={24} />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-3000"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatePresence initial={false}>
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
                    I'm a passionate developer with expertise in building modern
                    web applications. With a strong foundation in both frontend
                    and backend technologies, I create elegant solutions to
                    complex problems.
                  </p>
                  <p className="text-gray-300">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/experience"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      View my full experience <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6 glass-effect">
                  <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "Tailwind CSS",
                      "PostgreSQL",
                    ].map((tech) => (
                      <motion.div
                        key={tech}
                        className="bg-white/5 rounded px-3 py-2 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black/30">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatePresence initial={false}>
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
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: project.id * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video w-full relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <motion.a
                          href="#"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          whileHover={{ x: 3 }}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href="#"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          whileHover={{ x: 3 }}
                        >
                          <Github size={16} />
                          Source
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  View All Projects <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-3000"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <BookOpen className="text-blue-400" />
              Latest Blog Posts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Building Modern Web Apps with Next.js",
                  excerpt:
                    "Learn how to create performant web applications using Next.js and React Server Components.",
                  date: "May 15, 2023",
                  readTime: "5 min read",
                  tags: ["Next.js", "React", "Web Development"],
                },
                {
                  title: "AI/ML for Beginners: Getting Started",
                  excerpt:
                    "A beginner's guide to understanding and implementing basic machine learning concepts.",
                  date: "April 28, 2023",
                  readTime: "8 min read",
                  tags: ["AI", "Machine Learning", "Beginners"],
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Link
                      href="/blog"
                      className="text-white font-medium flex items-center gap-1"
                    >
                      Read Post <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                View All Blog Posts <BookOpen size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Experience Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatePresence initial={false}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Briefcase className="text-blue-400" />
                Professional Journey
              </h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: exp.id * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-white/10 rounded-full">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <div className="flex gap-4 items-center text-gray-400 mb-2">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  View my full experience <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-indigo-900/20 to-blue-900/20"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatePresence initial={false}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Mail className="text-blue-400" />
                Get In Touch
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <p className="text-gray-300 mb-6">
                  I'm currently open for freelance work and interesting
                  projects. Feel free to reach out if you'd like to discuss
                  potential collaborations!
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="mailto:sithumsandaruwan200123@gmail.com"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail size={20} />
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/sithum-sandaruwan/"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/sithum-sandaruwan"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={20} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
