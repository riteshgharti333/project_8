import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import CountUp from "react-countup";

const achievements = [
  {
    title: "Happy Travelers",
    value: 16800,
    description: "Real experiences, real smiles.",
  },
  {
    title: "Custom Tour Packages",
    value: 1100,
    description: "Tailored trips for every explorer.",
  },
  {
    title: "Cities & Destinations Covered",
    value: 75,
    description: "Across India and beyond.",
  },
  {
    title: "24×7 Travel Support",
    value: "24x7",
    description: "Your journey, our constant care.",
  },
  {
    title: "Professional Travel Drivers",
    value: 65,
    description: "Safe, trained, and trusted.",
  },
  {
    title: "Years of Excellence",
    value: 12,
    description: "Experience that speaks.",
  },
];

const Achieve = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-10 bg-primary-color" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
            Our Achievements
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Numbers That Speak
            </span>{" "}
            Our Success
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.1 * index,
                  },
                },
              }}
              className="  overflow-hidden transition-all duration-300"
            >
              <div className=" text-center">
                <div className="relative inline-block mb-2">
                  <div className="absolute inset-0 s rounded-full opacity-20 -z-10 animate-pulse"></div>
                  <div className=" flex items-center justify-center rounded-full mx-auto">
                    {typeof item.value === "number" ? (
                      <CountUp
                        start={0}
                        end={item.value}
                        duration={2.5}
                        delay={0.2 * index}
                        suffix={item.title.includes("Years") ? "+" : "+"}
                        className="text-2xl font-bold text-white"
                      >
                        {({ countUpRef }) => (
                          <span
                            ref={countUpRef}
                            className="text-5xl font-bold text-white"
                          />
                        )}
                      </CountUp>
                    ) : (
                      <span className="text-5xl font-bold text-white">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-medium text-white font-semibold ">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achieve;
