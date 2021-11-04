import React from 'react'
import { graphql, Link } from 'gatsby'
import Logo from '../../../../static/images/diabetes-brasil-logo.svg'
import MenuHamburgerIcon from '../../../../static/images/menu-hamburger.svg'
import MenuContainer from '../containers/MenuContainer'
const Header = ({ refState, handleRefState, data, logoComponent }) => {
	console.log(data)
	const logotipoHeader = logoComponent || (
		<Logo style={{ display: 'block', height: '75px' }} />
	)
	const menuActive = refState ? 'visible' : 'not-visible'
	return (
		<header>
			<div className={' main-header main-header-' + menuActive}>
				<div className="header-columns">
					<Link to="/" className={' logo-link logo-link-' + menuActive}>
						{/* <Logo style={{ display: 'block', height: '75px' }} /> */}
						{logotipoHeader}
					</Link>
				</div>
				<MenuContainer refState={refState} handleRefState={handleRefState} />
				<div className="header-columns toggle-menu">
					<input
						type="checkbox"
						id="check-toggle-icon"
						onChange={handleRefState}
					/>
					<label
						htmlFor="check-toggle-icon"
						className={`menu-wrapper ${refState ? 'active' : 'not-active'}`}
					>
						<div className="menu-bar-icon mobile-only">
							<MenuHamburgerIcon className="hamburger-icon " />
						</div>
					</label>
				</div>
			</div>
		</header>
	)
}

export default Header
