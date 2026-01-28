// import { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const testimonials = [
//   {
//     id: 1,
//     name: 'Alexander Thompson',
//     role: 'CEO, Thompson Holdings',
//     image: 'AT',
//     rating: 5,
//     text: 'SunVenus exceeded all my expectations. The Rolls-Royce Phantom I rented for my anniversary was immaculate. Their attention to detail and personalized service made the experience truly unforgettable.',
//   },
//   {
//     id: 2,
//     name: 'Victoria Chen',
//     role: 'Fashion Designer',
//     image: 'VC',
//     rating: 5,
//     text: 'As someone who appreciates luxury, I was thoroughly impressed. The booking process was seamless, and the Bentley Continental was delivered to my hotel within hours. Exceptional service!',
//   },
//   {
//     id: 3,
//     name: 'Marcus Rodriguez',
//     role: 'Tech Entrepreneur',
//     image: 'MR',
//     rating: 5,
//     text: 'The Porsche 911 Turbo S was a dream to drive along the coast. SunVenus made my business trip feel like a vacation. Will definitely be a returning customer.',
//   },
//   {
//     id: 4,
//     name: 'Isabella Laurent',
//     role: 'Investment Banker',
//     image: 'IL',
//     rating: 5,
//     text: 'Professional, punctual, and premium. The Mercedes-AMG GT was in pristine condition. Their concierge service arranged everything perfectly. Highly recommend SunVenus!',
//   },
// ];

// const Testimonials = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.testimonial-header',
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.testimonial-header',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const paginate = (newDirection: number) => {
//     setDirection(newDirection);
//     setActiveIndex((prev) => {
//       if (newDirection === 1) {
//         return (prev + 1) % testimonials.length;
//       }
//       return prev === 0 ? testimonials.length - 1 : prev - 1;
//     });
//   };

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32 bg-muted/30">
//       <div className="container mx-auto px-6">
//         <div className="testimonial-header text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
//             Testimonials
//           </span>
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Discover why discerning clients choose SunVenus for their luxury car rental experience
//           </p>
//         </div>

//         {/* Testimonial Carousel */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="overflow-hidden rounded-2xl">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: 'easeInOut' }}
//                 className="bg-card rounded-2xl p-8 md:p-12 shadow-xl"
//               >
//                 {/* Stars */}
//                 <div className="flex gap-1 mb-6">
//                   {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-5 h-5 text-gold"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
//                   "{testimonials[activeIndex].text}"
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
//                     {testimonials[activeIndex].image}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">
//                       {testimonials[activeIndex].name}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       {testimonials[activeIndex].role}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation */}
//           <div className="flex items-center justify-center gap-6 mt-8">
//             <button
//               onClick={() => paginate(-1)}
//               className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-secondary transition-all duration-300"
//             >
//               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > activeIndex ? 1 : -1);
//                     setActiveIndex(index);
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === activeIndex ? 'bg-gold w-8' : 'bg-border hover:bg-gold/50'
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => paginate(1)}
//               className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-secondary transition-all duration-300"
//             >
//               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




// import { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const testimonials = [
//   {
//     id: 1,
//     name: 'Alexander Thompson',
//     role: 'CEO, Thompson Holdings',
//     image: 'AT',
//     rating: 5,
//     text: 'SunVenus exceeded all my expectations. The Rolls-Royce Phantom I rented for my anniversary was immaculate. Their attention to detail and personalized service made the experience truly unforgettable.',
//   },
//   {
//     id: 2,
//     name: 'Victoria Chen',
//     role: 'Fashion Designer',
//     image: 'VC',
//     rating: 5,
//     text: 'As someone who appreciates luxury, I was thoroughly impressed. The booking process was seamless, and the Bentley Continental was delivered to my hotel within hours. Exceptional service!',
//   },
//   {
//     id: 3,
//     name: 'Marcus Rodriguez',
//     role: 'Tech Entrepreneur',
//     image: 'MR',
//     rating: 5,
//     text: 'The Porsche 911 Turbo S was a dream to drive along the coast. SunVenus made my business trip feel like a vacation. Will definitely be a returning customer.',
//   },
//   {
//     id: 4,
//     name: 'Isabella Laurent',
//     role: 'Investment Banker',
//     image: 'IL',
//     rating: 5,
//     text: 'Professional, punctual, and premium. The Mercedes-AMG GT was in pristine condition. Their concierge service arranged everything perfectly. Highly recommend SunVenus!',
//   },
// ];

// const slideVariants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 200 : -200,
//     opacity: 0,
//     scale: 0.96,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//   },
//   exit: (direction: number) => ({
//     x: direction < 0 ? 200 : -200,
//     opacity: 0,
//     scale: 0.96,
//   }),
// };

