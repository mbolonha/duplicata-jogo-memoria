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
		<Layout type="BODY" opt={{ titleSeo: `DMDD título aqui` }}>
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
					<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.logotipo }} />
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
						<Carousel>
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
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<div className="container">
					<div className="text-center">
						<ul className="social-links social-links__dark">
							<li>
								<a
									href="https://www.facebook.com/ADJDiabetesBrasil/"
									target="_blank"
								>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/ADJ_Diabetes_BR" target="_blank">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a
									href="http://www.instagram.com/adjdiabetesbrasil/?hl=pt-br"
									target="_blank"
								>
									<i className="fa fa-instagram"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/channel/UCj5rxMlBYLDiRSVdy2FprMA?view_as=subscriber"
									target="_blank"
								>
									<i className="fa fa-youtube"></i>
								</a>
							</li>
						</ul>

						<p>
							Copyright 2017, todos os direitos reservados. ADJ – ASSOCIAÇÃO DE
							DIABETES JUVENIL
							<br />
							R. Padre Antônio Tomás, 213 - Água Branca, São Paulo - SP,
							05003-010.
							<br />
							(11) 3675-3266 – ramal 11
							<br />
							<img
								className="wp-image-707 alignnone"
								src="https://adj.org.br/wp-content/uploads/2017/12/WhatsApp-icone.png"
								alt="WhatsApp-icone"
								width="16"
								height="16"
							/>
							(11)9 7148-0465
						</p>
						<p>
							Ninguém está autorizado a utilizar o logo e nome da Associação de
							Diabetes Juvenil - ADJ, principalmente para fins comerciais.
							<br />O uso indevido e sem autorização acarretará a tomada das
							medidas legais cabíveis.
							<br />É vedada a publicação do conteúdo deste site, no todo ou em
							parte, sem prévia autorização, por escrito, da ADJ Diabetes
							Brasil. <br />
							Solicite autorização pelo e-mail:{' '}
							<span>
								<a href="mailto:revistaadj@adj.org.br">revistaadj@adj.org.br</a>
							</span>
						</p>
						<p>
							<img
								className="wp-image-474 alignnone"
								src="https://adj.org.br/wp-content/uploads/2017/10/Importante.png"
								alt="Importante"
								width="16"
								height="16"
							/>
							INFORMAÇÃO IMPORTANTE
							<br />
							<em>
								O conteúdo desse site tem finalidade exclusivamente informativa
								e educativa e não substitui, em nenhuma hipótese,
								<br />a necessidade de seguir as orientações de seu médico e/ou
								de outros profissionais de saúde,
								<br />
								únicos habilitados a prescrever o tratamento mais adequado às
								suas necessidades.
							</em>
						</p>
					</div>
				</div>
			</Layout>
		</Layout>
	)
}
export default IndexPage

export const queryIndex = graphql`
	query imgsIndex {
		logotipo: file(relativePath: { eq: "jogodamemoria-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, width: 224, quality: 100)
			}
		}
		astrazeneca: file(
			relativePath: { eq: "astrazeneca-diabetes-logotipo.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		bayer: file(relativePath: { eq: "bayer-logotipo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		bd: file(relativePath: { eq: "bd-logotipo.png" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		boehringer: file(relativePath: { eq: "boehringer-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		novartis: file(relativePath: { eq: "novartis-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		nordisk: file(relativePath: { eq: "novo-nordisk-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		roche: file(relativePath: { eq: "roche-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
		sanofi: file(relativePath: { eq: "sanofi-logotipo.jpg" }) {
			childrenImageSharp {
				gatsbyImageData(layout: FIXED, height: 40, quality: 100)
			}
		}
	}
`
