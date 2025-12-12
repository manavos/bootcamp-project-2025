"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "@/components/contact.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  // handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result.text);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <main className={style.blogDetail}>
    <h1 className="page-title"><strong>Contact Me!</strong></h1>

    <form onSubmit={handleSubmit} className={style.formContainer}>
      <label>Your Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Your Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Your Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Send</button>

      {status && <p>{status}</p>}
    </form>
    </main>
  );
}
