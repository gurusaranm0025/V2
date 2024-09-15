import React from 'react'

function ProjectCard({ imgSrc, projectTitle, projectDes, gitHubLink }) {



    function openLink() {
        window.open(gitHubLink, "_blank", 'noreferrer')
    }

    return (
        <div className='project-container' onClick={openLink}>
            <div className='project-content'>
                <img className='project-image' src={imgSrc} alt=" " loading='lazy' />
                <div className='text-container'>
                    <p className='project-name inter-regular'>{projectTitle}</p>
                    <p className='project-des inter-regular'>{projectDes}</p>
                    <div className='proj-btns-container'>
                        <button className='github-btn inter-regular' onClick={openLink}>Github Repo</button>
                    </div>
                </div>
            </div>
            <div className='project-border'>
            </div>
        </div>
    )
}

export default ProjectCard