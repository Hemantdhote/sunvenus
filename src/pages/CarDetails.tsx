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
} from "lucide-react";

// import carHero from "@/assets/cars/maybach-s680.jpg";
// import interior from "@/assets/cars/maybach-interior.jpg";
// import wheel from "@/assets/cars/maybach-wheel.jpg";
// import steering from "@/assets/cars/maybach-steering.jpg";
// import rear from "@/assets/cars/maybach-rear.jpg";


import carHero from "@/assets/cars/maybach-s680.jpg";
import interior from "@/assets/cars/maybach-gls600.jpg";
import wheel from "@/assets/cars/maybach-s580.jpg";
import rear from "@/assets/cars/maybach-pullman.jpg";
import steering from "@/assets/cars/maybach-gls-night.jpg";
import maybachS580Exec from "@/assets/cars/maybach-s580-exec.jpg";
import Navbar from "@/components/Navbar";

const CarDetails = () => {
  return (
    <div className="relative bg-[#f7f9fb] text-zinc-900 overflow-hidden">
      <Navbar/>
      {/* Soft gradient vectors */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/40 blur-[140px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-amber-200/40 blur-[140px] rounded-full" />

      {/* HERO */}
      <section className="relative container mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="animate-fade-in">
          <Badge className="mb-4 bg-zinc-900 text-white">
            COLLECTION 2024
          </Badge>

          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
            MERCEDES
            <span className="block font-light italic text-zinc-600">
              Maybach S 680
            </span>
          </h1>

          <p className="mt-6 text-zinc-600 max-w-xl leading-relaxed">
            The pinnacle of automotive luxury. A seamless blend of handcrafted
            elegance, whisper-quiet comfort and commanding V12 performance.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-6">
            <Star className="w-5 h-5 fill-blue-600 text-blue-600" />
            <span className="font-medium">5.0</span>
            <span className="text-sm text-zinc-500">(124 reviews)</span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center gap-8 mt-10">
            <div>
              <p className="text-3xl font-bold text-blue-700">$1,200</p>
              <p className="text-xs text-zinc-500 tracking-wide">PER DAY</p>
            </div>

            <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:opacity-90 transition">
              Reserve Now
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-slide-up">
          <img
            src={carHero}
            alt="Maybach S 680"
            className="w-full rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
          />
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-white py-16 border-t">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10">
            Specifications
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Gauge, title: "4.4s", label: "0-60 mph" },
              { icon: Zap, title: "V12", label: "Biturbo Engine" },
              { icon: Cpu, title: "621 hp", label: "Power" },
              { icon: Users, title: "4 Adults", label: "Capacity" },
              { icon: Briefcase, title: "3 Bags", label: "Luggage" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#f7f9fb] rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <item.icon className="w-7 h-7 mx-auto text-blue-700 mb-4" />
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIOR */}
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src={interior}
          alt="Interior"
          className="rounded-3xl shadow-xl animate-slide-up"
        />

        <div>
          <h3 className="text-3xl font-bold mb-6">
            First-Class Rear Suite
          </h3>
          <p className="text-zinc-600 leading-relaxed">
            Experience reclining executive seats with massage functions,
            folding tables, ambient lighting and a refrigerated compartment
            with silver-plated champagne flutes.
          </p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-white py-20 border-t">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-12">
            Luxury Amenities
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Snowflake, title: "Rear Fridge", desc: "Champagne cooling system" },
              { icon: Speaker, title: "Burmester® 4D", desc: "Immersive surround sound" },
              { icon: Sun, title: "Panoramic Roof", desc: "Electrochromic glass" },
              { icon: Wifi, title: "Executive Wi-Fi", desc: "High-speed connectivity" },
              { icon: Navigation, title: "AR Navigation", desc: "Augmented reality HUD" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#f7f9fb] p-6 hover:shadow-lg transition"
              >
                <item.icon className="w-6 h-6 text-blue-700 mb-4" />
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {[wheel, steering, rear].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Maybach detail"
              className="rounded-2xl shadow-md hover:scale-[1.02] transition"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
