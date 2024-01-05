import React, {forwardRef} from "react";
import './about.css'

const AboutMe = () => {
    return (
        <div className="about-sec-container">
            <div className='about-sec fade-in' data-animate='fade-in'>
                <div className="about-left">
                    <p className="gradient-1">ABOUT ME</p>
                </div>
                <div className="about-right">
                    Hello! I'm Charan, a Freelance Full-Stack Developer and MS graduate in Computer Science & Engineering at the University at Buffalo. With React.js, Node.js, SQL, Spring Boot, and HTML/CSS in my arsenal, I've been building things for the web for the past 3 years.
                    <br />
                    <br />
                    My journey? I've served clients from 6 countries during my freelance, crafting user-friendly, responsive, and secure web applications. This freelance experience, coupled with my year-long internship at SimplifyVMS, has fueled my passion for building impactful solutions.
                    <br />
                    <br />
                    I'm actively seeking opportunities to apply my expertise and passion for user-centric development. Open to collaboration and building together.
                </div>
            </div>

            <div className="about-sec fade-in" data-animate='fade-in'>
                <div className="about-left">
                    <p className="gradient-1">SKILLS</p>
                </div>
                <div className="skills-right">
                    <div>
                        <p>LANGUAGES</p>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>C</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <p>FRAMEWORKS</p>
                        <ul>
                            <li>React</li>
                            <li>Spring Boot</li>
                            <li>Express</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div>
                        <p>TOOLS</p>
                        <ul>
                            <li>Git</li>
                            <li>Tableau</li>
                            <li>Docker</li>
                            <li>Kafka</li>
                            <li>AWS</li>
                            <li>Selenium</li>
                        </ul>
                    </div>
                    <div>
                        <p>OTHERS</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>UI/UX</li>
                            <li>REST</li>
                            <li>AGILE</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-sec fade-in" data-animate='fade-in'>
                <div className="about-left">
                    <p className="gradient-1">EXPERIENCE</p>
                </div>
                <div className="exp-right">
                <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">Fiverr</div>
                            <div className="exp-served">Feb&nbsp; 2022 - Oct&nbsp; 2023</div>
                        </div>
                        <div>Full Stack Developer</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">University at Buffalo</div>
                            <div className="exp-served">Aug&nbsp; - Oct&nbsp; 2023</div>
                        </div>
                        <div>Graduate Student Assistant</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">SimplifyVMS</div>
                            <div className="exp-served">Jun&nbsp; 2021 - Jun&nbsp; 2022</div>
                        </div>
                        <div>Software Developer</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">Upwork</div>
                            <div className="exp-served">Jan&nbsp; 2022 - May&nbsp; 2022</div>
                        </div>
                        <div>Automation | Web Scraping | Scripting | Python</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">Automize Apps</div>
                            <div className="exp-served">Jun&nbsp; - Nov&nbsp; 2020</div>
                        </div>
                        <div>Web Scraping Intern</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe;