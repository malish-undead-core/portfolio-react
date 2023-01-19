import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header id="h" className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Slava</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>

                <a
                    href="https://restpack.io/html2pdf/save-as-pdf?url=https://my-resume-malish.netlify.app"
                    className="btn"
                    rel="nofollow"
                    target="_blank"
                >
                    Download CV
                </a>

            </div>
        </header>
    )
}

export default Header