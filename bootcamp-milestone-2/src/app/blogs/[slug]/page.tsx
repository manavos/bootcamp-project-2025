import { notFound } from "next/navigation";
import Image from "next/image";

type Blog = {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  content: string;
};

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
    cache: "no-store", // disable caching so changes show immediately
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) return notFound();

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>
      <p><strong>{new Date(blog.date).toLocaleDateString()}</strong></p>
      <Image src={blog.image} alt={blog.imageAlt} width={800} height={500} />
      <p>{blog.content}</p>
    </main>
  );
}
