import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../modules/layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.atividade08b }} />
			),
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
				<Layout type="HEADER" />
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Atividade Física',
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

export const queryAtividade = graphql`
	query imgsAtividade {
		atividade01a: file(relativePath: { eq: "atividade-01-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade01b: file(relativePath: { eq: "atividade-01-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade02a: file(relativePath: { eq: "atividade-02-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade02b: file(relativePath: { eq: "atividade-02-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade03a: file(relativePath: { eq: "atividade-03-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade03b: file(relativePath: { eq: "atividade-03-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade04a: file(relativePath: { eq: "atividade-04-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade04b: file(relativePath: { eq: "atividade-04-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade05a: file(relativePath: { eq: "atividade-05-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade05b: file(relativePath: { eq: "atividade-05-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade06a: file(relativePath: { eq: "atividade-06-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade06b: file(relativePath: { eq: "atividade-06-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade07a: file(relativePath: { eq: "atividade-07-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade07b: file(relativePath: { eq: "atividade-07-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		atividade08a: file(relativePath: { eq: "atividade-08-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		atividade08b: file(relativePath: { eq: "atividade-08-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		cardVerse: file(relativePath: { eq: "card-atividade.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
	}
`
