import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../modules/layout'

import CardVerse from '../../static/images/card-bem-estar.svg'

import CardAa from '../../static/images/bem-estar-01-a.svg'
import CardAb from '../../static/images/bem-estar-01-b.svg'

import CardBa from '../../static/images/bem-estar-02-a.svg'
import CardBb from '../../static/images/bem-estar-02-b.svg'

import CardCa from '../../static/images/bem-estar-03-a.svg'
import CardCb from '../../static/images/bem-estar-03-b.svg'

import CardDa from '../../static/images/bem-estar-04-a.svg'
import CardDb from '../../static/images/bem-estar-04-b.svg'

import CardFa from '../../static/images/bem-estar-05-a.svg'
import CardFb from '../../static/images/bem-estar-05-b.svg'

import CardEa from '../../static/images/bem-estar-06-a.svg'
import CardEb from '../../static/images/bem-estar-06-b.svg'

import CardGa from '../../static/images/bem-estar-07-a.svg'
import CardGb from '../../static/images/bem-estar-07-b.svg'

import CardHa from '../../static/images/bem-estar-08-a.svg'
import CardHb from '../../static/images/bem-estar-08-b.svg'

// Formatando a página
const BemEstarPage = ({ data }) => {
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
		<Layout type="BODY" opt={{ titleSeo: `Bem Estar` }}>
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
						title: 'Bem Estar',
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
export default BemEstarPage

export const queryAtividade = graphql`
	query {
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 135, placeholder: NONE)
			}
		}
	}
`
