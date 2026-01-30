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
  {
    id: 1,
    name: 'Porsche 911 Turbo S',
    image: carPorsche,
    bgColor: '#000000',
    power: '640 HP',
    zeroToHundred: '2.7s',
    price: '₹3.35 Cr',
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    image: carMercedes,
    bgColor: '#EAD5D3',
    power: '503 HP',
    zeroToHundred: '4.4s',
    price: '₹1.85 Cr',
  },
  {
    id: 3,
    name: 'BMW M8 Competition',
    image: carBmw,
    bgColor: '#B2A8D5',
    power: '617 HP',
    zeroToHundred: '3.2s',
    price: '₹2.44 Cr',
  },
  {
    id: 4,
    name: 'Audi R8 V10',
    image: carAudi,
    bgColor: '#92DFCF',
    power: '610 HP',
    zeroToHundred: '3.1s',
    price: '₹2.72 Cr',
  },
  {
    id: 5,
    name: 'Range Rover Autobiography',
    image: carRangeRover,
    bgColor: '#48467D',
    power: '523 HP',
    zeroToHundred: '4.6s',
    price: '₹4.17 Cr',
  },
  {
    id: 6,
    name: 'Lamborghini Urus',
    image: carLambo,
    bgColor: '#f8dd9f',
    power: '657 HP',
    zeroToHundred: '3.3s',
    price: '₹4.22 Cr',
  },
];

const CarShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    const scrollDistance = container.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.set(container, { x: 0, yPercent: 20 });

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

          onEnter: () =>
            gsap.to(container, {
              yPercent: 0,
              duration: 0.6,
              ease: 'power3.out',
            }),

          onLeave: () =>
            gsap.to(container, {
              yPercent: -20,
              duration: 0.6,
              ease: 'power3.in',
            }),

          onEnterBack: () =>
            gsap.to(container, {
              yPercent: 0,
              duration: 0.6,
              ease: 'power3.out',
            }),

          onLeaveBack: () =>
            gsap.to(container, {
              yPercent: 20,
              duration: 0.6,
              ease: 'power3.in',
            }),
        },
      });

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
    id='collection'
      ref={sectionRef}
      className="min-h-screen overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: '#F2B590' }}
    >
      <div ref={triggerRef} className="min-h-screen flex flex-col justify-center">
        <div className="text-center text-white mb-12">
          <h2 className="text-5xl font-bold font-sans ">Premium Collection</h2>
          <p className="opacity-60 mt-4">Scroll to explore</p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex items-center gap-[150px]"
          style={{ width: 'max-content' }}
        >
          <div className="w-[50vw] shrink-0" />

          {cars.map((car) => (
            <div
              key={car.id}
              data-bg={car.bgColor}
              className="car-card w-[350px] h-[450px] shrink-0"
            >
              <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl group">
                <img
                  src={car.image}
                  className="absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105"
                />

                {/* GSAP CENTER TITLE */}
                <h3 className="car-title absolute inset-0 flex items-center justify-center
                  text-5xl font-bold text-white opacity-0 z-10 text-center">
                  {car.name}
                </h3>

                <div className="absolute inset-0 bg-black/50 z-[1]" />

                {/* LUXURY HOVER DETAILS */}
                <div
                  className="
                  absolute inset-x-0 bottom-0 z-20
                  translate-y-full opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 ease-out
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  backdrop-blur-sm p-6
                "
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
                    Performance
                  </p>

                  <div className="flex justify-between text-white text-sm">
                    <div>
                      <p className="opacity-60">Power</p>
                      <p className="font-semibold">{car.power}</p>
                    </div>
                    <div>
                      <p className="opacity-60">0–100</p>
                      <p className="font-semibold">{car.zeroToHundred}</p>
                    </div>
                    <div>
                      <p className="opacity-60">Price</p>
                      <p className="font-semibold">{car.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="w-[50vw] shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
