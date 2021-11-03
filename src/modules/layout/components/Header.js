import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../../../static/images/diabetes-brasil-logo.svg'
import MenuHamburgerIcon from '../../../../static/images/menu-hamburger.svg'
import MenuContainer from '../containers/MenuContainer'
const Header = ({ refState, handleRefState }) => {
	return (
		<header>
			<MenuContainer refState={refState} handleRefState={handleRefState} />

			<div className="main-header">
				<div className="header-columns">
					<Link to="/" className="logo-link">
						<Logo style={{ display: 'block', height: '75px' }} />
					</Link>
				</div>
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
						<div className="menu-bar-icon">
							<MenuHamburgerIcon className="hamburger-icon" />
						</div>
					</label>
				</div>
			</div>
		</header>
	)
}

export default Header
