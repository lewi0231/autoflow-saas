import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RiRobotFill } from "react-icons/ri";

const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn(
        "capitalize tracking-tight text-3xl font-bold flex gap-1 items-center cursor-pointer text-primary rounded-xl ",
        className
      )}
      whileHover={{ scale: 1.05 }}
    >
      <RiRobotFill size={28} className="" />
      AutoFlow
    </motion.div>
  );
};

export default Logo;
