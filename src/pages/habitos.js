import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@Layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos01a }} />,
		},
		{
			type: 'Cardb',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos02a }} />,
		},
		{
			type: 'Cardc',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos03a }} />,
		},
		{
			type: 'Cardd',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos04a }} />,
		},
		{
			type: 'Carde',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos05a }} />,
		},
		{
			type: 'Cardf',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos06a }} />,
		},
		{
			type: 'Cardg',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos07a }} />,
		},
		{
			type: 'Cardh',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos08a }} />,
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos01b }} />,
		},
		{
			type: 'Cardb',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos02b }} />,
		},
		{
			type: 'Cardc',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos03b }} />,
		},
		{
			type: 'Cardd',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos04b }} />,
		},
		{
			type: 'Carde',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos05b }} />,
		},
		{
			type: 'Cardf',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos06b }} />,
		},
		{
			type: 'Cardg',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos07b }} />,
		},
		{
			type: 'Cardh',
			image: <Layout type="BLOCK_IMAGE" opt={{ queryCard: data.habitos08b }} />,
		},
	]
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `Bons Hábitos` }}>
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
						title: 'Bons Hábitos',
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

export const queryHabitos = graphql`
	query imgsHabitos {
		habitos01a: file(relativePath: { eq: "habitos-01-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos01b: file(relativePath: { eq: "habitos-01-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos02a: file(relativePath: { eq: "habitos-02-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos02b: file(relativePath: { eq: "habitos-02-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos03a: file(relativePath: { eq: "habitos-03-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos03b: file(relativePath: { eq: "habitos-03-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos04a: file(relativePath: { eq: "habitos-04-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos04b: file(relativePath: { eq: "habitos-04-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos05a: file(relativePath: { eq: "habitos-05-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos05b: file(relativePath: { eq: "habitos-05-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos06a: file(relativePath: { eq: "habitos-06-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos06b: file(relativePath: { eq: "habitos-06-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos07a: file(relativePath: { eq: "habitos-07-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos07b: file(relativePath: { eq: "habitos-07-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}

		habitos08a: file(relativePath: { eq: "habitos-08-a" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		habitos08b: file(relativePath: { eq: "habitos-08-b" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
		cardVerse: file(relativePath: { eq: "card-habitos" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165)
			}
		}
	}
`
