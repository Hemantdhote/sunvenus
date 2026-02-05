import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const BlogCard = ({ blog }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <article
      ref={cardRef}
      className="group bg-red-500 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
    >
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 space-y-3">
        <span className="text-xs tracking-widest uppercase text-gray-500">
          {blog.category}
        </span>

        <h3 className="text-xl font-serif text-gray-900 leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {blog.description}
        </p>

        <div className="pt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
