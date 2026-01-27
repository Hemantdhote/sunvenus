// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import carPorsche from '@/assets/car-porsche.jpg';
// import carMercedes from '@/assets/car-mercedes.jpg';
// import carBmw from '@/assets/car-bmw.jpg';
// import carAudi from '@/assets/car-audi.jpg';
// import carRangeRover from '@/assets/car-range-rover.jpg';
// import carLambo from '@/assets/car-lambo.jpg';

// gsap.registerPlugin(ScrollTrigger);

// const cars = [
//   {
//     id: 1,
//     name: 'Porsche 911 Turbo S',
//     image: carPorsche,
//     specs: { power: '640 HP', speed: '330 km/h', time: '2.7s' },
//     price: 899,
//     category: 'Sports',
//   },
//   {
//     id: 2,
//     name: 'Mercedes-Benz S-Class',
//     image: carMercedes,
//     specs: { power: '496 HP', speed: '250 km/h', time: '4.4s' },
//     price: 599,
//     category: 'Sedan',
//   },
//   {
//     id: 3,
//     name: 'BMW M8 Competition',
//     image: carBmw,
//     specs: { power: '617 HP', speed: '305 km/h', time: '3.2s' },
//     price: 749,
//     category: 'Coupe',
//   },
//   {
//     id: 4,
//     name: 'Audi R8 V10',
//     image: carAudi,
//     specs: { power: '602 HP', speed: '330 km/h', time: '3.1s' },
//     price: 849,
//     category: 'Supercar',
//   },
//   {
//     id: 5,
//     name: 'Range Rover Autobiography',
//     image: carRangeRover,
//     specs: { power: '523 HP', speed: '250 km/h', time: '5.0s' },
//     price: 649,
//     category: 'SUV',
//   },
//   {
//     id: 6,
//     name: 'Lamborghini Urus',
//     image: carLambo,
//     specs: { power: '641 HP', speed: '305 km/h', time: '3.6s' },
//     price: 999,
//     category: 'Super SUV',
//   },
// ];

// const CarShowcase = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLDivElement>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const scrollContainer = scrollContainerRef.current;

//     if (!section || !scrollContainer) return;

//     // Calculate the scroll distance
//     const totalWidth = scrollContainer.scrollWidth;
//     const viewportWidth = window.innerWidth;
//     const scrollDistance = totalWidth - viewportWidth;

//     const ctx = gsap.context(() => {
//       // Horizontal scroll animation
//       gsap.to(scrollContainer, {
//         x: -scrollDistance,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: 'top top',
//           end: () => `+=${scrollDistance}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Title animation
//       gsap.fromTo(
//         '.fleet-title',
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.fleet-title',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="fleet" ref={sectionRef} className="bg-secondary overflow-hidden">
//       <div ref={triggerRef} className="relative min-h-screen">
//         {/* Header */}
//         <div className="container mx-auto px-6 pt-24 pb-12">
//           <div className="fleet-title text-center mb-4">
//             <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
//               Our Fleet
//             </span>
//             <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
//               Premium Collection
//             </h2>
//             <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
//               Explore our handpicked selection of the world's most exclusive vehicles
//             </p>
//           </div>
//         </div>

//         {/* Horizontal Scroll Container */}
//         <div
//           ref={scrollContainerRef}
//           className="flex gap-8 px-6 lg:px-12 pb-24"
//           style={{ width: 'max-content' }}
//         >
//           {cars.map((car, index) => (
//             <motion.div
//               key={car.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="group relative w-[350px] md:w-[400px] flex-shrink-0"
//             >
//               <div className="bg-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_hsl(40,95%,52%,0.3)]">
//                 {/* Image */}
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={car.image}
//                     alt={car.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 rounded-full bg-gold text-secondary text-xs font-semibold">
//                       {car.category}
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="font-sans text-xl font-bold text-foreground mb-4">
//                     {car.name}
//                   </h3>

//                   {/* Specs */}
//                   <div className="grid grid-cols-3 gap-4 mb-6">
//                     <div className="text-center p-3 rounded-lg bg-muted/50">
//                       <p className="text-xs text-muted-foreground mb-1">Power</p>
//                       <p className="text-sm font-semibold text-foreground">{car.specs.power}</p>
//                     </div>
//                     <div className="text-center p-3 rounded-lg bg-muted/50">
//                       <p className="text-xs text-muted-foreground mb-1">Top Speed</p>
//                       <p className="text-sm font-semibold text-foreground">{car.specs.speed}</p>
//                     </div>
//                     <div className="text-center p-3 rounded-lg bg-muted/50">
//                       <p className="text-xs text-muted-foreground mb-1">0-100</p>
//                       <p className="text-sm font-semibold text-foreground">{car.specs.time}</p>
//                     </div>
//                   </div>

