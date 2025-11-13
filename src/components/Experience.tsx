import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Experiences() {
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
    <div className="bg-white" id="experience">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 shadow-2xl">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] -translate-y-1/2 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)] opacity-70"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#8d8cccff" />
                <stop offset={1} stopColor="#c2abbdff" />
              </radialGradient>
            </defs>
          </svg>

          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold"
            ref={ref}
            {...SlideUp}
          >
            Mes Experiences
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 md:gap-12 lg:gap-16 xl:gap-20 overflow-x-hidden">
            <motion.div
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6"
              ref={ref}
              {...SlideLeft}
            >
              <h3 className="text-sm md:text-2xl lg:text-3xl font-semibold tracking-tight text-white leading-tight">
                Développeur Web (CDD)
                <br />
                <span className="text-purple-300 text-md md:text-xl">
                  Dm-Concept — Metz
                </span>
                <br />
                <span className="text-base text-md md:text-xl text-gray-400 font-normal">
                  Mars 2025 – Septembre 2025
                </span>
              </h3>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mt-4">
                <strong className="text-purple-200">
                  Missions principales :
                </strong>
                <br />
                <strong>- Intégration front-end responsive :</strong>{" "}
                développement de démonstrations clients en CSS responsive,
                optimisant l'expérience utilisateur sur mobile, tablette et
                desktop.
                <br />
                <br />
                <strong>
                  - Développement de configurateur interactif :
                </strong>{" "}
                création d’un outil de personnalisation avec{" "}
                <span className="text-purple-300">React</span>,{" "}
                <span className="text-purple-300">TypeScript</span> et{" "}
                <span className="text-purple-300">Konva.js</span>, permettant
                aux clients de visualiser leurs fenêtres sur mesure en temps
                réel.
                <br />
                <br />
                <strong>- Migration CSS PrestaShop :</strong> adaptation et
                intégration du style de démonstrations clients depuis un
                environnement de démo vers{" "}
                <span className="text-purple-300">PrestaShop production</span>,
                garantissant la cohérence visuelle.
                <br />
                <br />
                <strong>- Personnalisation e-commerce :</strong> intégration et
                optimisation responsive d’une boutique{" "}
                <span className="text-purple-300">PrestaShop</span> (refonte du
                thème, personnalisation de la navigation, corrections CSS).
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6 overflow-x-hidden"
              ref={ref}
              {...SlideRight}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white leading-tight">
                Stage Développeur Web
                <br />
                <span className="text-purple-300 text-md md:text-xl">
                  K-R Barber — Petite-Rosselle
                </span>
                <br />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-normal">
                  Janvier 2023 – Février 2023
                </span>
              </h3>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mt-4">
                <strong className="text-purple-200">
                  Missions principales :
                </strong>
                <br />
                <strong>
                  - Conception et intégration des maquettes :
                </strong>{" "}
                création des interfaces du site vitrine en{" "}
                <span className="text-purple-300">HTML</span>,{" "}
                <span className="text-purple-300">CSS</span> et Responsive
                Design pour offrir une expérience utilisateur optimale sur tous
                les supports.
                <br />
                <br />
                <strong>
                  - Développement de fonctionnalités interactives :
                </strong>{" "}
                mise en place d’un système de réservation en ligne et d’un
                back-office pour la gestion des contenus.
                <br />
                <br />
                <strong>
                  - Adaptation et intégration front-end/back-end :
                </strong>{" "}
                connexion des pages à la base de données et intégration des
                fonctionnalités full-stack pour un site pleinement opérationnel.
                <br />
                <br />
                <strong>- Gestion de projet client :</strong> ajustement du site
                selon les besoins et retours du salon, en respectant les
                contraintes d’un projet réel.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
