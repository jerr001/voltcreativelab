export default function Academy() {
  return (
    <main>
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Volt Academy
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Empowering the next generation of tech talent through hands-on
          learning, mentorship, and real-world projects.
        </p>
        <div className="mb-10 bg-[#232046] rounded-2xl shadow-lg p-8 text-white transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl animate-hero-fadein">
          <h2 className="text-2xl font-bold mb-4 text-[#a259ff]">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 text-white/90 mb-4">
            <li>Web Development Training (Frontend & Full-stack tracks)</li>
            <li>Mentorship from experienced professionals</li>
            <li>Practical, project-based learning</li>
            <li>Career guidance and support</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#a259ff]">
            How to Join
          </h2>
          <p className="text-white/90 mb-4">
            Interested in joining Volt Academy? Contact us to learn about
            upcoming cohorts, programs, and how you can get started on your tech
            journey.
          </p>
        </div>
      </section>
    </main>
  );
}
