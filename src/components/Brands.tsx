// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const brands = [
//   { name: 'Mercedes-Benz', logo: 'M-B' },
//   { name: 'BMW', logo: 'BMW' },
//   { name: 'Audi', logo: 'AUDI' },
//   { name: 'Porsche', logo: 'P' },
//   { name: 'Lamborghini', logo: 'L' },
//   { name: 'Ferrari', logo: 'F' },
//   { name: 'Bentley', logo: 'B' },
//   { name: 'Rolls-Royce', logo: 'RR' },
// ];

// const Brands = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.brand-item',
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.brands-grid',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
//             Trusted Partners
//           </span>
//           <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
//             Premium Brands We Offer
//           </h2>
//         </div>

//         <div className="brands-grid grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
//           {brands.map((brand, index) => (
//             <motion.div
//               key={brand.name}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="brand-item group"
//             >
//               <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-lg">
//                 <div className="w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center text-xl font-serif font-bold text-foreground group-hover:bg-gold/10 group-hover:text-gold transition-colors">
//                   {brand.logo}
//                 </div>
//                 <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
//                   {brand.name}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;



import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mercedes from "../assets/brands/mercedes-benz-1.svg"
import bmw from "../assets/brands/bmw-logo.svg"
import audi from "../assets/brands/audi-new-logo.svg"
import porsche from "../assets/brands/porsche-6.svg"
import lamborghini from "../assets/brands/lamborghini.svg"
import ferrari from "../assets/brands/ferrari.svg"
import bentley from "../assets/brands/bentley.svg"
import rollsRoyce from "../assets/Brands/rolls-royce.svg"

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const brands = [
  { name: 'Mercedes-Benz', logo: mercedes },
  { name: 'BMW', logo: bmw},
  { name: 'Audi', logo: audi },
  { name: 'Porsche', logo: porsche },
  { name: 'Lamborghini', logo: lamborghini},
  { name: 'Ferrari', logo: ferrari },
  { name: 'Bentley', logo: bentley},
  { name: 'Rolls-Royce', logo: rollsRoyce },
];

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

