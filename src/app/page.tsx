"use client"
import { SkillBadges } from "@/components/generalUi/skillBadges";
import About from "../components/About/about";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div>
      <p className='text-3xl underline'  >pratikRai</p>
      <p className='text-l pt-4'  >
        Hi, I&apos;m Pratik Rai, a software developer.
        <br />
        I love writing blogs and creating projects out of my ideas.
        <br />
        I love reading fictional novels.
      </p>


      <div className="pt-4">
        <h3 className='text-xl pb-2' >Skills</h3>
        <SkillBadges />
      </div>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mx-auto w-fit"
      >
        <About />
      </motion.div>
    </div>
  );
}