//                   {/* Price & CTA */}
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-xs text-muted-foreground">Starting from</p>
//                       <p className="text-2xl font-bold text-gradient-gold">
//                         ${car.price}
//                         <span className="text-sm font-normal text-muted-foreground">/day</span>
//                       </p>
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="btn-luxury text-sm px-6 py-3"
//                     >
//                       Book Now
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Scroll Hint */}
//         <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 text-secondary-foreground/50">
//           <span className="text-sm">Scroll to explore</span>
//           <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarShowcase;


















// const cars = [
//   {
//     id: 1,
//     name: 'Porsche 911 Turbo S',
//     image: carPorsche,
//     bgColor: '#0f172a', // deep blue
//   },
//   {
//     id: 2,
//     name: 'Mercedes-Benz S-Class',
//     image: carMercedes,
//     bgColor: '#111827', // graphite
//   },
//   {
//     id: 3,
//     name: 'BMW M8 Competition',
//     image: carBmw,
//     bgColor: '#020617', // near black
//   },
//   {
//     id: 4,
//     name: 'Audi R8 V10',
//     image: carAudi,
//     bgColor: '#1c1917', // dark brown
//   },
//   {
//     id: 5,
//     name: 'Range Rover Autobiography',
//     image: carRangeRover,
//     bgColor: '#0b0f14',
//   },
//   {
//     id: 6,
//     name: 'Lamborghini Urus',
//     image: carLambo,
//     bgColor: '#052e16', // dark green
//   },
// ];







// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const CarShowcase = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLDivElement>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const container = scrollContainerRef.current;
//     if (!section || !container) return;

//     const scrollDistance = container.scrollWidth - window.innerWidth;

//     const ctx = gsap.context(() => {
//       // 🔹 Horizontal scroll
//       gsap.to(container, {
//         x: -scrollDistance,
//         ease: 'none',
//         scrollTrigger: {
//           id: 'horizontal',
//           trigger: triggerRef.current,
//           start: 'top top',
//           end: `+=${scrollDistance}`,
//           scrub: 1,
//           pin: true,
//         },
//       });

//       // 🔹 Per card logic
//       gsap.utils.toArray<HTMLElement>('.car-card').forEach((card, index) => {
//         const title = card.querySelector('.car-title');
//         const bgColor = card.dataset.bg;

//         ScrollTrigger.create({
//           trigger: card,
//           containerAnimation: ScrollTrigger.getById('horizontal'),
//           start: 'left center',
//           end: 'right center',

//           onEnter: () => activateCard(title, bgColor),
//           onEnterBack: () => activateCard(title, bgColor),

//           onLeave: () => deactivateTitle(title),
//           onLeaveBack: () => deactivateTitle(title),
//         });
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   // 🔹 Helpers
//   const activateCard = (title: Element | null, bg?: string) => {
//     if (!title) return;

//     gsap.to('.car-title', {
//       opacity: 0,
//       y: 30,
//       filter: 'blur(6px)',
//       duration: 0.4,
//       overwrite: true,
//     });

//     gsap.to(title, {
//       opacity: 1,
//       y: 0,
//       filter: 'blur(0px)',
//       duration: 0.6,
//       ease: 'power3.out',
//     });

//     if (bg) {
//       gsap.to(sectionRef.current, {
//         backgroundColor: bg,
//         duration: 0.8,
//         ease: 'power2.out',
//       });
//     }
//   };

//   const deactivateTitle = (title: Element | null) => {
//     if (!title) return;
//     gsap.to(title, {
//       opacity: 0,
//       y: -20,
//       filter: 'blur(6px)',
//       duration: 0.4,
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen overflow-hidden transition-colors"
//       style={{ backgroundColor: cars[0].bgColor }}
//     >
//       <div ref={triggerRef} className="relative min-h-screen">

//         <div className="pt-24 pb-12 text-center text-white">
//           <h2 className="text-5xl font-bold">Premium Collection</h2>
//           <p className="opacity-60 mt-4">Scroll to explore</p>
//         </div>

//         <div
//           ref={scrollContainerRef}
//           className="flex gap-12 px-12 pb-24"
//           style={{ width: 'max-content' }}
//         >
//           {cars.map((car) => (
//             <div
//               key={car.id}
//               data-bg={car.bgColor}
//               className="car-card relative w-[420px] flex-shrink-0"
//             >
//               <div className="rounded-3xl overflow-hidden bg-black shadow-2xl">

//                 <div className="relative h-64">
//                   <img
//                     src={car.image}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* 🔥 TITLE (only one visible at a time) */}
//                   <h3 className="car-title absolute bottom-6 left-6 right-6 text-2xl font-bold text-white opacity-0">
//                     {car.name}
//                   </h3>

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarShowcase;






import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import carPorsche from '@/assets/car-porsche.jpg';
import carMercedes from '@/assets/car-mercedes.jpg';
import carBmw from '@/assets/car-bmw.jpg';
import carAudi from '@/assets/car-audi.jpg';
import carRangeRover from '@/assets/car-range-rover.jpg';
import carLambo from '@/assets/car-lambo.jpg';

gsap.registerPlugin(ScrollTrigger);

