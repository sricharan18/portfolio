import React, { useEffect, useRef } from "react";
import './navbar.css';

const Navbar = (props) => {

    const { active }  = props;

    var homeSection = document.querySelector( '.hero-wrapper' )
    var aboutSection = document.querySelector( '.about-sec-container' )
    var contactSection = document.querySelector('.contact')

    return (
        <div className="nav-wrapper">
            <div className="nav-container fade-in" data-animate='fade-in' style={{transitionDelay: '0s'}}>
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className="nav-item"
							>
								<p onClick={() => homeSection.scrollIntoView( { behavior: 'smooth', block: 'start' } )}>Home</p>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<p onClick={() => aboutSection.scrollIntoView( { behavior: 'smooth', block: 'start' } )}>About</p>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<p>Projects</p>
							</li>
							
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<p onClick={() => contactSection.scrollIntoView( { behavior: 'smooth', block: 'start' } )}>Contact</p>
							</li>
						</ul>
					</div>
				</nav>
			</div>
        </div>
    )
}

export default Navbar;