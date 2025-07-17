"use client"
import { SkillBadges } from "@/components/generalUi/skillBadges";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import BlogsSection from "@/components/generalUi/blogsSection";
import Image from "next/image";
import image from "../../public/hunterXDev.png";
import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";


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
