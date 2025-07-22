"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Learn from Experts",
    description:
      "Get trained by professional musicians and experienced instructors who have performed on national and international stages. Our personalized mentorship helps you grow in technique, style, and confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1521337706264-a414f153a5ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNpbmdlcnN8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live practice session"
        />
      </div>
    ),
  },
  {
    title: "Live Practice Sessions",
    description:
      "Participate in interactive live sessions with your mentors and batchmates. Play, perform, and improve together in real time. Whether it’s vocals, instruments, or theory — experience music as it happens.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1521417531039-75e91486cc40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbmdlcnN8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live practice session"
        />
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Access recordings of your lessons, receive structured feedback, and measure your progress through milestones. Stay in tune with your growth and master your craft with clarity and purpose.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1620398155783-00a7906bade5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHNpbmdlcnN8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live practice session"
        />
      </div>
    ),
  },
  {
    title: "Perform & Showcase",
    description:
      "Take the stage in academy recitals, open mic nights, and digital showcases. Build confidence, gain exposure, and enjoy the thrill of live performance — whether online or onstage.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1542749777-399a1d3e59de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live practice session"
        />
      </div>
    ),
  },
];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
