import React, { useEffect, useState } from 'react'

const svgMap = {
    'go': require('./go.svg').ReactComponent,
    'bash': require('./bash.svg').ReactComponent,
    'css': require('./css.svg').ReactComponent,
    'git': require('./git.svg').ReactComponent,
    'github': require('./github.svg').ReactComponent,
    'js': require('./js.svg').ReactComponent,
    'linux': require('./linux.svg').ReactComponent,
    'mongodb': require('./mongo.svg').ReactComponent,
    'nextjs': require('./nextjs.svg').ReactComponent,
    'nodejs': require('./nodejs.svg').ReactComponent,
    'postgressql': require('./postgres.svg').ReactComponent,
    'postman': require('./postman.svg').ReactComponent,
    'python': require('./python.svg').ReactComponent,
    'reactjs': require('./reactjs.svg').ReactComponent,
    'tailwindcss': require('./tailwind.svg').ReactComponent,
    'html': require('./html.svg').ReactComponent,
    'linkedin': require('./linkedin.svg').ReactComponent,
    'mail': require('./mail.svg').ReactComponent,
    'sun': require('./sun.svg').ReactComponent,
    'moon': require('./moon.svg').ReactComponent
}

function Icon({ icon, className }) {
    const [SvgComp, setSvgComp] = useState(null)

    useEffect(() => {
        const compo = svgMap[icon]
        setSvgComp(compo)
    }, [icon])

    if (!SvgComp) {
        return <div className='loading inter-regular'>...</div>
    }

    return (<SvgComp className={`svg-icon ${className}`} />)
}

export default Icon