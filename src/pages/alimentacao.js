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
							<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.cardVerse }} />
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
		alimentacao01a: file(relativePath: { eq: "alimentacao-01-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao01b: file(relativePath: { eq: "alimentacao-01-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao02a: file(relativePath: { eq: "alimentacao-02-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao02b: file(relativePath: { eq: "alimentacao-02-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao03a: file(relativePath: { eq: "alimentacao-03-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao03b: file(relativePath: { eq: "alimentacao-03-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao04a: file(relativePath: { eq: "alimentacao-04-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao04b: file(relativePath: { eq: "alimentacao-04-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao05a: file(relativePath: { eq: "alimentacao-05-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao05b: file(relativePath: { eq: "alimentacao-05-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao06a: file(relativePath: { eq: "alimentacao-06-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao06b: file(relativePath: { eq: "alimentacao-06-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao07a: file(relativePath: { eq: "alimentacao-07-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao07b: file(relativePath: { eq: "alimentacao-07-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		alimentacao08a: file(relativePath: { eq: "alimentacao-08-a.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		alimentacao08b: file(relativePath: { eq: "alimentacao-08-b.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		cardVerse: file(relativePath: { eq: "card-alimentacao.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
	}
`
