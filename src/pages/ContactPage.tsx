import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Navbar from '@/components/Navbar';

import contactVideo from "@/assets/videos/13127658_1920_1080_24fps.mp4"

gsap.registerPlugin(ScrollTrigger);

const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });

      gsap.from('.hero-subtitle', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
      });

      gsap.from('.hero-description', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.7,
      });

      // Decorative Lines Animation
      gsap.from('.deco-line', {
        scaleX: 0,
        duration: 1.5,
        ease: 'power3.inOut',
        delay: 0.9,
        stagger: 0.2,
      });

      // Video Reveal Animation
      if (videoRef.current) {
        gsap.from(videoRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          delay: 0.4,
        });
      }

      // Form Animation with ScrollTrigger
      gsap.from('.form-field', {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      });

      gsap.from('.form-header', {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Info Cards Animation
      gsap.from('.info-card', {
        scrollTrigger: {
          trigger: infoCardsRef.current,
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });

      // Map Section Animation
      if (mapRef.current) {
        gsap.from(mapRef.current, {
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
          },
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        });
      }

      // Floating Animation for Pentagon SVG
      gsap.to('.floating-shape', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Rotating Animation for Pentagon
      gsap.to('.rotating-pentagon', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Parallax Effect on Scroll
      gsap.to('.parallax-element', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 200,
        ease: 'none',
      });

      // Button Hover Animation
      const buttons = document.querySelectorAll('.luxury-button');
      buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div ref={containerRef} className="relative bg-white text-gray-900 overflow-hidden">
      <Navbar />


      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        {/* Background Video with Light Overlay */}
        <div ref={videoRef} className="absolute  overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover "
          >
            <source
              src={contactVideo}
              type="video/mp4"
            />
          </video>
          <div className="absolute  bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="deco-line h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>

          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-6 text-white font-sans">
            GET IN
            <span className="block font-bold text-gold font-sans italic">Touch</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-widest text-primary mb-4">
            ELEVATE YOUR JOURNEY
          </p>

          <p className="hero-description text-base md:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Experience unparalleled luxury. Our concierge team is ready to curate
            your perfect driving experience, 24/7.
          </p>

          <div className="deco-line h-[1px] w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 parallax-element">
          <div className="w-[1px] h-16 bg-gradient-to-b from-amber-600 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 z-10 bg-gradient-to-b from-white to-gray-50">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className=" group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative border border-gray-200 hover:border-amber-500/50 transition-all duration-500 p-10">
              <div className="w-16 h-16 mb-6 flex items-center justify-center border border-amber-500/40 rounded-full bg-amber-50">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium font-sans tracking-wider mb-3 text-gold">CALL US</h3>
              <p className="text-gray-600 text-sm mb-4 tracking-wide">24/7 Concierge Service</p>
              <p className="text-gray-900 text-lg font-light tracking-wider">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Email Card */}
          <div className=" group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative border border-gray-200 hover:border-amber-500/50 transition-all duration-500 p-10">
              <div className="w-16 h-16 mb-6 flex items-center justify-center border border-amber-500/40 rounded-full bg-amber-50">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium font-sans tracking-wider mb-3 text-gold">EMAIL US</h3>
              <p className="text-gray-600 text-sm mb-4 tracking-wide">Quick Response Team</p>
              <p className="text-gray-900 text-lg font-light tracking-wider">luxury@elite-cars.com</p>
            </div>
          </div>

          {/* Location Card */}
          <div className=" group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative border border-gray-200 hover:border-amber-500/50 transition-all duration-500 p-10">
              <div className="w-16 h-16 mb-6 flex items-center justify-center border border-amber-500/40 rounded-full bg-amber-50">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium font-sans tracking-wider mb-3 text-gold">VISIT US</h3>
              <p className="text-gray-600 text-sm mb-4 tracking-wide">Luxury Showroom</p>
              <p className="text-gray-900 text-lg font-light tracking-wider">Beverly Hills, CA 90210</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      >
        {/* Subtle background accent */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/30 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gray-200/40 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT: Editorial Content */}
            <div>
              <div className="form-header mb-14">
                <div className="h-[1px] w-20 bg-gradient-to-r from-amber-600 to-transparent mb-8" />

                <h2 className="text-5xl font-sans  md:text-6xl xl:text-7xl font-light tracking-wider mb-8 text-gray-900">
                  Reserve Your
                  <span className="block font-sans font-medium italic text-primary">
                    Experience
                  </span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  Share your vision with us. Our concierge team will design a
                  personalized luxury driving experience crafted exclusively for you.
                </p>
              </div>

              {/* Luxury Image Card */}
              <div className="relative overflow-hidden group shadow-2xl rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80"
                  alt="Luxury Car"
                  className="w-full h-[420px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-xs tracking-[0.3em] text-gray-200 mb-2">
                    PRECISION ENGINEERING
                  </p>
                  <p className="text-2xl font-light text-amber-300">
                    Uncompromising Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Luxury Form */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm p-10 md:p-14">
              <form className="space-y-7" onSubmit={handleSubmit}>

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["First Name", "Last Name"].map((label, i) => (
                    <div className="form-field" key={i}>
                      <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">
                        {label}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-gray-400 focus:border-primary outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                        placeholder={label === "First Name" ? "John" : "Doe"}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="form-field">
                  <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-primary outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="form-field">
                  <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-primary outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Service */}
                <div className="form-field">
                  <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">
                    SERVICE INTEREST
                  </label>
                  <select className="w-full bg-transparent border-b border-gray-400 focus:border-primary outline-none py-3 text-gray-900 transition-colors">
                    <option>Select a service</option>
                    <option>Luxury Car Rental</option>
                    <option>Chauffeur Service</option>
                    <option>Special Event</option>
                    <option>Corporate Fleet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-field">
                  <label className="block text-xs tracking-[0.3em] text-gray-500 mb-3">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border border-gray-300 focus:border-primary outline-none p-4 text-gray-900 placeholder-gray-400 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* CTA */}
                <div className="form-field pt-6">
                  <button
                    type="submit"
                    className="luxury-button w-full btn-luxury py-4 tracking-[0.3em] text-xs text-white transition-all duration-500 shadow-xl hover:shadow-2xl"
                  >
                    SUBMIT REQUEST
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Map & Location Section */}
<section ref={mapRef} className="relative py-24 px-6 md:px-12 lg:px-24 z-10 bg-gray-50 overflow-hidden">
  
  <div className="pointer-events-none absolute top-[-15%] left-1/2 w-[140%] h-[140px] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>


  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
      <h2 className="text-5xl md:text-6xl font-medium font-sans tracking-wider mb-4 text-gray-900">
        Our <span className="font-sans font-medium italic text-gold">Locations</span>
      </h2>
      <p className="text-gray-600 text-lg">
        Find us in the world's most prestigious destinations
      </p>
    </div>

    {/* Location Details */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div className="text-center p-8 bg-white border border-gray-200 hover:border-amber-500/50 transition-colors duration-300 shadow-md hover:shadow-lg">
        <h3 className="text-xl tracking-wider mb-2 text-gold font-sans font-medium">BEVERLY HILLS</h3>
        <p className="text-gray-600 text-sm">123 Rodeo Drive, CA 90210</p>
        <p className="text-gray-500 text-xs mt-2">Mon - Sun: 8AM - 10PM</p>
      </div>

      <div className="text-center p-8 bg-white border border-gray-200 hover:border-amber-500/50 transition-colors duration-300 shadow-md hover:shadow-lg">
        <h3 className="text-xl tracking-wider mb-2 text-gold font-sans font-medium">MANHATTAN</h3>
        <p className="text-gray-600 text-sm">456 5th Avenue, NY 10018</p>
        <p className="text-gray-500 text-xs mt-2">Mon - Sun: 8AM - 10PM</p>
      </div>

      <div className="text-center p-8 bg-white border border-gray-200 hover:border-amber-500/50 transition-colors duration-300 shadow-md hover:shadow-lg">
        <h3 className="text-xl tracking-wider mb-2 text-gold font-sans font-medium">MIAMI</h3>
        <p className="text-gray-600 text-sm">789 Ocean Drive, FL 33139</p>
        <p className="text-gray-500 text-xs mt-2">Mon - Sun: 8AM - 10PM</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer CTA */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl tracking-wider mb-6 text-gray-900 font-sans font-medium ">
            Ready to Experience <span className="font-sans italic text-gold font-medium">Luxury</span>?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Join our exclusive clientele and discover the art of premium automotive service.
          </p>
          <button className=" relative overflow-hidden group btn-luxury py-4 px-12 tracking-widest text-sm transition-all duration-500 ">
            <span className="relative z-10 text-white font-medium">
              BOOK NOW
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;