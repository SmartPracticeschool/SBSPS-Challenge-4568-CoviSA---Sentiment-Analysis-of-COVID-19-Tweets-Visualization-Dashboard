import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo2.png'
import { Typography } from '@material-ui/core';


export const MainNav = () => {
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" variant="dark">
                {/* <div className=>
                    <img src={logo} style={{height: 80, width: 160, marginLeft:10, marginRight:1}}></img><Typography variant="h4" style={{fontFamily: "Segoe UI", fontWeight: 700}}>CoviSA</Typography> 
                </div> */}
                <div className="logo" data-aos="fade-right">
                <a href="#" target="_blank">
                <div style={{height : 'auto', width : 'auto',  display: 'inline-block'}}>
                    <img src={logo} alt="LegalMind Logo" style={{height: 80, width: 160, marginLeft:2, marginRight:0}}/>
                </div>
                <div style={{height : 'auto', width : 'auto', verticalAlign: 'middle', display: 'inline-block'}}>
                    <span style={{lineHeight: '60px', fontSize: '2em', fontWeight: '500', color: 'white'}}>CoviSA</span>
                </div>
                </a> 
                </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="pr-4 navlink" href="#home">HOME</Nav.Link>
                <Nav.Link className="pr-4 navlink" href="#analysis">ANALYSIS</Nav.Link>
                <Nav.Link className="pr-4 navlink" href="#contact">CONTACT</Nav.Link>
                <Nav.Link className="pr-4 navlink" href="#faq">FAQ</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
