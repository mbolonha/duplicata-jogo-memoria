// import { Link } from "gatsby"
import { React, useState } from '../dependencies'
// import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'

const HeaderContainer = ({ heroData, logo }) => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Header
			logo={logo}
			Hero={heroData}
			refState={refState}
			handleRefState={handleRefState}
		/>
	)
}
export default HeaderContainer
