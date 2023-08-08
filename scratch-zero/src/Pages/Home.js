import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./Navbar";
import videoBG1 from "../Imgs/VideoBG1.mp4"
import "../Styles/Home.css";
function Home() {
  

  return (
    <>
    <React.Fragment><Navbar /></React.Fragment>
    <div className='main'>

        <video src={videoBG1} autoPlay loop muted />
        
        <div className="content">
            <h1>ScratchZero</h1>
            <p>We Care.</p>
        </div>
    </div>
    </>

  );
}

export default Home;