// const Testimonials = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.testimonial-header',
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.testimonial-header',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Auto rotate
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(timer);
//   }, []);

//   const paginate = (dir: number) => {
//     setDirection(dir);
//     setActiveIndex((prev) =>
//       dir === 1 ? (prev + 1) % testimonials.length : prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       id="testimonials"
//       ref={sectionRef}
//       className="py-28 lg:py-36 bg-muted/30 relative overflow-hidden"
//     >
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="testimonial-header text-center mb-20">
//           <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-xs tracking-widest uppercase mb-6">
//             Testimonials
//           </span>
//           <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Trusted by discerning clients who expect nothing but excellence
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="overflow-hidden rounded-3xl">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 className="bg-card/90 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
//               >
//                 {/* Stars */}
//                 <div className="flex gap-1 mb-8">
//                   {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
//                     <motion.svg
//                       key={i}
//                       initial={{ opacity: 0, y: 6 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.05 }}
//                       className="w-5 h-5 text-gold"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </motion.svg>
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <p className="text-lg md:text-xl leading-relaxed text-foreground mb-10">
//                   “{testimonials[activeIndex].text}”
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
//                     {testimonials[activeIndex].image}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">
//                       {testimonials[activeIndex].name}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       {testimonials[activeIndex].role}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Controls */}
//           <div className="flex items-center justify-center gap-6 mt-10">
//             <button
//               onClick={() => paginate(-1)}
//               className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-secondary transition-all duration-300"
//             >
//               ‹
//             </button>

//             <div className="flex gap-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > activeIndex ? 1 : -1);
//                     setActiveIndex(index);
//                   }}
//                   className={`h-2 rounded-full transition-all duration-500 ${
//                     index === activeIndex ? 'w-10 bg-gold' : 'w-2 bg-border'
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => paginate(1)}
//               className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-secondary transition-all duration-300"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

























// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// /* ------------------------------------------------------------------ */
// /* DATA */
// /* ------------------------------------------------------------------ */

// const testimonials = [
//   {
//     id: 1,
//     name: 'Alexander Thompson',
//     role: 'CEO, Thompson Holdings',
//     image: 'AT',
//     rating: 5,
//     text:
//       'SunVenus exceeded all my expectations. The Rolls-Royce Phantom was immaculate.',
//   },
//   {
//     id: 2,
//     name: 'Victoria Chen',
//     role: 'Fashion Designer',
//     image: 'VC',
//     rating: 5,
//     text:
//       'The Bentley Continental was delivered within hours. True luxury.',
//   },
//   {
//     id: 3,
//     name: 'Marcus Rodriguez',
//     role: 'Tech Entrepreneur',
//     image: 'MR',
//     rating: 5,
//     text:
//       'Driving the Porsche 911 Turbo S was surreal.',
//   },
//   {
//     id: 4,
//     name: 'Isabella Laurent',
//     role: 'Investment Banker',
//     image: 'IL',
//     rating: 5,
//     text:
//       'Professional, punctual, premium service.',
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* COMPONENT */
// /* ------------------------------------------------------------------ */

// const Testimonials = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [index, setIndex] = useState(0);

//   /* Header animation */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.testimonial-header',
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.testimonial-header',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   /* Auto-scroll */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 4500);

//     return () => clearInterval(timer);
//   }, [index]);

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   /* Sliding window of 3 */
//   const visibleTestimonials = [
//     testimonials[index % testimonials.length],
//     testimonials[(index + 1) % testimonials.length], // ACTIVE
//     testimonials[(index + 2) % testimonials.length],
//   ];

//   const activeDot = (index + 1) % testimonials.length;

