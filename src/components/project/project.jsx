import React from 'react'
import { NavLink } from 'react-router-dom'
import './project.css'

const Project = ({ title, img, video, id }) => {
    return (
        <NavLink to={`/projectPage/${id}`}>
            <li className="project">

                {video && (
                    <video className="video" width="740" height="480" controls autoPlay>
                        <source src={video} type="video/mp4" />
                    </video>
                )}

                {img && (
                    <img src={img} alt={title} className="project__img" />
                )}

                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}

export default Project