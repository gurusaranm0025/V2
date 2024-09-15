import React from 'react'
import "./Skills.css"
import { languages, frameworks, tools } from './SkillsData'
import SkillCard from './SkillCard'

function Skills() {

    function onHover() {
        document.getElementsByClassName('skills-grid')[0].onmousemove = e => {
            for (const skill of document.getElementsByClassName("skill-card")) {
                const rect = skill.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top
                skill.style.setProperty("--mouse-x", `${x}px`)
                skill.style.setProperty("--mouse-y", `${y}px`)
            }
        }
    }

    return (
        <section className='' id='skills'>
            <p className='section-head inter-regular'>Technical Skills</p>

            <div className='grid skills-grid' onMouseEnter={onHover} onMouseMove={onHover}>
                <p className='skill-category inter-regular'>
                    Languages
                </p>
                {
                    languages.map((skill, i) => {
                        return <SkillCard skill={skill} key={i} />
                    })
                }
                <p className='skill-category inter-regular'>
                    Technologies & Frameworks
                </p>
                {
                    frameworks.map((skill, i) => {
                        return <SkillCard skill={skill} key={i} />
                    })
                }
                <p className='skill-category inter-regular'>
                    Tools
                </p>
                {
                    tools.map((skill, i) => {
                        return <SkillCard skill={skill} key={i} />
                    })
                }

            </div>
        </section>
    )
}

export default Skills