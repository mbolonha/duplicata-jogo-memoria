import React from 'react'
import Logo from '../../../../static/images/diabetes-brasil-logo.svg'
import MenuHamburgerIcon from '../../../../static/images/menu-hamburger.svg'
import MenuContainer from '../containers/MenuContainer'
const Header = ({ refState, handleRefState }) => {
	return (
		<header>
			<div className="main-header">
				<div className="header-columns">
					<a href="/" className="logo-link">
						<Logo style={{ display: 'block', height: '50px' }} />
					</a>
				</div>
				<div className="header-columns toggle-menu desktop-only">
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

			<MenuContainer refState={refState} handleRefState={handleRefState} />
		</header>
	)
}

export default Header
