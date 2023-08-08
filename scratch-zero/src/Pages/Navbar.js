import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useRef } from "react";
import "../Styles/Navbar.css";
import logo from "../Imgs/ScratchZeroLogo.png"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo}/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;