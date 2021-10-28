import { React, useState } from '../dependencies'

import Header from '../components/Header'

const HeaderContainer = ({ logo }) => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Header logo={logo} refState={refState} handleRefState={handleRefState} />
	)
}
export default HeaderContainer
