import { Typography } from '@material-ui/core'
import React from 'react'
import { Button, Nav, NavDesc, NavItem } from '../style/navbar'

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    }
}))

const Navbar = () => {
    const classes = useStyle()
    return (
        <div>
            <Nav>
                <NavItem>
                    <Link to="/" className={classes.link}>
                        <Button primary>Me</Button>
                        <NavDesc>
                        <Typography variant="subtitle">
                            Learn more about me: my education, past experience, and more!
                        </Typography> 
                    </NavDesc>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/work" className={classes.link}>
                        <Button >Work</Button>
                        <NavDesc>
                        <Typography variant="subtitle">
                            My works and Project
                        </Typography> 
                    </NavDesc>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className={classes.link}>
                        <Button primary>Contract</Button>
                        <NavDesc>
                        <Typography variant="subtitle">
                            Talk to me!
                        </Typography> 
                    </NavDesc>
                    </Link>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navbar
