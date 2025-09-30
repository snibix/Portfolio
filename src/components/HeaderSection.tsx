import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";
const SlideIn = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const links = [
  { name: "Mes Compétences", href: "#skills" },
  { name: "Mes Formations", href: "#training" },
  { name: "Mes Projets", href: "#project" },
  { name: "Mes Expériences", href: "#experience" },
  { name: "Mon Github", href: "#git" },
  { name: "Contact", href: "#contact" },
];

export default function HeaderSection() {
  const name = "Jaworski Damien";
  const job = "Développeur Web";

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <motion.div {...SlideIn} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white sm:text-6xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {name.split("").map((char, i) => (
              <motion.span key={i} variants={item}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            <br />

            {job.split("").map((char, i) => (
              <motion.span key={i} variants={item}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Je suis un Développeur web passionné par la création d'applications
            modernes et réactives. Mon parcours en développement web a commencé
            en 2022, après une reconversion professionnelle.
            <br /> J'ai d'abord acquis des compétences en HTML, CSS, JavaScript,
            PHP, MySQL, et Bootstrap, avant de me spécialiser dans le
            développement front-end avec React.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <motion.a
                whileHover={{
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                key={link.name}
                href={link.href}
                className="flex items-center gap-1"
              >
                {link.name}
                <HiArrowRight aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
