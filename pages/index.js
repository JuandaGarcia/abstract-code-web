import React from 'react'
import Head from 'next/head'
import '../styles/index.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'

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
				<link rel="icon" href="/img/LogoBlack.svg" />
				<title>Abstract Code</title>
			</Head>
			<div className="Hero">
				<Navbar />
				<div className="info-hero">
					<div className="color-bg-hero"></div>
					<div className="texto-hero">
						<div>
							<span className="noUserSelect">Colombia</span>
						</div>
						<div className="hero-title">
							<span>Piezas de software que transforman al mundo</span>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
						<Link href="">
							<a className="button-transparent noUserSelect">
								<div>Lorem</div>
							</a>
						</Link>
					</div>
					<span className="hero-effect abstract-effect noUserSelect">
						Abstract
					</span>
					<span className="hero-effect code-effect noUserSelect">Code</span>
				</div>
				<div className="services-video"></div>
			</div>
		</React.Fragment>
	)
}

export default Home
