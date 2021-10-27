import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
	FaStar,
	FaAccessibleIcon,
	FaAdn,
	FaAdversal,
	FaAlgolia,
	FaAmazon,
	FaAngellist,
	FaAtlassian,
	FaDailymotion,
	FaEllo,
	FaFirefox,
	FaFontAwesomeFlag,
	FaFreebsd,
	FaFly,
	FaGitAlt,
	FaGitSquare,
} from 'react-icons/fa'
import ArrowRightIcon from '../../../../static/assets/images/icon-arrow-right.svg'
import TesteGlicemia from '../../../../static/assets/images/teste-glicemia.svg'

const Main = () => (
	<>
		<div className="main-content">
			<div className="container">
				<div className="second-row-for-now">
					<div className="circle-shadow">
						<ArrowRightIcon />
					</div>
					<h1 className="main-h1">Tratamento</h1>
				</div>

				<section className="score-panel hidden">
					<ul className="stars">
						<li>
							<FaStar />
						</li>
						<li>
							<FaStar />
						</li>
						<li>
							<FaStar />
						</li>
					</ul>
					<span className="moves">0</span> Moves |
					<span className="timer-app">0</span>s
					<div className="restart">
						<i className="fa fa-repeat"></i>
					</div>
				</section>

				<ul className="deck">
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaStar />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAdversal />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAtlassian />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAdn />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAccessibleIcon />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAtlassian />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAngellist />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAmazon />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaStar />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAlgolia />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAngellist />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAlgolia />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAdn />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAmazon />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAdversal />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<TesteGlicemia />
						<FaAccessibleIcon />
					</li>
				</ul>
			</div>
		</div>
	</>
)

export default Main
