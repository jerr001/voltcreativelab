import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Church Digital Launch System | Volt Creative Lab",
  description:
    "Launch your church's digital presence in 7 days with a professional website, sermon archive, visitor connection system, and online giving. Built with ministry understanding.",
  keywords: [
    "church website",
    "church digital presence",
    "church online",
    "church website design",
    "sermon archive",
    "church giving platform",
    "visitor connection",
    "ministry digital solutions",
  ],
};

// Constants
const WHATSAPP_LINK =
  "https://wa.me/2348143529665?text=I%20would%20like%20to%20request%20a%20demo%20of%20the%20Church%20Digital%20Launch%20System";

export default function ChurchPage() {
  return (
    <main className="w-full bg-[#0d0818]">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden px-4">
        {/* Subtle background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-30">
          <div
            className="absolute left-1/2 top-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#a259ff] blur-3xl rounded-full"
            style={{ transform: "translate(-60%, -50%)" }}
          />
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-white animate-hero-fadein">
            Launch Your Church&apos;s Digital Presence in{" "}
            <span className="text-[#a259ff]">7 Days</span>
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl text-white/80 mb-8 animate-hero-fadein delay-150">
            We help churches build a professional online presence with a modern
            website, sermon archive, visitor connection system, and online
            giving setup.
          </p>

          <p className="text-base sm:text-lg text-white/70 mb-10 italic animate-hero-fadein delay-300">
            &ldquo;Built with ministry understanding and a focus on
            excellence.&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-hero-fadein delay-450">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#a259ff] text-white font-bold rounded-lg hover:bg-[#8b47d9] transition-all duration-300 hover:shadow-lg text-center sm:text-base text-lg"
            >
              Request a Demo on WhatsApp
            </a>
            <Link
              href="/church#demo"
              className="px-8 py-4 bg-white/10 border border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 text-center sm:text-base text-lg"
            >
              View Demo Websites
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-white text-center">
          Many churches are doing powerful work, but their digital presence is
          weak.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1530] rounded-lg p-6 border border-[#a259ff]/20 hover:border-[#a259ff]/40 transition-all">
            <h3 className="text-lg font-bold text-[#a259ff] mb-3">
              Visitors Can&apos;t Find You Online
            </h3>
            <p className="text-white/80">
              People searching for your church on Google or social media
              don&apos;t find a professional, welcoming presence. You&apos;re
              missing opportunities to connect with your community.
            </p>
          </div>

          <div className="bg-[#1a1530] rounded-lg p-6 border border-[#a259ff]/20 hover:border-[#a259ff]/40 transition-all">
            <h3 className="text-lg font-bold text-[#a259ff] mb-3">
              Sermons Are Hard to Access
            </h3>
            <p className="text-white/80">
              Members miss messages and visitors have no way to revisit sermons.
              Powerful content is lost after Sunday service.
            </p>
          </div>

          <div className="bg-[#1a1530] rounded-lg p-6 border border-[#a259ff]/20 hover:border-[#a259ff]/40 transition-all">
            <h3 className="text-lg font-bold text-[#a259ff] mb-3">
              Events & Announcements Are Scattered
            </h3>
            <p className="text-white/80">
              Information lives on Facebook, WhatsApp, and bulletin boards.
              Members miss important updates, and newcomers don&apos;t know
              what&apos;s happening.
            </p>
          </div>

          <div className="bg-[#1a1530] rounded-lg p-6 border border-[#a259ff]/20 hover:border-[#a259ff]/40 transition-all">
            <h3 className="text-lg font-bold text-[#a259ff] mb-3">
              First-Time Visitors Have No Clear Path
            </h3>
            <p className="text-white/80">
              New people don&apos;t know how to stay connected after their first
              visit. You&apos;re losing potential members because the connection
              isn&apos;t easy.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#1a1530] rounded-lg p-6 border border-[#a259ff]/20 hover:border-[#a259ff]/40 transition-all">
            <h3 className="text-lg font-bold text-[#a259ff] mb-3">
              Your Online Presence Doesn&apos;t Reflect Your Ministry&apos;s
              Excellence
            </h3>
            <p className="text-white/80">
              You invest in wonderful teaching, worship, and community care—but
              your online presentation doesn&apos;t communicate that excellence.
              Visitors form first impressions from what they see online.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white text-center">
          What&apos;s Included
        </h2>
        <p className="text-center text-white/70 mb-16 text-lg">
          Everything structured to be simple, clear, and useful for real
          ministry work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Modern Church Website",
              desc: "Professional, welcoming homepage that showcases your ministry",
            },
            {
              title: "Sermon Archive Page",
              desc: "Easy access to past sermons for members and visitors",
            },
            {
              title: "Events & Announcements",
              desc: "Centralized place for all church calendar and updates",
            },
            {
              title: "Online Giving Integration",
              desc: "Simple, secure giving system for digital contributions",
            },
            {
              title: "First-Time Visitor Form",
              desc: "Capture visitor information to follow up and connect",
            },
            {
              title: "WhatsApp Follow-Up Link",
              desc: "Direct messaging system to stay connected with your community",
            },
            {
              title: "Basic SEO Setup",
              desc: "Help your church get found online by people in your area",
            },
            {
              title: "Admin Guidance",
              desc: "Simple walkthrough for managing and updating your site",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1530] rounded-lg p-6 border border-white/10 hover:border-[#a259ff]/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-[#a259ff] mb-2">
                {item.title}
              </h3>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO WEBSITES SECTION */}
      <section id="demo" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white text-center">
          See Demo Church Websites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Grace Point Church",
              desc: "Professional church website with modern design, sermon archive, events, and visitor connection",
              demo: "https://grace-point-church.vercel.app",
            },
            {
              name: "Revival Assembly",
              desc: "Community-focused design highlighting events, giving, and member engagement",
              demo: "https://demo-revival-assembly.example.com",
            },
          ].map((demo, idx) => (
            <div
              key={idx}
              className="bg-[#1a1530] rounded-lg overflow-hidden border border-white/10 hover:border-[#a259ff]/40 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {demo.name}
                </h3>
                <p className="text-white/70 mb-6">{demo.desc}</p>
                <a
                  href={demo.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#a259ff] text-white font-semibold rounded-lg hover:bg-[#8b47d9] transition-all duration-300"
                >
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY VOLT SECTION */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white text-center">
          Why Churches Choose Volt Creative Lab
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "We Understand Ministry Context",
              desc: "We're not just designers - we understand how churches work, what pastors need, and how to build systems that actually serve your community.",
            },
            {
              title: "Focus on Clean, Excellent Design",
              desc: "Your website should reflect the excellence and care in your ministry. We build sites that are beautiful, professional, and trustworthy.",
            },
            {
              title: "Simplicity & Clarity First",
              desc: "We avoid unnecessary complexity. Every feature serves a purpose. Your team can manage and update the site with ease.",
            },
            {
              title: "Focused on Real Results",
              desc: "We care about helping your church reach people, connect visitors, and strengthen your community. That&apos;s what success looks like.",
            },
            {
              title: "Practical Setup, Not Over-Engineering",
              desc: "You get what you need - no bloated systems or expensive features you'll never use. Pure functionality for ministry.",
            },
            {
              title: "Partnership Mindset",
              desc: "We&apos;re here to serve your vision. We listen to understand your unique culture, values, and goals.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#a259ff]/20">
                  <svg
                    className="h-6 w-6 text-[#a259ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white text-center">
          Simple 3-Step Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-[#a259ff]/20"></div>

          {[
            {
              num: "1",
              title: "Consultation",
              desc: "We listen to understand your church&apos;s vision, values, and goals. We learn about your community and ministry.",
            },
            {
              num: "2",
              title: "Setup & Customization",
              desc: "We build your website with your church&apos;s branding, content, and customization. You&apos;ll be part of the process.",
            },
            {
              num: "3",
              title: "Launch & Guidance",
              desc: "We launch your site and walk your team through managing it. You&apos;ll have a simple system that&apos;s easy to maintain.",
            },
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <div className="relative z-10 bg-[#1a1530] rounded-lg p-8 text-center border border-white/10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#a259ff] text-white font-bold text-2xl mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="bg-[#1a1530] rounded-lg p-8 md:p-12 border border-[#a259ff]/30">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Currently Onboarding a Few Churches
          </h2>
          <p className="text-lg text-white/80 text-center leading-relaxed">
            We take on a limited number of churches to ensure each one gets the
            personalized attention and quality it deserves. We&apos;re carefully
            scheduling onboarding to maintain the high standard of our work and
            give your church the support it needs for a successful launch.
          </p>
          <p className="text-center text-white/60 mt-6 italic">
            Ready to strengthen your church's digital presence? Let's talk about
            what's right for your ministry.
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Strengthen Your Church&apos;s Digital Presence?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s help your ministry present itself excellently online and
            make it easier for people to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#a259ff] text-white font-bold rounded-lg hover:bg-[#8b47d9] transition-all duration-300 hover:shadow-lg text-lg sm:text-base text-center"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white/10 border border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg sm:text-base text-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* SPACING */}
      <div className="h-10"></div>
    </main>
  );
}
