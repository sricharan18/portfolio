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
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    <br />
                    <br />
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    <br />
                    <br />
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
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
                        <div>Freelance Web developer</div>
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
                        <div>Software Developer Intern</div>
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