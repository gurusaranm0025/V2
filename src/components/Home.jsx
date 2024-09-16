import React from 'react'
import Conatct from './Contact/Conatct'
import ThemeToggle from './ThemeToggle/ThemeToggle'
import Emoji from './icons/Emoji'

function Home() {
    return (
        <section className='hero-section'>
            <ThemeToggle />
            <div className='intro-container inter-regular'>
                <p className='greetings'>Hello! 👋</p>
                <p className='name-intro'>
                    I'm <span className='name inter-sb'>Guru Saran M</span>,
                </p>
                <p className='self-des'>
                    a detail-oriented back-end software engineer focused on building robust systems and optimizing performance.
                    <Emoji className={'emoji'} />
                    {/* OLD INTRO */}
                    {/* a polyglot programmer{" "} */}
                    {/* crafting elegant solutions across diverse platforms */}
                    {/* with a quick grasp of tasks. */}
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