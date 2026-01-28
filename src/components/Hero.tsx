import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import heroImage from '@/assets/hero-car.jpg';
// import carVideo from "../assets/brands/13103349_1920_1080_60fps.mp4"
import carVideo from "../assets/brands/test.mp4"

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
        {/* <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" /> */}

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full">
          <video
            src={carVideo} // <-- your video file (mp4 / webm)
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ transform: "rotateY(180deg)" }}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* DARK LUXURY OVERLAYS */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" /> */}
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
              Drive Your Dream Car
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
          {/* <div className="hero-form">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Book Your Ride
              </h3>

              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Drop-off Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter drop-off location"
                      value={formData.dropoffLocation}
                      onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      value={formData.pickupTime}
                      onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Return Time
                    </label>
                    <input
                      type="time"
                      value={formData.returnTime}
                      onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-luxury w-full mt-2"
                >
                  Search Available Cars
                </motion.button>
              </div>
            </form>
          </div> */}

          {/* Booking Form */}
          <motion.div
            className="hero-form relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* <motion.form
    onSubmit={handleSubmit}
    whileHover={{ y: -3 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="
      relative
      rounded-3xl
      p-6 md:p-8
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      overflow-hidden
    "
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-1/2 left-1/3 w-2/3 h-full bg-gradient-to-br from-white/10 to-transparent rotate-12" />
    </div>

    <h3 className="relative font-sans text-white text-2xl font-semibold mb-6">
      Book Your Ride
    </h3>

    <div className="relative grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        
        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            placeholder="Enter pickup location"
            value={formData.pickupLocation}
            onChange={(e) =>
              setFormData({ ...formData, pickupLocation: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20
              backdrop-blur
              border border-white/20
              text-foreground
              placeholder:text-muted
              focus:outline-none
              focus:border-gold/60
              focus:ring-2 focus:ring-gold/30
              transition-all duration-300
            "
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Drop-off Location
          </label>
          <input
            type="text"
            placeholder="Enter drop-off location"
            value={formData.dropoffLocation}
            onChange={(e) =>
              setFormData({ ...formData, dropoffLocation: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 backdrop-blur
              border border-white/20
              text-foreground
              placeholder:text-muted
              focus:outline-none
              focus:border-gold/60
              focus:ring-2 focus:ring-gold/30
              transition-all duration-300
            "
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
    
        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Pickup Date
          </label>
          <input
            type="date"
            value={formData.pickupDate}
            onChange={(e) =>
              setFormData({ ...formData, pickupDate: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 backdrop-blur
              border border-white/20
              text-foreground
              focus:outline-none
              focus:border-gold/60
              focus:ring-2 focus:ring-gold/30
              transition-all duration-300
            "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Pickup Time
          </label>
          <input
            type="time"
            value={formData.pickupTime}
            onChange={(e) =>
              setFormData({ ...formData, pickupTime: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 backdrop-blur
              border border-white/20
              text-foreground
              focus:outline-none
              focus:border-gold/60
              focus:ring-2 focus:ring-gold/30
              transition-all duration-300
            "
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
       
        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Return Date
          </label>
          <input
            type="date"
            value={formData.returnDate}
            onChange={(e) =>
              setFormData({ ...formData, returnDate: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 backdrop-blur
              border border-white/20
              text-foreground
              focus:outline-none
              focus:border-gold/60
              focus:ring-2 focus:ring-gold/30
              transition-all duration-300
            "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-2">
            Return Time
          </label>
          <input
            type="time"
            value={formData.returnTime}
            onChange={(e) =>
              setFormData({ ...formData, returnTime: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 backdrop-blur
              border border-white/20
              text-foreground
              focus:outline-none
              focus:border-gold/60
              focus:ring-2 focus:ring-gold/30
              transition-all duration-300
            "
          />
        </div>
      </div>

      <motion.button
        whileHover={{ boxShadow: "0 0 30px rgba(212,175,55,0.35)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        type="submit"
        className="btn-luxury w-full mt-4"
      >
        Search Available Cars
      </motion.button>
    </div>
  </motion.form> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-secondary-foreground/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-gold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
