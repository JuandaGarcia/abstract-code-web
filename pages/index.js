import React from 'react'
import Head from 'next/head'
import '../styles/index.css'
import Layout from '../components/Layout'
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
			<Layout>
				<section className="Hero">
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
				</section>
				<section className="first-info-landing">
					<div className="text-first-info">
						<span>Sobre</span>
						<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
						<br />
						<br />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							neque ipsam perspiciatis eius tempore est consectetur quisquam ad
							reprehenderit. Iure fugiat quas consequatur numquam illum, neque
							exercitationem amet delectus quod.
						</p>
						<Link href="">
							<a className="button-black noUserSelect">
								<div>Lorem</div>
							</a>
						</Link>
					</div>
					<img
						className="noUserSelect"
						loading="lazy"
						src="/img/info.png"
						alt="img"
					/>
				</section>
				<section className="second-info-landing">
					<img
						className="noUserSelect"
						loading="lazy"
						src="/img/info.png"
						alt="img"
					/>
					<div className="text-first-info">
						<span>Sobre</span>
						<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
						<br />
						<br />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							neque ipsam perspiciatis eius tempore est consectetur quisquam ad
							reprehenderit. Iure fugiat quas consequatur numquam illum, neque
							exercitationem amet delectus quod.
						</p>
						<Link href="">
							<a className="button-black noUserSelect">
								<div>Lorem</div>
							</a>
						</Link>
					</div>
				</section>
				<section className="frase">
					<img
						className="noUserSelect"
						src="/img/bill.jpg"
						loading="lazy"
						alt="Bill Gates"
					/>
					<div className="texto-frase">
						<p>
							<strong>
								“If your business is not on the internet, then your business
								will be out of business.”
							</strong>
						</p>
						<br />
						<span>— Bill Gates, Microsoft Founder</span>
					</div>
				</section>
				<section className="first-info-landing">
					<div className="text-first-info">
						<span>Sobre</span>
						<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
						<br />
						<br />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							neque ipsam perspiciatis eius tempore est consectetur quisquam ad
							reprehenderit. Iure fugiat quas consequatur numquam illum, neque
							exercitationem amet delectus quod.
						</p>
						<Link href="">
							<a className="button-black noUserSelect">
								<div>Lorem</div>
							</a>
						</Link>
					</div>
					<img
						className="noUserSelect"
						loading="lazy"
						src="/img/info.png"
						alt="img"
					/>
				</section>
			</Layout>
		</React.Fragment>
	)
}

export default Home
