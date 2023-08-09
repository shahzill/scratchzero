import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useRef } from "react";
import "../Styles/Navbar.css";
import logo from "../Imgs/ScratchZeroLogo.png"

function Navbar() {
	const navRef = useRef();
	const [navColor,setNavColor] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const changeBG = () => {
		if(window.scrollY >= 350){
			setNavColor(true)
		}
		else{
			setNavColor(false)
		}
	}

	window.addEventListener('scroll', changeBG)

	return (
		<header className={navColor ? 'active' : ""}>
			<img src={logo}/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#Our-Services">Services</a>
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
	<script>
		const
	</script>
}

export default Navbar;