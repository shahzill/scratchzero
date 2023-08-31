import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Contact from "./Contact";
import videoBG1 from "../Imgs/VideoBG10.mp4"
import videoBG2 from "../Imgs/VideoBG6.mp4"
import Background2 from "../Imgs/Background2.jpg"
import { styles } from "../Styles/Home.css";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaCircle, FaFlag } from "react-icons/fa";
import { FaCheck, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { ImageBackground } from 'react-native';
import Fade from 'react-reveal/Fade';
import Canvas from "./Canvas";
import { Helmet } from "react-helmet";
import anime from 'animejs/lib/anime.es.js'
import ReactTyped from "react-typed";
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import Lottie from 'react-lottie';
import SEO from "../Imgs/SEO.json";
import WEBDEVELOPMENT from "../Imgs/WEBDEVELOPMENT.json";
import UI from "../Imgs/UI.json";
import DIGITAL from "../Imgs/DIGITAL.json";
import MOBD from "../Imgs/MOBD.json";
import DEBS from "../Imgs/DEBS.json";

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
  const defaultOptions5 = {
    loop: true,
    autoplay: true, 
    animationData: MOBD,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions6 = {
    loop: true,
    autoplay: true, 
    animationData: DEBS,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
    {/* website hero */}
    {/* <video className="video1" src={videoBG1} autoPlay loop muted /> */}
        <React.Fragment><Navbar /></React.Fragment>
    <div className='main' id='Home'>  
        <div className="content">
           <div className="heroitems">
            <h1  className='title'>
            <span>Scratch</span> 
            <span className="Red">Zero</span>
            </h1>
            <p><ReactTyped className="typing" strings={["Beyond Infinity"]} typeSpeed={100} /></p>
            <div className="a">Solution to all your IT problems</div>
            

          </div>
          <div class="text-box2 mainbtn">
          <a href="/#ContactUs" class="btn btn-white1 btn-        animate">Contact Us</a>
        </div>

        </div>
        
   
        
        <Particles id="tsparticles" />
        

    </div>

    {/* <div className="gap"></div> */}
    
    {/* second section */}
    <div className="comp3" id="AboutUs" >
   
      {/* content */}
      <div className="subcomp3">

        {/* about section */}
        <Fade left>
        <div className="About">
        
          <div className="Content1">
            
            <h1>
            <span className="AllH">OUR </span>
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
               we craft digital experiences that transcend the ordinary and define the extraordinary. Our <strong><span className="Red">commitment to your success </span></strong> is unwavering, and we are 
               here to guide you on your journey to success.</p>
              
            </div>
        </div>
        </Fade>
        

      </div>
      <div className="Social-Links">
        <div className="Content3">
            <Fade bottom>
            {/* <h3>Join us on social media and stay in the loop with all the latest happenings!</h3> */}
            <a href="https://www.linkedin.com/in/shahzill-naveed/" target="_blank">
            < FaLinkedin className="scale1 Red" />
            </a>
            <a href="https://www.instagram.com/scratchzero_/" target="_blank">
            < FaInstagram className="scale2 Red" />
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
        <div className="ServicesH">
        <h1>
          SERVICES
        </h1>
        </div>
      </Fade>
    
      {/* <div className="services">
        <Fade left>
          <div className="service">
          
            <div className="scontent">
            <Lottie options={defaultOptions}
              height={100}
              width={100}
              />
            <h1>SEO OPTIMIZATION</h1>
            
            <p>Our <span className="Red">comprehensive</span> SEO optimization ensures your website stands out in the <span className="Red">digital landscape</span>, reaching the right audience at the right time.</p>
           
            </div>
           
          </div>
        </Fade>
        
        <Fade left>
          
          <div className="service">
          <div className="scontent">
          <Lottie options={defaultOptions3}
              height={100}
              width={100}
              />
            <h1>UI/UX DESIGNING</h1>
            <p>Our UI/UX design merges <span className="Red">creativity and user-centricity</span>, ensuring your digital platforms are not just functional, 
              but truly captivating experiences. Let us transform <span className="Red">your vision</span> into a visually stunning and intuitive <span className="Red">reality.</span></p>
          
            </div>
          </div>
          <div className="service">
          <div className="scontent">
          <Lottie options={defaultOptions4}
              height={100}
              width={100}
              />
            <h1>DIGITAL MARKETING</h1>
            <p>Through strategic digital marketing, we <span className="Red">boost</span> your online presence, connecting your brand with the right audience and driving tangible <span className="Red">growth</span>.</p>
          
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="service">
            <div className="scontent">
            <Lottie options={defaultOptions2}
              height={120}
              width={120}
              />
            <h1>WEB DEVELOPMENT</h1>
            <p><span className="Red">Elevate</span> your digital presence with our expert web development services. 
              We <span className="Red">specialize</span> in crafting dynamic, user-centric websites that captivate your <span className="Red">audience</span> and drive meaningful engagement.</p>
              
            </div>
            
          </div>
        </Fade>
      
        <Fade right>
          <div className="service">
            <div className="scontent">
            <Lottie options={defaultOptions2}
              height={120}
              width={120}
              />
            <h1>WEB DEVELOPMENT</h1>
            <p><span className="Red">Elevate</span> your digital presence with our expert web development services. 
              We <span className="Red">specialize</span> in crafting dynamic, user-centric websites that captivate your <span className="Red">audience</span> and drive meaningful engagement.</p>
              
            </div>
            
          </div>
        </Fade>
        <Fade right>
          <div className="service">
            <div className="scontent">
            <Lottie options={defaultOptions2}
              height={120}
              width={120}
              />
            <h1>WEB DEVELOPMENT</h1>
            <p><span className="Red">Elevate</span> your digital presence with our expert web development services. 
              We <span className="Red">specialize</span> in crafting dynamic, user-centric websites that captivate your <span className="Red">audience</span> and drive meaningful engagement.</p>
              
            </div>
            
          </div>
        </Fade>
      </div>
  */}
      <div className="wrapper2">
      
      <div className="card2 img1">

        <div className="information1">
        <div className="lottie2">
        <Lottie className="lottie" options={defaultOptions2}
            height={150}
            width={200}
            />
            </div>
          <p>Elevate your digital presence with our expert web development services.
            We specialize in crafting dynamic, user-centric websites that captivate your audience and
              drive meaningful engagement.</p>
        </div>
        <h1>WEB DEVELOPMENT</h1>

        </div>
        
        <div className="card2 img1">
          
          <div className="information1">
          <div className="lottie5">
          <Lottie options={defaultOptions5}
              height={140}
              width={170}
              />
          </div>
            <p>Turn your ideas into reality with our mobile app development service. From concept to launch, We create user-friendly, 
              feature-rich apps across platforms for a captivating experience for your users.</p>
          </div>
          <h1>MOBILE APP DEVELOPMENT</h1>
        </div>
        
        <div className="card2 img1">
          
          <div className="information1">
          <div className="lottie3">
          <Lottie className="lottie" options={defaultOptions3}
              height={125}
              width={200}
              /></div>
            <p>Our UI/UX design merges creativity and user-centricity, ensuring your digital platforms are not just functional,
               but truly captivating experiences. Let us transform your vision into a visually stunning and intuitive reality.</p>
          </div>
          <h1>UI/UX DESIGNING</h1>
        </div>

        <div className="card2 img1">

        
          <div className="information1">
          <div className="lottie1">
          <Lottie className="lottie" options={defaultOptions}
              height={150}
              width={175}
              />
              </div>
            <p>Our comprehensive SEO optimization ensures your website stands out in the digital landscape, reaching the right audience at the right time.</p>
            
          </div>
          
          <h1>SEO OPTIMIZATION</h1>
          
          
        </div>
        <div className="card2 img1">
          
          <div className="information1">
            <div className="lottie4">
          <Lottie  options={defaultOptions4}
              height={170}
              width={200}
              />
              </div>
            <p>Through strategic digital marketing, we boost your online presence, connecting your brand with the right audience and driving tangible growth.</p>
          </div>
          <h1>DIGITAL MARKETING</h1>
        </div>

        
        
        
        <div className="card2 img1">
          
          <div className="information1">
            <div className="lottie4">
          <Lottie  options={defaultOptions6}
              height={170}
              width={230}
              />
              </div>
            <p>Offering exceptional handling to manage unforeseen problems, fix errors, and resolve issues, thereby improving the smoothness of your online presence.</p>
          </div>
          <h1>DEBUGGING STRATEGIES</h1>
        </div>
      </div> 

    
    </div> 



    <div className="comp5" id="Portfolio">
    <Fade bottom>
    <div className="PortfolioH">
        <h1>
          PORTFOLIO
        </h1>
    </div>
      </Fade>
    <div className="cards">
    <div class="container">
    <div class="card">
      <div class="front front1"></div>
      <div class="back back1">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://mohkm.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front2"></div>
      <div class="back back2">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://doctorfindy.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front3"></div>
      <div class="back back3">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://spera.io/products/project-management/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front4"></div>
      <div class="back back4">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://reservim.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
    <div class="container">
    <div class="card">
      <div class="front front5"></div>
      <div class="back back5">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://www.cuddlynest.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>

      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front6"></div>
      <div class="back back6">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://www.gkchattels.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front7"></div>
      <div class="back back7">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://thecarmedics.ae/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      
      </div>

      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front8"></div>
      <div class="back back8">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
        <div className="CardButtons">
        <a href="https://scentrevelation.com/" target="_blank">
      <button className="projectButton">
        View Project
      </button></a>
      </div>
      </div>
    </div>
  </div>
  
  </div>
  <div className="LearnMore">
  <a href="/Projects">
      <button className="projectButton">
        <strong>View More Projects</strong>
      </button></a>
      </div>
  
    </div>

    {/* fourth section */}
    <div className="comp4" id="Pricing">
      <Fade bottom>
        <h1 className="PricingH" >PRICING</h1>
        <p className="PricingSH">CHOOSE THE RIGHT PLAN FOR YOUR BUSINESS</p>
      </Fade>
      <div className="wrapper3">
        <div className="single-price">
          <div className="package1"><h1>BASIC</h1></div>
          <div className="price">
          <h2><span className="priceH">$29</span><span className="monthH">/MONTH</span></h2>
          </div>
          <div className="pricingSubH"><h3>The perfect way to get started and get used to our tools.</h3></div>
          <div className="deals">
          <h4><FaCheck className="check"/> All standard features</h4>
            <h4><FaCheck className="check"/> Over 600 compononets</h4>
            <h4><FaCheck className="check"/> Build tools and examples</h4>
          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get this</a>
        </div>
        </div>
        <div className="single-price">
        <div className="package2"><h1>STANDARD</h1></div>
          <div className="price">
          <h2><span className="priceH">$149</span><span className="monthH">/MONTH</span></h2>
          </div>
          <div className="pricingSubH"><h3>The perfect way to get started and get used to our tools.</h3></div>
          <div className="deals">
          <h4><FaCheck className="check"/> All standard features</h4>
            <h4><FaCheck className="check"/> Over 600 compononets</h4>
            <h4><FaCheck className="check"/> Build tools and examples</h4>
          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get this</a>
        </div>
        </div>
        <div className="single-price">
        <div className="package3"><h1>PREMIUM</h1></div>
          <div className="price">
          <h2><span className="priceH">$1399</span><span className="monthH">/MONTH</span></h2>
          </div>
          <div className="pricingSubH"><h3>The perfect way to get started and get used to our tools.</h3></div>
          <div className="deals">
            <h4><FaCheck className="check"/> All standard features</h4>
            <h4><FaCheck className="check"/> Over 600 compononets</h4>
            <h4><FaCheck className="check"/> Build tools and examples</h4>
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
     
    </div>

    {/* fifth section */}
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

export default Home;