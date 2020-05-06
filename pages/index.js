import React, { useState } from 'react'
import '../styles/index.css'
import '../styles/scroll-icon.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import axios from 'axios'

const Home = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [telefono, setTelefono] = useState('')
	const [pais, setPais] = useState('')
	const [mensaje, setMensaje] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
	}

	const PostData = async () => {
		/* await axios.post('').then */
	}

	return (
		<React.Fragment>
			<Layout>
				<section className="hero">
					<div className="info-hero">
						<div className="color-bg-hero"></div>
						<div className="texto-hero">
							<div>
								<span className="noUserSelect">Abstract Code</span>
							</div>
							<div className="hero-title">
								<h1>
									Te ayudamos a plasmar continuamente <br />
									nuevas oportunidades de negocio en la <br /> era digital.
								</h1>
							</div>
							<p>Lleva tu negocio a otro nivel.</p>
							<Link href="#nosotros">
								<a className="button-transparent noUserSelect">
									<div>Descubre más</div>
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
									<Link href="#web">
										<a>Desarrollo Web</a>
									</Link>
								</li>
								<li>
									<Link href="#ui-ux">
										<a>Diseño UI/UX</a>
									</Link>
								</li>
							</ul>
						</div>
						<img src="/img/video.jpg" alt="video" />
					</div>
					<div className="scroll-icon"></div>
				</section>
				<section id="nosotros" className="info-landing">
					<div className="text-info">
						<span>Abstract Code</span>
						<h1>Sobre nosostros</h1>
						<br />
						<br />
						<p className="texto-landing">
							Somos una empresa especializada en diseño y desarrollo de sitios y
							aplicaciones web a la medida. Creamos productos software con altos
							estándares de calidad basados en tecnologías ligeras que permiten
							a los usuarios tener una grata experiencia en Internet.
						</p>
						<Link href="#contacto">
							<a className="button-black noUserSelect">
								<div>Contáctanos</div>
							</a>
						</Link>
					</div>
					<img
						className="noUserSelect img-info-landing"
						src="/img/info.png"
						alt="img"
					/>
				</section>
				<section id="web" className="info-landing yellow wrap-reverse">
					<img
						className="noUserSelect web-img-landing"
						src="/img/web.png"
						alt="img"
					/>
					<div className="text-info">
						<span>Abstract Code</span>
						<h1 className="disminuir">
							Desarrollo de sitios y aplicaciones Web
						</h1>
						<br />
						<br />
						<p>
							Cada uno de nuestros proyectos se crea a partir de un estudio
							detallado, por lo que su diseño es gráficamente atractivo. Como
							siempre siguiendo con los actuales requisitos técnicos y
							estándares de la industria digital. Nuestro propósito es impactar
							tanto al cliente como al consumidor a través del arte, el diseño y
							la tecnología.
						</p>
						<Link href="#contacto">
							<a className="button-black noUserSelect">
								<div>Contáctanos</div>
							</a>
						</Link>
					</div>
				</section>
				<section id="ui-ux" className="info-landing gray ui-ux">
					<div className="text-info margin">
						<span>Abstract Code</span>
						<h1>Diseño de Interfaces de Usuario UI / UX</h1>
						<br />
						<br />
						<p>
							A través de un proceso de Design Thinking y mediante metodologías
							especializadas construimos experiencias de usuario e interfaces
							web intuitivas y fáciles de usar enfocadas en guiar al usuario en
							el proceso de conversión según los objetivos de negocio de la
							empresa.
						</p>
						<Link href="#contacto">
							<a className="button-black noUserSelect">
								<div>Contáctanos</div>
							</a>
						</Link>
					</div>
					<img
						className="noUserSelect img-info-landing img-ui-ux"
						src="/img/ui-ux.png"
						alt="img"
					/>
				</section>
				<section className="frase">
					<img className="noUserSelect" src="/img/bill.jpg" alt="Bill Gates" />
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
				<section id="contacto" className="info-landing gray wrap-reverse">
					<img
						className="noUserSelect img-info-landing"
						src="/img/banana.jpg"
						alt="img"
					/>
					<div className="text-info aling-form">
						<form onSubmit={(e) => onSubmit(e)}>
							<h1>Contacto</h1>
							<span>Déjanos todas tus dudas.</span>
							<br />
							<input
								required
								placeholder="Nombre"
								type="text"
								value={name}
								onChange={(e) => {
									setName(e.target.value)
								}}
							/>
							<input
								required
								value={email}
								placeholder="E-mail"
								type="email"
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							/>
							<input
								required
								value={telefono}
								placeholder="Teléfono"
								type="number"
								onChange={(e) => {
									setTelefono(e.target.value)
								}}
							/>
							<input
								required
								value={pais}
								placeholder="País"
								type="text"
								onChange={(e) => {
									setPais(e.target.value)
								}}
							/>
							<textarea
								required
								value={mensaje}
								placeholder="Mensaje"
								rows="5"
								onChange={(e) => {
									setMensaje(e.target.value)
								}}
							></textarea>
							<div className="form-checkbox">
								<label className="acepto-label">
									<input
										type="checkbox"
										id="aceptar"
										required
										name="aceptar"
										value="aceptar"
									/>
									Acepto la&nbsp;
									<Link href="/privacy">
										<a className="noUserSelect" target="_blank">
											<div> Política de privacidad.</div>
										</a>
									</Link>
								</label>
							</div>
							<input type="submit" value="Enviar" />
						</form>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	)
}

export default Home
