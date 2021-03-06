import React from 'react'
import BodyContainer from './BodyContainer'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'
import RowContainer from './RowContainer'
import BlockImageContainer from './BlockImageContainer'
import BlockShareContainer from './BlockShareContainer'
// import MainContainer from './MainContainer'
import MemoryGameContainer from './MemoryGameContainer'
const LayoutResolver = ({
	children,
	opt,
	type,
	querySelector,
	sectionTitle,
	setLocation,
	logo,
	url,
}) => {
	function renderComponent(renderThis) {
		switch (renderThis) {
			case 'BODY':
				return <BodyContainer children={children} opt={opt} />
			case 'FOOTER':
				return <FooterContainer />
			case 'BLOCK_IMAGE':
				return <BlockImageContainer opt={opt} />
			case 'BLOCK_SHARE':
				return <BlockShareContainer opt={opt} />
			case 'HEADER':
				return <HeaderContainer heroData={opt} logo={logo} opt={opt} />

			case 'ROW':
				return (
					<RowContainer
						opt={opt}
						children={children}
						querySelector={querySelector}
						sectionTitle={sectionTitle}
						setLocation={setLocation}
					/>
				)
			// case 'MAIN':
			// return <MainContainer opt={opt} />
			case 'MEMORYGAME':
				return <MemoryGameContainer opt={opt} />
			default:
				return console.log(renderThis)
		}
	}
	return <>{renderComponent(type)}</>
}
export default LayoutResolver
