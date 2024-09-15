import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import "./Projects.css"

const githubRepoIDs = [735333393, 754275829, 847770186, 726574699, 811503157, 680883186, 752750352, 811874378]

function Projects() {
    const [projectsArr, setProjects] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/gurusaranm0025/repos")
            .then(response => response.json())
            .then(data => {
                const finalArr = []
                data.forEach((repo) => {
                    console.log(repo.id)
                    for (let i in githubRepoIDs) {
                        if (githubRepoIDs[i] === repo.id) {
                            finalArr.push(repo)
                        }
                    }
                })
                setProjects(finalArr)
            })
            .catch(error => {
                console.error(error)
                return undefined
            })
    }, [])

    function onHover() {
        document.getElementsByClassName('projects-grid')[0].onmousemove = e => {
            for (const project of document.getElementsByClassName("project-container")) {
                const rect = project.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top
                project.style.setProperty("--mouse-x", `${x}px`)
                project.style.setProperty("--mouse-y", `${y}px`)
            }
        }
    }

    return (
        <section>
            <p className='section-head inter-regular'>Projects</p>

            <div className='projects-grid' id='projects' onMouseEnter={onHover} onMouseMove={onHover} onMouseOut={onHover}>
                {
                    projectsArr !== undefined ? (
                        projectsArr.map((project, i) => {
                            return <ProjectCard key={i} gitHubLink={project.html_url} imgSrc={"https://raw.githubusercontent.com/" + project.full_name + "/main/markdownImages/base.jpeg"} projectDes={project.description} projectTitle={project.name} />
                        })
                    ) : console.log('Error')}
            </div>


        </section>
    )
}

export default Projects