// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const faqs = [
//   {
//     question: 'What documents do I need to rent a luxury car?',
//     answer: 'You will need a valid driver\'s license (held for at least 2 years), a valid passport or ID, and a credit card in your name for the security deposit. International clients may need an International Driving Permit.',
//   },
//   {
//     question: 'Is there a minimum rental period?',
//     answer: 'Our minimum rental period is 24 hours. However, we offer flexible hourly packages for special events. Contact our concierge team for custom arrangements.',
//   },
//   {
//     question: 'What is included in the rental price?',
//     answer: 'All rentals include comprehensive insurance, 24/7 roadside assistance, GPS navigation, complimentary pickup and delivery within city limits, and a full tank of premium fuel.',
//   },
//   {
//     question: 'Can I take the car to another country?',
//     answer: 'Cross-border travel is possible with prior arrangement. Additional documentation and insurance coverage will be required. Please inform us during booking for a seamless experience.',
//   },
//   {
//     question: 'What is your cancellation policy?',
//     answer: 'Free cancellation is available up to 48 hours before pickup. Cancellations within 48 hours incur a 50% charge. No-shows are charged the full rental amount.',
//   },
//   {
//     question: 'Do you offer chauffeur services?',
//     answer: 'Yes, we provide professional chauffeur services with all vehicles. Our chauffeurs are trained to the highest standards and offer multilingual support.',
//   },
//   {
//     question: 'What is the security deposit?',
//     answer: 'Security deposits vary by vehicle class, ranging from $2,000 to $10,000. The deposit is held on your credit card and released within 7 business days after return.',
//   },
//   {
//     question: 'Are there mileage limits?',
//     answer: 'Standard rentals include 200 km per day. Unlimited mileage packages are available for extended rentals. Additional kilometers are charged at a premium rate.',
//   },
// ];

// const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="border-b border-border"
//     >
//       <button
//         onClick={onClick}
//         className="w-full py-6 flex items-center justify-between text-left group"
//       >
//         <span className="font-medium text-foreground pr-8 group-hover:text-gold transition-colors">
//           {faq.question}
//         </span>
//         <motion.div
//           animate={{ rotate: isOpen ? 45 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-colors"
//         >
//           <svg className="w-4 h-4 text-foreground group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//           </svg>
//         </motion.div>
//       </button>
      
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
//               {faq.answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.faq-header',
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: '.faq-header',
//             start: 'top 85%',
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="faq" ref={sectionRef} className="py-24 lg:py-32 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="faq-header text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
//             FAQ
//           </span>
//           <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Everything you need to know about renting with SunVenus
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               faq={faq}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             />
//           ))}
//         </div>

//         {/* Contact CTA */}
//         <div className="text-center mt-16">
//           <p className="text-muted-foreground mb-6">
//             Still have questions? We're here to help.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="btn-outline-luxury"
//           >
//             Contact Our Team
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;




import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What documents do I need to rent a luxury car?',
    answer: 'You will need a valid driver\'s license (held for at least 2 years), a valid passport or ID, and a credit card in your name for the security deposit. International clients may need an International Driving Permit.',
  },
  {
    question: 'Is there a minimum rental period?',
    answer: 'Our minimum rental period is 24 hours. However, we offer flexible hourly packages for special events. Contact our concierge team for custom arrangements.',
  },
  {
    question: 'What is included in the rental price?',
    answer: 'All rentals include comprehensive insurance, 24/7 roadside assistance, GPS navigation, complimentary pickup and delivery within city limits, and a full tank of premium fuel.',
  },
  {
    question: 'Can I take the car to another country?',
    answer: 'Cross-border travel is possible with prior arrangement. Additional documentation and insurance coverage will be required. Please inform us during booking for a seamless experience.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation is available up to 48 hours before pickup. Cancellations within 48 hours incur a 50% charge. No-shows are charged the full rental amount.',
  },
  {
    question: 'Do you offer chauffeur services?',
    answer: 'Yes, we provide professional chauffeur services with all vehicles. Our chauffeurs are trained to the highest standards and offer multilingual support.',
  },
  {
    question: 'What is the security deposit?',
    answer: 'Security deposits vary by vehicle class, ranging from $2,000 to $10,000. The deposit is held on your credit card and released within 7 business days after return.',
  },
  {
    question: 'Are there mileage limits?',
    answer: 'Standard rentals include 200 km per day. Unlimited mileage packages are available for extended rentals. Additional kilometers are charged at a premium rate.',
  },
];

interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem = ({ faq, isOpen, onClick, index }: FAQItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    
    rotateX.set(-percentY * 3);
    rotateY.set(percentX * 3);
    
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.7, 
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: "-30px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="perspective-1000 mb-4 "
    >
      <div 
        className="relative overflow-hidden rounded-2xl p-[1px] transition-all duration-500"
        style={{
          background: isOpen 
            ? 'linear-gradient(135deg, hsl(45 80% 55% / 0.6), hsl(35 85% 45% / 0.3), hsl(45 80% 55% / 0.6))'
            : isHovered
              ? 'linear-gradient(135deg, hsl(45 80% 55% / 0.4), hsl(220 15% 18% / 0.5), hsl(45 80% 55% / 0.4))'
              : 'linear-gradient(135deg, hsl(45 80% 55% / 0.15), hsl(220 15% 18% / 0.5), hsl(45 80% 55% / 0.15))',
        }}
      >
        {/* Glass card inner */}
        <div 
          className="relative rounded-2xl overflow-hidden transition-all duration-500  "
          style={{
            background: 'linear-gradient(135deg, hsl(220 15% 10% / 0.95), hsl(220 20% 6% / 0.98))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Ambient glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none "
            animate={{ opacity: isHovered || isOpen ? 1 : 0 }}
            style={{
              background: `radial-gradient(circle at ${mouseX.get()}% ${mouseY.get()}%, hsl(45 80% 55% / 0.15), transparent 60%)`,
            }}
          />
          
          {/* Top highlight line */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px]  bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-60" />
          
          {/* Floating particles */}
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-gold/30 pointer-events-none"
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            style={{ top: '30%', left: '10%' }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/20 pointer-events-none"
            animate={{
              y: [0, -10, 0],
              x: [0, -6, 0],
              opacity: [0.05, 0.3, 0.05],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: index * 0.15 + 1,
            }}
            style={{ top: '50%', right: '15%' }}
          />

          {/* Question button */}
          <button
            onClick={onClick}
            className="w-full py-6 px-8 flex items-center justify-between text-left group relative z-10"
          >
            <div className="flex items-center gap-4 flex-1 pr-4">
              {/* Number indicator */}
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500"
                animate={{
                  background: isOpen 
                    ? 'linear-gradient(135deg, hsl(45 80% 55% / 0.3), hsl(35 85% 45% / 0.2))'
                    : 'linear-gradient(135deg, hsl(220 15% 15% / 0.8), hsl(220 20% 10% / 0.9))',
                  color: isOpen ? 'hsl(45 80% 60%)' : 'hsl(220 10% 55%)',
                  boxShadow: isOpen 
                    ? '0 0 20px hsl(45 80% 55% / 0.3), inset 0 0 10px hsl(45 80% 55% / 0.1)'
                    : '0 0 0px transparent',
                }}
                style={{
                  border: '1px solid hsl(45 80% 55% / 0.2)',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* Question text */}
              <motion.span
                className="font-medium text-base lg:text-lg transition-colors duration-300"
                animate={{
                  color: isOpen ? 'hsl(45 80% 70%)' : isHovered ? 'hsl(45 20% 90%)' : 'hsl(45 20% 85%)',
                }}
              >
                {faq.question}
              </motion.span>
            </div>

            {/* Toggle icon */}
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden"
              animate={{
                background: isOpen 
                  ? 'linear-gradient(135deg, hsl(45 80% 55% / 0.25), hsl(35 85% 45% / 0.15))'
                  : 'linear-gradient(135deg, hsl(220 15% 15% / 0.6), hsl(220 20% 10% / 0.8))',
                boxShadow: isOpen 
                  ? '0 0 25px hsl(45 80% 55% / 0.4), inset 0 0 15px hsl(45 80% 55% / 0.15)'
                  : '0 0 0px transparent, inset 0 0 0px transparent',
              }}
              style={{
                border: '1px solid hsl(45 80% 55% / 0.25)',
              }}
            >
              {/* Rotating plus/minus */}
              <motion.div
                animate={{ rotate: isOpen ? 135 : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-5 h-5"
              >
                <motion.span 
                  className="absolute top-1/2 left-0 w-full h-0.5 rounded-full -translate-y-1/2"
                  animate={{
                    background: isOpen ? 'hsl(45 80% 60%)' : 'hsl(220 10% 60%)',
                  }}
                />
                <motion.span 
                  className="absolute top-0 left-1/2 w-0.5 h-full rounded-full -translate-x-1/2"
                  animate={{
                    background: isOpen ? 'hsl(45 80% 60%)' : 'hsl(220 10% 60%)',
                  }}
                />
              </motion.div>
              
              {/* Glow ring on open */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1 : 0.5,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  background: 'radial-gradient(circle, hsl(45 80% 55% / 0.2), transparent 70%)',
                }}
              />
            </motion.div>
          </button>
          
          {/* Answer section */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: 'auto', 
                  opacity: 1,
                  transition: {
                    height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                    opacity: { duration: 0.3, delay: 0.1 }
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2 }
                  }
                }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 relative">
                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-left"
                  />
                  
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="pt-4 pl-14 text-muted-foreground leading-relaxed text-sm lg:text-base"
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom reflection */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, hsl(45 80% 55% / 0.02), transparent)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on background glow
      gsap.to('.faq-bg-glow', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="faq" 
      ref={sectionRef} 
      className="relative py-24 lg:py-32 overflow-hidden "
      style={{
        background: 'linear-gradient(180deg, hsl(220 20% 4%), hsl(220 25% 3%))',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large ambient glow */}
        <div 
          className="faq-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(45 80% 55% / 0.06), transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(45 80% 55% / 0.4) 1px, transparent 1px),
              linear-gradient(90deg, hsl(45 80% 55% / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Corner accents */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at top right, hsl(45 80% 55% / 0.05), transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at bottom left, hsl(45 80% 55% / 0.05), transparent 70%)',
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-gold/20"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-gold/15"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ top: '60%', right: '15%' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 ">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Luxury badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
            style={{
              background: 'linear-gradient(135deg, hsl(45 80% 55% / 0.15), hsl(45 80% 55% / 0.05))',
              border: '1px solid hsl(45 80% 55% / 0.3)',
              boxShadow: '0 0 40px hsl(45 80% 55% / 0.1)',
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-gold "
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-gold text-sm font-medium tracking-[0.15em] uppercase">
              FAQ
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-gold "
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Main title with shimmer */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 "
          >
            <span className="text-white">Frequently Asked </span>
            <span className="gold-shimmer  text-gradient-gold">Questions</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about our exclusive luxury car rental experience
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 mx-auto w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </div>

        {/* FAQ items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-muted-foreground mb-8 text-lg">
            Still have questions? We're here to help.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative group px-10 py-4 rounded-full font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, hsl(45 80% 55% / 0.1), hsl(45 80% 55% / 0.05))',
              border: '1px solid hsl(45 80% 55% / 0.4)',
              color: 'hsl(45 80% 65%)',
            }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, hsl(45 80% 55% / 0.2), hsl(45 80% 55% / 0.1))',
                boxShadow: '0 0 40px hsl(45 80% 55% / 0.3)',
              }}
            />
            
            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(45 80% 55% / 0.3), transparent)',
              }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              Contact Our Concierge Team
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
