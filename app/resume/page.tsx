export default function Resume(){
    return (
    <main>
      <h1 className="page-title">
        <strong>Resume</strong>
      </h1>

      {/* ✅ PDF download button */}
      <div className="resumeButton">
        <a href="/resume.pdf" download>
            <button className="button">Download File</button>
        </a>
        </div>

      <div className="resume">
          {/* === Education === */}
          <div className="section">
          <h1 className="sectionTitle">Education</h1>
          <div className="entry">
            <h3 className="entryTitle">
              <strong>Bachelor of Computer Science, Minor in Data Science</strong>
            </h3>
            <p className="entryInfo">
              California Polytechnic State University, San Luis Obispo | Expected Graduation May 2027
            </p>
          </div>
          </div>

          {/* === Coursework === */}
          <div className="section">
          <h1 className="sectionTitle">Coursework</h1>
          <div className="coursework">
            <ul className="courseList">
                <li>Project-Based OO Programming and Design</li>
                <li>Data Structures</li>
                <li>Design and Analysis of Algorithms</li>
                <li>Systems Programming</li>
                <li>Introduction to Database Systems</li>
                <li>Introduction to Data Science</li>
                <li>Intro to Software Engineering</li>
                </ul>
          </div>
          </div>

          {/* === Skills === */}
          <div className="section">
          <h1 className="sectionTitle">Skills</h1>
          <div className="skills">
            <p>
              <strong>Programming Languages:</strong> Python, Java, C, R
            </p>
            <p>
              <strong>Frameworks/Libraries:</strong> MongoDB, Express, ReactJS, NodeJS, Plotnine, Pandas, Scikit-Learn
            </p>
            <p>
              <strong>Data/Development Tools:</strong> MySQL, VSCode, Git
            </p>
          </div>
          </div>

          {/* === Projects === */}
          <div className="section">
          <h1 className="sectionTitle">Projects</h1>

          <div className="entry">
            <h3 className="entryTitle">
              <strong>Food Mood</strong>
            </h3>
            <p className="entryInfo">
              Developed and deployed a full-stack web application on Microsoft Azure that lets users track restaurants they’ve visited and their favorite foods.
            </p>
            <p className="entryDescription">
              - Built a Node.js + Express backend with RESTful APIs for managing users, reviews, and restaurant data.  
              - Designed a responsive React frontend and integrated MongoDB for persistent data storage.  
              - Incorporated Microsoft Azure Blob Storage to handle user-uploaded photos.
            </p>
          </div>


          <div className="entry">
            <h3 className="entryTitle">
              <strong>Bus Booking Application</strong>
            </h3>
            <p className="entryInfo">
              Application simulating a real-world travel reservation system.
            </p>
            <p className="entryDescription">
              - Created a MySQL database to store trip details and user reservations, optimizing queries for efficient data retrieval.  
              - Integrated JDBC to connect Java with MySQL, ensuring seamless data flow between the database and user interface.
            </p>
          </div>

          <div className="entry">
            <h3 className="entryTitle">
              <strong>Virtual World Simulation Project</strong>
            </h3>
            <p className="entryInfo">
              Extended starter code to develop an object-oriented Java project with an interactive GUI and dynamic world simulation.
            </p>
            <p className="entryDescription">
              - Replaced basic movement with A* pathfinding so entities navigate efficiently through a tile-based environment.  
              - Refactored core logic using the Strategy pattern with functional interfaces and lambdas for modular behaviors.  
              - Created and animated two new entity types with mouse-click interactions that trigger transformations and world updates.
            </p>
          </div>

          <div className="entry">
            <h3 className="entryTitle">
              <strong>Simple HTTP Web Server</strong>
            </h3>
            <p className="entryInfo">
              Built an HTTP server in C that processes GET and HEAD requests, serving static files and executing CGI-like programs with proper error handling.
            </p>
            <p className="entryDescription">
              Implemented file handling and response creation, including sending file content, headers, and handling invalid or erroneous requests.
            </p>
          </div>
          </div>
          

          {/* === Experience === */}
          <div className="section">
          <h1 className="sectionTitle">Experience</h1>

          <div className="entry">
            <h3 className="entryTitle">Systems Integrator</h3>
            <p className="entryInfo">
              Scaffold Inspection and Testing Co, San Bruno, CA | June 2024 - Sep 2024 / July 2025 - Sep 2025
            </p>
            <p className="entryDescription">
              Supported system transitions by managing project workflows in Monday.com, optimizing communication, automating processes for 20% time savings, and collaborating with cross-functional teams to improve operations and present updates to leadership.
            </p>
          </div>

          <div className="entry">
            <h3 className="entryTitle">Grader/Tutor/Assistant</h3>
            <p className="entryTnfo">
              Kumon, Union City, CA | Dec 2021 - Sep 2023
            </p>
            <p className="entryDescription">
              Delivered one-on-one and small group instruction in math and reading to students ages 3 through high school, while managing grading, clerical tasks, and progress tracking to support student learning.
            </p>
          </div>
          </div>

        </div>
  
    </main>



    )


}