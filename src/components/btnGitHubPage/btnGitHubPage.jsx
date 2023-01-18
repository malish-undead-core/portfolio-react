import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../helpers/projectsList'
import imgGitHubPage from './gitHub-black.svg'

const BtnGitHubPage = ({ link }) => {
    const { id } = useParams()
    const project = projects[id]

    return (

        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={imgGitHubPage} alt="" />
            {`GitHub page ${project.title}`}
        </a>
    )
}

export default BtnGitHubPage