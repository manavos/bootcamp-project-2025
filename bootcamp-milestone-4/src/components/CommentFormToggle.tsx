"use client";

import React, { useState } from "react";
import CommentForm from "./commentForm";

type ToggleProps = {
  type: "blog" | "portfolio";
  target: string;
  onNewComment?: (comment: IComment) => void;
};

export default function CommentFormToggle({ type, target, onNewComment }: ToggleProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Comment"}
      </button>
      {showForm && (
        <CommentForm type={type} target={target} onNewComment={onNewComment} />
      )}
    </div>
  );
}
