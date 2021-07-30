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
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        border: '3px solid #90B0C0',
        color: '#90B0C0',
        margin: 'auto',
        backgroundColor: 'white'
    }
}))

const navItem = [
    {
        key: '1',
        name: 'WarwickThaiSoc 1.0',
        value: 'ww1'
    },
    {
        key: '2',
        name: 'WarwickThaiSoc 1.0',
        value: 'ww2'
    },
    {
        key: '3',
        name: 'EdTech',
        value: 'et'
    },
    {
        key: '4',
        name: 'Blockchain',
        value: 'bc'
    },
    {
        key: '5',
        name: 'Tinder Range',
        value: 'TR'
    },
]
const NavWork = ({ onClick, section }) => {
    
    const handleChange= (event) => {
        onClick(event.currentTarget.value)
    }

    const classes = useStyle()
    return (
        <Paper className={classes.root}>
            <Grid className={classes.container} container justifyContent="center" spacing={2}>
                {navItem.map((item) => 
                    item.value === section ? (
                    <Grid key={item.key} item sm={12}>
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
                    <Grid key={item.key} item xs={12} sm={12}>
                        <Button
                            className={classes.button} 
                            onClick={handleChange} 
                            value={item.value} 
                            variant="outlined" 
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

export default NavWork
