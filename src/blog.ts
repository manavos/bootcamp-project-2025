type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};


const blogs: Blog[] = [
    {
        title: "Going to an SF Giants Game",
        date: "October 15, 2025",
        description: "Recapping the Oracle Park experience",
        image: "./IMG_8328.jpg",
        imageAlt: "Oracle Park",
        slug: "first-blog"
    },
    {
        title: "Disneyland",
        date: "October 16, 2025",
        description: "Annual trip to Disneyland",
        image: "./IMG_5583.jpg",
        imageAlt: "disneyland fireworks",
        slug: "second-blog"
    },
    {
        title: "Dunes",
        date: "October 16, 2025",
        description: "Exploring the Oceano Dunes",
        image: "./100_2606 (1).jpeg",
        imageAlt: "Oceano dunes",
        slug: "third-blog"
    }
];



const blogContainer = document.querySelector('.my-blog');

if (blogContainer) {
  blogs.forEach((blog: Blog) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("blog-post");

    const blogTitle = document.createElement("h2");
    blogTitle.textContent = blog.title;

    const blogDate = document.createElement("h3");
    blogDate.textContent = blog.date;

    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;

    const blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;

    const readMore = document.createElement("a");
    readMore.href = `./blogs/${blog.slug}.html`;
    readMore.textContent = "Read more →";
    readMore.classList.add("read-more");

    newDiv.append(blogImage, blogTitle, blogDate, blogDesc, readMore);
    blogContainer.appendChild(newDiv);
  });
}
