import React, { useState } from 'react'
import Layout from '@Layout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const IndexPage = ({ data, location }) => {
	const cards = ['Eu sou um card', 'Já eu, sou outro', 'Meu irmão, quem disse?']
	const [cardState] = useState(cards[Math.floor(Math.random() * cards.length)])

	return (
		<Layout type="BODY" opt={{ titleSeo: `DMDD` }}>
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<Layout type="HEADER" /*logo={data.edu4Dev}*/ />
				<h1>{cardState}</h1>
				<Layout type="MAIN" opt={'nothing here'} />
			</Layout>
		</Layout>
	)
}
export default IndexPage
