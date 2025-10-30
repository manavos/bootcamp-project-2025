import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogCard}>
      <Image
        className={style.blogImage}
        src={props.image}      // must start with / for public folder
        alt={props.imageAlt}
        width={500}
        height={300}
      />
      <h2><strong>{props.title}</strong></h2>
      <p><strong>{props.date}</strong></p>
      <p>{props.description}</p>
      <Link href={`/blogs/${props.slug}`} className={style.readMore}>
        Read More →
      </Link>
    </div>
  );
}
