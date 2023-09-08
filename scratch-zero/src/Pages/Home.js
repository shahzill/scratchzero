import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Contact from "./Contact";
import videoBG1 from "../Imgs/VideoBG10.mp4"
import videoBG2 from "../Imgs/VideoBG6.mp4"
import Background2 from "../Imgs/Background2.jpg"
import curve from "../Imgs/notch.png"
import { HashLink as Link} from 'react-router-hash-link'
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
import downArrow from "../Imgs/arrow.png"
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import Lottie from 'react-lottie';
import SEO from "../Imgs/SEO.json";
import WEBDEVELOPMENT from "../Imgs/WEBDEVELOPMENT.json";
import UI from "../Imgs/UI.json";
import DIGITAL from "../Imgs/DIGITAL.json";
import MOBD from "../Imgs/MOBD.json";
import DEBS from "../Imgs/DEBS.json";
import { Cursor, useTypewriter} from 'react-simple-typewriter';

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

        <React.Fragment><Navbar /></React.Fragment>
    <div className='main' id='Home'>  
        <div className="content">
           <div className="heroitems">
            <h1  className='title'>
            <span>Scratch</span> 
            <span className="Red">Zero</span>
            </h1>
             <p><ReactTyped className="typing" strings={["Innovative Solutions", "Empowering Progress", "Redefining Excellence"]} typeSpeed={100} backSpeed={50} loop /></p> 
   
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
            <p>Our <strong><span className="Red">relentless pursuit of excellence </span></strong>drives us to be the preferred choice for clients seeking cutting-edge solutions. Leveraging the power of <strong><span className="Red">modern technologies</span></strong>,
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
            <a href="https://www.linkedin.com/company/scratchzero/" target="_blank">
            < FaLinkedin className="scale1 Red" />
            </a>
            <a href="https://www.instagram.com/scratchzero_/" target="_blank">
            < FaInstagram className="scale2 Red" />
            </a>
            <a href="https://www.facebook.com/scratchzero.net?mibextid=LQQJ4d" target="_blank">
            < FaFacebookSquare className="scale3 Red" />
            </a>
              </Fade>
            </div>
        </div>
        
        
      

    </div>
    
    {/* third section */}
    <Link smooth to="#Our-Services" ><div className="downArrow"><img src={downArrow} /></div></Link>
    <div className="curve"><img src={curve} /></div>


    <div className="comp2" id="Our-Services">


      <Fade bottom>
        <div className="ServicesH">
        <h1>
          SERVICES
        </h1>
        </div>
      </Fade>
      
    
     
      <div className="wrapper2">
      
      <div className="card2 img1">

        <div className="information1">
        <div className="lottie2">
        <Lottie className="lottie" options={defaultOptions2}
            height={150}
            width={200}
            />
            </div>
          <p>Elevate your digital presence with our skilled web development services.
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
            <p>Turn your ideas into reality with our mobile app development service. From concept to launch, we create user-friendly, 
              feature-rich apps across platforms for an engaging experience for your users.</p>
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
               but truly immersive experiences. Let us transform your vision into a visually stunning and intuitive reality.</p>
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
            <p>Our comprehensive search-engine optimization ensures your website stands out in the digital landscape, reaching the right audience at the right time.</p>
            
          </div>
          
          <h1 className="SeoServices">SEO SERVICES</h1>
          
          
        </div>
        <div className="card2 img1">
          
          <div className="information1">
            <div className="lottie4">
          <Lottie  options={defaultOptions4}
              height={170}
              width={200}
              />
              </div>
            <p>Through strategic digital marketing, we boost your online presence, connecting your brand with the appropriate consumers and driving tangible growth.</p>
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
            <p>Offering exceptional handling to manage unforeseen problems, fix errors, and resolve issues. Thereby, improving the seamless nature of your online presence.</p>
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
      <p className="languages">Laravel | HTML | MySQL | PHP</p>
        <p className="cardInfo">Mohkm is a web-based CRM using Laravel and Smarty templates. It streamlines account, product, service, and sales management, 
          features an SMS module, offers multilingual support, and is accessible via web and app.</p>
        
        <div className="CardButtons">
        <a href="https://mohkm.com/" target="_blank">
      <button className="projectButton">
        View Live Demo
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front5"></div>
      <div class="back back5">
      <p className="languages">Codeigniter | MySQL | PHP</p>
        <p className="cardInfo">Cuddlynest, created using Codeigniter, offers key features such as image management, extensive email templates, 
          multilingual property descriptions, and engaging image displays on the homepage.</p>
        <div className="CardButtons">
        <a href="https://www.cuddlynest.com/" target="_blank">
      <button className="projectButton">
      View Live Demo
      </button></a>
      
      </div>

      </div>
    </div>
  </div>
  
  <div class="container">
    <div class="card">
      <div class="front front3"></div>
      <div class="back back3">
      <p className="languages">Laravel | VueJS</p>
        <p className="cardInfo">We partnered with Spera, a powerful project management system devloped using Laravel and Vue.js. It streamlines projects, 
        client info, invoices, team compensation, support tickets, messaging, and quotations, serving as a valuable solution for businesses.</p>
        <div className="CardButtons">
        <a href="https://spera.io/products/project-management/" target="_blank">
      <button className="projectButton">
      View Live Demo
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front8"></div>
      <div class="back back8">
      <p className="languages">WordPress</p>
        <p className="cardInfo">Scent Revelation's Shopify website is the aromatic destination for fragrance
          enthusiasts. Our comprehensive digital approach has transformed their online
          presence, crafting a seamless platform that beautifully showcases their perfume
          collections.</p>
        <div className="CardButtons">
        <a href="https://scentrevelation.com/" target="_blank">
      <button className="projectButton">
      View Live Demo
      </button></a>
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front4"></div>
      <div class="back back4">
      <p className="languages">Laravel | Vue js | MySQL | Algolia Search</p>
        <p className="cardInfo">Discover Reservim, a salon booking platform powered by PHP, Laravel, Vue.js,
          and other top-notch technologies. This advanced system ensures a smooth
          experience for salon owners and customers alike.</p>
        <div className="CardButtons">
        <a href="https://reservim.com/" target="_blank">
      <button className="projectButton">
      View Live Demo
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
 
   
  <div class="container">
    <div class="card">
      <div class="front front6"></div>
      <div class="back back6">
      <p className="languages">WordPress</p>
        <p className="cardInfo">GK Chattels website, powered by WordPress, elegantly represents their
          furniture-based offerings. Using the versatility of WordPress, we've created a
          visually engaging platform, showcasing GK Chattels' furniture collections and
          strengthening their online brand identity.</p>
        <div className="CardButtons">
        <a href="https://www.gkchattels.com/" target="_blank">
      <button className="projectButton">
      View Live Demo
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front2"></div>
      <div class="back back2">
      <p className="languages"> Laravel | Vue js | MySQL | Agora</p>
        <p className="cardInfo">DoctorFindy: Ultimate healthcare companion. Developed using Laravel, Vue.js.
          Explore appointment booking, hospital, and lab discovery effortlessly. Witness
          our capabilities in healthcare solutions today.
          </p>
        <div className="CardButtons">
        <a href="https://doctorfindy.com/" target="_blank">
      <button className="projectButton">
      View Live Demo
      </button></a>
      
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="front front7"></div>
      <div class="back back7">
      <p className="languages">Shopify</p>
        <p className="cardInfo">Naeel Fabrics website, crafted using Shopify, showcases a flawless integration of
          fashion and technology. Leveraging the power of Shopify, we've created a
          platform that effortlessly highlights Naeel Fabrics' exquisite textile collections.</p>
        <div className="CardButtons">
        <a href="https://naeelfabrics.com/" target="_blank">
      <button className="projectButton">
      View Live Demo
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
          <div className="package1"><h1>DIGITAL MARKETING</h1></div>
          <div className="price">
          <h2><span className="priceH">$949</span><span className="monthH">/MONTH</span></h2>
          </div>
          <div className="pricingSubH"><h3>This price is a starting rate and can be tailored to your requirements.</h3></div>
          <div className="dealsDM">
          <h4><FaCheck className="check"/> Account Setup</h4>
            <h4><FaCheck className="check"/> 2 Social Media Platforms</h4>
            <h4><FaCheck className="check"/> 20 Unique Monthly Posts</h4>
            <h4><FaCheck className="check"/> Paid Media Advertisement </h4>
            <h4><FaCheck className="check"/> Dedicated Personnel</h4>
            <h4><FaCheck className="check"/> Monthly Reporting</h4>

          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get a quote</a>
        </div>
        </div>
        <div className="single-price">
        <div className="package2"><h1>WEBSITE DEVELOPMENT</h1></div>
          <div className="price">
          <h2><span className="priceH">$899</span><span className="monthH">/MONTH</span></h2>
          </div>
          <div className="pricingSubH"><h3>This price is a starting rate and can be tailored to your requirements.</h3></div>
          <div className="dealsWD">
          <h4><FaCheck className="check"/> Custom Website</h4>
            <h4><FaCheck className="check"/> Hosting & Domain </h4>
            <h4><FaCheck className="check"/> Domain Emails</h4>
            <h4><FaCheck className="check"/> Website Maintenance - 40 hours</h4>
            <h4><FaCheck className="check"/> Content Management System (CMS)</h4>
            <h4><FaCheck className="check"/> Search Engine Submission </h4>
            <h4><FaCheck className="check"/> Responsive Design - All Devices</h4>

          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get a quote</a>
        </div>
        </div>
        <div className="single-price">
        <div className="package3"><h1>SEO SERVICES</h1></div>
          <div className="price">
          <h2><span className="priceH">$749</span><span className="monthH">/MONTH</span></h2>
          </div>
          <div className="pricingSubH"><h3>This price is a starting rate and can be tailored to your requirements.</h3></div>
          <div className="dealsSEO">
            <h4><FaCheck className="check"/> Key phrases - upto 20</h4>
            <h4><FaCheck className="check"/> Keyword Research & Analysis</h4>
            <h4><FaCheck className="check"/> On-site and Off-site Optimization</h4>
            <h4><FaCheck className="check"/> Local Business Listings</h4>
            <h4><FaCheck className="check"/> Link Building</h4>
            <h4><FaCheck className="check"/> Blogging & Article posting</h4>
            <h4><FaCheck className="check"/> Copyrighting</h4>
            <h4><FaCheck className="check"/> Initial & Monthly Reports</h4>
          </div>
          <div class="text-box">
          <a href="/#ContactUs" class="btn btn-white btn-        animate pricingbtn">Get a quote</a>
        </div>
        </div>
      </div>
          
    </div>

    {/* fifth section */}
    <div className="comp6">
      <div className="ContactH"><h1>CONTACT US</h1></div>
      <div className="subcomp6">
      <div className="contact"><Contact></Contact></div>
      <div className="contact-quote">
        <div className="heading"><h1>Lets have a <span className="Red">chat</span></h1></div>
        <p>Feel free to reach out via our form or email us at <strong><span className="Red">info@scratchzero.net</span></strong> to explore your concept, inquire, or engage in a conversation with us.</p>
      </div>
      </div>
    </div>
    
    </>

  );
}

export default Home;