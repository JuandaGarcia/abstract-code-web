import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => {
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
			<Navbar />
			{props.children}
			<Footer />
		</React.Fragment>
	)
}

export default Layout
