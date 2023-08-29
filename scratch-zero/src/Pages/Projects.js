import React, {useState, useEffect} from "react";
import Navbar from "./NavbarProject";
import Contact from "./Contact";
import Fade from 'react-reveal/Fade';
import Canvas from "./Canvas";
import { Helmet } from "react-helmet";
import ReactTyped from "react-typed";
import Particles from '../components/Particles';
import { styles } from '../Styles/Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow1 from "../Imgs/leftArrow.png";
import rightArrow1 from "../Imgs/rightArrow1.png";
import Slider from 'react-slick';
import { FaCheck, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


import {BrowserRouter as Router, Switch, Route, Link, useNavigate, useParams} from 'react-router-dom';

import { useAuth } from "./auth";
 
function Projects() {


    window.onload = function(){ 
        // your code 
    
        var button = document.getElementById('slide');
        button.onclick = function () {
            var container = document.getElementById('container');
            sideScroll(container,'right',25,300,20);
        };
        
        var back = document.getElementById('slideBack');
        back.onclick = function () {
            var container = document.getElementById('container');
            sideScroll(container,'left',25,300,20);
        };

        var button = document.getElementById('slide1');
        button.onclick = function () {
            var container = document.getElementById('container1');
            sideScroll(container,'right',25,300,20);
        };
        
        var back = document.getElementById('slideBack1');
        back.onclick = function () {
            var container = document.getElementById('container1');
            sideScroll(container,'left',25,300,20);
        };

        var button = document.getElementById('slide2');
        button.onclick = function () {
            var container = document.getElementById('container2');
            sideScroll(container,'right',25,300,20);
        };
        
        var back = document.getElementById('slideBack2');
        back.onclick = function () {
            var container = document.getElementById('container2');
            sideScroll(container,'left',25,300,20);
        };
        
        function sideScroll(element,direction,speed,distance,step){
            var scrollAmount = 0;
            var slideTimer = setInterval(function(){
                if(direction == 'left'){
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if(scrollAmount >= distance){
                    window.clearInterval(slideTimer);
                }
            }, speed);
        }

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

    <div className='PComp2' id="Web-Development">  
        <div className="Pcontent2">
            <div className="SoftwareDevH">
                <h1><span class="gradient-underline">WEB DEVELOPMENT</span>  </h1> 
            </div>
            <div className="Projects-Arrows">
            <div className="Left control prev" id="slideBack2"><img className="leftArrow" src={leftArrow1} /></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller" id="container2">
                <div class="Pcontainer">
                <div class="card">
                <div class="Pfront Pfront1"></div>
                <div class="Pback Pback1">
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
                <div class="Pfront Pfront3"></div>
                <div class="Pback Pback3">
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
                <div class="Pfront Pfront4"></div>
                <div class="Pback Pback4">
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
            <div class="Pfront Pfront5"></div>
            <div class="Pback Pback5">
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
            <div class="Pfront Pfront6"></div>
            <div class="Pback Pback6">
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
            <div className="Right control next" id="slide2"><img className="rightArrow" src={rightArrow1} /></div>
            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>
    
    <div className='PComp2' id="Digital-Marketing">  
        <div className="Pcontent2">
            <div className="SoftwareDevH">
                <h1><span class="gradient-underline">DIGITAL MARKETING</span>  </h1> 
            </div>
            <div className="Projects-Arrows">
            <div className="Left control prev" id="slideBack"><img className="leftArrow" src={leftArrow1} /></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller" id="container">
                <div class="Pcontainer">
                <div class="card">
                <div class="Pfront Pfront1"></div>
                <div class="Pback Pback1">
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
                <div class="Pfront Pfront3"></div>
                <div class="Pback Pback3">
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
                <div class="Pfront Pfront4"></div>
                <div class="Pback Pback4">
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
            <div class="Pfront Pfront5"></div>
            <div class="Pback Pback5">
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
            <div class="Pfront Pfront6"></div>
            <div class="Pback Pback6">
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
            <div className="Right control next" id="slide"><img className="rightArrow" src={rightArrow1} /></div>
            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>
    <div className='PComp2' id="Software-Development">  
        <div className="Pcontent2">
            <div className="SoftwareDevH">
                <h1><span class="gradient-underline">SOFTWARE DEVELOPMENT</span>  </h1> 
            </div>
            <div className="Projects-Arrows">
            <div className="Left control prev" id="slideBack1"><img className="leftArrow" src={leftArrow1} /></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller" id="container1">
                <div class="Pcontainer">
                <div class="card">
                <div class="Pfront Pfront1"></div>
                <div class="Pback Pback1">
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
                <div class="Pfront Pfront3"></div>
                <div class="Pback Pback3">
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
                <div class="Pfront Pfront4"></div>
                <div class="Pback Pback4">
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
            <div class="Pfront Pfront5"></div>
            <div class="Pback Pback5">
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
            <div class="Pfront Pfront6"></div>
            <div class="Pback Pback6">
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
            <div className="Right control next" id="slide1"><img className="rightArrow" src={rightArrow1} /></div>
            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>

    <div className="comp6">
      <div className="ContactH"><h1>CONTACT US</h1></div>
      <div className="subcomp6">
      <div className="contact"><Contact></Contact></div>
      <div className="contact-quote">
        <div className="heading"><h1>Lets have a <span className="Red">chat</span></h1></div>
        <p>We're here to connect, collaborate, and create solutions. Whether you have questions, 
          ideas, or a project in mind.</p>
      </div>
      </div>
    </div>

    </>
    );
}

export default Projects;