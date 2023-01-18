import React from 'react'
import imgGitHub from './gitHub-black.svg'

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={imgGitHub} alt="" />
            GitHub repo
        </a>
    )
}

export default BtnGitHub