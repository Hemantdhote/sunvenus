import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BlogHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section className="pt-40 pb-24 text-center bg-[#fafafa]">
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-serif text-gray-900"
      >
        Resources & Insights
      </h1>

      <p
        ref={subtitleRef}
        className="mt-6 max-w-xl mx-auto text-gray-600 text-lg"
      >
        The latest industry news, interviews, technologies, and resources.
      </p>
    </section>
  );
};

export default BlogHero;
