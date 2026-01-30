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