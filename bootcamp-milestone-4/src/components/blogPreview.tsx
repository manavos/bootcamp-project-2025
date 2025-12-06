import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./blogPreview.module.css";

type BlogPreviewProps = {

  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  date: string;
  description: string;
};


export default function BlogPreview(props: BlogPreviewProps) {
 
  
  return (
    <div className={style.blogCard}>
      <Image
        className={style.blogImage}
        src={props.image} 
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
