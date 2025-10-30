import type { Portfolio } from "@/app/portfolioData";
import style from "./portfolioCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function portfolioCard(props: Portfolio){
    return (
   <main>
    <div className={style.projectCard}>
      <div className={style.projectImages}>
        <Link href={props.link}>
          <Image src={props.image} alt={props.imageAlt} width={300} height={200} />
        </Link>
      </div>
      <div className={style.projectText}>
        <h2 className={style.projectName}><strong>{props.project}</strong></h2>
        <p className={style.projectDescription}>{props.description}</p>
        <p className={style.projectDescription} />
      </div>
      </div>
      </main>


    );

}