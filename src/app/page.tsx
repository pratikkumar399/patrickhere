"use client"
import { SkillBadges } from "@/components/generalUi/skillBadges";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import BlogsSection from "@/components/generalUi/blogsSection";
import image from "../../public/hunterXDev.png";


import Image from "next/image";
import Link from "next/link";


const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
];


export default function Home() {


  return (
    <div>

      {/* Add top padding to avoid nav overlap */}
      <div className="pt-12">
        <div className="flex gap-6 items-center rounded-xl text-white max-w-3xl">

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">pratik </h1>
            <Link href="https://x.com/twtsof_Pratik" target="_blank" className="text-gray-400">@twtsof_Pratik</Link>
            <div>
              <p className="text-gray-300 text-s">Hi! My name is Pratik and I am currently working in a startup as SDE1.
                I love building and working around my ideas.

                Besides that I really love writing technical articles,
                and blogs around my learnings and experiences about life and everything in between.
                I also like to read some fictional novels and watch anime in my free time.
              </p>
            </div>
          </div>
        </div>

        <BlogsSection />

      </div>
    </div>
  );
}
