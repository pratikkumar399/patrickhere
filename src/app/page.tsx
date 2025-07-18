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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div>

      {/* Add top padding to avoid nav overlap */}
      <div className="pt-12">
        <div className="flex gap-6 items-center rounded-xl  text-white max-w-3xl">
          <Image
            src={image}
            alt="avatar"
            className="w-[100] h-[100] rounded-xl shadow-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">pratik Here</h1>
            <p className="text-gray-400">@twtsof_Pratik</p>
            <p className="text-gray-300">🚀 building future with tech.</p>
            <p className="text-gray-300">✍️ Writing blogs & building cool projects.</p>
            <p className="text-gray-300">📖 Fiction fan & curious learner.</p>
          </div>
        </div>


        <div className="pt-4">
          <h3 className='text-xl pb-2 underline' >my tech stack</h3>
          {
            techStack.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))
          }
        </div>


        <BlogsSection />
        {/* <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <BlogsSection />
        </motion.div> */}
      </div>
    </div>
  );
}
