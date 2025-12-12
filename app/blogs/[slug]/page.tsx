import { notFound } from "next/navigation";
import Image from "next/image";
import style from "../blogs.module.css";
import Comment from "../../../components/Comment";
import CommentForm from "../../../components/commentForm";

type IComment = {
  user: string;
  time: Date;
  comment: string;
};

type Blog = {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  content: string;
  comments: IComment[];
};

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

// Await params.slug because it might be a Promise
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // <-- await here
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  return (
    <main className={style.blogDetail}>
      <h1 className="page-title">{blog.title}</h1>
      <h2>
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h2>
      <Image src={blog.image} alt={blog.imageAlt} width={800} height={500} />
      <p>{blog.content}</p>
      <h2>Comments</h2>
      {blog.comments && blog.comments.length > 0 ? (
        blog.comments.map((comment: IComment, i: number) => (
          <Comment key={i} comment={comment} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}

      <h3 className={style.addComment}>Add comment</h3>

      <CommentForm slug={slug} />
    </main>
  );
}
