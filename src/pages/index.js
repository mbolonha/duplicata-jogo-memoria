import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '@Layout'
import AlimentacaoIcon from '../../static/assets/images/alimentacao-icon.svg'
import AtividadeIcon from '../../static/assets/images/atividade-icon.svg'
import BemEstarIcon from '../../static/assets/images/bem-estar-icon.svg'
import GlicemiaIcon from '../../static/assets/images/glicemia-icon.svg'
import HabitosIcon from '../../static/assets/images/habitos-icon.svg'
import PrevencaoIcon from '../../static/assets/images/prevencao-icon.svg'
import TratamentoIcon from '../../static/assets/images/tratamento-icon.svg'
import FacebookIcon from '../../static/assets/images/face-icon.svg'
import TwitterIcon from '../../static/assets/images/twitter-icon.svg'
import WhatsIcon from '../../static/assets/images/whats-icon.svg'
import InstagramIcon from '../../static/assets/images/instagram-icon.svg'
import ShareIcon from '../../static/assets/images/share-icon.svg'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const IndexPage = ({ data }) => {
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `Página Inicial` }}>
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
				<div className="index-first-row">
					<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.logotipoIndex }} />
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
						<div className="wrapper-buttons">
							<span>Compartilhe</span>
							<div className="modal-share-button">
								<FacebookIcon />
								<TwitterIcon />
								<WhatsIcon />
								<InstagramIcon />
								<ShareIcon />
							</div>
						</div>
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

export const queryIndex = graphql`
	query imgsIndex {
		logotipoIndex: file(relativePath: { eq: "logotipo-jogo-memoria-02.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 224
					quality: 100
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		astrazeneca: file(
			relativePath: { eq: "astrazeneca-diabetes-logotipo.jpg" }
		) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 80
					quality: 100
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bayer: file(relativePath: { eq: "bayer-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 70
					quality: 100
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		bd: file(relativePath: { eq: "bd-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 80
					quality: 100
					formats: [AUTO, WEBP, PNG]
				)
			}
		}
		boehringer: file(relativePath: { eq: "boehringer-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 130
					quality: 100
					formats: [AUTO, WEBP, JPG]
				)
			}
		}
		novartis: file(relativePath: { eq: "novartis-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 30
					quality: 100
					formats: [AUTO, WEBP, JPG]
				)
			}
		}
		nordisk: file(relativePath: { eq: "novo-nordisk-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 70
					quality: 100
					formats: [AUTO, WEBP, JPG]
				)
			}
		}
		roche: file(relativePath: { eq: "roche-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 45
					quality: 100
					formats: [AUTO, WEBP, JPG]
				)
			}
		}
		sanofi: file(relativePath: { eq: "sanofi-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					height: 80
					quality: 100
					formats: [AUTO, WEBP, JPG]
				)
			}
		}
	}
`
