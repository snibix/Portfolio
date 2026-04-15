import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const SlideUp = {
    initial: { opacity: 0, y: -60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 },
    transition: { duration: 0.8 },
  };

  const SlideRight = {
    initial: { opacity: 0, x: 60 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 },
    transition: { duration: 0.8 },
  };

  const SlideLeft = {
    initial: { opacity: 0, x: -60 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 },
    transition: { duration: 0.8 },
  };
  return (
    <div className="bg-white" id="training">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 shadow-2xl  overflow-x-hidden">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
          >
            <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#1d4ed8] to-[#10b981] opacity-20" />
          </div>
          <motion.h2
            {...SlideUp}
            ref={ref}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold"
            id="training"
          >
            Mes Formations
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            <motion.div
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6 overflow-x-hidden"
              ref={ref}
              {...SlideLeft}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-balance text-white leading-tight">
                Développeur Concepteur Logiciel <br />
                <span className="text-blue-400">OpenClassRooms</span> <br />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-normal">
                  10/2023 - 12/2024
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty text-gray-300">
                Formation pratique centrée sur le développement front-end, avec
                14 projets progressifs permettant une montée en compétences
                complète. Le parcours débute par des bases en HTML et CSS, se
                focalise ensuite sur JavaScript pour établir une expertise
                solide, et aboutit à une maîtrise de React. Cette approche
                structurée m'a permis de développer des applications
                interactives et performantes, en consolidant mes compétences en
                programmation, gestion de données et conception d'interfaces
                dynamiques.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6"
              ref={ref}
              {...SlideRight}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-balance text-white leading-tight">
                Développeur Web <br />
                <span className="text-blue-400">CCI CAMPUS</span> <br />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-normal">
                  10/2023 - 12/2024
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty text-gray-300">
                Formation de 11 mois, axée sur les fondamentaux du développement
                web avec des langages et technologies essentiels : HTML, CSS,
                JavaScript, PHP et MySQL. Durant cette formation, j'ai réalisé
                trois projets pratiques, renforçant mes compétences techniques
                et mon esprit de conception : un projet fil rouge permettant
                d'approfondir progressivement les acquis, un site e-commerce
                complet, et un site de suite au stage.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
