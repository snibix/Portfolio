import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { FaStripe } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import {
  SiBootstrap,
  SiKonva,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projetsData.json";
import Carousel from "./Carousel";

type Variants = {};
// Version responsive des icônes selon la taille d'écran
const responsiveTechIcons: {
  [key: string]: (size: number) => React.JSX.Element;
} = {
  html: (size) => <DiHtml5 color="#e34f26" size={size} />,
  css: (size) => <DiCss3 color="#1572B6" size={size} />,
  js: (size) => <DiJavascript1 color="#f7df1e" size={size} />,
  react: (size) => <DiReact color="#61dafb" size={size} />,
  tailwind: (size) => <SiTailwindcss color="#38bdf8" size={size} />,
  bootstrap: (size) => <SiBootstrap color="#7952b3" size={size} />,
  sass: (size) => <SiSass color="#7952b3" size={size} />,
  konvajs: (size) => <SiKonva size={size} />,
  nextjs: (size) => <SiNextdotjs size={size} />,
  stripe: (size) => <FaStripe size={size} />,
};

const ProjectDetail = () => {
  const { id } = useParams<{ readonly id: string }>();

  const refTitle = useRef(null);
  const refTech = useRef(null);
  const refDesc = useRef(null);
  const refObj = useRef(null);
  const refFonc = useRef(null);
  const refDef = useRef(null);
  const refResult = useRef(null);
  const refBtn = useRef(null);

  const isInViewTech = useInView(refTech, { once: true });
  const isInViewDesc = useInView(refDesc, { once: true });
  const isInViewObj = useInView(refObj, { once: true });
  const isInViewFonc = useInView(refFonc, { once: true });
  const isInViewDef = useInView(refDef, { once: true });
  const isInViewResult = useInView(refResult, { once: true });
  const isInViewBtn = useInView(refBtn, { once: true });

  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center mt-10">Projet non trouvé</p>;

  // Nouvelles variantes pour l'animation décalée des icônes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.7,
      rotate: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-10 overflow-hidden">
      {/* Header avec bouton retour */}
      <motion.div
        className="flex sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-[85%] sm:w-120 md:w-[65%] justify-between"
        ref={refTitle}
        initial={{ opacity: 0, y: -100 }}
        animate={isInViewTech ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/#project"
          className="text-blue-500 hover:underline inline-block text-xl self-start sm:self-center"
        >
          <div>
            <HiArrowLeft
              aria-hidden="true"
              size={30}
              className="text-gray-900 hover:text-blue-500 hover:-translate-x-1 hover:scale-105 transition-all duration-250 ease-in-out"
            />
          </div>
        </Link>

        {/* Titre principal */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center sm:text-left text-gray-900">
          {project.title}
        </h1>
      </motion.div>
      {/* Carousel d'images - Version responsive */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Carousel id={project.id} />
        </div>
      </div>

      {/* Technologies utilisées - AVEC ANIMATION DÉCALÉE */}
      <motion.div
        className="mb-6 sm:mb-8 md:mb-10"
        ref={refTech}
        initial={{ opacity: 0, y: -100 }}
        animate={isInViewTech ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6 text-gray-900 text-center">
          Technologies utilisées
        </h2>
        <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
          {/* Grid responsive pour les icônes AVEC ANIMATION DÉCALÉE */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:flex xl:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInViewTech ? "visible" : "hidden"}
          >
            {project.technologies.map((tech: string) => (
              <motion.div
                key={tech}
                variants={iconVariants}
                className="flex justify-center items-center p-2 sm:p-3 md:p-4"
                whileHover={{
                  y: -10,
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    rotate: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.1 },
                }}
              >
                {/* Icônes responsives */}
                <div className="block sm:hidden">
                  {responsiveTechIcons[tech](40)}
                </div>
                <div className="hidden sm:block md:hidden">
                  {responsiveTechIcons[tech](50)}
                </div>
                <div className="hidden md:block lg:hidden">
                  {responsiveTechIcons[tech](60)}
                </div>
                <div className="hidden lg:block xl:hidden">
                  {responsiveTechIcons[tech](65)}
                </div>
                <div className="hidden xl:block">
                  {responsiveTechIcons[tech](70)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Description et contexte */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          ref={refDesc}
          initial={{ opacity: 0, x: -60 }}
          animate={
            isInViewDesc ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
          }
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold mb-4 text-gray-900">
            Description
          </h2>
          <p className="text-gray-700 text-md sm:text-md lg:text-lg">
            {project.longDescription}
          </p>
        </motion.div>
        {project.context && (
          <motion.div
            ref={refDesc}
            initial={{ opacity: 0, x: 100 }}
            animate={
              isInViewDesc ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold mb-4 text-gray-900">
              Contexte
            </h2>
            <p className="text-gray-700 text-md sm:text-md lg:text-lg">
              {project.context}
            </p>
          </motion.div>
        )}
      </div>

      {project.objectif && (
        <motion.div
          className="mb-8"
          ref={refObj}
          initial={{ opacity: 0, y: 100 }}
          animate={isInViewObj ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold mb-4 text-gray-900">
            Objectif
          </h2>
          <p className="text-gray-700 text-md sm:text-md lg:text-lg bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            {project.objectif}
          </p>
        </motion.div>
      )}

      {/* Fonctionnalités */}
      {project.features && project.features.length > 0 && (
        <motion.div
          className="mb-8"
          ref={refFonc}
          initial={{ opacity: 0, y: 100 }}
          animate={isInViewFonc ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold mb-4 text-gray-900">
            Fonctionnalités principales
          </h2>
          <div className="bg-green-50 rounded-lg p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700 text-md sm:text-md lg:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Défis relevés */}
      {project.challenges && project.challenges.length > 0 && (
        <motion.div
          className="mb-8"
          ref={refDef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInViewDef ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold mb-4 text-gray-900">
            Défis relevés
          </h2>
          <div className="bg-orange-50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.challenges.map((challenge: string) => (
                <li key={challenge} className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold mt-1">⚡</span>
                  <span className="text-gray-700 text-md sm:text-md lg:text-lg">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Résultats obtenus */}
      {project.results && project.results.length > 0 && (
        <motion.div
          className="mb-8"
          ref={refResult}
          initial={{ opacity: 0, y: 100 }}
          animate={
            isInViewResult ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold mb-4 text-gray-900">
            Résultats obtenus
          </h2>
          <div className="bg-purple-50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.results.map((result: string) => (
                <li key={result} className="flex items-start space-x-2">
                  <span className="text-purple-500 font-bold mt-1">🎯</span>
                  <span className="text-gray-700 text-md sm:text-md lg:text-lg">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Lien GitHub */}
      <motion.div
        className="w-full text-center"
        ref={refBtn}
        initial={{ opacity: 0, y: 60 }}
        animate={isInViewBtn ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
      >
        <motion.a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg font-medium inline-flex items-center space-x-2"
          whileHover={{
            y: -5,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span>Voir sur plus</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
