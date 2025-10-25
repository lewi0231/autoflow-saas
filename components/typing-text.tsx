"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const TypingText = ({
  phrase,
  duration = 7,
  className = "",
  ...props
}: {
  phrase: string;
  duration?: number;
  className?: string;
}) => {
  const index = useMotionValue(1);

  const substring = useTransform(() => phrase.substring(0, index.get()));

  useEffect(() => {
    const controls = animate(index, phrase.length, { duration });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <motion.div className={cn("relative")} {...props}>
        <span style={{ visibility: "hidden" }} className="">
          {phrase}
        </span>
        <motion.span className="absolute top-0 left-0">{substring}</motion.span>
      </motion.div>
    </div>
  );
};

export default TypingText;
