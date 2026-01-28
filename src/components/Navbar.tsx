// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Fleet', href: '#fleet' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'FAQ', href: '#faq' },
//     { name: 'Contact', href: '#footer' },
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
//             ? 'bg-card/95 backdrop-blur-lg shadow-lg py-4'
//             : 'bg-transparent py-6'
//           }`}
//       >
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => scrollToSection('#home')}
//           >
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
//               <span className="text-secondary font-serif font-bold text-lg">S</span>
//             </div>
//             <span className="font-serif text-xl font-semibold text-foreground">
//               Sun<span className="text-gradient-gold">Venus</span>
//             </span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className={`relative ${isScrolled
//                     ? 'text-black'
//                     : 'text-white'
//                   }  hover:text-foreground transition-colors duration-300 text-sm font-medium group`}
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
//               </button>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => scrollToSection('#home')}
//               className="btn-luxury text-sm px-6 py-3"
//             >
//               Book Now
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
//           >
//             <motion.span
//               animate={{
//                 rotate: isMobileMenuOpen ? 45 : 0,
//                 y: isMobileMenuOpen ? 10 : 0,
//               }}
//               className="w-full h-0.5 bg-foreground origin-left"
//             />
//             <motion.span
//               animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
//               className="w-3/4 h-0.5 bg-foreground"
//             />
//             <motion.span
//               animate={{
//                 rotate: isMobileMenuOpen ? -45 : 0,
//                 y: isMobileMenuOpen ? -10 : 0,
//               }}
//               className="w-full h-0.5 bg-foreground origin-left"
//             />
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 lg:hidden pt-24 bg-card/98 backdrop-blur-xl"
//           >
//             <div className="container mx-auto px-6 py-8">
//               <div className="flex flex-col gap-6">
//                 {navLinks.map((link, index) => (
//                   <motion.button
//                     key={link.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => scrollToSection(link.href)}
//                     className="text-2xl font-serif text-foreground hover:text-gold transition-colors text-left"
//                   >
//                     {link.name}
//                   </motion.button>
//                 ))}
//                 <motion.button
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: navLinks.length * 0.1 }}
//                   onClick={() => scrollToSection('#home')}
//                   className="btn-luxury mt-4 text-center"
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Fleet", href: "#fleet" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-card/90 backdrop-blur-xl shadow-[0_10px_40px_hsl(var(--gold)/0.25)] py-2" : "bg-white py-3 "
        }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#home")}>
            <motion.div
              animate={{
                boxShadow: isScrolled ? "0 0 25px hsl(var(--gold) / 0.6)" : "0 0 0px transparent",
              }}
              className="w-11 h-11 rounded-full bg-gradient-to-br bg-primary flex items-center justify-center">
              <span className="text-secondary font-serif font-bold text-lg">S</span>
            </motion.div>

            <span className="font-serif text-xl font-semibold text-primary tracking-wide">
              Sun<span className="text-gradient-gold">Venus</span>
            </span>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className={`relative text-md font-medium tracking-wide ${isScrolled ? "text-foreground" : "text-black"} group`}>
                {link.name}

                {/* Gold underline shimmer */}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(var(--gold) / 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#home")}
              className="btn-luxury text-sm px-7 py-3">
              Book Now
            </motion.button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-8 h-6 flex flex-col justify-between">
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 10 : 0,
              }}
              className="w-full h-0.5 bg-foreground origin-left"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-3/4 h-0.5 bg-foreground"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -10 : 0,
              }}
              className="w-full h-0.5 bg-foreground origin-left"
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden pt-28 bg-card/95 backdrop-blur-2xl">
            <div className="container mx-auto px-6 py-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="flex flex-col gap-7">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-3xl font-serif text-foreground hover:text-gold transition-colors text-left">
                    {link.name}
                  </motion.button>
                ))}

                <motion.button
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => scrollToSection("#home")}
                  className="btn-luxury mt-6 text-center">
                  Book Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
