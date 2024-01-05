import React, { useEffect, useRef } from "react";
import './navbar.css';

const Navbar = (props) => {

    const { active }  = props;

    const handleClick = (name) => {
        var section = document.querySelector(name )
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } )
    }

    return (
        <div className="nav-wrapper">
            <div className="nav-container fade-in" data-animate='fade-in' style={{transitionDelay: '0s'}}>
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li onClick={() => handleClick('.hero-wrapper')}
								className="nav-item"
							>
								<p >Home</p>
							</li>
							<li  onClick={() => handleClick('.about-sec-container')}
								className="nav-item"
							>
								<p>About</p>
							</li>
							<li onClick={() => handleClick('.project-wrapper')}
								className="nav-item"
							>
								<p >Projects</p>
							</li>
							
							<li className="nav-item" onClick={() => handleClick('.contact')}>
								<p >Contact</p>
							</li>
						</ul>
					</div>
				</nav>
			</div>
        </div>
    )
}

export default Navbar;