import React from 'react';
import { Grid, Typography} from "@material-ui/core";
import runny from './images/runny.png';
import cough from './images/cough.png';
import fever from './images/fever.png';
import pneuomonia from './images/pneuomonia.png';
import sore from './images/sore.png';



export const Symptoms = () => {
    return (
        <div>
             <Grid container justify="center" style={{paddingTop: 10}} spacing={1}>
                <Grid item lg={12} xs={12} style={{paddingTop: 10}}>
                <div data-aos="fade-left" style={{color: '#002831', paddingTop: 30}}>
                <Typography variant="h3" style={{fontFamily: "Segoe UI", fontWeight: 500}} align="center" gutterBottom > Coronavirus Symptoms</Typography>
                <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} className="mx-auto" align="center" gutterBottom>The most common system found in a person possibly suffering from Coronavirus includes the following</Typography>
                </div> 
                </Grid>
                <Grid item align="center" lg={3} spacing={1} style={{paddingTop: 20}}>
                    <div data-aos="fade-up">
                        <img className="main-illustration" src={runny} style={{height:320, width: 320}} alt='main-illustration'></img>
                        <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} className="mx-auto" align="center">RUNNY NOSE</Typography>
                    </div>
                </Grid>
                <Grid item align="center" lg={3} spacing={1} style={{paddingTop: 20}}>
                    <div data-aos="fade-up">
                        <img className="main-illustration" src={cough} style={{height:320, width: 320}} alt='main-illustration'></img>
                        <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} className="mx-auto" align="center">COUGH</Typography>
                    </div>
                </Grid>
                <Grid item align="center" lg={3} spacing={1} style={{paddingTop: 20}}>
                    <div data-aos="fade-up">
                        <img className="main-illustration" src={fever} style={{height:320, width: 320}} alt='main-illustration'></img>
                        <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} className="mx-auto" align="center">FEVER</Typography>
                    </div>
                </Grid>
                <Grid item align="center" lg={4} spacing={2} style={{paddingTop: 20}}>
                    <div data-aos="fade-up">
                        <img className="main-illustration" src={sore} style={{height:320, width: 320}} alt='main-illustration'></img>
                        <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} className="mx-auto" align="center">SORE THROAT</Typography>
                    </div>
                </Grid>
                <Grid item align="center" lg={4} spacing={2} style={{paddingTop: 20}}>
                    <div data-aos="fade-up">
                        <img className="main-illustration" src={pneuomonia} style={{height:320, width: 320}} alt='main-illustration'></img>
                        <Typography variant="h5" style={{fontFamily: "Segoe UI", fontWeight: 400}} className="mx-auto" align="center">PNEUOMONIA</Typography>
                    </div>
                </Grid>
             </Grid>
        </div>
    )
}
