import React from 'react'
import "./ResumeButton.css"

function ResumeButton() {
    function onResumeClick() {
        window.open("https://drive.google.com/file/d/1QEgY6bUU-0PBCDBCpsKHnVmaLktri0DV/view?usp=sharing", "_blank", "noreferrer")
    }
    return (
        <div id='resume-ctn'>
            <span className='resume-btn inter-regular' onClick={onResumeClick}>
                View My Resume
            </span>
        </div>
    )
}

export default ResumeButton