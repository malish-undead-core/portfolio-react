import React from 'react'
import Project from '../../components/project/project'
import { projects } from '../../helpers/projectsList'
import './projects.css'

const Projects = () => {
    return (
        <main className="section-projects">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project) => {
                        return <Project
                            key={project.id}
                            title={project.title}
                            img={project.img}
                            video={project.video}
                            id={project.id}
                        />
                    })}
                </ul>
            </div>
        </main>
    )
}

export default Projects