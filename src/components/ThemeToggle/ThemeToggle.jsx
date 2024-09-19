import React, { useState } from 'react'
import "./ThemeToggle.css"
import Icon from "../icons/Icon"

function ThemeToggle() {
    const [icon, setIcon] = useState("sun")
    document.body.setAttribute('data-theme', 'dark')

    function onThemeChange() {
        if (icon === "moon") {
            setIcon('sun')
            document.body.setAttribute('data-theme', 'dark')
        } else {
            setIcon('moon')
            document.body.setAttribute('data-theme', 'light')
        }
    }

    return (
        <div className='theme-toggle-div inter-regular'>
            <button className='theme-toggle link' onClick={onThemeChange}>
                <Icon icon={icon} className={'theme-icon'} />
            </button>
        </div>
    )
}

export default ThemeToggle