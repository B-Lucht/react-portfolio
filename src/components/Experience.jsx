import { EXPERIENCES } from "../constants/content";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <section id="experience" className="border-b  border-primary pb-24">
      <h3 className="my-20 text-center">Experience</h3>
      <div className="flex flex-col gap-md-c">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col lg:flex-row gap-sm-c border border-neutral-800 p-sm-c rounded-xl hover:shadow-md"
          >
            {/* Left Column (Year) */}
            <div className="w-full lg:w-1/4 body-sm text-icons font-mono">
              {exp.year}
            </div>

            {/* Right Column (Details) */}
            <div className="w-full lg:w-3/4">
              <h4 className="body-lg font-semibold">
                {exp.role}{" "}
                <span className="text-icons font-normal">@ {exp.company}</span>
              </h4>
              <p className="mt-2 body-sm leading-relaxed">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-neutral-900 body-sm font-medium text-[#c9ba75]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
