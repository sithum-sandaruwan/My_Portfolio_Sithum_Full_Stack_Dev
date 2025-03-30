export default function BlogPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-12 text-center">My Blog</h1>
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
              // Add more blog posts here
            ].map((post, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10"
              >
                {/* Blog post card content */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
