import React from 'react'
import { Link } from 'gatsby'

const MainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav ref={wrapperRef} className={' main-nav menu-state-' + isVisibleClass}>
		{/* // <nav ref={wrapperRef} className={' main-nav'}> */}
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/">
					Ir Para <br className="desktop-only" />o Site
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/quem-somos/">
					Quem Somos
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/viver-bem/">
					Viver Bem
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/fique-ligado/">
					Fique Ligado
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a
					className="nav-main-link"
					href="https://adj.org.br/profissional-e-gestor-de-saude/"
				>
					Profissional e Gestor
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/faca-parte/">
					Faça Parte
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/em-dia/">
					Em Dia
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a
					className="nav-main-link"
					href="https://adj.org.br/faca-parte/faca-sua-doacao/"
				>
					Doações
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="https://adj.org.br/contatos/">
					Contatos
				</a>
			</li>
		</ul>
	</nav>
)

export default MainMenu