//   return (
//     <section
//       ref={sectionRef}
//       className="py-28 lg:py-36 bg-muted/30 overflow-hidden"
//     >
//       <div className="container mx-auto px-6">
//         {/* HEADER */}
//         <div className="testimonial-header text-center mb-20">
//           <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-xs tracking-widest uppercase mb-6">
//             Testimonials
//           </span>
//           <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Trusted by those who demand excellence
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="relative max-w-6xl mx-auto overflow-hidden">
//           <motion.div
//             key={index}
//             initial={{ x: 120, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {visibleTestimonials.map((item, i) => (
//               <div
//                 key={item.id}
//                 className={`rounded-3xl bg-card/90 backdrop-blur-xl p-8
//                 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]
//                 transition-all duration-700
//                 ${i === 1 ? 'scale-105 opacity-100' : 'opacity-80'}`}
//               >
//                 {/* Stars */}
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(item.rating)].map((_, i) => (
//                     <span key={i} className="text-gold">★</span>
//                   ))}
//                 </div>

//                 {/* Text */}
//                 <p className="text-base leading-relaxed mb-6">
//                   “{item.text}”
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center font-semibold">
//                     {item.image}
//                   </div>
//                   <div>
//                     <p className="font-semibold">{item.name}</p>
//                     <p className="text-sm text-muted-foreground">{item.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* NAV BUTTONS */}
//           <div className="flex justify-between items-center mt-10">
//             <button
//               onClick={handlePrev}
//               className="px-5 py-2 rounded-full border border-border hover:border-gold text-sm transition"
//             >
//               ← Prev
//             </button>

//             {/* DOTS */}
//             <div className="flex gap-3">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() =>
//                     setIndex(
//                       i === 0
//                         ? testimonials.length - 1
//                         : i - 1
//                     )
//                   }
//                   className={`w-2.5 h-2.5 rounded-full transition-all
//                     ${
//                       activeDot === i
//                         ? 'bg-gold scale-125'
//                         : 'bg-muted-foreground/40 hover:bg-muted-foreground'
//                     }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={handleNext}
//               className="px-5 py-2 rounded-full border border-border hover:border-gold text-sm transition"
//             >
//               Next →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';

const testimonials = [
  { id: 1, name: 'Alexander Thompson', role: 'CEO', image: 'AT', rating: 5, text: 'SunVenus exceeded all my expectations.' },
  { id: 2, name: 'Victoria Chen', role: 'Designer', image: 'VC', rating: 5, text: 'True luxury and seamless service.' },
  { id: 3, name: 'Marcus Rodriguez', role: 'Entrepreneur', image: 'MR', rating: 5, text: 'The Porsche experience was surreal.' },
  { id: 4, name: 'Isabella Laurent', role: 'Banker', image: 'IL', rating: 5, text: 'Professional and premium service.' },
  { id: 5, name: 'Daniel Moore', role: 'Investor', image: 'DM', rating: 5, text: 'Everything felt first-class.' },
];

const CARD_WIDTH = 360; // fixed width = smooth
const GAP = 32;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;

  const getItems = () => {
    return [
      testimonials[(index - 1 + total) % total],
      testimonials[index % total],
      testimonials[(index + 1) % total],
      testimonials[(index + 2) % total],
      testimonials[(index + 3) % total],
    ];
  };

  const moveNext = async () => {
    await controls.start({
      x: -(CARD_WIDTH + GAP),
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    });

    controls.set({ x: 0 });
    setIndex((i) => (i + 1) % total);
  };

  const movePrev = async () => {
    controls.set({ x: -(CARD_WIDTH + GAP) });
    setIndex((i) => (i - 1 + total) % total);

    await controls.start({
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    });
  };

  /* Auto scroll */
  useEffect(() => {
    const t = setInterval(moveNext, 5000);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section className="py-32 bg-muted overflow-hidden">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-xs uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* VIEWPORT */}
        <div className="relative max-w-[1200px] mx-auto overflow-hidden">

          {/* TRACK */}
          <motion.div
            ref={trackRef}
            animate={controls}
            className="flex gap-8"
            style={{ willChange: 'transform' }}
          >
            {getItems().map((item, i) => (
              <div
                key={item.id + '-' + i}
                style={{ width: CARD_WIDTH }}
                className={`flex-shrink-0 rounded-3xl p-8 bg-card/90 backdrop-blur-xl
                shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]
                transition-all duration-700
                ${i === 1 ? 'scale-105 opacity-100' : 'opacity-70'}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>

                <p className="mb-6 text-base leading-relaxed">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center font-semibold">
                    {item.image}
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CONTROLS */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button onClick={movePrev} className="w-12 h-12 rounded-full border hover:border-gold transition">←</button>

            {/* DOTS */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition
                  ${i === index ? 'bg-gold scale-125' : 'bg-muted-foreground/40'}`}
                />
              ))}
            </div>

            <button onClick={moveNext} className="w-12 h-12 rounded-full border hover:border-gold transition">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;












































































// import { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// /* ------------------------------------------------------------------ */
// /* DATA */
// /* ------------------------------------------------------------------ */

// const testimonials = [
//   {
//     id: 1,
//     name: 'Alexander Thompson',
//     role: 'CEO, Thompson Holdings',
//     image: 'AT',
//     rating: 5,
//     text:
//       'SunVenus exceeded all my expectations. The Rolls-Royce Phantom I rented for my anniversary was immaculate. Their attention to detail made the experience unforgettable.',
//   },
//   {
//     id: 2,
//     name: 'Victoria Chen',
//     role: 'Fashion Designer',
//     image: 'VC',
//     rating: 5,
//     text:
//       'The Bentley Continental was delivered to my hotel within hours. Seamless booking, impeccable service, true luxury.',
//   },
//   {
//     id: 3,
//     name: 'Marcus Rodriguez',
//     role: 'Tech Entrepreneur',
//     image: 'MR',
//     rating: 5,
//     text:
//       'Driving the Porsche 911 Turbo S along the coast was surreal. SunVenus made my business trip feel indulgent.',
//   },
//   {
//     id: 4,
//     name: 'Isabella Laurent',
//     role: 'Investment Banker',
//     image: 'IL',
//     rating: 5,
//     text:
//       'Professional, punctual, and premium. The Mercedes-AMG GT was pristine. Highly recommended.',
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* MAGNETIC CURSOR HOOK */
// /* ------------------------------------------------------------------ */

// const useMagnetic = () => {
//   const ref = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const move = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width / 2;
//       const y = e.clientY - rect.top - rect.height / 2;

//       gsap.to(el, {
//         x: x * 0.35,
//         y: y * 0.35,
//         duration: 0.4,
//         ease: 'power3.out',
//       });
//     };

//     const reset = () => {
//       gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' });
//     };

//     el.addEventListener('mousemove', move);
//     el.addEventListener('mouseleave', reset);

//     return () => {
//       el.removeEventListener('mousemove', move);
//       el.removeEventListener('mouseleave', reset);
//     };
//   }, []);

//   return ref;
// };

// /* ------------------------------------------------------------------ */
// /* SLIDE VARIANTS */
// /* ------------------------------------------------------------------ */

// const slideVariants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 220 : -220,
//     opacity: 0,
//     scale: 0.96,
//     filter: 'brightness(0.85)',
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     filter: 'brightness(1)',
//   },
//   exit: (direction: number) => ({
//     x: direction < 0 ? 220 : -220,
//     opacity: 0,
//     scale: 0.96,
//     filter: 'brightness(0.85)',
//   }),
// };

// /* ------------------------------------------------------------------ */
// /* COMPONENT */
// /* ------------------------------------------------------------------ */

// const Testimonials = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const prevRef = useMagnetic();
//   const nextRef = useMagnetic();

//   /* Header reveal */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.testimonial-header',
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.testimonial-header',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   /* Auto-advance (luxury tick) */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(timer);
//   }, []);

//   const paginate = (dir: number) => {
//     setDirection(dir);
//     setActiveIndex((prev) =>
//       dir === 1
//         ? (prev + 1) % testimonials.length
//         : prev === 0
//         ? testimonials.length - 1
//         : prev - 1
//     );
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-28 lg:py-36 bg-muted/30 overflow-hidden"
//     >
//       <div className="container mx-auto px-6">
//         {/* HEADER */}
//         <div className="testimonial-header text-center mb-20">
//           <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-xs tracking-widest uppercase mb-6">
//             Testimonials
//           </span>
//           <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Trusted by those who demand excellence
//           </p>
//         </div>

//         {/* CAROUSEL */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="relative overflow-hidden rounded-3xl">

//             {/* DIM + PARALLAX BACKGROUND */}
//             <motion.div
//               className="absolute inset-0 z-0 rounded-3xl"
//               style={{
//                 background:
//                   'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.18), transparent 65%)',
//               }}
//               animate={{ y: activeIndex * -18 }}
//               transition={{ duration: 1.2, ease: 'easeOut' }}
//             />

//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 className="relative z-10 bg-card/90 backdrop-blur-xl rounded-3xl
//                 p-10 md:p-14
//                 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]"
//               >
//                 {/* STARS */}
//                 <div className="flex gap-1 mb-8">
//                   {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, y: 6 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.06 }}
//                       className="text-gold text-lg"
//                     >
//                       ★
//                     </motion.span>
//                   ))}
//                 </div>

//                 {/* QUOTE */}
//                 <p className="text-lg md:text-xl leading-relaxed mb-10">
//                   “{testimonials[activeIndex].text}”
//                 </p>

//                 {/* AUTHOR */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 rounded-full bg-gold/20 text-gold flex items-center justify-center font-semibold">
//                     {testimonials[activeIndex].image}
//                   </div>
//                   <div>
//                     <p className="font-semibold">
//                       {testimonials[activeIndex].name}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       {testimonials[activeIndex].role}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* CONTROLS */}
//           <div className="flex items-center justify-center gap-6 mt-12">
//             <button
//               ref={prevRef}
//               onClick={() => paginate(-1)}
//               className="w-14 h-14 rounded-full border border-border backdrop-blur-xl
//               flex items-center justify-center hover:bg-gold/20 transition"
//             >
//               ‹
//             </button>

//             <button
//               ref={nextRef}
//               onClick={() => paginate(1)}
//               className="w-14 h-14 rounded-full border border-border backdrop-blur-xl
//               flex items-center justify-center hover:bg-gold/20 transition"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
