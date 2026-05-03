import { NextResponse } from "next/server";

const testimonials = [
  {
    name: "Pastor John Adebayo",
    feedback: "Volt Creative Lab transformed our church's online presence. The website is beautiful and user-friendly, and our congregation loves the sermon archive feature.",
    role: "Senior Pastor, Grace Point Church"
  },
  {
    name: "Sarah Okafor",
    feedback: "The branding work for my business was exceptional. They captured our vision perfectly and created materials that truly represent our brand.",
    role: "CEO, Regal Crest Enterprises"
  },
  {
    name: "Michael Johnson",
    feedback: "As an author, I was impressed by their publishing services. They helped me from manuscript to published book, including a professional website.",
    role: "Author, 'Print Your Own Money'"
  },
  {
    name: "Rev. Emmanuel Nwosu",
    feedback: "The Church Digital Launch System was exactly what we needed. In just 7 days, we had a professional website with online giving and visitor connection.",
    role: "Lead Pastor, Revival Assembly"
  },
  {
    name: "Adaeze Chukwu",
    feedback: "The web development training at Volt Academy was life-changing. I went from no coding experience to building full websites. Highly recommend!",
    role: "Volt Academy Graduate"
  },
  {
    name: "David Thompson",
    feedback: "Outstanding graphic design work for our conference flyers. Professional, creative, and delivered on time. Will definitely work with them again.",
    role: "Event Coordinator, Faith Possibilities Conference"
  }
];

export async function GET() {
  return NextResponse.json(testimonials);
}