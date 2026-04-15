import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import data from "../data/projetsData.json";

type Props = {
  id: number;
};

export default function Carousel({ id }: Props) {
  const project = data.find((p) => p.id === id);
  const projectImg = project ? project.images : [];
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="carousel w-full"
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="carousel w-full py-10">
        {projectImg.map((image, index) => (
          <div
            key={image}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-50 md:h-100"
          >
            <img
              src={image}
              className="w-full object-contain"
              alt={`slide-${index}`}
            />

            {projectImg.length > 1 && (
              <div className="absolute left-2 right-2 sm:left-2 sm:right-2 md:left-1 md:right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? projectImg.length : index}`}
                  className="bg-white rounded-full p-2 sm:p-3 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                >
                  <BiChevronLeft
                    size={30}
                    className="sm:w-[50px] sm:h-[50px] text-gray-800"
                  />
                </a>
                <a
                  href={`#slide${
                    index + 2 > projectImg.length ? 1 : index + 2
                  }`}
                  className="bg-white rounded-full p-2 sm:p-3 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                >
                  <BiChevronRight
                    size={30}
                    className="sm:w-[50px] sm:h-[50px] text-gray-900"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
