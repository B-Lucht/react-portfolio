import { motion } from "motion/react";

import { RiReactjsLine, RiNodejsLine, RiJavaFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPython, SiLinux } from "react-icons/si";

export const TECHNOLOGIES = [
  {
    icon: <RiNodejsLine className="text-6xl text-green-600" />,
    label: "Node.js",
  },
  { icon: <SiPython className="text-6xl text-yellow-500" />, label: "Python" },
  { icon: <RiJavaFill className="text-6xl text-red-500" />, label: "Java" },
  {
    icon: <RiReactjsLine className="text-6xl text-cyan-400" />,
    label: "React",
  },
  { icon: <SiMongodb className="text-6xl text-green-400" />, label: "MongoDB" },
  { icon: <SiMysql className="text-6xl text-blue-600" />, label: "MySQL" },
  { icon: <SiLinux className="text-6xl text-orange-400" />, label: "Linux" },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <section id="technologies" className="border-b  border-primary pb-24">
      <h3 className="my-20 text-center">Technologies</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {TECHNOLOGIES.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index * 0.2)}
            initial="initial"
            animate="animate"
            title={tech.label}
            className="rounded-xl border border-neutral-700 p-4 hover:scale-105 transition-transform"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Technologies;
