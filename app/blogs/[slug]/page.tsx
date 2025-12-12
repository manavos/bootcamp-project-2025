import { notFound } from "next/navigation";
import Image from "next/image";
import style from "../blogs.module.css";
import Comment from "../../../components/Comment";
import connectDB from "../../../database/db";
import CommentForm from "../../../components/commentForm";
import Blog from "../../../database/blogSchema";

export type IComment = {
  user: string;
  time: Date;
  comment: string;
};


async function getBlog(slug: string) {
  await connectDB();

  try {
      const blogs = await Blog.findOne({ slug }).orFail();
      return blogs;
    } catch (err) {
      console.error("Error fetching blogs:", err);
      return null;
    }
}

// await params.slug because it might be a Promise
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; //  await here
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
