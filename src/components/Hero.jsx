import profilePic from "../assets/brodie1.png";
import { HERO_TEXT } from "../constants/content";
import { motion } from "motion/react";
import resume from "../assets/resume.pdf";
import { scrollToElementSmoothly } from "../utils";

const container = (offset, delay) => ({
  hidden: { x: offset, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <section id="hero" className="border-b border-primary pb-12">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(-100, 0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl text-white font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Brodie Lucht
            </motion.h1>

            <motion.span
              variants={container(-100, 0.5)}
              initial="hidden"
              animate="visible"
              className="text-hero"
            >
              IT Graduate • Cyber Security • Developer
            </motion.span>

            <motion.span
              variants={container(-100, 0.7)}
              initial="hidden"
              animate="visible"
              className="text-xl mt-2 text-gray"
            >
              Bachelor of Information Technology - GPA: 6.958
            </motion.span>

            <motion.p
              variants={container(-100, 1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 body-md"
            >
              {HERO_TEXT}
            </motion.p>

            <motion.div
              variants={container(-100, 0.9)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-col sm:flex-row gap-sm-c"
            >
              <a
                href={resume}
                download="Brodie_Lucht_Resume.pdf"
                className="rounded-3xl px-6 py-2 border-2 border-[#d1b161] text-[#d1b161] hover:bg-[#d1b161] hover:text-neutral-950 transition"
              >
                Download Resume
              </a>
              <a
                onClick={() => scrollToElementSmoothly("contact")}
                className="cursor-pointer rounded-3xl px-6 py-2 border-2 border-neutral-700 text-neutral-300 hover:bg-neutral-700 transition"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-12">
          <motion.div
            variants={container(100, 1)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <img
              src={profilePic}
              alt="Brodie Lucht"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
