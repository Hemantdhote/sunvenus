// import { motion } from "framer-motion";
// import { MessageCircle } from "lucide-react";

// export default function LuxuryCTASection() {
//   return (
//     <section className="relative w-full h-[620px] overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center scale-105"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop')",
//         }}
//       />

//       {/* Dark Luxury Overlay */}
//       <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-6xl mx-auto px-6 text-center">

//           {/* Small Label */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-xs tracking-[0.35em] uppercase text-gold mb-5"
//           >
//             Drive The Luxury
//           </motion.p>

//           {/* Heading */}
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-semibold text-white leading-tight"
//           >
//             Interested in driving{" "}
//             <span className="text-gold">luxury cars</span> daily?
//           </motion.h2>

//           {/* Subtext */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             viewport={{ once: true }}
//             className="mt-6 text-sm md:text-base text-white/80 max-w-2xl mx-auto"
//           >
//             Join our subscription model and experience a variety of premium
//             cars tailored to your lifestyle.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             viewport={{ once: true }}
//             className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             {/* WhatsApp */}
//             <a
//               href="#"
//               className="
//                 flex items-center gap-3
//                 px-7 py-3 rounded-full
//                 border border-white/30
//                 bg-white/10 backdrop-blur-xl
//                 text-white text-sm
//                 hover:border-gold hover:text-gold
//                 transition-all duration-500
//               "
//             >
//               <MessageCircle className="w-5 h-5" />
//               WhatsApp
//             </a>

//             {/* Know More */}
//             <a
//               href="#"
//               className="
//                 px-10 py-3 rounded-full
//                 bg-gold text-black text-sm font-medium
//                 hover:bg-gold/90
//                 transition-all duration-500
//                 shadow-[0_15px_40px_rgba(212,175,55,0.35)]
//               "
//             >
//               Know More
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import { motion } from "framer-motion";
// import { MessageCircle, ArrowRight } from "lucide-react";

// export default function LuxurySubscriptionCTA() {
//   return (
//     <section className="relative w-full min-h-[560px] overflow-hidden bg-black">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2400&auto=format&fit=crop')",
//         }}
//       />

//       {/* Dark gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           viewport={{ once: true }}
//           className="
//             max-w-xl
//             p-10
//             bg-white/10
//             backdrop-blur-2xl
//             border border-white/20
//             rounded-3xl
//             shadow-[0_40px_90px_rgba(0,0,0,0.65)]
//           "
//         >
//           {/* Accent line */}
//           <div className="w-12 h-[2px] bg-gold mb-6" />

//           {/* Small label */}
//           <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
//             Subscription Model
//           </p>

//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
//             Drive a different{" "}
//             <span className="text-gold">luxury car</span>
//             <br />
//             whenever you want
//           </h2>

//           {/* Description */}
//           <p className="mt-6 text-sm leading-relaxed text-white/80">
//             One subscription. Multiple premium cars.  
//             No ownership stress — just pure driving pleasure,
//             curated for your lifestyle.
//           </p>

//           {/* Actions */}
//           <div className="mt-10 flex items-center gap-6">
//             {/* WhatsApp */}
//             <a
//               href="#"
//               className="
//                 inline-flex items-center gap-3
//                 px-6 py-3
//                 rounded-full
//                 border border-white/30
//                 text-white text-sm
//                 hover:border-gold hover:text-gold
//                 transition-all duration-500
//               "
//             >
//               <MessageCircle className="w-5 h-5" />
//               Talk on WhatsApp
//             </a>

//             {/* Know more */}
//             <a
//               href="#"
//               className="
//                 inline-flex items-center gap-2
//                 text-sm text-gold
//                 hover:text-gold/80
//                 transition
//               "
//             >
//               Explore Plans
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
//     </section>
//   );
// }






import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

export default function LuxuryCTASection() {
  return (
    <section className="relative w-full py-24 md:py-12 bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold text-xs tracking-[0.3em] uppercase rounded-full mb-6">
            <Star className="w-3 h-3 fill-current" />
            Premium Experience
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop"
                alt="Luxury Vehicle"
                className="w-full h-full object-cover"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
            </div>

            {/* Accent Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6 font-sans">
              Drive Luxury,
              <br />
              <span className="italic font-light ">Every Day</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Access an exclusive fleet of premium vehicles through our flexible 
              subscription model. Experience different luxury cars tailored to your 
              lifestyle, without the commitment of ownership.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {[
                "Swap cars monthly or weekly",
                "All-inclusive maintenance & insurance",
                "Concierge delivery service"
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 pt-10 border-t border-gray-200"
            >
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-black">500+</div>
                  <div className="text-sm text-gray-500">Active Members</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="text-3xl font-bold text-black">50+</div>
                  <div className="text-sm text-gray-500">Luxury Brands</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">4.9 Rating</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}