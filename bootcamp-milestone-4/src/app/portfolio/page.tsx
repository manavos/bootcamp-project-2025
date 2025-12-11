import React from "react";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import PortfolioCard from "@/components/portfolioCard";
import style from "@/components/portfolioCard.module.css";
import CommentFormToggle from "@/components/CommentFormToggle";
import CommentForm from "@/components/commentForm";


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
      <h1 className="page-title"><strong>Portfolio</strong></h1>
      <div className={style.projectsContainer}>
        {projects.map((p) => (
          <PortfolioCard
            key={p._id.toString()}
            project={p.project}
            image={p.image}
            imageAlt={p.imageAlt}
            link={p.link}
            description={p.description}
            comments={p.comments} 
          
          />
        ))}

        
      </div>
    </main>
  );
}
