"use client";

import { useState } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({ user: "", comment: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch(`/api/blogs/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setStatus("Failed to post comment.");
        return;
      }

      setStatus("Comment posted!");
      setForm({ user: "", comment: "" });
      window.location.reload(); // refresh comments
    } catch (err) {
      setStatus("Something went wrong.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        name="user"
        placeholder="Your name"
        value={form.user}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <textarea
        name="comment"
        placeholder="Your comment"
        value={form.comment}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px", height: "80px" }}
      />

      <button type="submit" style={{ padding: "8px 16px" }}>
        Add Comment
      </button>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </form>
  );
}