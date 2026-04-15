import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Variants = {};
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 },
    transition: { duration: 0.8 },
  };

  // Variantes pour le conteneur des icônes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Variantes pour chaque icône
  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const icons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "logo-Html",
      title: "HTML",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "logo-Css",
      title: "CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "logo-js",
      title: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "Logo-Ts",
      title: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      alt: "logo-php",
      title: "PHP",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      alt: "logo-mysql",
      title: "MySQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "logo-react",
      title: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      alt: "Logo-Nextjs",
      title: "Jextjs",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
      alt: "logo-react-router",
      title: "React-Router",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      alt: "Logo-Sass",
      title: "Sass",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      alt: "logo-bootstrap",
      title: "Bootstrap",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "logo-tailwinds",
      title: "Tailwinds",
    },

    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "logo-github",
      title: "Github",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      alt: "Logo-figma",
      title: "Figma",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      alt: "Logo-VsCode",
      title: "Vs Code",
    },
  ];

  return (
    <motion.section
      className="bg-white pb-20 pt-15"
      id="skills"
      ref={ref}
      {...fadeInUp}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold">
          Mes Compétences
        </h2>

        <motion.div
          className="mx-auto mt-15 grid max-w-lg grid-cols-4 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {icons.map((icon) => (
            <motion.img
              key={icon.title}
              src={icon.src}
              className="w-20 mx-auto"
              alt={icon.alt}
              title={icon.title}
              variants={iconVariants}
              whileHover={{
                y: -8,
                scale: 1.1,
                rotate: [0, -3, 3, 0],
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
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
