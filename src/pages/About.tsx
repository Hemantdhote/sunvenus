import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#fafafa] text-neutral-900">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden mt-20">
        {/* Car Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170')",
          }}
        />

        {/* Half Overlay */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-white/40 backdrop-blur-sm" />
          <div className="w-1/2" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="uppercase tracking-[0.35em] text-[15px] text-white">
                About Us
              </span>

              <h1 className="mt-6 font-[900] text-2xl lg:text-6xl font-sans text-white tracking-[0.15em] uppercase leading-tight">
                Where <span className="italic">Luxury</span>
                <br /> Meets the Road
              </h1>

              <p className="mt-6 text-black leading-relaxed text-2xl max-w-xl">
                We redefine premium mobility by offering an elite collection of
                luxury vehicles crafted for comfort, performance, and prestige.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="relative py-28 overflow-hidden">
        {/* RIGHT SIDE LUXURY VECTOR */}
        <svg
  className="pointer-events-none absolute right-[-140px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.07]"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* Animation definitions */}
    <style>
      {`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .rotate-slow {
          animation: rotate 20s linear infinite;
          transform-origin: 300px 300px;
        }
        .rotate-medium {
          animation: rotate 15s linear infinite reverse;
          transform-origin: 300px 300px;
        }
        .rotate-fast {
          animation: rotate 10s linear infinite;
          transform-origin: 300px 300px;
        }
        .pulse-anim {
          animation: pulse 3s ease-in-out infinite;
        }
        .float-anim {
          animation: float 4s ease-in-out infinite;
        }
      `}
    </style>
  </defs>

  {/* Large outer triangle - slow rotation */}
  <g className="rotate-slow">
    <path
      d="M 300 100 L 480 400 L 120 400 Z"
      stroke="#000"
      strokeWidth="1.5"
      fill="none"
    />
  </g>

  {/* Medium triangle - medium rotation (reverse) */}
  <g className="rotate-medium">
    <path
      d="M 300 160 L 420 360 L 180 360 Z"
      stroke="#000"
      strokeWidth="1.2"
      fill="none"
    />
  </g>

  {/* Inner triangle - fast rotation */}
  <g className="rotate-fast">
    <path
      d="M 300 220 L 360 320 L 240 320 Z"
      stroke="#000"
      strokeWidth="1"
      fill="none"
    />
  </g>

  {/* Center small triangle with pulse */}
  <g className="pulse-anim">
    <path
      d="M 300 260 L 330 300 L 270 300 Z"
      stroke="#000"
      strokeWidth="0.8"
      fill="none"
    />
  </g>

  {/* Decorative corner triangles with float animation */}
  <g className="float-anim">
    <path
      d="M 300 90 L 310 110 L 290 110 Z"
      fill="#000"
      opacity="0.4"
    />
  </g>

  {/* Accent lines connecting triangles */}
  <g className="pulse-anim">
    <line x1="300" y1="100" x2="300" y2="160" stroke="#000" strokeWidth="0.5" opacity="0.5" />
    <line x1="300" y1="220" x2="300" y2="260" stroke="#000" strokeWidth="0.5" opacity="0.5" />
  </g>

  {/* Orbital dots - rotating around center */}
  <g className="rotate-slow">
    <circle cx="300" cy="140" r="3" fill="#000" opacity="0.6" />
  </g>
  <g className="rotate-medium">
    <circle cx="380" cy="300" r="2.5" fill="#000" opacity="0.5" />
  </g>
  <g className="rotate-fast">
    <circle cx="220" cy="300" r="2" fill="#000" opacity="0.4" />
  </g>

  {/* Subtle geometric accents */}
  <g className="pulse-anim">
    <circle cx="300" cy="300" r="80" stroke="#000" strokeWidth="0.4" opacity="0.3" />
    <circle cx="300" cy="300" r="120" stroke="#000" strokeWidth="0.3" opacity="0.2" />
  </g>
