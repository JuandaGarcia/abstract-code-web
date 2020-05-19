import Layout from '../components/Layout'
import '../styles/index.css'
import '../styles/gottih.css'

const Web = () => {
	return (
		<Layout>
			<section className="gottih-page-contaiiner">
				<div className="img-hero-gottih">
					<img src="/img/gottih/camisetas.jpg" alt="Camisetas" />
				</div>
				<h1>Gottih</h1>
				<span>Camisetas con realidad aumentada</span>
				<div className="gottih-parrafo">
					<p>
						Gottih es un proyecto de camisetas con diseños animados mediante
						realidad aumentada el cual fue desarrollado por nuestro equipo de
						ingeniería el cual se encargó de hacer todo el diseño y desarrollo
						tanto de del sitio web de distribución como de la aplicación móvil
						disponible para dispositivos Android.
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
				<div className="logo-gottih-ac noUserSelect">
					<img src="/img/LogotipoNegro.png" alt="Logo" />
				</div>
			</section>
		</Layout>
	)
}

export default Web
