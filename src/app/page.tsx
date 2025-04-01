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
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMedium, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { source } from "framer-motion/client";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "To-Do List Application",
      description:
        "created this application for manage the to-dos.From this app user can add the start date and end date for the each todo",
      technologies: ["Next.js", "SpringBoot", "Tailwind CSS", "Mongo DB"],
      image: "/images/8431434_3902898.webp",
      source: "https://github.com/sithum-sandaruwan/To-Do-List.git",
    },
    {
      id: 2,
      title: "Forestry Management System",
      description:
        "I was work in this on trainee front end developer at Plurative company.",
      technologies: ["React", "Nest.js", "Postgres", "Material UI"],
      image: "/images/Forestry Management System Interface.webp",
      source: "https://github.com/Plurative/forestery-management-fe.git",
    },
    {
      id: 2,
      title: "Weather Forecast Application",
      description:
        "From this application users can get the updated weather information",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/images/Weather Forecast Application interface.webp",
      source: "https://github.com/sithum-sandaruwan/Weather_App.git",
    },
  ];

  const experiences = [
    {
      id: 1,
      role: "Trainee Front End Developer",
      company: "Plurative (PVT) LTD",
      period: "Aug 2024 - Feb 2025",
      description:
        "Worked as Frontend developer in real world projects. And also improved the teamworking, analytical thinking skills",
      icon: <Briefcase className="text-blue-400" />,
    },
    {
      id: 2,
      role: "Certified Computer Hardware Technician",
      company: "Metro Computers (PVT) LTD",
      period: "Nov 2021 - Jun 2022",
      description:
        "1-10 employees worked in this company. In this intern period I was got the hands-on experience about the troubleshooting hardware issues about like 30-50 computers and software implementing in the computer",

      icon: <Briefcase className="text-purple-400" />,
    },
  ];

  if (!isClient) {
    return null;
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
                href="https://medium.com/@sithumsandaruwan200123"
                className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
              >
                <FaMedium size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.youtube.com/@NovaTechTalkSithum"
                className="hover:text-blue-400 transition-colors p-2 glass-effect rounded-full"
              >
                <FaYoutube size={24} />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-l from-gray-800 to-blue-950"
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
                <User className="text-blue-400" />
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    I am passionate and driven Full Stack Developer with a
                    strong foundation in Java and modern web technologies. My
                    journey into software development began with a fascination
                    for how software solves real-world problems, and I'm
                    constantly motivated by the opportunity to build impactful
                    and user-friendly applications.
                  </p>
                  <p className="text-gray-300">
                    I'm also currently expanding my knowledge base through a BIT
                    degree at the University of Colombo School of Computing,
                    exploring diverse areas within IT. To further enhance my
                    cloud computing skills and AI/ML knowledge, I am actively
                    engaged with Microsoft Learn and Google Cloud Skills Boost,
                    exploring cloud-based solutions and AI technologies.
                  </p>
                  <p className="text-gray-300">
                    I am currently seeking a Full Stack Developing position.
                    Let's connect! Feel free to reach out to discuss Full Stack
                    Development opportunities, explore innovative technologies,
                    or just connect and share insights.
                  </p>
                </div>

                {/* Updated Tech Stack Section */}
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6 glass-effect"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      My Tech Stack
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-blue-400 mb-2">
                        FRONTEND
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Next.js",
                          "React",
                          "TypeScript",
                          "Tailwind CSS",
                          "HTML/CSS",
                          "Angular",
                        ].map((tech) => (
                          <motion.div
                            key={tech}
                            className="bg-white/5 rounded px-3 py-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-purple-400 mb-2">
                        BACKEND
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Java", "SpringBoot", "Node.js"].map((tech) => (
                          <motion.div
                            key={tech}
                            className="bg-white/5 rounded px-3 py-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-green-400 mb-2">
                        DATABASE
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["MongoDB", "MySQL"].map((tech) => (
                          <motion.div
                            key={tech}
                            className="bg-white/5 rounded px-3 py-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-yellow-400 mb-2">
                        TOOLS & OTHERS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "Postman", "Figma"].map((tech) => (
                          <motion.div
                            key={tech}
                            className="bg-white/5 rounded px-3 py-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Section  */}
      <section
        id="projects"
        className="py-20 px-6 relative overflow-hidden  bg-gradient-to-l  from-gray-800 to-blue-950"
      >
        <div className="max-w-6xl mx-auto relative z-10">
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
              <div className="grid md:grid-cols-3 gap-6">
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
                          href={project.source}
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          whileHover={{ x: 3 }}
                          target="_blank"
                          rel="noopener noreferrer"
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
                  href="https://github.com/sithum-sandaruwan"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  View All Projects <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-l  from-gray-800 to-blue-950"
      >
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
                  title: "Future With Quantum Computing",
                  excerpt:
                    "You can get knowledge about next generation computers",
                  date: "Feb 15, 2025",
                  readTime: "6 min read",
                  tags: ["Quantum Computing", "Next Gen"],
                  source:
                    "https://medium.com/@sithumsandaruwan200123/future-with-quantum-computing-d904b29e7e99",
                },
                {
                  title: "Monolithic Vs Microservice",
                  excerpt:
                    "There are two most commonly used architectures for designing software.",
                  date: "Dec 7, 2024",
                  readTime: "5 min read",
                  tags: ["Software Design", " Architectures", "Beginners"],
                  source:
                    "https://medium.com/@sithumsandaruwan200123/monolithic-vs-microservice-3d47afa14482",
                },
                {
                  title:
                    "Is the Python programming language a good language to use for new programmers..?",
                  excerpt:
                    "Yes, if you are new to programming, you can start learning programming using the Python language. ",
                  date: "Nov 13, 2024",
                  readTime: "5 min read",
                  tags: ["Python", " programming language", "Beginners"],
                  source:
                    "https://medium.com/@sithumsandaruwan200123/is-the-python-programming-language-a-good-language-to-use-for-new-programmers-d76f08cda5f8",
                },
                {
                  title: "What’s the Google Skill Cloud Boost…?",
                  excerpt:
                    "about a learning site of the Google company that I personally use. ",
                  date: "Nov 3, 2024",
                  readTime: "4 min read",
                  tags: ["Google Skill", "Certificates", "Beginners"],
                  source:
                    "https://medium.com/@sithumsandaruwan200123/whats-the-google-skill-cloud-boost-5abd1213db19",
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
                      href={post.source || "#"} // Fallback to '#' if no source exists
                      target="_blank" // Opens in new tab
                      rel="noopener noreferrer" // Security best practice
                      className="text-white font-medium flex items-center gap-1 hover:text-blue-300 transition-colors"
                    >
                      Read Post <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="https://medium.com/@sithumsandaruwan200123"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                View All Blog Posts <BookOpen size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section  */}
      <section
        id="experience"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-l  from-gray-800 to-blue-950"
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
                  href="/experience/experiencepage.tsx"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  View my full experience <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section  */}
      <section
        id="contact"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-l  from-gray-800 to-blue-950"
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
                  I'm currently open for Full Stack Developer position and
                  interesting projects. Feel free to reach out if you'd like to
                  discuss potential collaborations!
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
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-12 px-4 bg-gradient-to-t from-gray-900 to-gray-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sithum Sandaruwan. All rights
                reserved.
              </p>
              <motion.p
                className="text-gray-500 mt-2 text-xs flex items-center justify-center md:justify-start gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <span>Made with</span>
                <span className="text-red-500">❤️</span>
                <span>+</span>
                <span className="text-blue-400">React</span>
                <span>+</span>
                <span className="text-green-400">Next.js</span>
                <span>+</span>
                <span className="text-purple-400">Framer Motion</span>
              </motion.p>
            </div>

            {/* Quick Links */}
            <motion.div className="flex gap-6" whileHover={{ scale: 1.02 }}>
              <motion.a
                href="https://github.com/sithum-sandaruwan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sithum-sandaruwan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="/CV/Sithum_Sandaruwan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
                whileHover={{ y: -3 }}
              >
                <Briefcase size={18} />
                <span className="text-sm">Resume</span>
              </motion.a>
            </motion.div>

            {/*Back-to-Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hidden md:flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition-colors group"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block"
              >
                ↑
              </motion.span>
              Back to Top
            </motion.button>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
