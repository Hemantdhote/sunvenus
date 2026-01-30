import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

export default function LuxuryCTASection() {
  return (
    <section className="relative w-full py-24 md:py-8 bg-white overflow-hidden">
      
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