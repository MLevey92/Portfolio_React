import './resume.css';

export default function Resume () {
    return (
        <div className="resumeBox">
            <div className="downloadButton">
                <a id="downloadButton" href="../../../LeveyResume.pdf" download>Download Resume</a>
            </div>
        <section id="education">
            <aside><h2>Education</h2></aside>
            <div id="education-right">
                <h3>University of North Carolina at Wilmington 
                    <span>- Bachelor of Science: Computer Science</span></h3>
                <p>January 2018 - May 2020 | Wilmington, NC</p>
                <ul>
                    <li>Concentration in Statistics</li>
                </ul>
            </div>
        </section>

        <section id="skills">
            <aside><h2>Skills</h2></aside>
            <div id="skills-right">
                <h3 class="skill">Web Development:</h3>
                <p class="skill-description">
                    Web development is the type of programming that I am most passionate about. 
                    I spend lots of time studying javascript and popular frameworks and libraries
                    that will make me a valuable addition to any team. I have full-stack development
                    experience, and consider myself able to learn whatever technologies will get
                    the job done.
                </p>

                <h3 class="skill">3D modeling / Graphic Design:</h3>
                <p class="skill-description">
                    I've developed an interest in using 3D software and python scripting to create
                    graphics, animations, logos, and more.
                </p>

                <h3 class="skill">Programming Languages:</h3>
                <ul class="skill-list">
                    <li>Strong skill level using Javascript, GoLang, Python</li>
                    <li>Medium skill level using Java, C++</li>
                </ul>

                <h3 class="skill">Database:</h3>
                <ul class="skill-list">
                    <li>SQL, PostgreSQL, mongoDB</li>
                </ul>

                <h3 class="skill">Github Repository:</h3>
                <ul class="skill-list">
                    <li><a href="https://github.com/MLevey92">github.com/MLevey92</a></li>
                </ul>
            </div>
        </section>

        <section id="experience">
            <aside><h2>Experience</h2></aside>
            <div id="experience-right">
                <h3>General Electric 
                    <span>- Software Developer Intern | Wilmington, NC</span></h3>
                <p>September 2018 - December 2018 | Wilmington, NC</p>
                <ul>
                    <li>Created a microservice that integrated GE employee training databases</li>
                    <li>Utilized Python, PostgreSQL, Java, AWS</li>
                </ul>
                <h3>Retail Experience 
                    <span>- Manager</span></h3>
                <p>2013 - Current | Morehead City, NC</p>
                <ul>
                    <li>Grocery store management experience</li>
                </ul>
            </div>
        </section>
        </div>
    );
}