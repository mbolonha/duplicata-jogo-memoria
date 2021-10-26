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

const Main = () => (
	<>
		<div className="main-content">
			<div className="container">
				<header>
					<h1>Jogo Da Memória</h1>
				</header>

				<section className="score-panel">
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
						<FaStar />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAdversal />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAtlassian />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAdn />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAccessibleIcon />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAtlassian />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAngellist />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAmazon />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaStar />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAlgolia />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAngellist />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAlgolia />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAdn />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAmazon />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAdversal />
					</li>
					<li className="card">
						<i className="fa fa-diamond"></i>
						<FaAccessibleIcon />
					</li>
				</ul>
			</div>
		</div>
	</>
)

export default Main
