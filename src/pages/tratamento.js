import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@Layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.tratamento08b }} />
			),
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
				<Layout type="HEADER" />
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Tratamento',
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

export const queryTratamento = graphql`
	query imgsTratamento {
		tratamento01a: file(relativePath: { eq: "tratamento-01-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento01b: file(relativePath: { eq: "tratamento-01-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento02a: file(relativePath: { eq: "tratamento-02-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento02b: file(relativePath: { eq: "tratamento-02-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento03a: file(relativePath: { eq: "tratamento-03-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento03b: file(relativePath: { eq: "tratamento-03-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento04a: file(relativePath: { eq: "tratamento-04-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento04b: file(relativePath: { eq: "tratamento-04-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento05a: file(relativePath: { eq: "tratamento-05-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento05b: file(relativePath: { eq: "tratamento-05-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento06a: file(relativePath: { eq: "tratamento-06-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento06b: file(relativePath: { eq: "tratamento-06-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento07a: file(relativePath: { eq: "tratamento-07-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento07b: file(relativePath: { eq: "tratamento-07-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		tratamento08a: file(relativePath: { eq: "tratamento-08-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		tratamento08b: file(relativePath: { eq: "tratamento-08-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		cardVerse: file(relativePath: { eq: "card-tratamento.jpg" }) {
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
