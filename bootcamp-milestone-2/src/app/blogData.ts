export interface Blog { // type also works
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
	{
        title: "Going to an SF Giants Game",
        date: "October 15, 2025",
        description: "Recapping the Oracle Park experience",
        image: "/images/IMG_8328.jpg",
        imageAlt: "Oracle Park",
        slug: "first-blog"
    },
    {
        title: "Disneyland",
        date: "October 16, 2025",
        description: "Annual trip to Disneyland",
        image: "/images/IMG_5583.jpg",
        imageAlt: "disneyland fireworks",
        slug: "second-blog"
    },
    {
        title: "Dunes",
        date: "October 16, 2025",
        description: "Exploring the Oceano Dunes",
        image: "/images/100_2606 (1).jpeg",
        imageAlt: "Oceano dunes",
        slug: "third-blog"
    }
];

export default blogs; // This will allow us to access this data anywhere!