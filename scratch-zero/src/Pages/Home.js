import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./Navbar";
import videoBG1 from "../Imgs/VideoBG1.mp4"
import Background2 from "../Imgs/Background2.jpg"
import "../Styles/Home.css";

import Fade from 'react-reveal/Fade';
function Home() {
  

  return (
    <>
    <video src={videoBG1} autoPlay loop muted />
        <React.Fragment><Navbar /></React.Fragment>
    <div className='main'>    
        <div className="content">
            <h1>ScratchZero</h1>
            <p>We Care.</p>
        </div>
    </div>
    
    <div className="comp2">
    <Fade top>
      <h1 className="Header2">
        Our Services
      </h1>
      </Fade>
    </div>
    
    </>

  );
}

export default Home;