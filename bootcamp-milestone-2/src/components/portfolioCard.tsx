// src/components/portfolioCard.tsx
import style from "./portfolioCard.module.css";
import Image from "next/image";
import Link from "next/link";

type ProjectType = {
  project: string;
  description: string;
  image: string;
  imageAlt?: string;
  link?: string;
};

export default function PortfolioCard(props: ProjectType) {
  return (
    <div className={style.projectCard}>
      <div className={style.projectImages}>
        <Link href={props.link || "#"}>
          <Image src={props.image} alt={props.imageAlt || ""} width={300} height={200} />
        </Link>
      </div>
      <div className={style.projectText}>
        <h2 className={style.projectName}><strong>{props.project}</strong></h2>
        <p className={style.projectDescription}>{props.description}</p>
      </div>
    </div>
  );
}
