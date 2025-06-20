import aboutImg from "../assets/brodie2.jpg";
import { ABOUT_TEXT } from "../constants/content";
import { motion } from "motion/react";

const container = (offset, delay) => ({
  hidden: { x: offset, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const About = () => {
  return (
    <section id="about" className="border-b border-primary pb-12">
      <h3 className="my-20 text-center">About Me</h3>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-md-c">
        {/* Image Block */}
        <motion.div
          variants={container(-100, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full lg:w-1/2 p-sm-c"
        >
          <img
            src={aboutImg}
            alt="Brodie Lucht Portrait"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          variants={container(100, 0.5)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 px-6"
        >
          <div className="body-lg leading-relaxed whitespace-pre-line">
            {ABOUT_TEXT}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
