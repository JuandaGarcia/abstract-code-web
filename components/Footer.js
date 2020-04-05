import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="item-footer">
					<Link href="/">
						<a className="item-footer-logo">
							<img
								className="noUserSelect"
								loading="lazy"
								src="/img/lw.png"
								alt="Abstract Code"
							/>
						</a>
					</Link>
					<ul>
						<li>
							<a
								href="https://www.instagram.com/abstractcode/"
								className="social-link"
								target="_blank"
							>
								<img src="/img/instagram.svg" alt="instagram" />
								<span>Instagram</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="item-footer">
					<div>
						<span>
							<strong>Servicios</strong>
						</span>
						<ul>
							<li>
								<Link href="/desarrollo-web">
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
				</div>
				<div className="item-footer">
					<div>
						<span>
							<strong>Compañía</strong>
						</span>
						<ul>
							<li>
								<Link href="">
									<a>Contacto</a>
								</Link>
							</li>
							<li>
								<Link href="">
									<a>Trabaja con Nosotros</a>
								</Link>
							</li>
							<li>
								<Link href="/privacy">
									<a>Legal</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="copyright">
				<span>© Abstract Code 2020</span>
			</div>
		</footer>
	)
}

export default Footer
