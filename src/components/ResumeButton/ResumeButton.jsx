import React from 'react'
import "./ResumeButton.css"

function ResumeButton() {
    function onResumeClick() {
        window.open("https://drive.google.com/file/d/1qhBUptIMFOb1lnfMyFsGXGh0w8SPgWyn/view?usp=sharing", "_blank", "noreferrer")
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