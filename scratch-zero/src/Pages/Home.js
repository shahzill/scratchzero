import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Contact from "./Contact";
import videoBG1 from "../Imgs/VideoBG10.mp4"
import videoBG2 from "../Imgs/VideoBG6.mp4"
import Background2 from "../Imgs/Background2.jpg"
import { styles } from "../Styles/Home.css";
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaCircle, FaFlag } from "react-icons/fa";
import { ImageBackground } from 'react-native';
import SEOM from "../Imgs/SEOMarketing.png"
import WEBD from "../Imgs/WEBD.png"
import WEBD2 from "../Imgs/WEBD2.png"
import DGM from "../Imgs/DGM.png"
import card1 from "../Imgs/Card5.jpeg"
import Fade from 'react-reveal/Fade';
import Canvas from "./Canvas";
import { Helmet } from "react-helmet";
import anime from 'animejs/lib/anime.es.js'
import ReactTyped from "react-typed";
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import Lottie from 'react-lottie';
import SEO from "../Imgs/SEO.json"
import WEBDEVELOPMENT from "../Imgs/WEBDEVELOPMENT.json"
import UI from "../Imgs/UI.json"
import DIGITAL from "../Imgs/DIGITAL.json"

// SPLIT TEXT ATTEMPT:
import { SplitText, LineWrapper, WordWrapper, LetterWrapper } from '@cyriacbr/react-split-text';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: SEO,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: WEBDEVELOPMENT,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true, 
    animationData: UI,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true, 
    animationData: DIGITAL,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  // code from 
  // state for mouse position
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//    // Set cursor variant to change color on hover text
// const [cursorVariant, setCursorVariant] = useState("default");

// // Variant animation
// const variants = {

// // default animation (applies onMouseLeave)
//   default: {
//     x: mousePosition.x - 8,
//     y: mousePosition.y - 8,
//   },

// // text animation (applies onMouseEnter) 
//   text: {
//     height: 150,
//     width: 150,
//     x: mousePosition.x - 70,
//     y: mousePosition.y - 70,
//     backgroundColor: "aqua",
//     mixBlendMode: "difference",
//   },
// };

