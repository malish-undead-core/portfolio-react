import React from 'react'
import Header from '../components/header/header'

const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, Redux, HTML, CSS, BootStrap, ASP.NET Core MVC, ASP.NET Core Razor Pages</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, Entity Framework Core, Git</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home