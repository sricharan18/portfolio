import React, { useEffect } from "react";
import "./homepage.css";
import Navbar from "./components/navbar";
import Aboutme from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";

const Homepage = () => {

    const RevealFunc = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                // console.log(entry.target.getAttribute('data-animate') )
                
                if (entry.target.getAttribute('data-animate') === 'fade-up') entry.target.classList.add('fade-up-show')
                if (entry.target.getAttribute('data-animate') === 'fade-in') entry.target.classList.add('fade-in-show')
            }
        })
    }

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8
          };

        var observer = new IntersectionObserver(RevealFunc, options); 
        const elements = document.querySelectorAll(".fade-up")
        const elements2 = document.querySelectorAll(".fade-in")
        elements.forEach((e) => observer.observe(e))
        elements2.forEach((e) => observer.observe(e))

    }, [])

    
    return (
        <div className="page">
            <div className="page-content">
                <Navbar active='home'/>
                <div className="hero-wrapper">

                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>

                    <div style={{zIndex: 1}}>
                    <div class="heading-top-line large"></div>
                        <div className='hero-text-1 fade-up' data-animate="fade-up" style={{transitionDelay: '.2s'}}>
                            Hello, my name is
                        </div>
                        <div className='hero-text-2 fade-up' data-animate='fade-up' style={{transitionDelay: '.3s'}}>
                            Sri Sai Charan K
                        </div>
                        <div className='hero-text-3 gradient-1 fade-up' data-animate='fade-up' style={{transitionDelay: '.4s'}}>
                            Software Developer
                        </div>
                        <div className='hero-support-text fade-up' data-animate='fade-up' style={{transitionDelay: '.5s'}}>
                            I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies.
                        </div>

                        <div className='hero-support-text fade-up' data-animate='fade-up' style={{transitionDelay: '.6s', fontWeight: 600}}>
                            Get in touch: <a className="contact-highlight" target='_blank' href={`mailto:${'charanformail@gmail.com'}`}>charanformail@gmail.com</a>
                        </div>
                    </div>

                    
                </div>
                <Aboutme/>
                <Project />
                <Contact />

            </div>

            <div class="nav-left fade-in" data-animate='fade-in' style={{transitionDelay: '.7s'}}>
                <div class="nav-left-item">
                <div class="copyright nav-email">charanformail@gmail.com</div>
                </div>
                <div class="nav-line"></div>
            <div class="nav-left-item nav-copyright"><div class="copyright">©/2024</div></div></div>
        </div>
    )
}

export default Homepage;