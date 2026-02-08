// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "@/components/Navbar";
// import {
//   Car,
//   Crown,
//   ShieldCheck,
//   MapPin,
//   CalendarClock,
//   Headphones,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     icon: Crown,
//     title: "Luxury Chauffeur Service",
//     description:
//       "Experience first-class comfort with professionally trained chauffeurs, ensuring elegance, safety, and discretion at every journey.",
//   },
//   {
//     icon: Car,
//     title: "Self-Drive Exotic Cars",
//     description:
//       "Drive iconic luxury and exotic cars at your own pace. Perfect for enthusiasts who crave performance and prestige.",
//   },
//   {
//     icon: CalendarClock,
//     title: "Wedding & Event Rentals",
//     description:
//       "Arrive in style on your special day. Our premium fleet adds sophistication to weddings, corporate events, and celebrations.",
//   },
//   {
//     icon: MapPin,
//     title: "Airport Transfers",
//     description:
//       "Seamless luxury airport transfers with punctual service, premium comfort, and stress-free travel.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Corporate & Executive Rentals",
//     description:
//       "Tailored solutions for executives and corporate clients with premium vehicles and priority support.",
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Concierge Support",
//     description:
//       "Round-the-clock concierge assistance to customize your ride, route, and experience effortlessly.",
//   },
// ];

// const ServicesPage = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const headerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Header animation
//       gsap.from(headerRef.current?.children || [], {
//         opacity: 0,
//         y: 40,
//         duration: 1.2,
//         stagger: 0.2,
//         ease: "power3.out",
//       });

//       // Service cards animation
//       gsap.fromTo(
//         ".service-card",
//         {
//           opacity: 0,
//           y: 80,
//           scale: 0.95,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           stagger: {
//             amount: 0.6,
//             from: "start",
//           },
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".services-grid",
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#fafafa] text-neutral-900">
//       <Navbar />

//       {/* FULL SCREEN HERO SECTION WITH BACKGROUND IMAGE */}
//       <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop"
//             alt="Luxury Car Background"
//             className="h-full w-full object-cover"
//           />
//           {/* Dark Overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
//         </div>

//         {/* Hero Content */}
//         <div
//           ref={headerRef}
//           className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12"
//         >
//           <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-md">
//             <div className="h-1.5 w-1.5 rounded-full bg-white" />
//             <p className="text-xs font-medium uppercase tracking-[0.25em] text-white">
//               Our Services
//             </p>
//             <div className="h-1.5 w-1.5 rounded-full bg-white" />
//           </div>

//           <h1 className="mb-8 text-5xl font-light leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
//             Crafted Luxury
//             <br />
//             <span className="font-serif italic text-white drop-shadow-lg">
//               Experiences
//             </span>
//           </h1>

//           <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-100 md:text-xl">
//             Premium mobility solutions designed for comfort, prestige, and
//             unforgettable journeys.
//           </p>

//           {/* Decorative line */}
//           <div className="mx-auto mt-12 flex w-32 items-center justify-center gap-2">
//             <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/50" />
//             <div className="h-1 w-1 rounded-full bg-white/70" />
//             <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/50" />
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-xs uppercase tracking-widest text-white/80">
//               Scroll
//             </span>
//             <svg
//               className="h-6 w-6 text-white"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section
//         ref={sectionRef}
//         className="relative px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40"
//       >
//         {/* Decorative background elements */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div className="absolute -left-64 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-40 blur-3xl" />
//           <div className="absolute -right-64 top-1/3 h-96 w-96 rounded-full bg-gradient-to-bl from-gray-100 to-transparent opacity-40 blur-3xl" />
//         </div>

//         {/* Section Header */}
//         <div className="relative z-10 mx-auto mb-24 max-w-4xl text-center md:mb-32">
//           <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-6 py-2 shadow-sm backdrop-blur-sm">
//             <div className="h-1.5 w-1.5 rounded-full bg-black" />
//             <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
//               What We Offer
//             </p>
//             <div className="h-1.5 w-1.5 rounded-full bg-black" />
//           </div>

