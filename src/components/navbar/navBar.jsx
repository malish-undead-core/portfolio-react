import React from 'react'
import { NavLink } from 'react-router-dom'
// import BtnDarkMode from '../btnDarkMode/btnDarkMode'
import './navBar.css'

const NavBar = () => {

    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/portfolio-react" className="logo">
                        <strong>Portfolio</strong> <p>react</p>
                    </NavLink>
                    {/* <BtnDarkMode /> */}
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink
                                to="/portfolio-react"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar