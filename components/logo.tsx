import { motion } from "framer-motion";
import { RiRobotFill } from "react-icons/ri";

const Logo = () => {
  return (
    <motion.div
      className="capitalize tracking-tight text-3xl font-bold flex gap-1 items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <RiRobotFill size={28} />
      AutoFlow
    </motion.div>
  );
};

export default Logo;
