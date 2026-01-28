import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FixedLuxuryScrollProps {
  backgroundImage: string;
  children: ReactNode;
}

export default function FixedLuxuryScroll({
  backgroundImage,
  children,
}: FixedLuxuryScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // subtle luxury parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="relative h-[200vh] w-full">
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 scale-110"
        >
          <img
            src={backgroundImage}
            alt="Luxury Background"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* dark luxury overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* SCROLLING GLASS CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div
          className="
            max-w-6xl w-full
            bg-white/[0.08]
            backdrop-blur-2xl
            border border-white/15
            rounded-3xl
            shadow-[0_40px_120px_rgba(0,0,0,0.7)]
            py-24 px-10
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}
