import { motion } from "motion/react";
import type { ReactNode } from "react";

interface DragableCardProp {
  children: ReactNode;
  style?: React.CSSProperties;
}
const DragableCard = ({ children, style }: DragableCardProp) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -200,
        bottom: 200,
        left: -200,
        right: 200,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{scale:0.9}}
      style={style}
      className="rounded-2xl shadow-lg p-5 m-2 w-52 h-72 flex items-center justify-center text-white text-xl"
    >
      {children}
    </motion.div>
  );
};

export default DragableCard;
