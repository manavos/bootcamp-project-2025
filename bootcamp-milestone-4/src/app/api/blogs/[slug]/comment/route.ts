import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(req: NextRequest, context: { params: Promise<{ slug: string }> }) {

  await connectDB();

  const { slug } = await context.params;
  console.log("Slug received:", slug);

  const body = await req.json();
  const { user, comment } = body;

  if (!user || !comment) {
    return NextResponse.json(
      { error: "Missing required fields: user and comment" },
      { status: 400 }
    );
  }

  try {
    // create new comment
    const newComment = {
      user,
      time: new Date(),
      comment,
    };

    // push into blog's comment array
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true } // return updated document
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment added", blog: updatedBlog },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
