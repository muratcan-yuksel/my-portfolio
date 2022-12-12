import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border [#33333] rounded-full h-[200px] w-[200px] mt-52  opacity-20 animate-ping" />
      <div className="absolute border [#33333] rounded-full h-[300px] w-[300px] mt-52  opacity-20" />
      <div className="absolute border [#33333] rounded-full h-[500px] w-[500px] mt-52  opacity-20 " />
      <div className="absolute border rounded-full border[#F7AB0A] opacity-20 mt-52 h-[650px] w-[650px] animate-pulse" />
      <div className="absolute border rounded-full border[#33333] mt-52 h-[800px] w-[800px]   opacity-20 " />
    </motion.div>
  );
};

export default BackgroundCircles;
