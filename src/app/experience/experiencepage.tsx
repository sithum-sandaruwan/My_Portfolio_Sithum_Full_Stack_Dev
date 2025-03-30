import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-12 text-center">
            My Professional Journey
          </h1>
          {/* You can reuse your experiences array here */}
          <div className="space-y-8">
            {[
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
            ].map((exp) => (
              <div
                key={exp.id}
                className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-full">{exp.icon}</div>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
