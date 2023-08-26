import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Fade from 'react-reveal/Fade';
import Canvas from "./Canvas";
import { Helmet } from "react-helmet";
import ReactTyped from "react-typed";
import Particles from '../components/Particles';
import { styles } from '../Styles/Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaCheck, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';

import { useAuth } from "./auth";
 
function Projects() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

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
            <div className="Projects-Arrows">
            <div className="Left"><FaArrowCircleLeft /></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller">
                <div class="Pcontainer">
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
                <div class="Pcontainer">
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
                <div class="Pcontainer">
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
                <div class="Pcontainer">
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

            <div class="Pcontainer">
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

            <div class="Pcontainer">
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
            
           
            </div>
            
            </div>
            
            </div>
            <div className="Right"><FaArrowCircleRight /></div>
            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>

    </>
    );
}

export default Projects;