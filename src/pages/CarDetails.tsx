import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Zap,
  Gauge,
  Users,
  Briefcase,
  Cpu,
  Snowflake,
  Speaker,
  Sun,
  Wifi,
  Navigation,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// GSAP Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Images */
import carHero from "@/assets/cars/maybach-s680.jpg";
import interior1 from "@/assets/cars/maybach-gls600.jpg";
import interior2 from "@/assets/cars/maybach-s580.jpg";
import interior3 from "@/assets/cars/maybach-pullman.jpg";
import interior4 from "@/assets/cars/maybach-gls-night.jpg";
import interior5 from "@/assets/cars/maybach-s580-exec.jpg";
import videoCar from "@/assets/videos/12958998_2160_3840_30fps.mp4";

const CarDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stickyGalleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Split Reveal
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
      });

      // 2. Video Parallax Zoom
      gsap.to(videoRef.current, {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. Floating Specs Animation (Staggered Reveal)
      gsap.from(".spec-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".specs-grid",
          start: "top 80%",
        },
      });

      // 4. Sticky Section Image Parallax
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.from(img, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // 5. Sticky Gallery Effect - FIXED
      ScrollTrigger.create({
        trigger: ".sticky-gallery",
        start: "top top",
        end: () => {
          const gallery = document.querySelector(".sticky-gallery") as HTMLElement;
          const content = document.querySelector(".sticky-gallery-content") as HTMLElement;
          if (!gallery || !content) return "bottom bottom";

          // Calculate: total gallery height minus viewport height plus content height
          return `+=${gallery.offsetHeight - window.innerHeight}`;
        },
        pin: ".sticky-gallery-content",
        pinSpacing: false,
        anticipatePin: 1,
        markers: false, // Set to true for debugging
      });

      // 6. Booking Bar Fade-In (Sticky)
      gsap.to(".sticky-booking-bar", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".main-details",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#f7f9fb] text-zinc-900 overflow-x-hidden">
      <Navbar />

      {/* Luxury Ambient Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-100/30 blur-[120px] rounded-full" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={videoCar}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

        <div className="absolute top-40 left-10 z-20">
          <h2 className="text-white text-2xl lg:text-6xl font-sans font-light tracking-[0.15em] uppercase leading-tight">
            The Art of
            <span className="block mt-2 font-bold tracking-widest">
              Effortless Travel
            </span>
          </h2>

          <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-white/80 to-transparent rounded-full" />
        </div>

        <div className="absolute bottom-20 right-10 z-20 max-w-md text-right hidden lg:block">
          <p className="text-white/80 text-xl font-light italic leading-relaxed">
            "Luxury is not about excess — it's about experience, silence, and perfection."
          </p>
          <span className="block mt-4 text-amber-400 text-xs tracking-[0.3em] uppercase font-bold">
            Maybach Heritage
          </span>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="main-details relative z-10 container mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Badge className="bg-zinc-900 text-white px-6 py-2 rounded-full text-xs tracking-widest uppercase">
            Limited Series 2024
          </Badge>

          <h1 className="text-6xl lg:text-7xl font-sans font-bold tracking-tight text-zinc-900">
            MERCEDES
            <span className="block font-light italic text-zinc-400 mt-2">Maybach S 680</span>
          </h1>

          <p className="text-zinc-500 text-xl leading-relaxed max-w-lg">
            Experience the pinnacle of automotive engineering. Handcrafted perfection meets whisper-quiet V12 performance.
          </p>

          <div className="flex items-center gap-4 py-6 border-y border-zinc-200">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
                  U{i}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="font-bold">5.0</span>
              </div>
              <p className="text-xs text-zinc-400 uppercase tracking-tighter">124 Verified Bookings</p>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <span className="text-5xl font-black text-primary tracking-tighter">$1,200</span>
              <p className="text-xs text-zinc-400 font-bold uppercase mt-1 tracking-widest">Daily Rate</p>
            </div>
            <Button className="group relative overflow-hidden rounded-2xl px-12 py-8 btn-luxury text-white shadow-2xl transition-all ">
              <span className="relative z-10 flex items-center gap-2 text-lg font-bold">
                Book Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-amber-500/10 blur-3xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1680451553374-09d8d6a1ca58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Maybach"
            className="relative w-full rounded-[3rem] shadow-2xl object-cover aspect-[4/5] lg:aspect-auto"
          />
        </div>
      </section>

      {/* ================= TECHNICAL SPECS (Horizontal Reveal) ================= */}
      <section className="bg-white py-20 border-t">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-14 font-sans ">
            Engineering Masterpiece
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Gauge, title: "4.4s", label: "0–60 mph" },
              { icon: Zap, title: "V12", label: "Biturbo Engine" },
              { icon: Cpu, title: "621 hp", label: "Total Power" },
              { icon: Users, title: "4 Adults", label: "Luxury Seating" },
              { icon: Briefcase, title: "3 Bags", label: "Luggage" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f7f9fb] rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <item.icon className="w-8 h-8 mx-auto text-blue-800 mb-5" />
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STICKY GALLERY ================= */}
      <section
        ref={stickyGalleryRef}
        className="sticky-gallery relative bg-[#f4f6f8] text-zinc-900"
      >
        <div className="container mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20">
          <div className="sticky-gallery-content self-start space-y-8">
            <h3 className="text-5xl lg:text-7xl font-sans font-bold leading-none tracking-tighter">
              First-Class <br />
              <span className="text-zinc-500 ita">Rear Suite</span>
            </h3>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-md">
              Reclining executive seats, hot-stone massage, and a refrigerated champagne compartment redefine luxury travel.
            </p>
            <div className="h-1 w-24 bg-blue-600 rounded-full" />

            <div className="pt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold">32"</p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">4K Rear Display</p>
              </div>
              <div>
                <p className="text-3xl font-bold">64</p>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Ambient Colors</p>
              </div>
            </div>
          </div>

          <div className="sticky-gallery-images space-y-20 lg:space-y-10">
            {["https://images.unsplash.com/photo-1619466548431-54ffb2fe2674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxtZXJjZWRlc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1680451553374-09d8d6a1ca58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1636378182946-a5e6a2726503?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1610647169785-940d46a0809a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1580070312246-a6b005dcab10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcxfHxtZXJjZWRlc3xlbnwwfHwwfHx8MA%3D%3D"].map((img, i) => (
              <div key={i} className="parallax-img group relative rounded-md overflow-hidden shadow-md w-full aspect-[4/3]">
                <img
                  src={img}
                  alt="Interior"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity p-10 flex items-end">
                  <p className="text-white font-bold tracking-widest uppercase text-xs">Exquisite Detail 0{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section className="relative bg-gradient-to-br from-amber-50/30 via-slate-50 to-blue-50/20 py-32 overflow-hidden">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft Gradient Orbs */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tl from-blue-200/20 via-slate-100/20 to-transparent rounded-full blur-3xl" />

          {/* Subtle Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0, 0, 0) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }}
          />

          {/* Decorative Lines */}
          <div className="absolute top-1/4 right-0 w-96 h-[1px] bg-gradient-to-l from-amber-300/40 via-amber-200/20 to-transparent" />
          <div className="absolute bottom-1/3 left-0 w-80 h-[1px] bg-gradient-to-r from-blue-300/30 via-slate-200/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Left-Aligned Royal Header */}
          <div className="max-w-7xl mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-gradient-to-r from-amber-400 to-transparent" />
              <span className="text-amber-600 text-[11px] tracking-[0.3em] uppercase font-bold">
                Curated Excellence
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <h3 className="text-5xl lg:text-7xl font-sans font-bold leading-none tracking-tighter">
                  Crafted for <br />
                  <span className="text-zinc-500 ita">Distinction</span>
                </h3>
              </div>

              <div className="lg:text-right">
                <p className="text-zinc-400 text-xl leading-relaxed max-w-full">
                  An orchestration of refined features, each element carefully selected to elevate your journey into an experience of pure sophistication.
                </p>
              </div>
            </div>
          </div>

          {/* Luxury Amenities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Snowflake,
                title: "Champagne Sanctuary",
                desc: "Precision-controlled refrigeration maintaining optimal serving temperature for the finest vintages",
                color: "blue"
              },
              {
                icon: Speaker,
                title: "Burmester® High-End 4D",
                desc: "Immersive surround sound architecture delivering concert hall excellence",
                color: "purple"
              },
              {
                icon: Sun,
                title: "Celestial Canopy",
                desc: "Expansive panoramic roof with electrochromic technology and infinite tint gradations",
                color: "amber"
              },
              {
                icon: Wifi,
                title: "Seamless Connectivity",
                desc: "Enterprise-grade 5G network ensuring uninterrupted global communication",
                color: "emerald"
              },
              {
                icon: Navigation,
                title: "Augmented Guidance",
                desc: "Advanced heads-up display with augmented reality navigation overlay",
                color: "indigo"
              },
              {
                icon: Zap,
                title: "Whisper Technology",
                desc: "Pneumatic soft-close system engineered for silent, effortless operation",
                color: "rose"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60  hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5"
              >

                {/* Icon Container */}
                <div className="mb-6 inline-flex">
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200    transition-all duration-500">
                    <item.icon className="w-6 h-6 text-slate-700  transition-colors" strokeWidth={1.5} />

                  </div>
                </div>

                {/* Content */}
                <h4 className="font-bold text-xl mb-3 font-sans tracking-tight text-zinc-900">
                  {item.title}
                </h4>

                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  {item.desc}
                </p>

                {/* Number Watermark */}
                <div className="absolute bottom-4 right-6 text-7xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-500 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-amber-200 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-primary transition-colors">
                    <span className="tracking-wider uppercase font-medium">Premium Feature</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STICKY FOOTER BOOKING BAR ================= */}
      <div className="sticky-booking-bar fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl bg-white/80 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-4 flex items-center justify-between opacity-0 translate-y-20 transition-all duration-500">
        <div className="hidden sm:flex items-center gap-4 pl-4">
          <img src={carHero} className="w-12 h-12 rounded-xl object-cover" alt="mini" />
          <div>
            <p className="font-bold text-sm">Maybach S 680</p>
            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Available Now</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-xl font-black tracking-tighter">$1,200 <span className="text-[10px] text-zinc-400">/ DAY</span></p>
          </div>
          <Button className="rounded-2xl px-8 py-6 btn-luxury text-white font-bold text-sm ">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;