import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import Navbar from '../Navbar'

import avatar from '../../assets/avatar.png'
import me from  '../../assets/me.JPG'
import { Section } from '../../style/home'
import About from '../About'
import NavWork from './NavWork'
import Mywork from './Mywork'


const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
        // opacity: '50%'
    },
    container: {  
        position: 'absolute',
        color: 'white',
        top: '2em',
        right: '20px',
        left: '20px',
        fontWeight: 500,
        // opacity: 0,
    },
    idk: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    idkItem: {
        marginTop: '2em',
    },
    backgroundImg: {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
        opacity: '50%',
        
    },
    about: {
        zIndex: '0',
        opacity: '100%',
    }
}))
const Home = () => {
    const classes = useStyle()

    const [showWork, setShowWork] = useState(false);
    const [topic, setTopic] = useState('')

    const onClick = (topic) => {
        setShowWork(!showWork)
        setTopic(topic)
        console.log(topic)
    }
    return (
        <>
        <div className={classes.root}>

            
            <img className={classes.backgroundImg} src={me} ></img>
            <Container className={classes.container} maxWidth="sm">
                <Typography align="center" variant="h3">
                    Kaokong
                </Typography>
                <Divider />
                <Typography align="right" variant="h5" color="secondary"> 
                   My past works and works in progress
                </Typography>
                <Grid container justifyContent="space-between" alignItems='center'>
                    <Grid item xs={12} sm={5}>
                        <Navbar className={classes.idkItem} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        
                    </Grid>
                </Grid>
            </Container>

        </div>

            <Section>
                <Container className={classes.about} maxWidth="sm">
                    <NavWork onClick={onClick} show={showWork}/>
                    { showWork ? <Mywork onClick={onClick} topic={topic} show={showWork} /> : ''}
                    
                </Container>
            </Section>
        </>
    )
}

export default Home
