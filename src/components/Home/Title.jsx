import React from 'react';
import { Grid, Typography} from "@material-ui/core";
import logo from './main-illustration.png';





export const Title = () => {
    return (
        <div>
            <Grid container justify="center" style={{paddingTop: 200}} spacing={1}>
                <Grid item lg={5} xs={12} style={{paddingTop: 50}}>
                    <div data-aos="fade-right">
                    <Typography variant="h2" style={{fontFamily: "Segoe UI", fontWeight: 700}} gutterBottom>COVID - <span style={{color: '#C62169'}}>19</span></Typography>
                    <Typography variant="h2" style={{fontFamily: "Segoe UI", fontWeight: 700}} gutterBottom>Stay Safe. Stay Home.</Typography>
                    </div>
                </Grid>
                <Grid item lg={5} xs={12}>
                    <div data-aos="fade-left">
                        <img className="main-illustration" src={logo} alt='main-illustration'></img>
                    </div>
                </Grid>
             </Grid>
        </div>
    )
}
