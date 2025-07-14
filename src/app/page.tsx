"use client"
import { SkillBadges } from "@/components/generalUi/skillBadges";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import BlogsSection from "@/components/generalUi/blogsSection";
import Image from "next/image";
import image from "../../public/hunterXDev.png";


export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div>
      {/* Glassmorphic Fixed Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-2xl rounded-3xl border border-white/30 bg-white/10 backdrop-blur-lg flex items-center justify-between px-4 py-2">

        <div className="flex items-center gap-2  py-2 rounded-2xl  ">
          {/* Placeholder for icon */}
         
          <span className="font-bold text-xl text-blue-300">Pratik Rai</span>
        </div>
        {/* Center: Nav Links */}
        <ul className="flex gap-8" >
          <li>
            <a href="#" className="font-semibold text-lg text-white/90 hover:text-blue-200 transition-colors">About</a>
          </li>
          <li>
            <a href="#" className="font-semibold text-lg text-white/90 hover:text-blue-200 transition-colors">Blog</a>
          </li>
          <li>
            <a href="#" className="font-semibold text-lg text-white/90 hover:text-blue-200 transition-colors">Projects</a>
          </li>
          
        </ul>
      
      </nav>
      {/* Add top padding to avoid nav overlap */}
      <div className="pt-28">
        <div className="flex  md:flex-row gap-4 items-center rounded-[12px]   ">
          <div>
            <Image className="h-[250px] w-[250px] object-cover rounded-[8px]" src={image} alt="profile-image" />
          </div>
          <div>
            <p className='text-4xl font-bold'>Hey , I'm PratikRai 👋</p>
            <p className='text-l pt-4 text-gray-400'>
              Software developer.
              <br />
              I love writing blogs and creating projects out of my ideas.
              <br />
              I love reading fictional novels.
            </p>
          </div>

        </div>

        <div className="pt-4">
          <h3 className='text-xl pb-2' >Skills</h3>
          <SkillBadges />
        </div>

        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
}
