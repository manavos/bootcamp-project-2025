"use client";

import React, { useState } from "react";
import CommentForm from "./commentForm";

type CommentFormToggleProps = {
  target: string;
  type: "blog" | "portfolio";
  onAddComment: (comment: any) => void;
};

export default function CommentFormToggle({ target, type, onAddComment }: CommentFormToggleProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? "Cancel" : "Add Comment"}
      </button>

      {showForm && <CommentForm target={target} type={type} onAddComment={onAddComment} />}
    </div>
  );
}
