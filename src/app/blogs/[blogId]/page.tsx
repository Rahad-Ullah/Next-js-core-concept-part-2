import BlogDetails from "@/components/ui/BlogDetails";
import { IBlog } from "@/types";

interface IBlogId {
  params: {
    blogId: string;
  };
}

// to generate some blogs by SSG in build time
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: IBlog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: IBlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="py-16">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
