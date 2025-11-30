import type { IComment } from "@/database/blogSchema";
import style from "./comment.module.css";

type commentProps = {
  comment: IComment;
};

export default function Comment({ comment }: commentProps) {
  return (
    <div className={style.commentCard}>
      <div className={style.commentHeader}>
        <span className={style.user}>{comment.user}</span>
        <span className={style.separator}>|</span>
        <span className={style.date}>
          {new Date(comment.time).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <p className={style.text}>{comment.comment}</p>
      <hr className={style.commentDivider} />
    </div>
  );
}