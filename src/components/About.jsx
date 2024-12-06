import aboutImg from "../assets/brodie2.jpg";
import { ABOUT_TEXT } from "../constants/content";
import { motion } from "motion/react";

const container = (offset, delay) => ({
  hidden: { x: offset, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          variants={container(-100, 0.5)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 pr-4"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        <motion.div
          variants={container(100, 0.5)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
