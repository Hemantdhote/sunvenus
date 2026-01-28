


import { Search, CalendarCheck, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Ideal Car",
    desc: "Browse our premium collection and select a vehicle that suits your style and needs.",
    icon: Search,
    align: "left",
  },
  {
    id: 2,
    title: "Book Easily Online",
    desc: "Complete your reservation through our website with secure and quick payment options.",
    icon: CalendarCheck,
    align: "right",
  },
  {
    id: 3,
    title: "Pick Up or Get Delivery",
    desc: "Enjoy the convenience of car delivery anywhere in the UAE or collect it from our location.",
    icon: Truck,
    align: "left",
  },
  {
    id: 4,
    title: "Enjoy the Drive",
    desc: "Experience effortless luxury and outstanding performance on the road.",
    icon: Truck,
    align: "right",
  },
];

export default function LuxuryStepsSection() {
  return (
    <section
      className="relative w-full py-28 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1642132721290-0821e1c17523?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-24">
          <p className="inline-block px-6 py-2 rounded-full bg-gold/10 text-gold text-xs tracking-[0.3em] uppercase mb-6">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Simple Steps to Rent Your Luxury Car
          </h2>
        </div>

        {/* steps */}
        <div className="relative space-y-20">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-5 ${step.align === "right" ? "flex-row-reverse" : ""
                  }`}
              >
                {/* step number */}
                <div className="text-6xl font-bold text-white/80 min-w-[70px]">
                  {step.id}.
                </div>

                {/* glass card */}
                <div className="relative max-w-md">
                  {/* floating icon */}
                  <div
                    className="absolute -top-5 -left-5 z-10 flex h-12 w-12 items-center justify-center
                               rounded-full bg-[#56575B] backdrop-blur-md
                               border border-white/20 shadow-lg"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* card body */}
                  <div
                    className="
                      relative pl-14 pr-6 py-8
                      bg-white/[0.08]
                      backdrop-blur-2xl
                      border border-white/20
                      shadow-[0_25px_60px_rgba(0,0,0,0.65)]
                      rounded-[22px_22px_22px_22px]
                    "
                  >
                    <h3 className="text-xl font-semibold text-white mb-1 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* inner glass shine */}
                    <div
                      className="pointer-events-none absolute inset-0
                                 rounded-[22px_22px_22px_10px]
                                 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
