import React from "react";
import './project.css'

const Project = () => {
    return (
        <div className="project-wrapper">
            <div className="about-left">
                <p className="gradient-1">FEATURED PROJECTS</p>
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/HealthPlan.png')}`} alt='youro-web-page'></img>
                </div>
                
                <div className="project-details">
                    <p className="project-title">The Health Plan</p>
                    <p>This website provides healthcare options for residents of Ohio and West Virginia. It includes Medicare plans for seniors, Medicaid for those meeting income criteria, and low-cost plans for children and pregnant women through WVCHIP. Additionally, it offers employer, commercial, and self-funded plans for businesses in the region.</p>
                    <p></p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>React Js</div>
                            <div>JavaScript</div>
                            <div>HTML</div>
                            <div>Bootstrap</div>
                            <div>Figma</div>
                            <div>AWS</div>
                        </div>
                </div>
                </div>
                
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/youro.png')}`} alt='youro-web-page'></img>
                </div>
                
                <div className="project-details">
                    <p className="project-title">YOURO</p>
                    <p>Designed and developed a patient-doctor portal for urologic care, empowering patients to schedule appointments, manage care plans, access educational resources, and chat with doctors, while streamlining treatment prescription and delivery for healthcare providers.</p>
                    <p></p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>React Js</div>
                            <div>JavaScript</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Figma</div>
                            <div>AWS</div>
                        </div>
                </div>
                </div>
                
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/rajRentals.png')}`} alt='raj-homes-web-page'></img>
                </div>
                <div className="project-details">
                    <p className="project-title">RAJ RENTALS</p>
                    <p>Curated housing platform for college students in Buffalo, offering affordable and convenient single-family homes and shared apartments</p>
                    <p>Led the research, design, and implementation of a website showcasing student-friendly housing options in Buffalo, featuring detailed property descriptions, amenities, and contact information.</p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>React Js</div>
                            <div>Git</div>
                            <div>Express Js</div>
                            <div>Figma</div>
                            <div>HTML5/CSS</div>
                        </div>
                </div>
                </div>
                
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/Simplify.png')}`} alt='simplifyVMS-web-page'></img>
                </div>
                <div className="project-details">
                    <p className="project-title">SIMPLIFY VMS</p>
                    <p>A digital talent sourcing platform connecting top companies with skilled contingent workers. Bypassed staffing agencies, reducing recruitment costs by 10% and vacancy aging rates by 50%.</p>
                    <p>The platform included features like custom social recruitment campaigns, AI-powered candidate matching, and a private talent pool for re-engagement.</p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>React Js</div>
                            <div>JavaScript</div>
                            <div>MUI</div>
                            <div>HTML</div>
                            <div>AWS</div>
                            <div>Git</div>
                        </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Project;