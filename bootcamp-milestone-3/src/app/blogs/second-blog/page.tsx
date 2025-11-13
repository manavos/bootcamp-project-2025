import React from "react";
import Image from "next/image";
import style from "../blogs.module.css";


export default function SecondBlog() {
  return (
    <div className={style.blogDetail}>
      <h1>Disneyland</h1>
      <h3>October 16, 2025</h3>
      <Image
        src="/images/IMG_5583.jpg"
        alt="Disneyland Fireworks"
        width={800}
        height={500}
      />
      <p>
        Every year, my family and I go to Disneyland during the holidays. It's been a tradition since I was a kid.
        My favorite rides are the Matterhorn and Guardians of the Galaxy. I always look forward to the Dole Whip and 
        churros when I go!
      </p>
    </div>
  );
}
