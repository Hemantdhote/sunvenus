import { useState } from "react";

interface Props {
  label: string;
  type?: string;
}

const LuxInput = ({ label, type = "text" }: Props) => {
  const [value, setValue] = useState("");
  const isActive = value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="lux-input peer"
      />

      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none
        ${isActive
          ? "-top-3 text-xs text-gold bg-black px-3 rounded-md py-1"
          : "top-1/2 -translate-y-1/2 text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default LuxInput;
