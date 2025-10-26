"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const CountAnimation = ({
  value,
  doRound = true,
  duration = 5,
  startValue = 0,
  ...props
}: {
  value: number;
  doRound?: boolean;
  duration: number;
  startValue?: number;
}) => {
  const count = useMotionValue(startValue);
  const rounded = useTransform(() => {
    return doRound
      ? Math.round(count.get())
      : Math.round(count.get() * 10) / 10;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className=" h-full" {...props}>
      {rounded}
    </motion.span>
  );
};

export default CountAnimation;
