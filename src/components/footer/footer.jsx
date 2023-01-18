import React from 'react'
import './footer.css'
// import instagram from './../../img/icons/instagram.svg'
import gitHub from './../../img/icons/gitHub.svg'
import linkedIn from './../../img/icons/linkedIn.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        {/* <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li> */}
                        <li className="social__item"><a href="https://github.com/malish-undead-core" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/viacheslav-smolenskyi-a987b8209/" target="_blank" rel="noreferrer"><img src={linkedIn} target="_blank" alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer