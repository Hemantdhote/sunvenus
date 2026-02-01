import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AuthDrawer = ({ isOpen, onClose }: Props) => {
  const [mode, setMode] = useState<"login" | "signup">("login");

useEffect(() => {
  if (isOpen) {
    document.documentElement.style.overflow = "hidden"; // html
    document.body.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };
}, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 h-full w-full sm:w-[460px] z-50
            bg-gradient-to-b from-[#0e0e0e]/95 via-[#0b0b0b]/95 to-black/95
            backdrop-blur-3xl border-l border-gold/20 px-10 py-16 overflow-hidden"
          >
            {/* Soft Gold Glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px]
            bg-gold/10 rounded-full blur-[120px]" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-muted-foreground hover:text-gold transition"
            >
              ✕
            </button>

            {/* Header */}
            <div className="relative mb-14">
              <p className="uppercase tracking-[0.35em] text-[12px] text-muted-foreground">
                SunVenus Luxury
              </p>

              <h2 className="font-sans font-bold text-[32px] mt-4 text-primary">
                {mode === "login" ? "Welcome Back" : "Begin Your Journey"}
              </h2>

              <p className="text-sm text-muted-foreground mt-3 max-w-[280px]">
                Premium access to curated luxury drives and experiences.
              </p>
            </div>

            {/* Forms */}
            <AnimatePresence mode="wait">
              {mode === "login" ? (
                <LoginForm key="login" switchMode={() => setMode("signup")} />
              ) : (
                <SignupForm key="signup" switchMode={() => setMode("login")} />
              )}
            </AnimatePresence>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthDrawer;
