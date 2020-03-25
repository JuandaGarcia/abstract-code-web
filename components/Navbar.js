import '../styles/index.css'
import React, { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
	const [stateBurger, setStateBurger] = useState('')

	const toggleMenu = () => {
		if (stateBurger === 'active') {
			setStateBurger('')
		} else {
			setStateBurger('active')
		}
	}

	return (
		<header className="barra-menu">
			<img
				className="logo noUserSelect"
				src="/img/LogoWhite.svg"
				alt="Abstract Code"
			/>
			<div id="hamburger-icon" className={stateBurger} onClick={toggleMenu}>
				<span className="line line-1"></span>
				<span className="line line-2"></span>
				<span className="line line-3"></span>
			</div>
			<img
				className="bandera noUserSelect"
				src="/img/Colombia.svg"
				alt="Abstract Code"
			/>
		</header>
	)
}

export default Navbar
