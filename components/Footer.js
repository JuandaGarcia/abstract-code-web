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
						<li>
							<a
								href="https://wa.me/573163646650"
								className="social-link"
								target="_blank"
							>
								<img src="/img/whatsapp.svg" alt="WhatsApp" />
								<span>WhatsApp</span>
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
								<Link href="/#web">
									<a>Desarrollo Web</a>
								</Link>
							</li>
							<li>
								<Link href="/#ui-ux">
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
								<Link href="/#contacto">
									<a>Contacto</a>
								</Link>
							</li>
							{/* <li>
								<Link href="">
									<a>Trabaja con Nosotros</a>
								</Link>
							</li> */}
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
				<span>© Copyright 2020 Abstract Code.</span>
			</div>
		</footer>
	)
}

export default Footer
