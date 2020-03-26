import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="item-footer">
					<img
						className="noUserSelect"
						loading="lazy"
						src="/img/lw.png"
						alt="logo"
					/>
					<ul>
						<li>
							<Link href="">
								<a className="social-link">
									<img src="/img/instagram.svg" alt="instagram" />
									<span>Instagram</span>
								</a>
							</Link>
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
								<Link href="">
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
								<Link href="">
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
