import React from 'react'
import { Link } from 'gatsby'

const MainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav ref={wrapperRef} className={' main-nav menu-state-' + isVisibleClass}>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Home
				</Link>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Quem Somos
				</Link>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Viver Bem
				</Link>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Fique Ligado
				</Link>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Profissional e Gestor
				</Link>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Faça Parte
				</Link>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Em Dia
				</Link>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Doações
				</Link>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<Link className="nav-main-link" to="/">
					Contatos
				</Link>
			</li>
		</ul>
	</nav>
)

export default MainMenu
