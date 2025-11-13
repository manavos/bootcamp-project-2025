import Image from "next/image";

export default function Home() {
  return (
		<div>
			<h1 className="page-title"><strong>welcome!</strong></h1>
      <div className="about-image-wrapper"> 
`      <Image className="about-image"
        src="/images/headshot3.png"
        alt="Ashley Navos"
        width={800}
        height={500}
      />`
      </div>
      <div className="about-text">
          <h2>Ashley Navos</h2>
          <p>
            hi! I'm a third year Computer Science major with a minor in Data Science from the bay area. I'm interested in learning more about software engineering.
            I like watching movies, practicing DJing, and sewing!
          </p>
          
        </div>
		</div>
		) 
}