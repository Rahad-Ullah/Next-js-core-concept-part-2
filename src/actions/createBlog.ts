"use server";

import { IBlog } from "@/types";

export const createBlog = async (blogData: IBlog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};
