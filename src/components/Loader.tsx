import { motion, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: 'easeInOut',
      onUpdate: (value) => setProgress(Math.round(value)),
    });

    return () => controls.stop();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.9 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary">
      <div className="text-center">
        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center mb-10">
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-white via-primary to-primary flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.35)]">
            <span className="text-secondary font-serif font-bold text-4xl">S</span>
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <h1 className=" text-3xl md:text-4xl font-bold text-gold mb-2 font-poppins">
          SUN<span className="text-primary ">VENUS</span>
        </h1>
        <p className="text-secondary-foreground/60 text-xs tracking-[0.3em] uppercase">Luxury Car Rental</p>

        {/* PROGRESS */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="text-gold font-sans text-sm tabular-nums">{progress}%</span>

          <div className="relative w-[220px] h-[2px] bg-secondary-foreground/20 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-light via-primary to-primary"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
