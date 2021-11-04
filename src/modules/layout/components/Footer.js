import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ socialIcons, logoImg, refState, handleRefState }) => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="text-center">
						<ul className="social-links social-links__dark">
							<li>
								<a
									href="https://www.facebook.com/ADJDiabetesBrasil/"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/ADJ_Diabetes_BR"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a
									href="http://www.instagram.com/adjdiabetesbrasil/?hl=pt-br"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-instagram"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/channel/UCj5rxMlBYLDiRSVdy2FprMA?view_as=subscriber"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-youtube"></i>
								</a>
							</li>
						</ul>

						<p>
							Copyright 2017, todos os direitos reservados.
							<br />
							ADJ – ASSOCIAÇÃO DE DIABETES JUVENIL
							<br />
							R. Padre Antônio Tomás, 213 - Água Branca,
							<br />
							São Paulo - SP, 05003-010.
							<br />
							<br />
							(11) 3675-3266 – ramal 11
							<br />
							(11)9 7148-0465
						</p>

						<br />
						<p>
							Ninguém está autorizado a utilizar o logo e nome da Associação de
							Diabetes Juvenil - ADJ, principalmente para fins comerciais.
							<br />O uso indevido e sem autorização acarretará a tomada das
							medidas legais cabíveis.
							<br />
							<br />É vedada a publicação do conteúdo deste site, no todo ou em
							parte, sem prévia autorização, por escrito, da ADJ Diabetes
							Brasil. <br />
							Solicite autorização pelo e-mail:{' '}
							<span>
								<Link to="mailto:revistaadj@adj.org.br" className="footer-link">
									revistaadj@adj.org.br
								</Link>
							</span>
						</p>
						<br />

						<p>
							INFORMAÇÃO IMPORTANTE
							<br />
							<br />
							<em>
								O conteúdo desse site tem finalidade exclusivamente informativa
								e educativa e não substitui, em nenhuma hipótese,
								<br />a necessidade de seguir as orientações de seu médico e/ou
								de outros profissionais de saúde,
								<br />
								únicos habilitados a prescrever o tratamento mais adequado às
								suas necessidades.
							</em>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
