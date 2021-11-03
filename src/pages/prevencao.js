import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../modules/layout'

import CardAa from '../../static/images/prevencao-01-a.svg'
import CardAb from '../../static/images/prevencao-01-b.svg'

import CardBa from '../../static/images/prevencao-02-a.svg'
import CardBb from '../../static/images/prevencao-02-b.svg'

import CardCa from '../../static/images/prevencao-03-a.svg'
import CardCb from '../../static/images/prevencao-03-b.svg'

import CardDa from '../../static/images/prevencao-04-a.svg'
import CardDb from '../../static/images/prevencao-04-b.svg'

import CardFa from '../../static/images/prevencao-05-a.svg'
import CardFb from '../../static/images/prevencao-05-b.svg'

import CardEa from '../../static/images/prevencao-06-a.svg'
import CardEb from '../../static/images/prevencao-06-b.svg'

import CardGa from '../../static/images/prevencao-07-a.svg'
import CardGb from '../../static/images/prevencao-07-b.svg'

import CardHa from '../../static/images/prevencao-08-a.svg'
import CardHb from '../../static/images/prevencao-08-b.svg'

// Verso da carta
import CardVerse from '../../static/images/card-prevencao.svg'
// Formatando a página
const PrevencaoPage = ({ data }) => {
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
			image: <CardEa />,
		},
		{
			type: 'Cardf',
			image: <CardFa />,
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
			image: <CardEb />,
		},
		{
			type: 'Cardf',
			image: <CardFb />,
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
		<Layout type="BODY" opt={{ titleSeo: `Prevenção` }}>
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
						title: 'Prevenção',
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
export default PrevencaoPage

export const queryAtividade = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 135)
			}
		}
	}
`
