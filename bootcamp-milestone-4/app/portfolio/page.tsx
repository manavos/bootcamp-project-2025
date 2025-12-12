import React from "react";
import connectDB from "../../database/db";
import Project from "../../database/projectSchema";
import PortfolioCard from "../../components/portfolioCard";
import style from "../../components/portfolioCard.module.css";
import CommentFormToggle from "../../components/CommentFormToggle";
import PortfolioCommentForm from "../../components/PortfolioCommentForm";

async function getProjects() {
  await connectDB();
  try {
    const projects = await Project.find().sort({ project: 1 });
    return projects;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main>
      <h1 className="page-title">
        <strong>Portfolio</strong>
      </h1>
      <div className={style.projectsContainer}>
        {projects.map((p) => (
          <div key={p._id.toString()}>
            <PortfolioCard
              project={p.project}
              image={p.image}
              imageAlt={p.imageAlt}
              link={p.link}
              description={p.description}
              comments={p.comments}
            />

            <PortfolioCommentForm project={p.project} />
          </div>
        ))}
      </div>
    </main>
  );
}
