import '../styles/index.css'
import React, { useState } from 'react'
import '../styles/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
	const [stateBurger, setStateBurger] = useState('')
	const [activeMenu, setActiveMenu] = useState('')
	const [closeMenu, setCloseMenu] = useState('')

	const toggleMenu = () => {
		if (stateBurger === 'active') {
			setStateBurger('')
			setActiveMenu('')
			setCloseMenu('')
		} else {
			setStateBurger('active')
			setActiveMenu('menu-active')
			setCloseMenu('active-close')
		}
	}

	return (
		<header>
			<div className="barra-menu">
				<Link href="/">
					<a className="logo noUserSelect">
						<img src="/img/LogoWhite.svg" alt="Abstract Code" />
					</a>
				</Link>
				<div id="hamburger-icon" className={stateBurger} onClick={toggleMenu}>
					<span className="line line-1"></span>
					<span className="line line-2"></span>
					<span className="line line-3"></span>
				</div>
				<a
					href="https://www.instagram.com/abstractcode/"
					className="instagram-nav"
					target="_blank"
				>
					<img
						className="bandera noUserSelect"
						src="/img/instagram.svg"
						alt="Abstract Code"
					/>
				</a>
			</div>
			<div className={`menu ${activeMenu}`}>
				<nav>
					<ul>
						<li>
							<Link href="/">
								<a onClick={toggleMenu}>Inicio</a>
							</Link>
						</li>
						<li>
							<Link href="/#web">
								<a onClick={toggleMenu}>Desarrollo web</a>
							</Link>
						</li>
						<li>
							<Link href="/#ui-ux">
								<a onClick={toggleMenu}>Diseño UI/UX</a>
							</Link>
						</li>
						<li>
							<Link href="/#contacto">
								<a onClick={toggleMenu}>Contacto</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div onClick={toggleMenu} className={`close-menu ${closeMenu}`}></div>
		</header>
	)
}

export default Navbar
