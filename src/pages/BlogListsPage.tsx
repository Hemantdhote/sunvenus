// import React from 'react'
// import BlogHero from "../components/blogs/BlogHero"
// import BlogGrid from '@/components/blogs/BlogGrid'
// import Navbar from '@/components/Navbar'

// const BlogListsPage = () => {
  
//   return (
//     <div>
//       <Navbar/>
//       <BlogHero/>
//       <div className='mt-20'>
//       <BlogGrid/>
//       </div>
//     </div>
//   )
// }

// export default BlogListsPage



import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blogs/BlogHero";
import BlogCard from "@/components/blogs/BlogCard";
import { blogs } from "@/data/blogs";

gsap.registerPlugin(ScrollTrigger);

const BlogListsPage = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  /* ===============================
     SMOOTH SCROLL (LENIS)
  =============================== */
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  /* ===============================
     GSAP SCROLL ANIMATION
  =============================== */
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".blog-card");

    if (!cards) return;

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <BlogHero />

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32 mt-24">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogListsPage;
