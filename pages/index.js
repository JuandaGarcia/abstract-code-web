import React from 'react'
import Head from 'next/head'
import '../styles/index.css'
import '../styles/scroll-icon.css'
import Layout from '../components/Layout'
import Link from 'next/link'

const Home = () => {
	return (
		<React.Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				></meta>
				<link rel="icon" href="/img/LogoBlack.svg" />
				<title>Abstract Code</title>
			</Head>
			<Layout>
				<section className="hero">
					<div className="info-hero">
						<div className="color-bg-hero"></div>
						<div className="texto-hero">
							<div>
								<span className="noUserSelect">Colombia</span>
							</div>
							<div className="hero-title">
								<h1>
									Lorem ipsum dolor, <br />
									sit amet consectetur adipisicing.
								</h1>
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
					<div className="services-video">
						<div className="services-video-container">
							<span>
								<strong>Servicios</strong>
							</span>
							<br />
							<br />
							<ul>
								<li>
									<Link href="/web">
										<a>Desarrollo Web</a>
									</Link>
								</li>
								<li>
									<Link href="">
										<a>Diseño UI/UX</a>
									</Link>
								</li>
							</ul>
						</div>
						<img src="/img/video.jpg" alt="video" />
					</div>
					<div className="scroll-icon"></div>
				</section>
				<section className="info-landing">
					<div className="text-info">
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
						className="noUserSelect img-info-landing"
						loading="lazy"
						src="/img/info.png"
						alt="img"
					/>
				</section>
				<section className="info-landing yellow wrap-reverse">
					<img
						className="noUserSelect web-img-landing"
						loading="lazy"
						src="/img/web.png"
						alt="img"
					/>
					<div className="text-info">
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
				<section className="info-landing gray">
					<div className="text-info">
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
						className="noUserSelect img-info-landing"
						loading="lazy"
						src="/img/ui-ux.png"
						alt="img"
					/>
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
				<section className="info-landing gray wrap-reverse">
					<img
						className="noUserSelect img-info-landing"
						loading="lazy"
						src="/img/banana.jpg"
						alt="img"
					/>
					<div className="text-info aling-form">
						<form>
							<h1>Contacto</h1>
							<span>Sobre</span>
							<br />
							<input placeholder="Nombre" type="text" name="" id="" />
							<input placeholder="E-mail" type="email" name="" id="" />
							<input placeholder="Teléfono" type="number" name="" id="" />
							<input placeholder="País" type="text" name="" id="" />
							<textarea placeholder="Mensaje" name="" id="" rows="5"></textarea>
							<input type="submit" value="Enviar" />
						</form>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	)
}

export default Home