//           <h2 className="mb-8 text-4xl font-light leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
//             Our Premium
//             <br />
//             <span className="font-serif italic text-gray-800">
//               Services
//             </span>
//           </h2>

//           <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
//             Every service is meticulously crafted to deliver an unparalleled experience.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="services-grid relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={index}
//                 className="service-card group relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/90 p-10 backdrop-blur-sm transition-all duration-700 ease-out hover:border-gray-300 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-3"
//               >
//                 {/* Hover gradient overlay */}
//                 <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
//                   <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-gray-900/20">
//                     <Icon className="h-7 w-7" strokeWidth={1.5} />
//                   </div>

//                   {/* Title */}
//                   <h3 className="mb-4 text-2xl font-light tracking-tight text-gray-900 transition-colors duration-500 group-hover:text-black">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
//                     {service.description}
//                   </p>

//                   {/* Decorative bottom accent */}
//                   <div className="mt-8 flex items-center gap-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
//                     <div className="h-px w-12 bg-gradient-to-r from-gray-900 to-transparent" />
//                     <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
//                       {String(index + 1).padStart(2, "0")}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Luxury border glow */}
//                 <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition-all duration-700 group-hover:ring-gray-900/10" />

//                 {/* Corner accent */}
//                 <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-0 blur-2xl transition-all duration-700 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-30" />
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom decorative element */}
//         <div className="relative z-10 mx-auto mt-24 flex max-w-2xl flex-col items-center text-center md:mt-32">
//           <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//           <p className="text-sm italic text-gray-500">
//             Elevating every journey with unparalleled luxury and service
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import {
  Car,
  Crown,
  ShieldCheck,
  MapPin,
  CalendarClock,
  Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Crown,
    title: "Luxury Chauffeur Service",
    description:
      "Experience first-class comfort with professionally trained chauffeurs, ensuring elegance, safety, and discretion at every journey.",
  },
  {
    icon: Car,
    title: "Self-Drive Exotic Cars",
    description:
      "Drive iconic luxury and exotic cars at your own pace. Perfect for enthusiasts who crave performance and prestige.",
  },
  {
    icon: CalendarClock,
    title: "Wedding & Event Rentals",
    description:
      "Arrive in style on your special day. Our premium fleet adds sophistication to weddings, corporate events, and celebrations.",
  },
  {
    icon: MapPin,
    title: "Airport Transfers",
    description:
      "Seamless luxury airport transfers with punctual service, premium comfort, and stress-free travel.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate & Executive Rentals",
    description:
      "Tailored solutions for executives and corporate clients with premium vehicles and priority support.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge Support",
    description:
      "Round-the-clock concierge assistance to customize your ride, route, and experience effortlessly.",
  },
];

const ServicesPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Enable smooth scrolling on html element
    document.documentElement.style.scrollBehavior = "smooth";

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Service cards animation
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: {
            amount: 0.6,
            from: "start",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ctx.revert();
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#fafafa] text-neutral-900">
      <Navbar />

      {/* FULL SCREEN HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Car Background"
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div
          ref={headerRef}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-md">
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Our Services
            </p>
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>

          <h1 className="mb-8 text-5xl leading-tight font-sans  tracking-tight text-white md:text-6xl lg:text-7xl">
            Crafted Luxury
            <br />
            <span className="font-sans italic font-bold text-white drop-shadow-lg">
              Experiences
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white md:text-xl">
            Premium mobility solutions designed for comfort, prestige, and
            unforgettable journeys.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-12 flex w-52 items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/50" />
            <div className="h-1 w-1 rounded-full bg-white/70" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/50" />
          </div>
        </div>

        {/* Scroll indicator with smooth scroll link */}
        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer transition-opacity hover:opacity-80"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/80">
              Scroll
            </span>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        ref={sectionRef}
        className="relative px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40"
      >
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-64 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-40 blur-3xl" />
          <div className="absolute -right-64 top-1/3 h-96 w-96 rounded-full bg-gradient-to-bl from-gray-100 to-transparent opacity-40 blur-3xl" />
        </div>

        {/* DECORATIVE SVG VECTORS - Elegant Geometric Shapes */}
        
        {/* Top Left - Concentric Circles */}
        <svg
          className="pointer-events-none absolute left-8 top-20 h-40 w-40 opacity-10 md:h-48 md:w-48"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle
            cx="100"
            cy="100"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
        </svg>

        {/* Top Right - Geometric Triangle Pattern */}
        <svg
          className="pointer-events-none absolute right-12 top-32 h-36 w-36 opacity-10 md:h-44 md:w-44"
          viewBox="0 0 200 200"
        >
          <path
            d="M100,20 L180,180 L20,180 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <path
            d="M100,50 L150,150 L50,150 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
        </svg>

        {/* Middle Left - Hexagon */}
        <svg
          className="pointer-events-none absolute left-16 top-1/2 h-32 w-32 opacity-10 md:h-40 md:w-40"
          viewBox="0 0 200 200"
        >
          <path
            d="M100,20 L170,60 L170,140 L100,180 L30,140 L30,60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <path
            d="M100,50 L150,75 L150,125 L100,150 L50,125 L50,75 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
        </svg>

        {/* Bottom Right - Star Pattern */}
        <svg
          className="pointer-events-none absolute bottom-32 right-20 h-44 w-44 opacity-10 md:h-52 md:w-52"
          viewBox="0 0 200 200"
        >
          <path
            d="M100,20 L110,70 L160,80 L120,115 L130,165 L100,140 L70,165 L80,115 L40,80 L90,70 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
        </svg>

        {/* Center Floating Diamond */}
        <svg
          className="pointer-events-none absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 opacity-5 md:h-36 md:w-36"
          viewBox="0 0 200 200"
        >
          <path
            d="M100,20 L180,100 L100,180 L20,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <path
            d="M100,50 L150,100 L100,150 L50,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
        </svg>

        {/* Bottom Left - Spiral Pattern */}
        <svg
          className="pointer-events-none absolute bottom-40 left-12 h-36 w-36 opacity-10"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
          <line x1="30" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
          <line x1="50" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
          <line x1="150" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="0.3" className="text-gray-400" />
        </svg>

        {/* Top Center - Abstract Lines */}
        <svg
          className="pointer-events-none absolute left-1/3 top-16 h-32 w-32 opacity-8"
          viewBox="0 0 200 200"
        >
          <path
            d="M40,100 Q100,40 160,100 T40,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <path
            d="M60,100 Q100,60 140,100 T60,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
        </svg>

        {/* Section Header */}
        <div className="relative z-10 mx-auto mb-24 max-w-4xl text-center md:mb-32">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-6 py-2 shadow-sm backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-black" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
              What We Offer
            </p>
            <div className="h-1.5 w-1.5 rounded-full bg-black" />
          </div>

          <h2 className="mb-8 text-4xl  font-sans font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Our Premium
            <br />
            <span className="font-sans font-medium italic text-gray-800">
              Services
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Every service is meticulously crafted to deliver an unparalleled experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/90 p-10 backdrop-blur-sm transition-all duration-700 ease-out hover:border-gray-300 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-3"
              >
                {/* Hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-gray-900/20">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-sans font-light tracking-tight text-gray-900 transition-colors duration-500 group-hover:text-black">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
                    {service.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className="mt-8 flex items-center gap-2 opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <div className="h-px w-16 bg-gradient-to-r from-gray-900 to-transparent" />
                    <div className="text-lg font-medium uppercase tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Luxury border glow */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition-all duration-700 group-hover:ring-gray-900/10" />

                {/* Corner accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-0 blur-2xl transition-all duration-700 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-30" />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="relative z-10 mx-auto mt-24 flex max-w-2xl flex-col items-center text-center md:mt-32">
          <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <p className="text-sm italic text-gray-500">
            Elevating every journey with unparalleled luxury and service
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;