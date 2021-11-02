import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@Layout'

import CardAa from '../../static/images/alimentacao-01-a.svg'
import CardAb from '../../static/images/alimentacao-01-b.svg'

import CardBa from '../../static/images/alimentacao-02-a.svg'
import CardBb from '../../static/images/alimentacao-02-b.svg'

import CardCa from '../../static/images/alimentacao-03-a.svg'
import CardCb from '../../static/images/alimentacao-03-b.svg'

import CardDa from '../../static/images/alimentacao-04-a.svg'
import CardDb from '../../static/images/alimentacao-04-b.svg'

import CardFa from '../../static/images/alimentacao-05-a.svg'
import CardFb from '../../static/images/alimentacao-05-b.svg'

import CardEa from '../../static/images/alimentacao-06-a.svg'
import CardEb from '../../static/images/alimentacao-06-b.svg'

import CardGa from '../../static/images/alimentacao-07-a.svg'
import CardGb from '../../static/images/alimentacao-07-b.svg'

import CardHa from '../../static/images/alimentacao-08-a.svg'
import CardHb from '../../static/images/alimentacao-08-b.svg'

// Verso da carta
import CardVerse from '../../static/images/card-alimentacao.svg'

// Formatando a página
const IndexPage = ({ data }) => {
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
		<Layout type="BODY" opt={{ titleSeo: `DMDD título aqui` }}>
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
				<Layout type="HEADER" />
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Alimentação',
						cardVerse: <CardVerse />,
						firstElementsArray,
						secondElementsArray,
					}}
				/>
			</Layout>
		</Layout>
	)
}
export default IndexPage
