import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";
import SoftAurora from "./SoftAurora";
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
      <div className="absolute inset-0 -z-10">
        <SoftAurora
          speed={0.6}
          scale={1.8}
          brightness={0.75}
          color1="#1d4ed8"
          color2="#10b981"
          noiseFrequency={2.0}
          noiseAmplitude={0.8}
          bandHeight={0.5}
          bandSpread={1.2}
          octaveDecay={0.15}
          layerOffset={0.8}
          colorSpeed={0.6}
          enableMouseInteraction
          mouseInfluence={0}
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
            Développeur Front-end React spécialisé en React & Next.js
            <br /> Expérience en agence, freelance, et SaaS personnel en
            production.
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
