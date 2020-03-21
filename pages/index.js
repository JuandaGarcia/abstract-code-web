import React from 'react'
import Head from 'next/head'
import '../styles/index.css'

const Home = () => {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap"
					rel="stylesheet"
				/>
				<title>Document</title>
			</Head>
			<div className="Hero">
				<div className="barra-menu">
					<img className="logo" src="/img/LogoWhite.svg" alt="Abstract Code" />
					<img
						className="bandera"
						src="/img/Colombia.svg"
						alt="Abstract Code"
					/>
				</div>
				<div className="info-hero">
					<div className="texto-hero">
						<div>
							<span>Colombia</span>
						</div>
						<div className="hero-title">
							<span>Piezas de software que transforman al mundo</span>
						</div>
					</div>
					<span className="hero-effect abstract-effect">Abstract</span>
					<span className="hero-effect code-effect">Code</span>
				</div>
				<div className="services-video"></div>
			</div>
		</React.Fragment>
	)
}

export default Home
