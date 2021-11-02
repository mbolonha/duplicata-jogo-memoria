import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@Layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bemestar08b }} />
			),
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
				<Layout type="HEADER" />
				<Layout
					type="MEMORYGAME"
					opt={{
						title: 'Bem Estar',
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

export const queryBemEstar = graphql`
	query imgsBemEstar {
		bemestar01a: file(relativePath: { eq: "bem-estar-01-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar01b: file(relativePath: { eq: "bem-estar-01-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar02a: file(relativePath: { eq: "bem-estar-02-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar02b: file(relativePath: { eq: "bem-estar-02-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar03a: file(relativePath: { eq: "bem-estar-03-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar03b: file(relativePath: { eq: "bem-estar-03-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar04a: file(relativePath: { eq: "bem-estar-04-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar04b: file(relativePath: { eq: "bem-estar-04-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar05a: file(relativePath: { eq: "bem-estar-05-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar05b: file(relativePath: { eq: "bem-estar-05-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar06a: file(relativePath: { eq: "bem-estar-06-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar06b: file(relativePath: { eq: "bem-estar-06-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar07a: file(relativePath: { eq: "bem-estar-07-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar07b: file(relativePath: { eq: "bem-estar-07-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		bemestar08a: file(relativePath: { eq: "bem-estar-08-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bemestar08b: file(relativePath: { eq: "bem-estar-08-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		cardVerse: file(relativePath: { eq: "card-bem-estar.jpg" }) {
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
