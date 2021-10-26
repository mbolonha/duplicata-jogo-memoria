import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'animate.css'
import $ from 'jquery'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '@Layout'
// import { useFullScreenHandle } from 'react-full-screen'
// import { Link } from 'gatsby'
// import { graphql } from 'gatsby'

// import ReactDOM from 'react-dom'

const MySwal = withReactContent(Swal)

const IndexPage = ({ data, location }) => {
	useEffect(() => {
		// let swal = null
		let card = $('.card')
		let cards = [...card]
		let iniciarJogo = false
		let cardsVirados = [] //
		let numeroJogadas = 0
		let seg = 0
		let cardsEncontrados = 0
		let cronometro
		let currentTimer
		let timer = document.querySelector('.timer-app')

		$(function () {
			$('.card').click(game.selecionarCard)
			$('.restart').click(game.reset)
			game.initGame()
		})

		class Game {
			initGame() {
				game.populateCards()
			}

			verificaCardsVirados(cardsVirados) {
				//  let cardsVirados = [];
				let card1 = game.obterImagemDoCard(cardsVirados[0])
				let card2 = game.obterImagemDoCard(cardsVirados[1])
				console.log('card1:::' + cardsVirados)

				if (card1 === card2) {
					cardsEncontrados++
					cardsVirados.forEach(function (card) {
						card.animateCss('tada', function () {
							card.toggleClass('open show match')
						})
					})
				} else {
					cardsVirados.forEach(function (card) {
						card.animateCss('shake', function () {
							card.toggleClass('open show')
						})
					})
				}

				if (cardsEncontrados === 8) {
					game.finalizarJogo()
				}
			}
			atualizarNumeroDeJogadas() {
				numeroJogadas++
				let numJogadas = $('.moves')
				numJogadas.text(numeroJogadas)
				if (numeroJogadas === 12 || numeroJogadas === 18) {
					game.removeEstrela()
				}
			}

			populateCards() {
				cards = game.shuffle(cards)
				for (var i = 0; i < cards.length; i++) {
					document.querySelector('.deck').innerHTML = ''
					;[].forEach.call(cards, function (item) {
						document.querySelector('.deck').appendChild(item)
					})
					cards[i].classList.remove('show', 'open', 'match', 'disabled')
				}
			}

			shuffle(array) {
				var currentIndex = array.length,
					temporaryValue,
					randomIndex

				while (currentIndex !== 0) {
					randomIndex = Math.floor(Math.random() * currentIndex)
					currentIndex -= 1
					temporaryValue = array[currentIndex]
					array[currentIndex] = array[randomIndex]
					array[randomIndex] = temporaryValue
				}

				return array
			}

			removeEstrela() {
				let stars = $('.fa-star')
				$(stars[stars.length - 1]).toggleClass('fa-star fa-star-o')
			}

			selecionarCard() {
				let card = $(this)
				// console.log(card)
				if (card.hasClass('open show') || card.hasClass('match')) {
					return
				}
				if (!iniciarJogo) {
					iniciarJogo = true
					cronometro = setTimeout(game.iniciarCronometro(), 500)
				}

				if (cardsVirados.length < 2) {
					// console.log('Menor q dois')
					// console.log(cardsVirados.length)
					console.log(cardsVirados + 'MENOR DOIS CARDS')

					$(this).toggleClass('open show')
					cardsVirados.push($(this))
				}

				if (cardsVirados.length === 2) {
					// console.log('IGUAL DOIS CARDS')
					console.log(cardsVirados + 'IGUAL DOIS CARDS')
					game.verificaCardsVirados(cardsVirados)
					cardsVirados = []
				}

				game.atualizarNumeroDeJogadas()
			}

			obterImagemDoCard(card) {
				console.log('zinin')
				console.log(card) /*xxx*/
				return card[0].firstChild.nextSibling.classList[1]
			}

			iniciarCronometro() {
				currentTimer = setInterval(() => {
					timer.textContent = `${seg}`
					seg++
				}, 1000)
			}

			reset() {
				window.location.reload(currentTimer)
			}

			finalizarJogo() {
				let stars = $('.fa-star')
				clearInterval(currentTimer)
				MySwal.fire({
					title: 'Parabéns',
					text: `Você terminou o jogo em  ${seg} segundos e com ${stars.length} de 3 estrelas.
            Deseja jogar novamente? `,
					type: 'success',
					showCancelButton: true,
					confirmButtonColor: '#2A4B66',
					cancelButtonColor: '#FF231C',
					confirmButtonText: 'Sim',
					cancelButtonText: 'Não',
				}).then((result) => {
					if (result.value) {
						setTimeout(game.reset, 500)
					}
				})
			}
		}

		$.fn.extend({
			animateCss: function (animationName, callback) {
				var animationEnd =
					'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
				this.addClass('animated ' + animationName).one(
					animationEnd,
					function () {
						$(this).removeClass('animated ' + animationName)
						if (callback) {
							callback()
						}
					}
				)
				return this
			},
		})

		let game = new Game()
		// console.log(card[0])
	})

	const sentences = ['Ensino Disruptivo de Vdd !']
	const [refState] = useState(
		sentences[Math.floor(Math.random() * sentences.length)]
	)

	// const handle = useFullScreenHandle()

	// const seo = {
	// 	frontmatter: {
	// 		slug: location.pathname.replace(/[^\w\d-]/g, ''),
	// 		...data.frontmatter,
	// 	},
	// }
	// console.log(data.nutkls);
	return (
		<Layout type="BODY" opt={{ titleSeo: refState }}>
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#ddd',
				}}
			>
				<Layout type="HEADER" /*logo={data.edu4Dev}*/ />
				<Layout type="MAIN" opt={'nothing here'} />
			</Layout>

			{/* <Layout type='FULLSCREEN'>
        <Layout type='VIDEOPLAYER' url={data.promoVideo.publicURL} />
      </Layout> */}

			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#47ff9d',
				}}
			>
				<Layout type="FOOTER" />
			</Layout>

			{/* <Layout
        type='ROW'
        opt={{
          // bgColor: '#d352cc',
          isBoxed: false,
          classes: "wrapper-overflow",
          alignTo: "center",
        }}
      >

		</Layout> */}
		</Layout>
	)
}

// export const queryBg = graphql`
//   query heroBg {
//     # heroImg: file(name: { eq: "hero-img" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     # }
//     # nutkls: file(name: { eq: "nutkls-img-hero" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     # }
//     # porto: file(name: { eq: "porto.jpg" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     # }
//     # edu4Dev: file(name: { eq: "edu4dev-logo" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     #   extension
//     #   publicURL
//     # }
//     # promoVideo: file(name: { eq: "promo-edu4dev" }) {
//     #   publicURL
//     # }
//     # logo4dev: file(relativePath: { eq: "edu4dev-logo-2-menor.png" }) {
//     #   childrenImageSharp {
//     #     gatsbyImageData(layout: FIXED, width: 200)
//     #   }
//     # }
//   }
// `;

export default IndexPage
