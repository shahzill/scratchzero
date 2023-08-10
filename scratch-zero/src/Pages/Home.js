import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Contact from "./Contact";
import videoBG1 from "../Imgs/VideoBG1.mp4"
import Background2 from "../Imgs/Background2.jpg"
import { styles } from "../Styles/Home.css";
import { FaArrowRight, FaTwitterSquare } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { ImageBackground } from 'react-native';
import videoBG3 from "../Imgs/VideoBG3.mp4";
import Fade from 'react-reveal/Fade';

function Home() {
  



  return (
    <>
    <video className="video1" src={videoBG1} autoPlay loop muted />
        <React.Fragment><Navbar /></React.Fragment>
    <div className='main'>    
        <div className="content">
        <h1 class="title">
          <span class="title-word title-word-1">Scratch</span>
          <span class="title-word title-word-2">Zero</span>
        </h1>
            <p>We Care</p>
        </div>
    </div>

    
    <div className="comp3" id="AboutUs">
    <video className="video2" src={videoBG3} autoPlay loop muted />
      <div className="subcomp3">
    <div className="About">
      <div className="Content1">
      <Fade left>
      <h1>ABOUT US</h1>
        <p>At [Company Name], we are the architects of innovation, crafting software solutions 
          that redefine possibilities. Our dedicated team of experts collaborates seamlessly to transform complex 
          challenges into elegant, user-centric solutions. Through custom software development, intuitive user experience 
          design, and cutting-edge technologies like AI and machine learning, we empower our clients to thrive 
          in the digital landscape. With an unwavering commitment to quality and a passion for pushing boundaries, 
          we invite you to join us in shaping a future where software transforms the way we work, connect, and create.</p>
          </Fade>
      </div>
    </div>

    <div className="Why-Choose-Us">
      <div className="Content2">
      <Fade right>
      <h1>WHY CHOOSE US</h1>
        <p>At [Company Name], we are the architects of innovation, crafting software solutions 
          that redefine possibilities. Our dedicated team of experts collaborates seamlessly to transform complex 
          challenges into elegant, user-centric solutions. Through custom software development, intuitive user experience 
          design, and cutting-edge technologies like AI and machine learning, we empower our clients to thrive 
          in the digital landscape. With an unwavering commitment to quality and a passion for pushing boundaries, 
          we invite you to join us in shaping a future where software transforms the way we work, connect, and create.</p>
        </Fade>
      </div>
    </div>
    </div>

    </div>
    

    <div className="comp2" id="Our-Services">
    <Fade bottom>
      <h1>
        SERVICES
        
      </h1>
      </Fade>
      <Fade bottom>
      <section class="project-slider">
                <div class="slider-wrapper">
                    <div class="slider">
                        <div class="box" id="slide-1">
                            
                            <div class="services-description">
                            <h2>
                              Web Development
                            </h2>
                            <p>
                              Not enough web precense? 
                              Looking to turn your online vision into reality? Search no more! 
                              Our top-notch web development team is here to craft stunning, 
                              high-performance websites that captivate, engage, and convert.</p> 
                              <p><a className="bold">Why Choose Us?</a></p>
                              
                              <li><a className="bold">Customized Perfection:</a> Your website, your rules! We specialize in tailoring unique online solutions that reflect your brand's personality and goals.</li>
                              <li><a className="bold">Sleek and Speedy:</a> Say goodbye to slow-loading sites. Our experts optimize for speed, ensuring your visitors stay hooked from the first click.</li>
                              <li><a className="bold">Sleek and Speedy:</a> Say goodbye to slow-loading sites. Our experts optimize for speed, ensuring your visitors stay hooked from the first click.</li>
                              <li><a className="bold">Responsive Magic:</a> Whether it's a smartphone, tablet, or desktop, your site will look flawless on every device, providing an impeccable user experience.</li>
                              <li><a className="bold">SEO Superpowers:</a> Stand out in the digital jungle with SEO-friendly development that boosts your visibility on search engines. Get ready to climb those rankings.</li>
                              <li><a className="bold">Future-Proofed Tech:</a> We stay ahead of the curve, utilizing cutting-edge technologies to future-proof your site, keeping you relevant and competitive.</li>

                              <p>
                              Ready to make your mark on the web? Let's turn your dreams into clicks, leads, and success! Contact us today for a consultation that could change your digital destiny!
                              </p>

                            </div>
                        </div>
                        <div class="box" id="slide-2">
                           
                            <div class="services-description">
                            <h2 >
                              Digital Marketing
                            </h2>
                          <p>
                          Ready to conquer the digital realm and skyrocket your business? Look no further! 
                          Our cutting-edge Digital Marketing solutions are here to transform your brand into an unstoppable force in the online world.</p> 
                            <p className="bold">Why Choose Us?</p> 
                            
                            <li><a className="bold">Targeted Strategies:</a> Dominate your niche with tailor-made marketing strategies that hit the bullseye every time.</li>
                            <li><a className="bold">Skyrocket Sales:</a> Watch your revenue soar as we optimize your online channels for maximum conversions.</li>
                            <li><a className="bold">Engage Audiences:</a> Capture hearts and minds with compelling content that sparks meaningful conversations.</li>
                            <li><a className="bold">Insights from Data-Driven Analytics:</a> Drive your decisions with data. Our analytics provide valuable insights for campaign optimization and user behavior analysis.</li>
                            <li><a className="bold">Dynamic Email Marketing Campaigns:</a> Nurture leads and retain customers through compelling email campaigns. Our emails captivate, inform, and drive action.</li>
                            <li><a className="bold">E-Commerce Excellence:</a> Maximize your online store's potential. Our strategies drive traffic, enhance conversions, and refine the shopping experience.</li>

                            <p>
                            Elevate your brand with <a className="bold">ScratchZero!</a> Contact us today for a consultation that could change your digital destiny!
                            </p>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                <div class="slider-nav">
                      <a href="#slide-1"><FaCircle/></a>
                      <a href="#slide-2"><FaCircle/></a>
                        
                    </div>
            </section>
        
      
      </Fade>
    
    </div>


    <div className="comp4">
    <Fade bottom>
      <h1 class="header4" id="Pricing">PRICING</h1>
    </Fade>
      <div className="PricingPlans">
      <Fade left>
        <div className="plan1">
          <h1>Consultation</h1>
          <p>Here the client may come and discuss their business along with
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
      </Fade>
      <Fade right>
        <div className="plan2">
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
        </Fade>
        <Fade left>
        <div className="plan3">
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
        </Fade>
      </div>
      <div className="Quote">
        <p>Fill out a form explaining your requirements and we will get back to you with a quote.</p>
        <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate">Contact Us</a>
        </div>
        
      </div>
      
    </div>

    <div className="comp5">
      <Contact></Contact>
    </div>

    
    
    </>

  );
}

export default Home;