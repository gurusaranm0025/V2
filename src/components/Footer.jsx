import React from 'react'
import "./Footer.css"
import Conatct from './Contact/Conatct'

function Footer() {
    return (
        <div className='footer-div'>
            <span className='footer-content inter-light'>
                Designed & Developed by <br /> Guru Saran M
            </span>
            <div className='contact-footer-div'>
                <Conatct />
            </div>
        </div>
    )
}

export default Footer