import { motion } from 'framer-motion';
import { useState } from 'react';

import facebook from "../assets/brands/facebook-3-2.svg"
import instagram from "../assets/brands/murtala.svg"
import linkedln from "../assets/brands/linkedin-icon-2.svg"
import telegram from "../assets/brands/telegram.svg"

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
  { name: 'Facebook', icon: facebook, href: '#' },
  { name: 'Instagram', icon: instagram, href: '#' },
  { name: 'Telegram', icon: telegram, href: '#' },
  { name: 'LinkedIn', icon: linkedln, href: '#' },
];

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              className="flex items-center gap-2 cursor-pointer mb-6"
              onClick={() => scrollToSection('#home')}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
                <span className="text-secondary font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-semibold">
                Sun<span className="text-gold">Venus</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
              Premium luxury car rentals since 2009. Experience the pinnacle of automotive excellence with our curated fleet.
            </p>
            {/* <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-secondary transition-all duration-300"
                >
                  <span className="text-xs uppercase font-bold">
                    {social.charAt(0).toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div> */}

            <div className="flex gap-4">
  {socialLinks.map((social) => (
    <motion.a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-11 h-11 rounded-full
        bg-secondary-foreground/10
        flex items-center justify-center
        hover:bg-gold
        transition-colors duration-300
        group"
    >
      <img
        src={social.icon}
        alt={social.name}
        className="w-5 h-5 object-contain
          opacity-80
          group-hover:opacity-100
          
          group-hover:invert"
      />
    </motion.a>
  ))}
</div>




          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Fleet', href: '#fleet' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-secondary-foreground/70">
                  123 Luxury Avenue<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-secondary-foreground/70">+1 (800) SUN-VENUS</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-secondary-foreground/70">hello@sunvenus.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-secondary-foreground/70 mb-6">
              Subscribe to receive exclusive offers and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-gold transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-luxury"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © 2025 SunVenus. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/50 hover:text-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
