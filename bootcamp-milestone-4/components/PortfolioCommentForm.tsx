"use client";

import React, { useState } from "react";

type FormState = {
  user: string;
  comment: string;
};

type PortfolioCommentFormProps = {
  project: string;
};

export default function PortfolioCommentForm({ project }: PortfolioCommentFormProps) {
  const [form, setForm] = useState<FormState>({ user: "", comment: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("/api/portfolio/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project,
          user: form.user,
          comment: form.comment,
        }),
      });

      if (!res.ok) {
        setStatus("Failed to post comment.");
        return;
      }

      setStatus("Comment posted!");
      setForm({ user: "", comment: "" });

      window.location.reload();
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        name="user"
        placeholder="Your name"
        value={form.user}
        onChange={handleChange}
      />

      <textarea
        name="comment"
        placeholder="Your comment"
        value={form.comment}
        onChange={handleChange}
      />

      <button type="submit">
        Add Comment
      </button>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </form>
  );
}
