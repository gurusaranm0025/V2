import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import "./Projects.css"

import ResumeButton from './ResumeButton/ResumeButton'

const repo_names = {
    890382624: 'hybrid-ids',
    895462532: 'pdf-to-audio',
    890385228: 'poet_ai',
    895120785: 'essenz',
    680883186: 'symptom-diagnoser'
}
const githubRepoIDs = [895120785, 890382624, 895462532, 890385228, 735333393, 847770186, 726574699, 811503157, 680883186, 752750352, 811874378, 857734139]
const demoLinks = {
    895120785: 'https://drive.google.com/file/d/1ICCqCeBbRd5iBGPY1lVOlANK9mKxrZOi/view?usp=sharing',
    895462532: 'https://drive.google.com/file/d/18y0-ww8PQ2Je8LFeYV7cEWTZjkKuW2Ec/view?usp=sharing',
    680883186: 'https://drive.google.com/file/d/1hUunZshDNaSIaQxH7sNSkx4cVnEE9v-c/view?usp=sharing'
}

function Projects() {
    const [projectsArr, setProjects] = useState([])
    const hasCursor = ('onmousemove' in window) && !('ontouchstart' in window)

    useEffect(() => {
        fetch("https://api.github.com/users/gurusaranm0025/repos")
            .then(response => response.json())
            .then(data => {
                const finalArr = []
                data.forEach((repo) => {
                    console.log(repo.id)
                    for (let i in githubRepoIDs) {
                        if (githubRepoIDs[i] === repo.id) {
                            if (repo.id in demoLinks) {
                                console.log("ID is in demoLinks")
                                repo.demo_link = demoLinks[repo.id]
                            }
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

            <div className='projects-grid' id='projects' onMouseMove={hasCursor ? onHover : null}>
                {
                    projectsArr !== undefined ? (
                        projectsArr.map((project, i) => {
                            return <ProjectCard key={i} gitHubLink={project.html_url} imgSrc={"https://raw.githubusercontent.com/" + project.full_name + "/main/markdownImages/base.jpeg"} projectDes={project.description} projectTitle={project.name} demoLink={project.demo_link} />
                        })
                    ) : console.log('Error')}
            </div>
            <ResumeButton />

        </section>
    )
}

export default Projects