import React from "react";
import Image from "next/image";
import style from "../blogs.module.css";


export default function ThirdBlog() {
  return (
    <div className={style.blogDetail}>
      <h1>Dunes</h1>
      <h3>October 16, 2025</h3>
      <Image
        src="/images/100_2606 (1).jpeg"
        alt="Oceano Dunes"
        width={800}
        height={500}
      />
      <p>
        Visiting the dunes was amazing! Glad I finally got to visit.
      </p>
    </div>
  );
}
