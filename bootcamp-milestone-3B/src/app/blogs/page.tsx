import React from "react";
import Image from "next/image";
import Link from "next/link"
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db"; 
import Blog from "@/database/blogSchema";
import Comment from "@/components/Comment";


// data fetching function
async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null;
  }
}

// server Component
export default async function BlogsPage() {
  const blogs = await getBlogs(); 

  if (!blogs) {
    return (
      <main>
        <h1 className="page-title"><strong>Blog</strong></h1>
        <p>Sorry, no blogs found.</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="page-title"><strong>Blog</strong></h1>
      <div id="blog-container" className="my-blog">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog._id.toString()}
            title={blog.title}
            date={new Date(blog.date).toLocaleDateString()}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
