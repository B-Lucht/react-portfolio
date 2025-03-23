import profilePic from "../assets/brodie1.png";
import { HERO_TEXT } from "../constants/content";
import { motion } from "motion/react";
import resume from "../assets/resume.pdf";

const container = (offset, delay) => ({
  hidden: { x: offset, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-centerlg:items-start">
            <motion.h1
              variants={container(-100, 0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Brodie Lucht
            </motion.h1>

            <motion.span
              variants={container(-100, 0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-[#d1b161] via-[#c9ba75] to-[#f3f0a7] bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.span
              variants={container(-100, 0.7)}
              initial="hidden"
              animate="visible"
              className="text-xl mt-2 text-neutral-400"
            >
              B.IT (Cyber Security) - GPA: 6.958
            </motion.span>

            <motion.p
              variants={container(-100, 1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6"
            >
              {HERO_TEXT}
            </motion.p>

            <motion.a
              variants={container(-100, 1)}
              initial="hidden"
              animate="visible"
              href={resume}
              download="Brodie_Lucht_Resume.pdf"
              className="mt-4 md:w-1/2 inline-block rounded-3xl py-2 border-4 border-[#d1b161] text-center text-[#d1b161] transition hover:bg-[#d1b161] hover:text-neutral-950"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container(100, 1.5)}
              initial="hidden"
              animate="visible"
              src={profilePic}
              alt="Brodie Lucht"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
