import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";

const BlogGrid = () => {
  console.log(blogs);
  
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