const cars = [
  { id: 1, name: 'Porsche 911 Turbo S', image: carPorsche, bgColor: '#000000' },
  { id: 2, name: 'Mercedes-Benz S-Class', image: carMercedes, bgColor: '#EAD5D3' },
  { id: 3, name: 'BMW M8 Competition', image: carBmw, bgColor: '#B2A8D5' },
  { id: 4, name: 'Audi R8 V10', image: carAudi, bgColor: '#92DFCF' },
  { id: 5, name: 'Range Rover Autobiography', image: carRangeRover, bgColor: '#48467D' },
  { id: 6, name: 'Lamborghini Urus', image: carLambo, bgColor: '#f8dd9f' },
];

const CarShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const container = scrollContainerRef.current;
  //   if (!section || !container) return;

  //   const scrollDistance = container.scrollWidth - window.innerWidth;

  //   const ctx = gsap.context(() => {
  //     const horizontalTween = gsap.to(container, {
  //       x: -scrollDistance,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: 'top top',
  //         end: `+=${scrollDistance}`,
  //         scrub: 1,
  //         pin: true,
  //         anticipatePin: 1,
  //       },
  //     });

  //     gsap.utils.toArray<HTMLElement>('.car-card').forEach((card) => {
  //       const title = card.querySelector('.car-title');
  //       const bg = card.dataset.bg;

  //       ScrollTrigger.create({
  //         trigger: card,
  //         containerAnimation: horizontalTween,
  //         start: 'left center',
  //         end: 'right center',
  //         onEnter: () => activate(title, bg),
  //         onEnterBack: () => activate(title, bg),
  //         onLeave: () => deactivate(title),
  //         onLeaveBack: () => deactivate(title),
  //       });
  //     });
  //   }, section);

  //   return () => ctx.revert();
  // }, []);












  useEffect(() => {
  const section = sectionRef.current;
  const container = scrollContainerRef.current;
  if (!section || !container) return;

  const scrollDistance = container.scrollWidth - window.innerWidth;

  const ctx = gsap.context(() => {
    // 🔹 SET INITIAL STATE (below + left)
    gsap.set(container, {
      x: 0,
      yPercent: 20,
    });

    // 🔹 HORIZONTAL SCROLL (PIN ONLY HERE)
    const horizontalTween = gsap.to(container, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,

        // ⬆️ DIAGONAL IN
        onEnter: () => {
          gsap.to(container, {
            yPercent: 0,
            duration: 0.6,
            ease: 'power3.out',
          });
        },

        // ⬇️ DIAGONAL OUT
        onLeave: () => {
          gsap.to(container, {
            yPercent: -20,
            duration: 0.6,
            ease: 'power3.in',
          });
        },

        onEnterBack: () => {
          gsap.to(container, {
            yPercent: 0,
            duration: 0.6,
            ease: 'power3.out',
          });
        },

        onLeaveBack: () => {
          gsap.to(container, {
            yPercent: 20,
            duration: 0.6,
            ease: 'power3.in',
          });
        },
      },
    });

    // 🔹 ACTIVE CARD + BG COLOR
    gsap.utils.toArray<HTMLElement>('.car-card').forEach((card) => {
      const title = card.querySelector('.car-title');
      const bg = card.dataset.bg;

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: horizontalTween,
        start: 'left center',
        end: 'right center',
        onEnter: () => activate(title, bg),
        onEnterBack: () => activate(title, bg),
        onLeave: () => deactivate(title),
        onLeaveBack: () => deactivate(title),
      });
    });
  }, section);

  return () => ctx.revert();
}, []);








  const activate = (title: Element | null, bg?: string) => {
    gsap.to('.car-title', {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(6px)',
      duration: 0.3,
      overwrite: 'auto',
    });

    if (title) {
      gsap.to(title, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power3.out',
      });
    }

    if (bg) {
      gsap.to(sectionRef.current, {
        backgroundColor: bg,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  };

  const deactivate = (title: Element | null) => {
    if (!title) return;
    gsap.to(title, {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(6px)',
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: cars[0].bgColor }}
    >
      <div ref={triggerRef} className="min-h-screen flex flex-col justify-center">

        <div className="text-center text-white mb-12">
          <h2 className="text-5xl font-bold">Premium Collection</h2>
          <p className="opacity-60 mt-4">Scroll to explore</p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex items-center gap-[150px]"
          style={{ width: 'max-content' }}
        >
          {/* LEFT SPACER */}
          <div className="w-[50vw] shrink-0" />

          {cars.map((car) => (
            <div
              key={car.id}
              data-bg={car.bgColor}
              className="car-card w-[350px] h-[450px] shrink-0"
            >
              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">

                <img
                  src={car.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* CENTERED ACTIVE TITLE */}
                <h3 className="car-title font-sans text-center absolute inset-0 flex items-center justify-center text-5xl font-bold text-white opacity-0 z-10">
                  {car.name}
                </h3>

                <div className="absolute inset-0 bg-black/50" />
              </div>
            </div>
          ))}

          {/* RIGHT SPACER */}
          <div className="w-[50vw] shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
