import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Porsche",
  "Lamborghini",
  "Ferrari",
  "Bentley",
  "Rolls-Royce",
];

const Brands = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const ctx = gsap.context(() => {
      const width = marquee.scrollWidth / 2;

      gsap.set(marquee, { x: -width });

      gsap.to(marquee, {
        x: 0,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="brands" className="relative overflow-hidden bg-background py-32">
      {/* GRADIENT FADE EDGES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* TITLE */}
      <div className="text-center mb-20">
        <span className="inline-block px-6 py-2 rounded-full bg-gold/10 text-gold text-xs tracking-[0.3em] uppercase mb-6">
          Trusted Partners
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-sans">
          Brands We Offer
        </h2>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max gap-24 px-12"
        >
          {[...brands, ...brands].map((brand, i) => (
            <div className="flex items-center justify-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 12 12"
                className="fill-gold opacity-80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="6"
                  height="6"
                  transform="rotate(45 6 6)"
                />
              </svg>

              <span
                key={i}
                className="
                text-3xl md:text-4xl lg:text-5xl
                font-light uppercase
                tracking-[0.4em]
                text-muted-foreground
                hover:text-gold
                transition-colors duration-500
                whitespace-nowrap
              "
              >
                {brand}
              </span>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;