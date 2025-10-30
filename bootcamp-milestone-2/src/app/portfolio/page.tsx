import projects from "@/app/portfolioData"
import PortfolioCard from "@/components/portfolioCard"
import style from "@/components/portfolioCard.module.css"


export default function Portfolio() {
    return(
        <main>
            <h1 className="page-title"><strong>Portfolio</strong></h1>
            <div className={style.projectsContainer}>
                {projects.map((project) => (
                <PortfolioCard key={project.project} {...project} />
                ))}
            </div>
        </main>
    )

}