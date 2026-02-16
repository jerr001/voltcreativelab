export default function Contact() {
  return (
    <main>
      <section className="max-w-2xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Get a Quote</h1>
        <p className="text-lg text-white/90 mb-6">
          Ready to start your project or need more information? Fill out the
          form below and our team will get back to you soon.
        </p>
        <form className="bg-[#232046] rounded-lg shadow p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Name
            </label>
            <input
              id="name"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Email
            </label>
            <input
              id="email"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Phone <span className="text-[#888] font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              type="text"
              placeholder="Phone (optional)"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-[#a259ff]"
            >
              Message
            </label>
            <textarea
              id="message"
              className="border border-[#444] bg-[#18162a] text-white rounded px-4 py-2"
              placeholder="Tell us about your project or request..."
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full mt-2">
            Send Request
          </button>
        </form>
      </section>
    </main>
  );
}