// function for textLeave and textEnter
// const textEnter = () => setCursorVariant("text");
// const textLeave = () => setCursorVariant("default");

  return (
    <>
    {/* website hero */}
    {/* <video className="video1" src={videoBG1} autoPlay loop muted /> */}
        <React.Fragment><Navbar /></React.Fragment>
    <div className='main'>  
        <div className="content">
           <div className="heroitems">
            <h1  className='title'>
            <span>Scratch</span> 
            <span className="Red">Zero</span>
            </h1>
            <p><ReactTyped className="typing" strings={["Beyond Infinity"]} typeSpeed={100} /></p>
            <div className="a">Solution to all your IT problems</div>
            

          </div>
          <div class="text-box mainbtn">
          <a href="/#ContactUs" class="btn btn-white btn-        animate">Contact Us</a>
        </div>

          
        </div>
        
   
        
        <Particles id="tsparticles" />
        

    </div>

    {/* <div className="gap"></div> */}
    
    {/* second section */}
    <div className="comp3" id="AboutUs">
   
      {/* content */}
      <div className="subcomp3">

        {/* about section */}
        <Fade left>
        <div className="About">
        
          <div className="Content1">
            
            <h1>
            <span className="AlllH">OUR </span>
              <span className="AboutH">MISSION </span>
            </h1>
            <p>At <strong><span className="Red">ScratchZero</span></strong>, we are dedicated to <strong><span className="Red">revolutionizing </span></strong> the way businesses and individuals engage with technology. 
            Our mission is clear: to <strong><span className="Red">empower our clients </span></strong> with <strong><span className="Red">innovative software solutions </span></strong> 
             that cut through complexities and pave the way for <strong><span className="Red">unparalleled growth</span></strong>. 
            We are not just a software company; we are your partner in progress.</p>
            
            
          </div>
          
        </div>
        </Fade>
        {/*  why us */}
        <Fade right>
        <div className="Why-Choose-Us">
          <div className="Content2">
            
            <h1>
              <span className="WhyH">OUR </span>
              <span className="ChooseH">VISION</span>
             
            </h1>
            <p>Our <strong><span className="Red">relentless pursuit of excellence </span></strong>drives us to be the preferred choice for clients seeking cutting-edge solutions. Leveraging the power of <strong><span className="Red">modern technologies </span></strong>,
               we craft digital experiences that transcend the ordinary and define the extraordinary. Our <strong><span className="Red">commitment to your sucess </span></strong> is unwavering, and we are 
               here to guide you on your journey to success.</p>
              
            </div>
        </div>
        </Fade>
        

      </div>
      <div className="Social-Links">
        <div className="Content3">
            <Fade bottom>
            <h3>Join us on social media and stay in the loop with all the latest happenings!</h3>
            <a href="https://www.linkedin.com/in/shahzill-naveed/" target="_blank">
            < FaLinkedin className="scale1 Red" />
            </a>
            <a href="https://instagram.com/_shahzill" target="_blank">
            < FaInstagramSquare className="scale2 Red" />
            </a>
            <a href="https://github.com/shahzill" target="_blank">
            < FaFacebookSquare className="scale3 Red" />
            </a>
              </Fade>
            </div>
        </div>

    </div>
    
    {/* third section */}
    
    <div className="comp2" id="Our-Services">
    
      <Fade bottom>
        <h1>
          SERVICES
        </h1>
      </Fade>
    
      <div className="services">
        <Fade left>
          <div className="service1">
          
            <div className="scontent">
            <Lottie options={defaultOptions}
              height={100}
              width={100}
              />
            <h1>SEO OPTIMIZATION</h1>
            
            <p>Our comprehensive SEO optimization ensures your website stands out in the digital landscape, reaching the right audience at the right time.</p>
           
            </div>
           
          </div>
        </Fade>
        
        <Fade left>
          
          <div className="service3">
          <div className="scontent">
          <Lottie options={defaultOptions3}
              height={100}
              width={100}
              />
            <h1>UI/UX DESIGNING</h1>
            <p>Our UI/UX design merges creativity and user-centricity, ensuring your digital platforms are not just functional, 
              but truly captivating experiences. Let us transform your vision into a visually stunning and intuitive reality.</p>
          
            </div>
          </div>
          <div className="service4">
          <div className="scontent">
          <Lottie options={defaultOptions4}
              height={100}
              width={100}
              />
            <h1>DIGITAL MARKETING</h1>
            <p>Through strategic digital marketing, we boost your online presence, connecting your brand with the right audience and driving tangible growth.</p>
          
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="service2">
            <div className="scontent">
            <Lottie options={defaultOptions2}
              height={120}
              width={120}
              />
            <h1>WEB DEVELOPMENT</h1>
            <p>Elevate your digital presence with our expert web development services. 
              We specialize in crafting dynamic, user-centric websites that captivate your audience and drive meaningful engagement.</p>
              
            </div>
            
          </div>
        </Fade>
      </div>
{/* 
      <div className="wrapper2">
        <div className="card2 img1">
          <div className="information1">
          
            <h1>SEO OPTIMIZATION</h1>
            <p>Our comprehensive SEO optimization ensures your website stands out in the digital landscape, reaching the right audience at the right time.</p>
          </div>
          
          
        </div>
        <div className="card2 img2">

          <div className="information1">
            <h1>WEB DEVELOPMENT</h1>
            <p>Elevate your digital presence with our expert web development services.
               We specialize in crafting dynamic, user-centric websites that captivate your audience and
                drive meaningful engagement.</p>
          </div>
        </div>
        <div className="card2 img3">
          
          <div className="information1">
            <h1>UI/UX Design</h1>
            <p>Our UI/UX design merges creativity and user-centricity, ensuring your digital platforms are not just functional,
               but truly captivating experiences. Let us transform your vision into a visually stunning and intuitive reality.</p>
          </div>
        </div>
        <div className="card2 img4">
          
          <div className="information1">
            <h1>Digital Marketing</h1>
            <p>Through strategic digital marketing, we boost your online presence, connecting your brand with the right audience and driving tangible growth.</p>
          </div>
        </div>
        <div className="card2 img5">
          
          <div className="information1">
            <h1>Digital Marketing</h1>
            <p>Through strategic digital marketing, we boost your online presence, connecting your brand with the right audience and driving tangible growth.</p>
          </div>
        </div>
        <div className="card2 img6">
          
          <div className="information1">
            <h1>Digital Marketing</h1>
            <p>Through strategic digital marketing, we boost your online presence, connecting your brand with the right audience and driving tangible growth.</p>
          </div>
        </div>
      </div> */}
    
    </div> 



    <div className="comp5" id="Portfolio">
    <Fade bottom>
        <h1>
          PORTFOLIO
        </h1>
      </Fade>
    <div className="cards">
    <div class="container">
    <div class="card">
      <div class="front front1"></div>
      <div class="back back1">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front2"></div>
      <div class="back back2">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front3"></div>
      <div class="back back3">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front4"></div>
      <div class="back back4">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
    <div class="container">
    <div class="card">
      <div class="front front5"></div>
      <div class="back back5">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front6"></div>
      <div class="back back6">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front7"></div>
      <div class="back back7">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front8"></div>
      <div class="back back8">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
  </div>
  
    </div>

    {/* fourth section */}
    <div className="comp4">
      <Fade bottom>
        <h1 class="header4" id="Pricing">PRICING</h1>
      </Fade>
      <div className="wrapper3">
        <div className="single-price">
          <h1>BASIC</h1>
          <div className="price">
            <h2>$15/month</h2>
          </div>
          <div className="deals">
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get this</a>
        </div>
        </div>
        <div className="single-price">
          <h1>STANDARD</h1>
          <div className="price">
            <h2>$150/month</h2>
          </div>
          <div className="deals">
            <h4>Lorem ipsum dolor ksfabahdsjfbjhsbfshjdb fjhsd fbshjd</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get this</a>
        </div>
        </div>
        <div className="single-price">
          <h1>PRO</h1>
          <div className="price">
            <h2>$1500/month</h2>
          </div>
          <div className="deals">
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get this</a>
        </div>
        </div>
      </div>
      {/* <div className="wrapper2">
        <div className="card2 img1">
          <div className="information1">
          
            <h1>STANDARD PACKAGE</h1>
            <p>Our comprehensive SEO optimization ensures your website stands out in the digital landscape, reaching the right audience at the right time.</p>
          </div>
          
          
        </div>
        <div className="card2 img2">

          <div className="information1">
            <h1>MEDIUM PACKAGE</h1>
            <p>Elevate your digital presence with our expert web development services.
               We specialize in crafting dynamic, user-centric websites that captivate your audience and
                drive meaningful engagement.</p>
          </div>
        </div>
        <div className="card2 img3">
          
          <div className="information1">
            <h1>PRO PACKAGE</h1>
            <p>Our UI/UX design merges creativity and user-centricity, ensuring your digital platforms are not just functional,
               but truly captivating experiences. Let us transform your vision into a visually stunning and intuitive reality.</p>
          </div>
        </div>
      </div> */}
      {/* <div className="PricingPlans">
        <Fade left>
          <div className="plan1">
          
            <div className="pcontent">
            <h1>Consultation</h1>
            <Lottie options={defaultOptions}
              height={200}
              width={200}
              />
            <p>Here the client may come and discuss their business  along with
              what he is looking to achieve and stuff. This section will have details
              for that typa service and bla bla. I dont know what to write so I am just trying to
              fill out space now lmao</p>
            <ul>
              <p>- We will offer tea and some biscuits with it</p>
              <p>- A round dish filled with software</p>
              <p>- Show you our softwares that we have worked on</p>
              <p>- Have a nice chat with you on worldly matters</p>
            </ul>
            </div>
           
          </div>
        </Fade>
        <Fade right>
          <div className="plan2">
            <div className="pcontent">
            <h1>Starter Business</h1>
            <p>Oh so you have started a new business? Alright, we 
              can help you take it to a next level with our skills and
              skills and skills and im increasing the word limit again</p>
            <ul>
              <p>- We will offer tea and some biscuits with it</p>
              <p>- A round dish filled with software</p>
              <p>- Show you our softwares that we have worked on</p>
              <p>- Have a nice chat with you on worldly matters</p>
            </ul>   
            </div>
            
          </div>
        </Fade>
        <Fade left>
          
          <div className="plan3">
          <div className="pcontent">
            <h1>Consultation</h1>
            <p>Apple wants to be your client and consider you the best option to 
              handle the social media page and sell their prdect. Up for the task?</p>
            <ul>
              <p>- We will offer tea and some biscuits with it </p>
              <p>- A round dish filled with software</p>
              <p>- Show you our softwares that we have worked on</p>
              <p>- Have a nice chat with you on worldly matters</p>
            </ul>
            </div>
          </div>
        </Fade>
      </div> */}
      <div className="Quote">
        <p>Fill out a form explaining your requirements and we will get back to you with a quote.</p>
        <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate">Contact Us</a>
        </div>
      </div>
    </div>

    {/* fifth section */}
    <div className="comp5">
      <h1>CONTACT US</h1>
      <div className="subcomp5">
      <div className="contact"><Contact></Contact></div>
      <div className="contact-quote">
        <h1>Lets have a chat</h1>
        <p>lets talk about something and contact us sand again i am trying to fill the word limit</p>
      </div>
      </div>
    </div>
    
    </>

  );
}

export default Home;