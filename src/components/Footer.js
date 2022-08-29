import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-wrapper">
            <h2>Contact Us</h2>
            <div className="footer-link-items">
                <ul className="footer-list">
                    <li className="footer-list-item">
                        <a href="https://www.linkedin.com/in/christopher-eliason/" target="_blank">LinkedIn</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="https://github.com/nosaile" target="_blank">Github</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="mailto: eliason.chris1@gmail.com" target="_blank">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer