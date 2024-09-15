import React from 'react'
import Icon from '../icons/Icon'

function SkillCard({ skill: { Name, Icon: icon } }) {
    return (
        <div className='skill-card'>
            <div className='skill-card-content'>
                <Icon icon={icon} className={'skill-icon'}></Icon>
                <p className='skill-title inter-regular'>{Name}</p>
            </div>
            <div className="skill-card-border"></div>
        </div>
    )
}

export default SkillCard