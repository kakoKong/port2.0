import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: '-7em',
        backgroundColor: 'white',
        opacity: '100%',
        width: 'auto',
        marginBottom: '2em',
        boxShadow:  'none',
        padding: '20px',
        borderRadius: 20,
        zIndex: '2'
    },
    container: {
        margin: 'auto',
    },
    button: {
        border: '3px solid #90B0C0',
        color: '#90B0C0'
    }
}))

const navItem = [
    {
        key: '1',
        name: 'About Me',
        value: 'about'
    },
    {
        key: '2',
        name: 'Education',
        value: 'education'
    },
    {
        key: '3',
        name: 'Experience',
        value: 'experience'
    },
]
const NavMe = ({ onChange, section }) => {
    
    const handleChange= (event) => {
        onChange(event.currentTarget.value)
        console.log('eiei')
    }

    const classes = useStyle()
    return (
        <Paper className={classes.root}>
            <Grid className={classes.container} container justifyContent="center" spacing={2}>
                {navItem.map((item) => 
                    item.value === section ? (
                    <Grid key={item.key} item sm={4}>
                        <Button
                            className={classes.button} 
                            onClick={handleChange} 
                            value={item.value} 
                            variant="outlined" 
                            size="large">
                            {item.name}
                        </Button>
                    </Grid>
                    ) : (
                    <Grid key={item.key} item sm={4}>
                        <Button
                            onClick={handleChange} 
                            value={item.value} 
                            variant="contained" 
                            color="primary" 
                            size="large">
                            {item.name}
                        </Button>
                    </Grid>
                    )
                )}
            </Grid>
        </Paper>
    )
}

export default NavMe
