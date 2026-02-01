import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock } from 'lucide-react';
import gsap from 'gsap';
import heroImage from '@/assets/hero-car.jpg';
// import carVideo from "../assets/brands/13103349_1920_1080_60fps.mp4"
import carVideo from "../assets/brands/test.mp4"
import BookingBar from './BookingBar';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo(
        '.hero-form',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.1 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full">
          <video
            src={carVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ transform: "rotateY(180deg)" }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 ">
              Premium Luxury Experience
            </motion.span>

            <h1 className="hero-title font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground leading-tight mb-6">
              Drive Your 
              <span className="block text-gradient-gold">Dream Car</span>
              Today
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-secondary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8">
              Experience the pinnacle of automotive luxury with our exclusive fleet of premium vehicles. Unmatched elegance, unparalleled service.
            </p>

            <div className="hero-subtitle flex flex-wrap gap-8 justify-center lg:justify-start text-secondary-foreground/90">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Premium Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}



        <BookingBar/>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-secondary-foreground/60">
          {/* <span className="text-xs uppercase tracking-widest">Scroll</span> */}
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-gold" />
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
