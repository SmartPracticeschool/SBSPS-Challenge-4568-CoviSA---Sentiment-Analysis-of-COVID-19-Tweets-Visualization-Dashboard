import React from 'react'
import { Grid, Typography} from "@material-ui/core";

import logo from './india-map.png';


export const CurrentScenario = () => {
    return (
         
            <Grid container justify="center" style={{paddingTop: 10}} spacing={1}>
                <Grid item lg={12} xs={12} style={{paddingTop: 50}}>
                <div data-aos="fade-left" style={{color: '#002831', paddingTop: 30}}>
                <Typography variant="h3" style={{fontFamily: "Segoe UI", fontWeight: 500}} align="center" gutterBottom > Coronavirus Outbreak in India</Typography>
                <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} align="center" gutterBottom>The following map shows the statistics of COVID-19 cases across India.</Typography>
                <Typography variant="h4" style={{fontFamily: "Segoe UI", fontWeight: 700}} align="center" gutterBottom > Total Coronavirus Cases:  <span style={{color: '#0F93AF'}}>1,23,456</span></Typography>
                <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 700, color: '#002831E0'}} align="center" gutterBottom > Recovered:  <span style={{color: '#20AE15E0'}}>1,23,456</span> Deaths:  <span style={{color: '#E21A63E0'}}>1,23,456</span></Typography>
                </div> 
                </Grid>
                <Grid item align="center" lg={12} xs={12} style={{paddingTop: 50}}>
                    <div data-aos="fade-up">
                        <img className="main-illustration" src={logo} style={{height:400, width: 400}} alt='main-illustration'></img>
                    </div>
                </Grid>
             </Grid>
        
    )
}
