import React from "react";
import Image from "next/image";
import style from "../blogs.module.css";


export default function FirstBlog() {
  return (
    <div className={style.blogDetail}>
      <h1>Going to an SF Giants Game</h1>
      <h3>October 15, 2025</h3>
      <Image
        src="/images/IMG_8328.jpg"
        alt="Oracle Park"
        width={800}
        height={500}
      />
      <p>
        I went to multiple SF Giants game during the summer and it was pretty fun! Oracle Park is known
        for it's food, so of course I had to try them all. Some notable foods were the crab sandwich, clam chowder,
        garlic fries, nachos, and Ghiradelli sundae. This particular photo was when the Giants played the Diamondbacks
        and won 11-5. Go Giants!
      </p>
    </div>
  );
}
