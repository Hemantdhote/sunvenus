// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const BlogHero = () => {
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.fromTo(
//       titleRef.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     ).fromTo(
//       subtitleRef.current,
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//       "-=0.4"
//     );
//   }, []);

//   return (
//     <section className="pt-40 pb-24 text-center bg-[#fafafa]">
//       <h1
//         ref={titleRef}
//         className="text-5xl md:text-6xl font-serif text-gray-900"
//       >
//         Resources & Insights
//       </h1>

//       <p
//         ref={subtitleRef}
//         className="mt-6 max-w-xl mx-auto text-gray-600 text-lg"
//       >
//         The latest industry news, interviews, technologies, and resources.
//       </p>
//     </section>
//   );
// };

// export default BlogHero;

















import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const BlogHero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const carRef = useRef(null);
  const pathRef = useRef(null);

  const navigate = useNavigate();


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(pathRef.current, 
          { strokeDashoffset: 2000, opacity: 0 }, 
          { strokeDashoffset: 0, opacity: 0.4, duration: 2.5, ease: "power2.inOut" }, 0.2)
        .fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 }, 0.5)
        .fromTo(carRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.8 }, 0.8)
        .fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 }, 1.2);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] py-20"
    >
      {/* 1. Deep Luxury Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-black to-[#0f0e0c]" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      {/* 2. Animated Zig-Zag Pattern (Behind Car) */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={pathRef}
          d="M-100 700 L400 100 L1000 700 L1540 100"
          stroke="url(#luxuryGradient)"
          strokeWidth="2"
          strokeDasharray="2000"
          className="opacity-40"
        />
        <defs>
          <linearGradient id="luxuryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. The Focal Car Image (Adjusted for "Attractive" layout) */}
      <div className="absolute right-0 bottom-0 w-full h-full z-20 pointer-events-none">
        <img
          ref={carRef}
          src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1500&auto=format&fit=crop"
          alt="Luxury car"
          className="absolute bottom-[-5%] right-[-10%] w-[70%] md:w-[55%] lg:w-[45%] object-cover"
          style={{
            maskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
          }}
        />
      </div>

      {/* 4. Content Stack */}
      <div className="relative z-30 container mx-auto px-8 md:px-16">
        <div className="max-w-2xl text-left">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-gold/60" />
            <span className="uppercase tracking-[0.5em] text-[10px] text-stone-400 font-semibold">
              The Luxury Journal
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-sans text-white leading-[1.1] mb-8"
          >
            Refined <br />
            <span className="italic font-light text-stone-400">Mobility</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-md border-l border-stone-800 pl-6"
          >
            Curated stories on luxury travel, premium vehicles, and the art of 
            the chauffeur-driven experience.
          </p>
          
          <button onClick={()=>navigate("/cars-collection")}  className="mt-10 px-8 py-4 bg-transparent border border-stone-700 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
            Explore the Collection
          </button>
        </div>
      </div>

      {/* Bottom Grain Overlay for Texture */}
      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default BlogHero;