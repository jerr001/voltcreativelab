"use client";

import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main>
      <section className="max-w-2xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Get a Quote</h1>
        <p className="text-lg text-white/90 mb-6">
          Ready to start your project or need more information? Fill out the
          form below and our team will get back to you soon.
        </p>

        <Suspense fallback={<div className="text-white">Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </section>
    </main>
  );
}
