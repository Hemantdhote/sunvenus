import { motion } from "framer-motion";
import LuxInput from "./LuxInput";

const LoginForm = ({ switchMode }: { switchMode: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <LuxInput label="Email Address" type="email" />
      <LuxInput label="Password" type="password" />

      <button className="btn-luxury w-full mt-4">
        Continue
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Don’t have an account?{" "}
        <button onClick={switchMode} className="text-gold hover:underline">
          Create one
        </button>
      </p>
    </motion.div>
  );
};

export default LoginForm;
