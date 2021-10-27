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

const IndexPage = ({ data, location }) => {
	return (
		<Layout type="BODY" opt={{ titleSeo: `DMDD` }}>
			<Layout
				type="ROW"
				opt={{
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
						firstElementsArray,
						secondElementsArray,
					}} /*logo={data.edu4Dev}*/
				/>

				{/* <Layout type="MAIN" opt={'nothing here'} /> */}
			</Layout>
		</Layout>
	)
}
export default IndexPage
