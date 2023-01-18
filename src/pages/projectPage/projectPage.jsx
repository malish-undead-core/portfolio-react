import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../helpers/projectsList'
import BtnGitHub from '../../components/btnGitHub/btnGitHub'
import './projectPage.css'
import BtnGitHubPage from '../../components/btnGitHubPage/btnGitHubPage'

const ProjectPage = () => {

    const { id } = useParams()
    const project = projects[id]

    return (
        <main className="section-projact__page">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    {project.video && (
                        <video className="video" width="740" height="480" controls autoPlay>
                            <source src={project.video} type="video/mp4" />
                        </video>
                    )}

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <div className="btn-hub-rep-page">
                        {project.gitHubLink && (
                            <BtnGitHub link={project.gitHubLink} />
                        )}

                        {project.gitHubPage && (
                            <BtnGitHubPage link={project.gitHubPage} />
                        )}
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ProjectPage