const Brands = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scrollContainer,
        { x: -scrollDistance },
        {
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.brands-title',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.brands-title',
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      <div ref={triggerRef} className="relative min-h-screen">

        {/* HEADER */}
        <div className="container mx-auto px-6 pt-28 pb-16">
          <div className="brands-title text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-xs tracking-widest uppercase mb-6">
              Trusted Partners
            </span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4">
              Premium Brands We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We collaborate with the world’s most prestigious automotive manufacturers
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-secondary/40 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-secondary/50" />

        {/* HORIZONTAL SCROLL */}
        <div
          ref={scrollContainerRef}
          className="flex gap-12 px-8 lg:px-16 pb-28"
          style={{ width: 'max-content' }}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
            >
              <div
                className="
                relative h-[220px] rounded-3xl
                bg-card/80 backdrop-blur-xl
                border border-white/5
                shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]
                flex flex-col items-center justify-center
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_40px_120px_-30px_rgba(212,175,55,0.35)]
                group
                "
              >
                {/* GOLD ACCENT */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent rounded-3xl" />
                </div>

                {/* LOGO */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="
                  h-14 mb-6
                  opacity-85
                  group-hover:opacity-100
                  transition
                  "
                />

                {/* NAME */}
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SCROLL HINT */}
        <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-3 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-6 h-6 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Brands;













































// import { useEffect, useRef, useState } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const brands = [
//   { name: 'Mercedes-Benz', logo: 'M-B', gradient: 'from-amber-400 to-yellow-600' },
//   { name: 'BMW', logo: 'BMW', gradient: 'from-yellow-500 to-amber-700' },
//   { name: 'Audi', logo: 'AUDI', gradient: 'from-amber-300 to-yellow-500' },
//   { name: 'Porsche', logo: 'P', gradient: 'from-yellow-400 to-amber-600' },
//   { name: 'Lamborghini', logo: 'L', gradient: 'from-amber-500 to-yellow-700' },
//   { name: 'Ferrari', logo: 'F', gradient: 'from-yellow-300 to-amber-500' },
//   { name: 'Bentley', logo: 'B', gradient: 'from-amber-400 to-yellow-600' },
//   { name: 'Rolls-Royce', logo: 'RR', gradient: 'from-yellow-500 to-amber-700' },
// ];

// interface BrandCardProps {
//   brand: typeof brands[0];
//   index: number;
// }

// const BrandCard = ({ brand, index }: BrandCardProps) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
  
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const springConfig = { damping: 25, stiffness: 700 };
//   const rotateX = useSpring(useMotionValue(0), springConfig);
//   const rotateY = useSpring(useMotionValue(0), springConfig);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
    
//     const rect = cardRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
    
//     const percentX = (e.clientX - centerX) / (rect.width / 2);
//     const percentY = (e.clientY - centerY) / (rect.height / 2);
    
//     rotateX.set(-percentY * 10);
//     rotateY.set(percentX * 10);
    
//     mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
//     mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     rotateX.set(0);
//     rotateY.set(0);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="brand-item group perspective-1000"
//       initial={{ opacity: 0, y: 60, scale: 0.9 }}
//       whileInView={{ 
//         opacity: 1, 
//         y: 0, 
//         scale: 1,
//         transition: { 
//           duration: 0.8, 
//           delay: index * 0.1,
//           ease: [0.25, 0.46, 0.45, 0.94]
//         }
//       }}
//       viewport={{ once: true, margin: "-50px" }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: 'preserve-3d',
//       }}
//     >
//       <div 
//         className="relative overflow-hidden rounded-2xl p-[1px] transition-all duration-500"
//         style={{
//           background: isHovered 
//             ? 'linear-gradient(135deg, hsl(45 80% 55% / 0.6), hsl(35 85% 45% / 0.3), hsl(45 80% 55% / 0.6))'
//             : 'linear-gradient(135deg, hsl(45 80% 55% / 0.2), hsl(220 15% 18% / 0.5), hsl(45 80% 55% / 0.2))',
//         }}
//       >
//         {/* Glass card inner */}
//         <div 
//           className="relative flex flex-col items-center justify-center p-8 lg:p-10 rounded-2xl overflow-hidden transition-all duration-500"
//           style={{
//             background: 'linear-gradient(135deg, hsl(220 15% 10% / 0.9), hsl(220 20% 6% / 0.95))',
//             backdropFilter: 'blur(20px)',
//             WebkitBackdropFilter: 'blur(20px)',
//           }}
//         >
//           {/* Ambient glow effect */}
//           <motion.div
//             className="absolute inset-0 opacity-0 transition-opacity duration-700"
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             style={{
//               background: `radial-gradient(circle at ${mouseX.get()}% ${mouseY.get()}%, hsl(45 80% 55% / 0.2), transparent 60%)`,
//             }}
//           />
          
//           {/* Top highlight line */}
//           <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-60" />
          
//           {/* Floating particles */}
//           <motion.div
//             className="absolute w-1 h-1 rounded-full bg-gold/40"
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//               opacity: [0.2, 0.6, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               delay: index * 0.3,
//             }}
//             style={{ top: '20%', left: '20%' }}
//           />
//           <motion.div
//             className="absolute w-1.5 h-1.5 rounded-full bg-gold/30"
//             animate={{
//               y: [0, -15, 0],
//               x: [0, -8, 0],
//               opacity: [0.1, 0.5, 0.1],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               delay: index * 0.2 + 1,
//             }}
//             style={{ top: '60%', right: '25%' }}
//           />

//           {/* Logo container with enhanced glow */}
//           <motion.div
//             className="relative z-10 mb-6"
//             animate={{
//               y: isHovered ? -5 : 0,
//             }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           >
//             {/* Outer glow ring */}
//             <motion.div
//               className="absolute -inset-3 rounded-full"
//               animate={{
//                 opacity: isHovered ? 1 : 0,
//                 scale: isHovered ? 1 : 0.8,
//               }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 background: 'radial-gradient(circle, hsl(45 80% 55% / 0.3), transparent 70%)',
//                 filter: 'blur(10px)',
//               }}
//             />
            
//             {/* Logo circle */}
//             <motion.div
//               className="relative w-20 h-20 rounded-full flex items-center justify-center overflow-hidden"
//               animate={{
//                 boxShadow: isHovered 
//                   ? '0 0 30px hsl(45 80% 55% / 0.5), 0 0 60px hsl(45 80% 55% / 0.3), inset 0 0 20px hsl(45 80% 55% / 0.2)'
//                   : '0 0 0px transparent, inset 0 0 0px transparent',
//               }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 background: isHovered
//                   ? 'linear-gradient(135deg, hsl(45 80% 55% / 0.25), hsl(35 85% 45% / 0.15))'
//                   : 'linear-gradient(135deg, hsl(220 15% 15% / 0.8), hsl(220 20% 10% / 0.9))',
//                 border: '1px solid hsl(45 80% 55% / 0.3)',
//               }}
//             >
//               <motion.span
//                 className="text-2xl font-serif font-bold tracking-wider"
//                 animate={{
//                   color: isHovered ? 'hsl(45 80% 60%)' : 'hsl(45 20% 85%)',
//                   textShadow: isHovered 
//                     ? '0 0 20px hsl(45 80% 55% / 0.8)' 
//                     : '0 0 0px transparent',
//                 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 {brand.logo}
//               </motion.span>
//             </motion.div>
//           </motion.div>

//           {/* Brand name with elegant underline */}
//           <motion.div
//             className="relative z-10"
//             animate={{ y: isHovered ? -2 : 0 }}
//             transition={{ duration: 0.4, delay: 0.05 }}
//           >
//             <motion.p
//               className="text-sm font-medium tracking-[0.2em] uppercase"
//               animate={{
//                 color: isHovered ? 'hsl(45 80% 70%)' : 'hsl(220 10% 60%)',
//               }}
//               transition={{ duration: 0.4 }}
//             >
//               {brand.name}
//             </motion.p>
            
//             {/* Animated underline */}
//             <motion.div
//               className="absolute -bottom-2 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
//               initial={{ width: 0, x: '-50%' }}
//               animate={{
//                 width: isHovered ? '120%' : '0%',
//                 opacity: isHovered ? 1 : 0,
//               }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//             />
//           </motion.div>

//           {/* Bottom reflection */}
//           <div 
//             className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
//             style={{
//               background: 'linear-gradient(to top, hsl(45 80% 55% / 0.02), transparent)',
//             }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Brands = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Parallax effect on scroll
//       gsap.to('.brands-bg-glow', {
//         y: -50,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top bottom',
//           end: 'bottom top',
//           scrub: 1,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative py-24 lg:py-32 overflow-hidden"
//       style={{
//         background: 'linear-gradient(180deg, hsl(220 20% 4%), hsl(220 25% 3%))',
//       }}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large ambient glow */}
//         <div 
//           className="brands-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, hsl(45 80% 55% / 0.08), transparent 60%)',
//             filter: 'blur(60px)',
//           }}
//         />
        
//         {/* Grid pattern overlay */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `
//               linear-gradient(hsl(45 80% 55% / 0.3) 1px, transparent 1px),
//               linear-gradient(90deg, hsl(45 80% 55% / 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px',
//           }}
//         />

//         {/* Corner accents */}
//         <div 
//           className="absolute top-0 left-0 w-96 h-96"
//           style={{
//             background: 'radial-gradient(circle at top left, hsl(45 80% 55% / 0.06), transparent 70%)',
//           }}
//         />
//         <div 
//           className="absolute bottom-0 right-0 w-96 h-96"
//           style={{
//             background: 'radial-gradient(circle at bottom right, hsl(45 80% 55% / 0.06), transparent 70%)',
//           }}
//         />
//       </div>

//       <div className="container relative z-10 mx-auto px-6">
//         {/* Section header */}
//         <div ref={titleRef} className="text-center mb-20">
//           {/* Luxury badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
//             style={{
//               background: 'linear-gradient(135deg, hsl(45 80% 55% / 0.15), hsl(45 80% 55% / 0.05))',
//               border: '1px solid hsl(45 80% 55% / 0.3)',
//               boxShadow: '0 0 30px hsl(45 80% 55% / 0.1)',
//             }}
//           >
//             <motion.div
//               className="w-2 h-2 rounded-full bg-gold"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.7, 1, 0.7],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <span className="text-gold text-sm font-medium tracking-wider uppercase">
//               Trusted Partners
//             </span>
//           </motion.div>

//           {/* Main title with shimmer */}
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
//           >
//             <span className="text-foreground">Premium Brands </span>
//             <span className="gold-shimmer">We Offer</span>
//           </motion.h2>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-muted-foreground text-lg max-w-2xl mx-auto"
//           >
//             Experience the pinnacle of automotive excellence with our curated selection 
//             of the world's most prestigious manufacturers
//           </motion.p>

//           {/* Decorative line */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="mt-10 mx-auto w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"
//           />
//         </div>

//         {/* Brands grid */}
//         <div className="brands-grid grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
//           {brands.map((brand, index) => (
//             <BrandCard key={brand.name} brand={brand} index={index} />
//           ))}
//         </div>

//         {/* Bottom CTA hint */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-center mt-16"
//         >
//           <p className="text-muted-foreground text-sm tracking-wide">
//             And many more exclusive partnerships worldwide
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

