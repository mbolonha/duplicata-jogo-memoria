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

const IndexPage = () => {
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
				</div>
			</Layout>
		</Layout>
	)
}
export default IndexPage
