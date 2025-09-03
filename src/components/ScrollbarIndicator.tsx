import { motion, useScroll, useTransform } from "motion/react";

const ScrollbarIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[200vh] p-[w0px]">
      {/* Red Line */}
      <motion.div
        className="fixed top-0 left-0 h-[6px] bg-teal-500 rounded-sm"
        style={{
          width: lineWidth,

          transition: "width 0.1s ease",
        }}
      />

      {/* Random Text */}

      <div className="mt-[50px]">
        {[...Array(100)].map((_, index) => (
          <p key={index} className=" mt-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            quam nemo doloremque, tempora soluta excepturi tempore minima modi
            quis sit dignissimos, delectus voluptas architecto iusto mollitia
            nobis laudantium alias atque?
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollbarIndicator;
