import { React, useState } from '../dependencies'

import Header from '../components/Header'

const HeaderContainer = ({ logo, opt }) => {
	// console.log(opt.logoHeader)
	const logoHeader = opt ? opt.logoHeader : null
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Header
			logo={logo}
			refState={refState}
			handleRefState={handleRefState}
			logoComponent={logoHeader}
		/>
	)
}
export default HeaderContainer
