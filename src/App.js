import React from 'react';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

import {MainNav} from './components/Home/MainNav'
import {Title} from './components/Home/Title'
import {CurrentScenario} from "./components/Home/CurrentScenario";

import './App.css';
import { Symptoms } from './components/Home/Symptoms';
import { Prevention } from './components/Home/Prevention';
import { Features } from './components/Home/Features';


/*
import { TweetsByGOI } from "./components/TweetsByGOI";
import { TweetsByMOHFW } from "./components/TweetsByMOHFW";
import { Analysis } from "./components/Analysis/Analysis"; */

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className="App">
      <header className="App-header">
        <MainNav/>
      </header>
      
      <div className="bg-1">
        <Title/>
      </div>

      <div className="bg-2">
        <Features/>
      </div>

      <div className="bg-2">
        <Symptoms/>
      </div>

      <div className="bg-1">
        <Prevention/>
      </div>
    </div>
  );
}

export default App;
