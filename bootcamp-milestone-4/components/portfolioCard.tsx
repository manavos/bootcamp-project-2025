import style from "./portfolioCard.module.css";
import Image from "next/image";
import Link from "next/link";
import Comment from "./Comment";

type IComment = {
  user: string;
  time: Date;
  comment: string;
};

type ProjectType = {
  project: string;
  description: string;
  image: string;
  imageAlt?: string;
  link?: string;
  comments: IComment[];
};

export default function PortfolioCard(props: ProjectType) {
  return (
    <div className={style.projectCard}>
      <div className={style.projectImages}>
        <Link href={props.link || "#"}>
          <Image
            src={props.image}
            alt={props.imageAlt || ""}
            width={300}
            height={200}
          />
        </Link>
      </div>
      <div className={style.projectText}>
        <h2 className={style.projectName}>
          <strong>{props.project}</strong>
        </h2>
        <p className={style.projectDescription}>{props.description}</p>
      </div>

      <div className={style.commentsSection}>
        {props.comments.length > 0 ? (
          props.comments.map((comment: IComment, i: number) => (
            <Comment key={i} comment={comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
