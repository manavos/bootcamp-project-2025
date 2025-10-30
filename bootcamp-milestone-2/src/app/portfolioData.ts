export interface Portfolio {
    project: string;
    image: string;
    imageAlt: string;
    link: string;
    description: string;
}

const projects: Portfolio[] = [
    {
        project: "Personal Website",
        image: "/images/Ashley Navos.png",
        imageAlt: "Ashley Navos in text",
        link: "/",
        description: "This is a personal website that I made using HTML and CSS from Hack4Impact's Starter Pack."
    },
    {
        project: "Food Mood",
        image: "/images/foodmood.png",
        imageAlt: "Ashley Navos in text",
        link: "https://drive.google.com/file/d/1XtlYWMxuzki1JS84YZMeFSEiK_ksty8E/view?usp=drive_link",
        description: "Developed and deployed a full-stack web application on Microsoft Azure that lets users track restaurants they’ve visited and their favorite foods. Built a Node.js + Express backend with RESTful APIs for managing users, reviews, and restaurant data. Designed a responsive React frontend and integrated MongoDB for persistent data storage. Incorporated Microsoft Azure Blob Storage to handle user-uploaded photos."
    },

]

export default projects;