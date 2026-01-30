import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

import facebook from "../assets/brands/facebook-3-2.svg";
import instagram from "../assets/brands/murtala.svg";
import linkedln from "../assets/brands/linkedin-icon-2.svg";
import telegram from "../assets/brands/telegram.svg";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Facebook', icon: facebook, href: '#' },
    { name: 'Instagram', icon: instagram, href: '#' },
    { name: 'Telegram', icon: telegram, href: '#' },
    { name: 'LinkedIn', icon: linkedln, href: '#' },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  /** SHARED LINK STYLE */
  const HoverLink = ({ children, onClick }: any) => (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 8 }}
      className="group flex items-center gap-2 text-secondary-foreground/60 hover:text-gold transition-colors duration-300 text-sm"
    >
      <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
      {children}
    </motion.button>
  );

  /** HEADING WITH HOVER UNDERLINE */
  const SectionHeading = ({ children }: any) => (
    <h4 className="
      relative inline-block font-sans text-lg font-semibold mb-6
      after:absolute after:left-0 after:-bottom-2
      after:h-[2px] after:w-0 after:bg-gold
      after:transition-all after:duration-500
      hover:after:w-full
    ">
      {children}
    </h4>
  );

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div
              className="flex items-center gap-2 cursor-pointer mb-6"
              onClick={() => scrollToSection('#home')}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
                <span className="text-secondary font-serif text-lg font-bold">S</span>
              </div>
              <span className="font-serif text-xl font-semibold">
                Sun<span className="text-gold">Venus</span>
              </span>
            </div>

            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Premium luxury car rentals since 2009. Experience the pinnacle of automotive excellence.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-gold transition group"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 opacity-80 group-hover:invert"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Fleet', href: '#fleet' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HoverLink onClick={() => scrollToSection(link.href)}>
                    {link.name}
                  </HoverLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <SectionHeading>Contact Us</SectionHeading>
            <ul className="space-y-4">
              <li>
                <HoverLink>
                  123 Luxury Avenue, Beverly Hills
                </HoverLink>
              </li>
              <li>
                <HoverLink>
                  +1 (800) SUN-VENUS
                </HoverLink>
              </li>
              <li>
                <HoverLink>
                  hello@sunvenus.com
                </HoverLink>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <SectionHeading>Newsletter</SectionHeading>
            <p className="text-secondary-foreground/70 mb-6">
              Subscribe to receive exclusive offers and updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 focus:border-gold outline-none"
              />
              <motion.button
                whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(var(--gold) / 0.6)",
              }}
              variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-luxury-sub"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © 2025 SunVenus. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a
                key={item}
                href="#"
                className="text-secondary-foreground/50 hover:text-gold transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