</svg>

        <div
          ref={contentRef}
          className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          {/* Left */}
          <div>
            <h2 className="text-6xl lg:text-7xl font-sans font-bold tracking-tight text-zinc-900">
              Driven by
              <span className="block font-light italic text-zinc-400 mt-2">
                Excellence
              </span>
            </h2>

            <p className="text-zinc-500 text-xl leading-relaxed max-w-lg mt-6">
              At our luxury car rental service, we believe every journey should
              be an unforgettable experience. From iconic supercars to
              chauffeur-driven luxury sedans, our fleet is curated for those
              who demand nothing but the finest.
            </p>

            <p className="mt-4 text-zinc-500 text-xl leading-relaxed max-w-lg">
              Whether it’s business, leisure, or a statement arrival — we
              deliver elegance, precision, and unmatched service at every mile.
            </p>
          </div>

          {/* Right – Luxury Stats */}
          <div className="grid grid-cols-2 gap-10">
            {[
              { label: "Luxury Vehicles", value: "50+" },
              { label: "Premium Clients", value: "5K+" },
              { label: "Cities Served", value: "20+" },
              { label: "Years of Excellence", value: "10+" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                <h3 className="text-3xl font-semibold font-sans">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-neutral-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION STRIP ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* LEFT SIDE LUXURY VECTOR */}
        <svg
  className="pointer-events-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.07]"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* Animation definitions */}
    <style>
      {`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
        .rotate-slow {
          animation: rotate 25s linear infinite;
          transform-origin: 300px 300px;
        }
        .rotate-medium {
          animation: rotateReverse 18s linear infinite;
          transform-origin: 300px 300px;
        }
        .rotate-fast {
          animation: rotate 12s linear infinite;
          transform-origin: 300px 300px;
        }
        .pulse-anim {
          animation: pulse 4s ease-in-out infinite;
          transform-origin: 300px 300px;
        }
        .dash-anim {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 8s linear infinite;
        }
        .glow-anim {
          animation: glow 3s ease-in-out infinite;
        }
      `}
    </style>
  </defs>

  {/* Outer hexagon - slow rotation */}
  <g className="rotate-slow">
    <path
      d="M 300 80 L 450 175 L 450 425 L 300 520 L 150 425 L 150 175 Z"
      stroke="#000"
      strokeWidth="1.5"
      fill="none"
    />
  </g>

  {/* Second hexagon - medium reverse rotation */}
  <g className="rotate-medium">
    <path
      d="M 300 130 L 410 200 L 410 400 L 300 470 L 190 400 L 190 200 Z"
      stroke="#000"
      strokeWidth="1.3"
      fill="none"
    />
  </g>

  {/* Third hexagon - fast rotation */}
  <g className="rotate-fast">
    <path
      d="M 300 180 L 370 225 L 370 375 L 300 420 L 230 375 L 230 225 Z"
      stroke="#000"
      strokeWidth="1.1"
      fill="none"
    />
  </g>

  {/* Inner hexagon with pulse */}
  <g className="pulse-anim">
    <path
      d="M 300 230 L 330 250 L 330 350 L 300 370 L 270 350 L 270 250 Z"
      stroke="#000"
      strokeWidth="1"
      fill="none"
    />
  </g>

  {/* Center hexagon - smallest with glow */}
  <g className="glow-anim">
    <path
      d="M 300 270 L 315 280 L 315 320 L 300 330 L 285 320 L 285 280 Z"
      stroke="#000"
      strokeWidth="0.8"
      fill="#000"
      fillOpacity="0.1"
    />
  </g>

  {/* Connecting lines from center - rotating */}
  <g className="rotate-slow">
    <line x1="300" y1="300" x2="300" y2="80" stroke="#000" strokeWidth="0.5" opacity="0.4" />
    <line x1="300" y1="300" x2="450" y2="175" stroke="#000" strokeWidth="0.5" opacity="0.4" />
    <line x1="300" y1="300" x2="450" y2="425" stroke="#000" strokeWidth="0.5" opacity="0.4" />
    <line x1="300" y1="300" x2="300" y2="520" stroke="#000" strokeWidth="0.5" opacity="0.4" />
    <line x1="300" y1="300" x2="150" y2="425" stroke="#000" strokeWidth="0.5" opacity="0.4" />
    <line x1="300" y1="300" x2="150" y2="175" stroke="#000" strokeWidth="0.5" opacity="0.4" />
  </g>

  {/* Orbital circles at hexagon vertices - rotating */}
  <g className="rotate-medium">
    <circle cx="300" cy="130" r="4" fill="#000" opacity="0.5" />
    <circle cx="410" cy="200" r="3.5" fill="#000" opacity="0.5" />
    <circle cx="410" cy="400" r="3" fill="#000" opacity="0.5" />
    <circle cx="300" cy="470" r="3.5" fill="#000" opacity="0.5" />
    <circle cx="190" cy="400" r="4" fill="#000" opacity="0.5" />
    <circle cx="190" cy="200" r="3" fill="#000" opacity="0.5" />
  </g>

  {/* Decorative dashed hexagon with animation */}
  <g className="rotate-fast">
    <path
      d="M 300 155 L 390 212.5 L 390 387.5 L 300 445 L 210 387.5 L 210 212.5 Z"
      stroke="#000"
      strokeWidth="0.6"
      strokeDasharray="8 8"
      fill="none"
      opacity="0.4"
      className="dash-anim"
    />
  </g>

  {/* Subtle concentric circles for depth */}
  <g className="pulse-anim">
    <circle cx="300" cy="300" r="100" stroke="#000" strokeWidth="0.4" opacity="0.2" />
    <circle cx="300" cy="300" r="140" stroke="#000" strokeWidth="0.3" opacity="0.15" />
  </g>

  {/* Corner accent dots with glow */}
  <g className="glow-anim">
    <circle cx="300" cy="80" r="2.5" fill="#000" opacity="0.6" />
    <circle cx="450" cy="175" r="2" fill="#000" opacity="0.6" />
    <circle cx="450" cy="425" r="2.5" fill="#000" opacity="0.6" />
    <circle cx="300" cy="520" r="2" fill="#000" opacity="0.6" />
    <circle cx="150" cy="425" r="2.5" fill="#000" opacity="0.6" />
    <circle cx="150" cy="175" r="2" fill="#000" opacity="0.6" />
  </g>

  {/* Inner geometric pattern - static */}
  <path
    d="M 300 250 L 320 270 L 320 330 L 300 350 L 280 330 L 280 270 Z"
    stroke="#000"
    strokeWidth="0.5"
    fill="none"
    opacity="0.3"
  />
</svg>


        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-6xl lg:text-7xl font-sans font-bold tracking-tight text-zinc-900">
            Our Vision
          </h3>

          <p className="mt-6 text-zinc-500 text-xl leading-relaxed">
            To become the benchmark of luxury mobility by delivering world-class
            vehicles, seamless experiences, and a standard of service that
            exceeds expectations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
