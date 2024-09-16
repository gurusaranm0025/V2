import React, { useEffect, useState } from 'react'
import "./ThemeToggle.css"
import Icon from "../icons/Icon"

function ThemeToggle() {
    const [icon, setIcon] = useState("moon")

    useEffect(() => {
        let darkMode = localStorage.getItem('dark-mode');
        if (darkMode) {
            document.body.setAttribute('data-theme', 'dark')
            setIcon("sun")
        } else {
            document.body.setAttribute('data-theme', 'light')
            setIcon("moon")
        }
    }, [])


    function onThemeChange() {
        if (icon === "moon") {
            setIcon('sun')
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('dark-mode', false)
        } else {
            setIcon('moon')
            document.body.setAttribute('data-theme', 'light')
            localStorage.setItem('dark-mode', true)
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