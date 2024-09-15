import React from 'react'
import Conatct from './Contact/Conatct'

function Home() {
    return (
        <section className='hero-section'>
            <div className='intro-container inter-regular'>
                <p className='greetings'>Hello 👋,</p>
                <p className='name-intro'>
                    I'm <span className='name inter-sb'>Guru Saran M</span>,
                </p>
                <p className='self-des'>
                    a polyglot programmer{" "}
                    {/* crafting elegant solutions across diverse platforms */}
                    with a quick grasp of tasks across multiple languages
                </p>

                <div className='hero-contact-container'>
                    <span className='get-in-touch'>
                        Get in touch 👉
                    </span>
                    <Conatct />
                    {/* <a className='inter-light mail-link' href="mailto://gurusaranm0025@gmail.com">gurusaranm0025@gmail.com</a> */}
                </div>
            </div>
        </section>
    )
}

export default Home