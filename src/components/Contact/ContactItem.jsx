import React from 'react'
import Icon from "../icons/Icon"

function ContactItem({ contact }) {
    return (
        <div className='contact-item link'>
            <a href={contact.link} className='contact-link' target='_blank' rel='noreferrer'>
                <Icon icon={contact.icon} className={'contact-icon'} />
            </a>
        </div>
    )
}

export default ContactItem