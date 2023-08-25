import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Fade from 'react-reveal/Fade';
import Canvas from "./Canvas";
import { Helmet } from "react-helmet";
import ReactTyped from "react-typed";
import Particles from '../components/Particles';
import { styles } from '../Styles/Projects.css';


import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';

import { useAuth } from "./auth";
 
function Projects() {

    return(
        <>
        <React.Fragment><Navbar /></React.Fragment>
        <div className='PComp1'>  
            <div className="Pcontent1">

                <h1  className='Ptitle'>
                    EXPLORE OUR WORK
                </h1>
                <p>EMPOWERING BUSINESS THROUGH COMPREHENSIVE IT SERVICES</p>


            </div>
            
    
            
            <Particles id="tsparticles" />
        

    </div>
    <div className='PComp2'>  
        <div className="Pcontent2">
            <div className="SoftwareDevH">
                <h1><span class="gradient-underline">SOFTWARE DEVELOPMENT</span>  </h1> 
            </div>
            <div className="Projects">
            <div className="cards">
    <div class="container">
    <div class="card">
    <div class="Pfront Pfront2"></div>
      <div class="Pback Pback2">
        <p>Additional info on the back of the cardAdditional info on the back of the cardAdditional info on the back of the cardAdditional info on the back of the cardAdditional info on the back of the cardAdditional info on the back of the cardAdditional info on the back of the cardAdditional info on the back of the card</p>
        <a href="https://reservim.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>

      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="Pfront Pfront2"></div>
      <div class="Pback Pback2">
        <p>Additional info on the back of the card</p>
        <a href="https://doctorfindy.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      </div>
    </div>
  </div>

  </div>            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>

    </>
    );
}

export default Projects;