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

        // var button = document.getElementById('slide1');
        // button.onclick = function () {
        //     var container = document.getElementById('container1');
        //     sideScroll(container,'right',25,300,20);
        // };
        
        // var back = document.getElementById('slideBack1');
        // back.onclick = function () {
        //     var container = document.getElementById('container1');
        //     sideScroll(container,'left',25,300,20);
        // };

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
            <div className="Left control prev" id="slideBack2"><img className="leftArrow" src={leftArrow1} alt="leftArrow"/></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller" id="container2">
                <div class="Pcontainer">
                <div class="card">
                <div class="Pfront PWDfront1"></div>
                <div class="Pback PWDback1">
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
                <div class="Pfront PWDfront2"></div>
                <div class="Pback PWDback2">
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
                <div class="Pfront PWDfront3"></div>
                <div class="Pback PWDback3">
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
                <div class="Pfront PWDfront4"></div>
                <div class="Pback PWDback4">
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
            <div class="Pfront PWDfront5"></div>
            <div class="Pback PWDback5">
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
            <div class="Pfront PWDfront6"></div>
            <div class="Pback PWDback6">
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
                <div class="Pfront PWDfront7"></div>
                <div class="Pback PWDback7">
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
                <div class="Pfront PWDfront8"></div>
                <div class="Pback PWDback8">
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
                <div class="Pfront PWDfront9"></div>
                <div class="Pback PWDback9">
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
                <div class="Pfront PWDfront10"></div>
                <div class="Pback PWDback10">
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
                <div class="Pfront PWDfront11"></div>
                <div class="Pback PWDback11">
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
                <div class="Pfront PWDfront12"></div>
                <div class="Pback PWDback12">
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
                <div class="Pfront PWDfront13"></div>
                <div class="Pback PWDback13">
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
                <div class="Pfront PWDfront14"></div>
                <div class="Pback PWDback14">
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
            <div className="Right control next" id="slide2"><img className="rightArrow" src={rightArrow1}  alt="leftArrow"/></div>
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
            <div className="Left control prev" id="slideBack"><img className="leftArrow" src={leftArrow1} alt="LeftArrow"/></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller" id="container">
                <div class="Pcontainer">
                <div class="card">
                <div class="Pfront PDMfront1"></div>
                <div class="Pback PDMback1">
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
                <div class="Pfront PDMfront2"></div>
                <div class="Pback PDMback2">
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
                <div class="Pfront PDMfront3"></div>
                <div class="Pback PDMback3">
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
                <div class="Pfront PDMfront4"></div>
                <div class="Pback PDMback4">
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
            <div class="Pfront PDMfront5"></div>
            <div class="Pback PDMback5">
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
            <div class="Pfront PDMfront6"></div>
            <div class="Pback PDMback6">
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
            <div class="Pfront PDMfront7"></div>
            <div class="Pback PDMback7">
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
            <div class="Pfront PDMfront8"></div>
            <div class="Pback PDMback8">
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
            <div class="Pfront PDMfront9"></div>
            <div class="Pback PDMback9">
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
            <div className="Right control next" id="slide"><img className="rightArrow" src={rightArrow1} alt="rightArrow"/></div>
            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>
    {/* <div className='PComp2' id="Software-Development">  
        <div className="Pcontent2">
            <div className="SoftwareDevH">
                <h1><span class="gradient-underline">SOFTWARE DEVELOPMENT</span>  </h1> 
            </div>
            <div className="Projects-Arrows">
            <div className="Left control prev" id="slideBack1"><img className="leftArrow" src={leftArrow1} alt="leftArrow" /></div>
            <div className="Projects">
            
            <div className="cards">
                
            <div className="media-scroller" id="container1">
                <div class="Pcontainer">
                <div class="card">
                <div class="Pfront PSDfront1"></div>
                <div class="Pback PSDback1">
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
                <div class="Pfront PSDfront2"></div>
                <div class="Pback PSDback2">
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
                <div class="Pfront PSDfront3"></div>
                <div class="Pback PSDback3">
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
                <div class="Pfront PSDfront4"></div>
                <div class="Pback PSDback4">
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
            <div class="Pfront PSDfront5"></div>
            <div class="Pback PSDback5">
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
            <div class="Pfront PSDfront6"></div>
            <div class="Pback PSDback6">
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
            <div className="Right control next" id="slide1"><img className="rightArrow" src={rightArrow1} alt="rightArrow"/></div>
            </div>
            <div className="Pquote1">
            <p>OUR TEAM OF SKILLED DEVELOPER, DESIGNERS, AND ENGINEERS COLLABORATE TO CRAFT SOLUTIONS THAT DRIVE INNVOVATION AND ELEVATE BUSINESS</p>
            </div>


        </div>
            
        

    </div>*/}

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