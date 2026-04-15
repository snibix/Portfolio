import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideUp = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-white" id="experience">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 shadow-2xl">
          {/* Background SVG */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] -translate-y-1/2 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)] opacity-70"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#8d8cccff" />
                <stop offset={1} stopColor="#c2abbdff" />
              </radialGradient>
            </defs>
          </svg>

          {/* Title */}
          <motion.h2
            ref={ref}
            variants={slideUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold"
          >
            Mes Expériences
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 md:gap-12 lg:gap-16 xl:gap-20 overflow-x-hidden">
            {/* Expérience 1 */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6"
            >
              <h3 className="text-sm md:text-2xl lg:text-3xl font-semibold text-white">
                Développeur Web (CDD)
                <br />
                <span className="text-purple-300">Dm-Concept — Metz</span>
                <br />
                <span className="text-gray-400 font-normal">
                  Mars 2025 – Septembre 2025
                </span>
              </h3>

              <div className="text-gray-300">
                <strong className="text-purple-200">
                  Missions principales :
                </strong>

                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Intégration front-end responsive</li>
                  <li>
                    Configurateur interactif (React, TypeScript, Konva.js)
                  </li>
                  <li>Migration CSS PrestaShop</li>
                  <li>Personnalisation e-commerce</li>
                </ul>
              </div>
            </motion.div>

            {/* Expérience 2 */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6"
            >
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">
                Développeur Web / Intégrateur Front-end (Micro-entrepreneur /
                Freelance)
                <br />
                <span className="text-purple-300">Behren-lès-Forbach</span>
                <br />
                <span className="text-gray-400 font-normal">
                  Décembre 2025 – Aujourd’hui
                </span>
              </h3>

              <div className="text-gray-300">
                <strong className="text-purple-200">
                  Missions principales :
                </strong>

                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Personnalisation de thèmes Shopify</li>
                  <li>Adaptation UI / responsive à partir de maquettes</li>
                  <li>Corrections graphiques et optimisation UX</li>
                  <li>Développement d’un projet SaaS personnel</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
