export interface Blog { // type also works
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    content: string
    slug: string;
}

const blogs: Blog[] = [
	{
        title: "Going to an SF Giants Game",
        date: "October 15, 2025",
        description: "Recapping the Oracle Park experience",
        image: "/images/IMG_8328.jpg",
        imageAlt: "Oracle Park",
        content: "I went to multiple SF Giants game during the summer and it was pretty fun! Oracle Park is known for it's food, so of course I had to try them all. Some notable foods were the crab sandwich, clam chowder, garlic fries, nachos, and Ghiradelli sundae. This particular photo was when the Giants played the Diamondbacks and won 11-5. Go Giants!",
        slug: "first-blog"
    },
    {
        title: "Disneyland",
        date: "October 16, 2025",
        description: "Annual trip to Disneyland",
        image: "/images/IMG_5583.jpg",
        imageAlt: "disneyland fireworks",
        content: "Every year, my family and I go to Disneyland during the holidays. It's been a tradition since I was a kid. My favorite rides are the Matterhorn and Guardians of the Galaxy. I always look forward to the Dole Whip and churros when I go!",
        slug: "second-blog"
    },
    {
        title: "Dunes",
        date: "October 16, 2025",
        description: "Exploring the Oceano Dunes",
        image: "/images/100_2606 (1).jpeg",
        imageAlt: "Oceano dunes",
        content: "Visiting the dunes was amazing! Glad I finally got to visit.",
        slug: "third-blog"
    }
];

export default blogs; // This will allow us to access this data anywhere!