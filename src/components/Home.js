import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Navbar from './Navbar'

import avatar from '../assets/avatar.png'
import { Section } from '../style/home'
import About from './About'

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: '#10445A'
    },
    container: {  
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
        color: 'white'
    },
    idk: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    idkItem: {
        marginTop: '2em',
    }
}))
const Home = () => {
    const classes = useStyle()
    return (
        <>
        <div className={classes.root}>
            <Container className={classes.container} maxWidth="sm">
                <Typography align="center" variant="h3" gutterBottom>
                    Pattarathon Nopwattanapong
                </Typography>
                <Divider />
                <Typography align="right" variant="h5" color="secondary"> 
                    Front-End Developer
                </Typography>
                <Grid container justifyContent="center" alignItems='center'>
                    <Grid item xs={12} sm={6}>
                        <Navbar className={classes.idkItem} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* <img style={{height:'250px'}} src={avatar} alt="" className={classes.idkItem} /> */}
                    </Grid>
                </Grid>
            </Container>

        </div>

            <Section>
                <Container maxWidth="sm">
                    <About/>
                </Container>
            </Section>
        </>
    )
}

export default Home
