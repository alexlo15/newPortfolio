import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import RandomFact from "../RandomFact";
import SocialButts from '../Social butts/SocialButtons';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    github: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    linkedin: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));



export default function IntroGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><h1>Welcome to Alex Lo's Portfolio</h1></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item xs={12} sm={6}><Avatar alt="Me" src={require("../Pictures/me.jpg")} className={classes.bigAvatar} /></Grid>
                            <Grid item xs={12} sm={6}><p id="bioText">I am a jack of all trades full stack web developer looking to accelerate my career in the technology industry.</p></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
               <SocialButts></SocialButts>
            </Grid>
        </div>
    );
}