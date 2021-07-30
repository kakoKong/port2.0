import { Typography } from '@material-ui/core'
import React, { useRef, useState, useEffect } from 'react'
import NavMe from './NavMe'
import Programming from './Programming'
import TimeLine from './Timeline'

const About = () => {
    const [curSection, setCurSection] = useState('about')

    useEffect(() => {
        console.log('currently',curSection)
    }, [curSection])

    const changeState= (section) => {
        setCurSection(section)
        console.log('run at index to', section)
    }
    if (curSection === 'experience'){
        return (
            <>
            <NavMe onChange={changeState} section={curSection}/>
            <Programming/>
            </>
            
        )
    }
    if (curSection === 'education'){
        return(
            <>
                <NavMe onChange={changeState} section={curSection} />
                <TimeLine />
            </>
        )
    }
    else {
        return(
            <>
            <NavMe onChange={changeState} section={curSection} />
            <Typography variant="h2" color="secondary">
                About me
            </Typography>
            <Typography paragraph>
                My name is Pattarathon Nopwattanapong, or you can call mee Kaokong. I am final year computer science student at University of Warwick
                planning to become Front-End Developer. I enjoy coding and designing which I believe it would allows me to fit in as a front-end developer.
                My other interests are AIs and Data Science.
            </Typography>
            </>
        )
    }
    
}

export default About
