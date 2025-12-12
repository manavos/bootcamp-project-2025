import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import Portfolio from "../../../../database/projectSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body = await req.json();
    const { project, user, comment } = body;

    if (!project || !user || !comment) {
      return NextResponse.json(
        { error: "Missing required fields: slug, user, and comment" },
        { status: 400 }
      );
    }

    const newComment = {
      user,
      comment,
      time: new Date(),
    };

    // add comment to project
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { project },
      { $push: { comments: newComment } },
      { new: true } // return updated doc
    );

    if (!updatedPortfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment added", portfolio: updatedPortfolio },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding portfolio comment:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
