import { React, useState } from '../dependencies'
// import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'

const FooterContainer = () => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return <Footer refState={refState} handleRefState={handleRefState} />
}

export default FooterContainer
