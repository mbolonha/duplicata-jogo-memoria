import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../modules/layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia01a }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia02a }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia03a }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia04a }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia05a }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia06a }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia07a }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia08a }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia01b }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia02b }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia03b }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia04b }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia05b }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia06b }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia07b }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.glicemia08b }} />
			),
		},
	]
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `Glicemia` }}>
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
						title: 'Glicemia',
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

export const queryGlicemia = graphql`
	query imgsGlicemia {
		glicemia01a: file(relativePath: { eq: "glicemia-01-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia01b: file(relativePath: { eq: "glicemia-01-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia02a: file(relativePath: { eq: "glicemia-02-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia02b: file(relativePath: { eq: "glicemia-02-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia03a: file(relativePath: { eq: "glicemia-03-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia03b: file(relativePath: { eq: "glicemia-03-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia04a: file(relativePath: { eq: "glicemia-04-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia04b: file(relativePath: { eq: "glicemia-04-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia05a: file(relativePath: { eq: "glicemia-05-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia05b: file(relativePath: { eq: "glicemia-05-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia06a: file(relativePath: { eq: "glicemia-06-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia06b: file(relativePath: { eq: "glicemia-06-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia07a: file(relativePath: { eq: "glicemia-07-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia07b: file(relativePath: { eq: "glicemia-07-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}

		glicemia08a: file(relativePath: { eq: "glicemia-08-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		glicemia08b: file(relativePath: { eq: "glicemia-08-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 165
					height: 165
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		cardVerse: file(relativePath: { eq: "card-glicemia.jpg" }) {
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
