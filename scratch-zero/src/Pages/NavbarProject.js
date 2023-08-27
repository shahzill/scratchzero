import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useRef } from "react";
import "../Styles/Navbar.css";
import logo from "../Imgs/RedLogoo.png"
import { HashLink as Link} from 'react-router-hash-link'

function Navbar() {
	const navRef = useRef();
	const [navColor,setNavColor] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const changeBG = () => {
		if(window.scrollY >= 10){
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

				<Link className="Link" smooth to="#Web-Development" >Web Development</Link>
				<Link className="Link" smooth to="#Digital-Marketing" >Digital Marketing</Link>
				<Link className="Link" smooth to="#Software-Development" >Software Development</Link>

				<Link className="Link" smooth to="#ContactUs" >Contact Us</Link>
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