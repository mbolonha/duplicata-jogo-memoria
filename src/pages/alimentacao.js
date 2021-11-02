import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@Layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacao08b }} />
			),
		},
	]
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `Alimentação` }}>
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
						cardVerse: (
							<Layout
								type="BLOCK_IMAGE"
								opt={{ queryCard: data.cardVerseAlimentacao }}
							/>
						),
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
export default IndexPage

export const queryAlimentacao = graphql`
	query imgsAlimentacao {
		alimentacao01a: file(relativePath: { eq: "alimentacao-01-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					quality: 100
					formats: [PNG]
				)
			}
		}
		alimentacao01b: file(relativePath: { eq: "alimentacao-01-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [PNG]
					quality: 100
				)
			}
		}

		alimentacao02a: file(relativePath: { eq: "alimentacao-02-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					quality: 100
					formats: [PNG]
				)
			}
		}
		alimentacao02b: file(relativePath: { eq: "alimentacao-02-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					quality: 100
					height: 165
					formats: [PNG]
				)
			}
		}

		alimentacao03a: file(relativePath: { eq: "alimentacao-03-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					quality: 100
					formats: [PNG]
				)
			}
		}
		alimentacao03b: file(relativePath: { eq: "alimentacao-03-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					quality: 100
					height: 165
					formats: [PNG]
				)
			}
		}

		alimentacao04a: file(relativePath: { eq: "alimentacao-04-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					quality: 100
					height: 165
					formats: [PNG]
				)
			}
		}
		alimentacao04b: file(relativePath: { eq: "alimentacao-04-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}

		alimentacao05a: file(relativePath: { eq: "alimentacao-05-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}
		alimentacao05b: file(relativePath: { eq: "alimentacao-05-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					quality: 100
					height: 165
					formats: [PNG]
				)
			}
		}

		alimentacao06a: file(relativePath: { eq: "alimentacao-06-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}
		alimentacao06b: file(relativePath: { eq: "alimentacao-06-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}

		alimentacao07a: file(relativePath: { eq: "alimentacao-07-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}
		alimentacao07b: file(relativePath: { eq: "alimentacao-07-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					quality: 100
					height: 165
					formats: [PNG]
				)
			}
		}

		alimentacao08a: file(relativePath: { eq: "alimentacao-08-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}
		alimentacao08b: file(relativePath: { eq: "alimentacao-08-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}
		cardVerseAlimentacao: file(relativePath: { eq: "card-alimentacao.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					quality: 100
					width: 165
					height: 165
					formats: [PNG]
				)
			}
		}
	}
`
