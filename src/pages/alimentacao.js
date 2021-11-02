import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@Layout'

// Formatando a página
const IndexPage = ({ data }) => {
	const firstElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoaa }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoba }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoca }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoda }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoea }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaofa }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoga }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoha }} />
			),
		},
	]
	// segunda lista de cartas
	// essas são as cartas que darão Match com os tipos da outra lista
	const secondElementsArray = [
		{
			type: 'Carda',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoab }} />
			),
		},
		{
			type: 'Cardb',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaobb }} />
			),
		},
		{
			type: 'Cardc',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaocb }} />
			),
		},
		{
			type: 'Cardd',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaodb }} />
			),
		},
		{
			type: 'Carde',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaoeb }} />
			),
		},
		{
			type: 'Cardf',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaofb }} />
			),
		},
		{
			type: 'Cardg',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaogb }} />
			),
		},
		{
			type: 'Cardh',
			image: (
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.alimentacaohb }} />
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
		alimentacaoaa: file(relativePath: { eq: "alimentacao-01-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		alimentacaoab: file(relativePath: { eq: "alimentacao-01-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}

		alimentacaoba: file(relativePath: { eq: "alimentacao-02-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		alimentacaobb: file(relativePath: { eq: "alimentacao-02-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaoca: file(relativePath: { eq: "alimentacao-03-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, height: 165, quality: 100)
			}
		}
		alimentacaocb: file(relativePath: { eq: "alimentacao-03-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaoda: file(relativePath: { eq: "alimentacao-04-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}
		alimentacaodb: file(relativePath: { eq: "alimentacao-04-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		alimentacaoea: file(relativePath: { eq: "alimentacao-05-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaoeb: file(relativePath: { eq: "alimentacao-05-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaofa: file(relativePath: { eq: "alimentacao-06-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaofb: file(relativePath: { eq: "alimentacao-06-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}

		alimentacaoga: file(relativePath: { eq: "alimentacao-07-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaogb: file(relativePath: { eq: "alimentacao-07-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 165, quality: 100, height: 165)
			}
		}

		alimentacaoha: file(relativePath: { eq: "alimentacao-08-a.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		alimentacaohb: file(relativePath: { eq: "alimentacao-08-b.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
		cardVerseAlimentacao: file(relativePath: { eq: "card-alimentacao.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, quality: 100, width: 165, height: 165)
			}
		}
	}
`
