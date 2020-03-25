import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="item-footer">
					<img loading="lazy" src="/img/lw.png" alt="logo" />
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
				<div className="item-footer">sdfsdf</div>
			</div>
			<div className="copyright">
				<span>© Abstract Code 2020</span>
			</div>
		</footer>
	)
}

export default Footer
