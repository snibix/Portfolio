import { motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { FaStripe } from "react-icons/fa";
import {
  SiBootstrap,
  SiKonva,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { Link } from "react-router-dom";
import projectsData from "../data/projetsData.json";
import BorderGlow from "./BorderGlow";

const Projects = () => {
  const techIcons: { [key: string]: React.JSX.Element } = {
    html: <DiHtml5 color="#e34f26" size={40} />,
    css: <DiCss3 color="#1572B6" size={40} />,
    js: <DiJavascript1 color="#f7df1e" size={40} />,
    react: <DiReact color="#61dafb" size={40} />,
    tailwind: <SiTailwindcss color="#38bdf8" size={40} />,
    bootstrap: <SiBootstrap color="#7952b3" size={40} />,
    sass: <SiSass color="#cd6799" size={40} />,
    konvajs: <SiKonva size={40} />,
    nextjs: <SiNextdotjs size={40} />,
    stripe: <FaStripe size={40} />,
  };

  const [showAll, setShowAll] = useState(false);
  // Trier par date décroissante

  const sortedProjects = [...projectsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 4);

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const SlideUp = {
    initial: { opacity: 0, y: -100 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 },
    transition: { duration: 0.8 },
  };

  const SlideDown = {
    initial: { opacity: 0, y: 100 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="container mx-auto px-4 py-10" id="project">
      <motion.h2
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold"
        ref={ref}
        {...SlideUp}
      >
        Mes Projets
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-50"
        ref={ref}
        {...SlideUp}
      >
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            ref={ref}
            {...SlideDown}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
          >
            <BorderGlow
              backgroundColor="#ffffff"
              glowColor="214 80 60"
              colors={["#1d4ed8", "#10b981", "#06b6d4"]}
              borderRadius={16}
              glowRadius={30}
              glowIntensity={1.2}
              coneSpread={20}
              edgeSensitivity={25}
              className="w-full h-full"
            >
              <figure>
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-fill h-full w-full p-5"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>

                <div className="card-actions mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <div
                      key={tech}
                      className="flex items-center content-center"
                    >
                      {techIcons[tech]}
                    </div>
                  ))}
                </div>

                <motion.div className="card-actions justify-center mt-4">
                  <Link
                    to={`/projet/${project.id}`}
                    className="btn text-white bg-gradient-to-r from-blue-600 to-emerald-700 border-none hover:scale-105 hover:shadow-lg hover:shadow-emerald-900/30 transition transform duration-200 ease-out px-10"
                  >
                    Voir plus
                  </Link>
                </motion.div>
              </div>
            </BorderGlow>
          </motion.div>
        ))}
      </motion.div>

      {sortedProjects.length > 4 && (
        <div className="text-center mt-6">
          {!showAll ? (
            <motion.button
              onClick={() => setShowAll(true)}
              className="btn text-white bg-gradient-to-r from-indigo-900 to-blue-950 border-none hover:opacity-90"
              whileHover={{
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Voir plus de projets
            </motion.button>
          ) : (
            <motion.button
              onClick={() => {
                setShowAll(false);

                const section = document.getElementById("project");
                section?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              className="btn text-white bg-gradient-to-r from-indigo-800 to-slate-900 border-none hover:opacity-90"
              whileHover={{
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Voir moins
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
