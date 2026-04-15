import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const SlideDown = {
    initial: { opacity: 0, y: 100 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 0.8 },
  };
  return (
    <motion.div
      className="py-20 px-4 max-w-3xl mx-auto overflow-x-hidden"
      id="contact"
      ref={ref}
      {...SlideDown}
    >
      <h2 className="text-3xl font-semibold text-center mb-4">Contactez-moi</h2>
      <p className="text-center mb-8">
        N&#39;hésitez pas à me contacter pour toute question ou proposition de
        projet !
      </p>
      <div className="flex justify-center">
        <motion.a
          href="mailto:damien.dev2022@gmail.com"
          className="text-white font-semibold py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-950 hover:opacity-90"
          whileHover={{
            y: -3,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Contacter par Email
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
