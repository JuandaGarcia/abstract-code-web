import Layout from '../components/Layout'
import '../styles/index.css'
import '../styles/gottih.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Web = () => {
	return (
		<Layout
			title={' - Gottih'}
			MetaDescription="Gottih es un proyecto de camisetas con diseños animados mediante realidad aumentada desarrollado por nuestro equipo de ingeniería el cual se encargó de hacer todo el diseño y desarrollo tanto de del sitio web de distribución como de la aplicación móvil disponible para dispositivos Android."
		>
			<section className="gottih-page-contaiiner">
				<div className="img-hero-gottih">
					<img src="/img/gottih/camisetas.jpg" alt="Camisetas" />
				</div>
				<h1>Gottih</h1>
				<span>Camisetas con realidad aumentada</span>
				<div className="gottih-parrafo">
					<p>
						Gottih es un proyecto de camisetas con diseños animados mediante
						realidad aumentada desarrollado por nuestro equipo de ingeniería el
						cual se encargó de hacer todo el diseño y desarrollo tanto de del
						sitio web de distribución como de la aplicación móvil disponible
						para dispositivos Android.
					</p>
				</div>
				<div className="contenedor-video">
					<video
						autoPlay
						loop
						muted
						width="720"
						height="480"
						src="/img/gottih/gottih.mp4"
					/>
				</div>
				<div className="margin"></div>
				<span>Tienda Online</span>
				<div className="gottih-parrafo">
					<p>
						La tienda online cuenta con mas de 20 medios de pago y es totalmente
						adaptable a cualquier dispositivo (Tablets, SmartPhones, TVs, etc).
					</p>
					<a
						href="https://gottih.juandagarcia.com/"
						className="noUserSelect"
						target="_blank"
					>
						<motion.button
							className="color-btn"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Visitar tienda
						</motion.button>
					</a>
				</div>
				<div className="img-web-gottih">
					<img className="macbook" src="/img/gottih/gottih-web.jpg" alt="Web" />
					<img className="pagos-img" src="/img/gottih/pagos.jpg" alt="" />
				</div>
				<div className="margin"></div>
				<span>Aplicación móvil</span>
				<div className="gottih-parrafo">
					<p>
						La aplicación móvil se encarga de mostrar animaciones en los diseños
						de las camisetas mediante realidad aumentada y esta disponible en
						Google Play Store.
					</p>
					<a
						href="https://play.google.com/store/apps/details?id=com.Gottih.Gottih&hl=es_CO"
						className="noUserSelect"
						target="_blank"
					>
						<motion.button
							className="color-btn"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Ver aplicación
						</motion.button>
					</a>
				</div>
				<div className="img-web-gottih">
					<img className="macbook" src="/img/gottih/app.jpg" alt="Web" />
				</div>
				<div className="logo-gottih-ac noUserSelect">
					<img src="/img/LogotipoNegro.png" alt="Logo" />
				</div>
			</section>
		</Layout>
	)
}

export default Web
