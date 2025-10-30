import React from "react";
import Image from "next/image";
import Link from "next/link"
import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData"

export default function Blog() {
  return (
     <main>
      <h1 className="page-title"><strong>Blog</strong></h1>
        <div id="blog-container" className="my-blog">
          {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}