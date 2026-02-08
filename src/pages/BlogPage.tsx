// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import BlogHero from "@/components/blogs/BlogHero";
// import BlogGrid from "@/components/blogs/BlogGrid";

// import "locomotive-scroll/dist/locomotive-scroll.css";

// gsap.registerPlugin(ScrollTrigger);

// const BlogPage = () => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const locoScroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       lerp: 0.08,
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(scrollRef.current, {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value!, { duration: 0, disableLerp: true })
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();

//     return () => {
//       locoScroll.destroy();
//       ScrollTrigger.killAll();
//     };
//   }, []);

//   return (
//     <main ref={scrollRef} data-scroll-container>
//       <BlogHero />
//       <BlogGrid />
//     </main>
//   );
// };

// export default BlogPage;




import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BlogHero from "@/components/blogs/BlogHero";
import BlogGrid from "@/components/blogs/BlogGrid";

import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value!, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Update after images load
    setTimeout(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container>
      <section data-scroll-section>
        <BlogHero />
      </section>

      <section data-scroll-section>
        <BlogGrid />
      </section>
    </main>
  );
};

export default BlogPage;
