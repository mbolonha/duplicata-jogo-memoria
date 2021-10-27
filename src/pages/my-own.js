import React, { useEffect, useState, useRef } from 'react'
import Layout from '@Layout'
import Cardaa from '../../static/assets/images/glicemia-card-01-a.svg'
import Cardab from '../../static/assets/images/glicemia-card-01-b.svg'
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

const uniqueElementsArray = [
	{
		type: 'Pikachu',
		image: <Cardaa />,
	},
	{
		type: 'ButterFree',
		image: <Cardba />,
	},
	{
		type: 'Charmander',
		image: <Cardca />,
	},
	{
		type: 'Squirtle',
		image: <Cardda />,
	},
	{
		type: 'Pidgetto',
		image: <Cardea />,
	},
	{
		type: 'Bulbasaur',
		image: <Cardfa />,
	},
]

const secondElementsArray = [
	{
		type: 'Pikachu',
		image: <Cardab />,
	},
	{
		type: 'ButterFree',
		image: <Cardbb />,
	},
	{
		type: 'Charmander',
		image: <Cardcb />,
	},
	{
		type: 'Squirtle',
		image: <Carddb />,
	},
	{
		type: 'Pidgetto',
		image: <Cardeb />,
	},
	{
		type: 'Bulbasaur',
		image: <Cardfb />,
	},
]

const IndexPage = ({ data, location }) => {
	return (
		<Layout type="BODY" opt={{ titleSeo: `DMDD` }}>
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<Layout type="HEADER" /*logo={data.edu4Dev}*/ />
				{/* <h1>{cardState}</h1> */}
				{/* <h1>{counter}</h1> */}
				<Layout
					type="MEMORYGAME"
					opt={{
						uniqueElementsArray,
						secondElementsArray,
					}} /*logo={data.edu4Dev}*/
				/>

				{/* <Layout type="MAIN" opt={'nothing here'} /> */}
			</Layout>
		</Layout>
	)
}
export default IndexPage
