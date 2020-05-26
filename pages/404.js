import Layout from '../components/Layout'
import Link from 'next/link'

const NotFound = () => {
	return (
		<Layout title={' - 404'} MetaDescription="404 not found">
			<section className="not-found">
				<div>
					<div className="container-not-found">
						<div>
							<h1>404</h1>
							<br />
							<span>No se pudo encontrar esta pagina 😪</span>
							<Link href="/">
								<a className="button-transparent noUserSelect">
									<div>Ir al inicio</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default NotFound
