import { motion } from "motion/react";

const AnimatedLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-60 h-60 relative rounded-full border-10 border-t-10 border-blue-500 border-solid"
      >
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{borderTopColor:"transparent"}}
          className="absolute inset-0 border-10 border-blue-300 border-solid rounded-full m-2"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLoader;
