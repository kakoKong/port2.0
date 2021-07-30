
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        padding: theme.spacing(8)
    }
}))

const Mywork = ( { onClick, topic } ) => {
    const classes = useStyle()
    return (
        <div className={classes.root} onClick={() => onClick()}>
            <Paper className={classes.paper}>
                <Typography variant="h2">
                    {topic}
                </Typography>
            </Paper>
        </div>
    )
}

export default Mywork
