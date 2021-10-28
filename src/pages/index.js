import React from 'react'
import Layout from '@Layout'

// Dupla de cartas invocadas aqui
import Cardaa from '../../static/assets/images/glicemia-card-01-a.svg'
import Cardab from '../../static/assets/images/glicemia-card-01-b.svg'
// separadas por $A/B = AA...AB...BA...BB...CA...CB...DA...DB...
import Cardba from '../../static/assets/images/glicemia-card-02-a.svg'
import Cardbb from '../../static/assets/images/glicemia-card-02-b.svg'
import Cardca from '../../static/assets/images/glicemia-card-03-a.svg'
import Cardcb from '../../static/assets/images/glicemia-card-03-b.svg'
import Cardda from '../../static/assets/images/glicemia-card-04-a.svg'
import Carddb from '../../static/assets/images/glicemia-card-04-b.svg'
import Cardea from '../../static/assets/images/glicemia-card-05-a.svg'
import Cardeb from '../../static/assets/images/glicemia-card-05-b.svg'
import Cardfa from '../../static/assets/images/glicemia-card-06-a.svg'
import Cardfb from '../../static/assets/images/glicemia-card-06-b.svg'
import Cardga from '../../static/assets/images/glicemia-card-07-a.svg'
import Cardgb from '../../static/assets/images/glicemia-card-07-b.svg'
import Cardha from '../../static/assets/images/glicemia-card-08-a.svg'
import Cardhb from '../../static/assets/images/glicemia-card-08-b.svg'

// Para fazer a concatenação de duplas distintas, mas semelhantes
// Nosso jogo permite o uso de cartas diferentes se assim o desejar
// caso não, coloque a mesma carta em ambas as listas, sob o mesmo tipo
const firstElementsArray = [
	{
		type: 'Carda',
		image: <Cardaa />,
	},
	{
		type: 'Cardb',
		image: <Cardba />,
	},
	{
		type: 'Cardc',
		image: <Cardca />,
	},
	{
		type: 'Cardd',
		image: <Cardda />,
	},
	{
		type: 'Carde',
		image: <Cardea />,
	},
	{
		type: 'Cardf',
		image: <Cardfa />,
	},
	{
		type: 'Cardg',
		image: <Cardga />,
	},
	{
		type: 'Cardh',
		image: <Cardha />,
	},
]
// segunda lista de cartas
const secondElementsArray = [
	{
		type: 'Carda',
		image: <Cardab />,
	},
	{
		type: 'Cardb',
		image: <Cardbb />,
	},
	{
		type: 'Cardc',
		image: <Cardcb />,
	},
	{
		type: 'Cardd',
		image: <Carddb />,
	},
	{
		type: 'Carde',
		image: <Cardeb />,
	},
	{
		type: 'Cardf',
		image: <Cardfb />,
	},
	{
		type: 'Cardg',
		image: <Cardgb />,
	},
	{
		type: 'Cardh',
		image: <Cardhb />,
	},
]
// Construindo a página
const IndexPage = () => {
	return (
		// titleSeo = Título da página atual - $title::gatsby-config
		// titleSeo é seguido por title::gatsby-config
		<Layout type="BODY" opt={{ titleSeo: `DMDD` }}>
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
						firstElementsArray,
						secondElementsArray,
					}}
				/>
			</Layout>
		</Layout>
	)
}
export default IndexPage
