import { IBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="py-16">
      <h1 className="text-4xl text-center my-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-11/12 mx-auto">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-11/12 mx-auto">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
