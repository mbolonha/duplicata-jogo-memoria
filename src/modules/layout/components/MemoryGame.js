import React from 'react'
import { Link } from 'gatsby'
import Container from '@material-ui/core/Container'
import { navigate } from 'gatsby'
import Layout from '../../layout'
import ArrowRightIcon from '../../../../static/images/icon-arrow-right.svg'
import CloseButton from '../../../../static/images/close-button.svg'
import { DialogContent, DialogTitle } from '@material-ui/core'

import CardContainer from '../containers/CardContainer'

const MemoryGame = ({
	cards,
	DialogMigrate,
	shouldDisableAllCards,
	showModal,
	handleCardClick,
	checkIsFlipped,
	checkIsInactive,
	handleRestart,
	setOpen,
	moves,
	setShowModal,
	finalCounter,
	title,
	cardVerse,
}) => (
	<>
		{/* Botão para abrir o modal */}
		{/* <button onClick={() => playTimer()}>Play Aqui</button>
		<button onClick={() => stopTimer()}>Stop Aqui</button>
*/}
		{/* <button onClick={() => setShowModal(true)}>Fechar Aqui</button> */}
		<div className="second-row-for-now">
			<button className="circle-shadow" onClick={() => navigate(-1)}>
				<ArrowRightIcon />
			</button>
			<h1 className="main-h1">{title}</h1>
		</div>

		<div className="App">
			<div className="container">
				{cards.map((card, index) => {
					return (
						<CardContainer
							key={index}
							card={card}
							cardVerse={cardVerse}
							index={index}
							isDisabled={shouldDisableAllCards}
							isInactive={checkIsInactive(card)}
							isFlipped={checkIsFlipped(index)}
							onClick={handleCardClick}
						/>
					)
				})}
			</div>
			<div>
				<div className="score"></div>
				<div className="restart wrapper-button">
					<button onClick={handleRestart} className="button-restart outside">
						Jogar novamente
					</button>
				</div>
			</div>
			<Container>
				<DialogMigrate
					open={showModal}
					// disableEscapeKeyDown
					onClose={() => {
						// Whatever you want to run here on close.
						setOpen(false)
					}}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					className="mymodalhere"
				>
					<button onClick={() => setShowModal(!true)} className="close-button">
						<CloseButton />
					</button>
					<div className="wrapper-modal">
						<DialogTitle className="modal-heading">
							<span>Parabéns,</span> <br />
							você completou <br /> o jogo da memória!
						</DialogTitle>
						<DialogContent>
							<p className="modal-paragraph">
								Você terminou o jogo em{` `}
								<span className="bolder">
									{finalCounter}
									{` `}
									segundos
								</span>
								.
							</p>
							<p className="modal-paragraph bolder">
								Se você gostou do jogo,
								<br />
								compartilhe com seus amigos.
								<div className="index-share-btn modal-share">
									<Layout
										type="BLOCK_SHARE"
										opt={{
											title: 'data.site.siteMetadata.title',
											url: 'data.site.siteMetadata.siteUrl',
										}}
									/>
								</div>
							</p>
						</DialogContent>

						<div className="modal-group-buttons">
							<button onClick={handleRestart} className="button-restart">
								Jogar novamente
							</button>
							<button
								onClick={handleRestart}
								className="button-restart black-button"
							>
								Jogar próximo tema
							</button>
							<Link
								onClick={handleRestart}
								className="button-restart pink-button modal-pink-index"
								to="/"
							>
								Visualizar todos os temas
							</Link>
						</div>
					</div>
				</DialogMigrate>
			</Container>
		</div>
	</>
)
export default MemoryGame
