import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../helpers/projectsList'
// import imgBtnVercel from './btnVercel.svg'

const BtnVercel = ({ link }) => {
    const { id } = useParams()
    const project = projects[id]

    return (

        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            {/* <img src={imgBtnVercel} alt="" /> */}
            {`Vercel page ${project.title}`}
        </a>
    )
}

export default BtnVercel