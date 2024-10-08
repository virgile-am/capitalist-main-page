import React from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView

const ProductShowcase = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-white relative">
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="/irrgiation.png"
          alt="Solar Panels"
          className="w-96 h-3/4 object-cover border absolute right-4 mt-40"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto py-8 font-custom px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          MODERN AGRICULTURE
         
          AND RENEWABLE ENERGY
        </motion.h1>
        <motion.p
          className="text-3xl font-custom text-left text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Revolutionizing farming practices with <br /> sustainable energy
          solutions. <br />
          Harnessing solar power for efficient agriculture. <br />
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="flex flex-col  bg-gray-200 p-2 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src="/mainstove.jpeg"
              alt="Solar-Powered Equipment"
              className="w-full h-96 object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-lg font-semibold text-gray-900 text-center">
            ELECTRIC/SOLAR FIRE STOVE
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col   bg-gray-300 p-2 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src="/feederpalletmachine.jpg"
              alt="Renewable Energy Solutions"
              className="w-full h-96 object-cover mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-lg font-semibold text-gray-900 text-center">
           AGRICULTURAL MACHINES
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
