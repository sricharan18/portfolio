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
                    Hello! I'm Charan, a Frontend developer and a MS graduate in Computer Science. With React.js, HTML, CSS, Figma and Node in my arsenal, I've been building things for the web for the past 3 years.
                    <br />
                    <br />
                   With extensive experience in designing and developing responsive web applications using technologies like React, Redux, and SCSS, I have successfully integrated complex features and streamlined interactions for users. My proficiency in tools such as Gulp, Webpack, and Bootstrap, along with a strong focus on accessibility and cross-browser compatibility, ensures seamless and efficient user experiences.  
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
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <p>LIBRARIES</p>
                        <ul>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Jest</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div>
                        <p>TOOLS</p>
                        <ul>
                            <li>Figma</li>
                            <li>Git</li>
                            <li>Sass</li>
                            <li>Gulp</li>
                            <li>AWS</li>
                            <li>Postman</li>                             
                        </ul>
                    </div>
                    <div>
                        <p>OTHERS</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Webpack</li>
                            <li>Linux</li>
                            <li>REST API</li>
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
                            <div className="exp-company-title">Blue Space Technologies</div>
                            <div className="exp-served">Dec&nbsp; 2023 - Present</div>
                        </div>
                        <div>Frontend Developer, Contract</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">SimplifyVMS</div>
                            <div className="exp-served">Jun&nbsp; 2020 - Aug&nbsp; 2022</div>
                        </div>
                        <div>Software Developer</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">Automize Apps</div>
                            <div className="exp-served">Jan&nbsp; 2020 - Jun&nbsp; 2020</div>
                        </div>
                        <div>Software Developer Intern </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe;