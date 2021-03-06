import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../modules/layout'
import AlimentacaoIcon from '../../static/images/alimentacao-icon.svg'
import AtividadeIcon from '../../static/images/atividade-icon.svg'
import BemEstarIcon from '../../static/images/bem-estar-icon.svg'
import GlicemiaIcon from '../../static/images/glicemia-icon.svg'
import HabitosIcon from '../../static/images/habitos-icon.svg'
import PrevencaoIcon from '../../static/images/prevencao-icon.svg'
import TratamentoIcon from '../../static/images/tratamento-icon.svg'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const IndexPage = ({ data }) => {
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `Jogo da Memória` }}>
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
				<div className="index-first-row">
					<Layout
						type="BLOCK_IMAGE"
						opt={{ queryCard: data.logotipoJogoMemoria }}
					/>
					<p className="index-paragraph">
						Acesse abaixo os jogos da memória e aprenda tópicos relacionados à
						Diabetes.
					</p>
				</div>
				<div className="index-link-wrapper">
					<Link to="/alimentacao" className="index-link">
						Alimentação <AlimentacaoIcon />
					</Link>
					<Link to="/atividade" className="index-link">
						Atividade <AtividadeIcon />
					</Link>
					<Link to="/bem-estar" className="index-link">
						Bem-Estar <BemEstarIcon />
					</Link>
					<Link to="/glicemia" className="index-link">
						Glicemia <GlicemiaIcon />
					</Link>
					<Link to="/habitos" className="index-link">
						Hábitos <HabitosIcon />
					</Link>
					<Link to="/prevencao" className="index-link">
						Prevenção <PrevencaoIcon />
					</Link>
					<Link to="/tratamento" className="index-link">
						Tratamento <TratamentoIcon />
					</Link>
					<div className="index-share-btn">
						<Layout
							type="BLOCK_SHARE"
							opt={{
								title: data.site.siteMetadata.title,
								url: data.site.siteMetadata.siteUrl,
							}}
						/>
					</div>
					<div className="carousel-logos">
						<h2 className="heading-logos">Nossos Parceiros</h2>
						<Carousel showThumbs={false}>
							<div>
								<Layout
									type="BLOCK_IMAGE"
									opt={{ queryCard: data.astrazeneca }}
								/>
							</div>

							<div>
								<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bayer }} />
							</div>

							<div>
								<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bd }} />
							</div>

							<div>
								<Layout
									type="BLOCK_IMAGE"
									opt={{ queryCard: data.boehringer }}
								/>
							</div>

							<div>
								<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.novartis }} />
							</div>

							<div>
								<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.nordisk }} />
							</div>

							<div>
								<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.roche }} />
							</div>

							<div>
								<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.sanofi }} />
							</div>
						</Carousel>
					</div>
				</div>
			</Layout>

			<Layout
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
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 115
					placeholder: NONE
					quality: 100
				)
			}
		}
		logotipoJogoMemoria: file(
			relativePath: { eq: "logotipo-jogodamemoria.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
		astrazeneca: file(
			relativePath: { eq: "astrazeneca-diabetes-logotipo.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 80, placeholder: NONE)
			}
		}
		bayer: file(relativePath: { eq: "bayer-logotipo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 70, placeholder: NONE)
			}
		}
		bd: file(relativePath: { eq: "bd-logotipo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 80, placeholder: NONE)
			}
		}
		boehringer: file(relativePath: { eq: "boehringer-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 130
					placeholder: NONE
					quality: 100
				)
			}
		}
		novartis: file(relativePath: { eq: "novartis-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 30
					placeholder: NONE
					quality: 100
				)
			}
		}
		nordisk: file(relativePath: { eq: "novo-nordisk-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 70
					placeholder: NONE
					quality: 100
				)
			}
		}
		roche: file(relativePath: { eq: "roche-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 45
					placeholder: NONE
					quality: 100
				)
			}
		}
		sanofi: file(relativePath: { eq: "sanofi-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 80
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
