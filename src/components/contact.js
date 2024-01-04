import React from "react";
import './contact.css'

const Contact = () => {
    return (
        <div className="contact">
            Designed and deveopled by Sri Sai Charan K
            <div class="social-icons-btn">
            <a class="icons mail" target="_blank"  href={`mailto:${'charanformail@gmail.com'}`}>
                <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a class="icons github" target="_blank" href="https://github.com/sricharan18">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a class="icons instagram" target="_blank" href="https://www.instagram.com/kachavarapucharan/">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a class="icons linkedin" target="_blank" href="https://www.linkedin.com/in/sricharan18/">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            </div>
        </div>
    )
}

export default Contact