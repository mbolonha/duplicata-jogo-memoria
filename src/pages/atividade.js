import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../modules/layout'

import CardVerse from '../../static/images/card-atividade.svg'

import CardAa from '../../static/images/atividade-01-a.svg'
import CardAb from '../../static/images/atividade-01-b.svg'

import CardBa from '../../static/images/atividade-02-a.svg'
import CardBb from '../../static/images/atividade-02-b.svg'

import CardCa from '../../static/images/atividade-03-a.svg'
import CardCb from '../../static/images/atividade-03-b.svg'

import CardDa from '../../static/images/atividade-04-a.svg'
import CardDb from '../../static/images/atividade-04-b.svg'

import CardFa from '../../static/images/atividade-05-a.svg'
import CardFb from '../../static/images/atividade-05-b.svg'

import CardEa from '../../static/images/atividade-06-a.svg'
import CardEb from '../../static/images/atividade-06-b.svg'

import CardGa from '../../static/images/atividade-07-a.svg'
import CardGb from '../../static/images/atividade-07-b.svg'

import CardHa from '../../static/images/atividade-08-a.svg'
import CardHb from '../../static/images/atividade-08-b.svg'

// Formatando a página
const AtividadePage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: <CardAa />,
		},
		{
			type: 'Cardb',
			image: <CardBa />,
		},
		{
			type: 'Cardc',
			image: <CardCa />,
		},
		{
			type: 'Cardd',
			image: <CardDa />,
		},
		{
			type: 'Carde',
			image: <CardFa />,
		},
		{
			type: 'Cardf',
			image: <CardEa />,
		},
		{
			type: 'Cardg',
			image: <CardGa />,
		},
		{
			type: 'Cardh',
			image: <CardHa />,
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: <CardAb />,
		},
		{
			type: 'Cardb',
			image: <CardBb />,
		},
		{
			type: 'Cardc',
			image: <CardCb />,
		},
		{
			type: 'Cardd',
			image: <CardDb />,
		},
		{
			type: 'Carde',
			image: <CardFb />,
		},
		{
			type: 'Cardf',
			image: <CardEb />,
		},
		{
			type: 'Cardg',
			image: <CardGb />,
		},
		{
			type: 'Cardh',
			image: <CardHb />,
		},
	]
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `Atividade Física` }}>
			<Layout
				// é um construtor tipo os do WP mas aqui
				type="ROW"
				opt={{
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<Layout
					type="HEADER"
					opt={{
						logoHeader: (
							<Layout
								type="BLOCK_IMAGE"
								opt={{ queryCard: data.logotipoImg }}
							/>
						),
					}}
				/>
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Atividade Física',
						cardVerse: <CardVerse />,
						firstElementsArray,
						secondElementsArray,
					}}
				/>
			</Layout>
			<Layout
				// é um construtor tipo os do WP mas aqui
				type="ROW"
				opt={{
					isBoxed: true,
					classes: 'footer-gray',
					alignTo: 'center',
					bgColor: '#2f2f2f',
				}}
			>
				<Layout type="FOOTER" />
			</Layout>
		</Layout>
	)
}
export default AtividadePage

export const queryAtividade = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 135)
			}
		}
	}
`
