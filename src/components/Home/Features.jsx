import React from 'react';
import { Grid, Typography, Paper} from "@material-ui/core";
import demo from "./images/demo.png";

import styles from './Features.module.css';
export const Features = () => {

    const implement = {
        background: 'transparent linear-gradient(37deg, #012F39 0%, #022D36 18%, #101516 100%) 0% 0% no-repeat padding-box',
        borderRadius: 20,
        padding: 40
    }

    return (
        <div>
             <Grid container justify="center" style={{paddingTop: 30}} spacing={1}>
                <Grid item lg={12} xs={12} style={{paddingTop: 10}}>
                <div data-aos="fade-left" style={{color: '#002831', paddingTop: 30}}>
                <Typography variant="h3" style={{fontFamily: "Segoe UI", fontWeight: 500}} align="center" gutterBottom >CoviSA is a Covid19 based Sentiment Analysis that uses Twitter real time API.</Typography>
                <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} align="center" gutterBottom> To analyse the sentiments being depicted in the tweets based on the trending COVID related handles &amp; hashtags.</Typography>
                </div> 
                </Grid>
            </Grid>
            <Grid container justify="center" style={{paddingTop: 100}} spacing={10}>
                <Grid item align="center" lg={4} style={{paddingTop: 20}}>
                    <div data-aos="flip-right" >
                      <Paper elevation={3} style={implement}>
                      <Typography variant="h4" style={{fontFamily: "Segoe UI", padding:'30', fontWeight: 500, color:'white'}} align="left" gutterBottom>Implementation</Typography>
                      <img src={demo} className={styles.demoimg}></img>
                      </Paper>
                        
                    </div>
                </Grid>
                <Grid item align="center" lg={3}  style={{paddingTop: 20}}>
                    <div data-aos="flip-left" >
                      <Paper elevation={3} style={implement}>
                      <Typography variant="h4" style={{fontFamily: "Segoe UI", fontWeight: 400, color:'white'}} align="left" gutterBottom>About</Typography>
                      <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400, color:'white',paddingTop: 30}} align="left" gutterBottom>
                      This project has been inspired by the recent popularity of Twitter and keeping in mind the sentiments of people due to numerous changes being made in our day to day lives.
                      </Typography>
                      </Paper>
                        
                    </div>
                </Grid>
             </Grid>
        </div>
    )
}
