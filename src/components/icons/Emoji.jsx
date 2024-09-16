import React from 'react'
import emoji from "./emoji.png"

function Emoji({ className }) {
    return (
        <img src={emoji} alt='emoji of a man with laptop' className={className} />
    )
}

export default Emoji