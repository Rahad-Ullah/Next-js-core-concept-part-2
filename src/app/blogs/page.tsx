"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { IBlog } from "@/types";

const AllBlogPage = () => {
  // fetch data by fetch method in SSR mode
  //   const res = await fetch("http://localhost:5000/blogs", {
  //     cache: "no-store",
  //   });
  //   const blogs = await res.json();

  //   fetch data by redux api in Client side rendering mode
  const { data, isLoading, isError, error } = useGetBlogsQuery(undefined);
  console.log(data);

  return (
    <div className="py-16">
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-11/12 mx-auto">
        {data?.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogPage;
