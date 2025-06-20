import { PROJECTS } from "../constants/content";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="border-b  border-primary pb-24">
      <h3 className="my-20 text-center ">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md-c">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-xl border border-primary overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-48 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain scale-75"
              />
            </div>
            <div className="flex flex-col p-sm-c gap-sm-c">
              <h3 className="body-lg font-semibold mb-2">{project.title}</h3>

              <p className="body-sm mb-4 whitespace-pre-line">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded surface-secondary body-sm font-medium text-[#c9ba75]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent underline hover:text-accent-dark block mb-2"
                >
                  View Project ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
