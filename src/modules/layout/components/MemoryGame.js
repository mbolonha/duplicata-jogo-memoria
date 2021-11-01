import React from 'react'
import Container from '@material-ui/core/Container'
import { navigate } from 'gatsby'

import ArrowRightIcon from '../../../../static/assets/images/icon-arrow-right.svg'
import CloseButton from '../../../../static/assets/images/close-button.svg'
import FacebookIcon from '../../../../static/assets/images/face-icon.svg'
import TwitterIcon from '../../../../static/assets/images/twitter-icon.svg'
import WhatsIcon from '../../../../static/assets/images/whats-icon.svg'
import InstagramIcon from '../../../../static/assets/images/instagram-icon.svg'
import ShareIcon from '../../../../static/assets/images/share-icon.svg'
import {
	// DialogActions,
	DialogContent,
	// p,
	// Button,
	DialogTitle,
} from '@material-ui/core'
// import {
// 	DialogActions,
// 	DialogContent,
// 	p,
// 	Button,
// 	DialogTitle,
// } from '@material-ui/core'
import CardContainer from '../containers/CardContainer'

const MemoryGame = ({
	cards,
	counter,
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
	stopTimer,
	playTimer,
	finalCounter,
	title,
	cardVerse,
}) => (
	<>
		{/* Botão para abrir o modal */}
		{/* <button onClick={() => playTimer()}>Play Aqui</button>
		<button onClick={() => stopTimer()}>Stop Aqui</button>
*/}
		{/* <button onClick={() => setShowModal(true)}>Abrir Aqui</button> */}
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
								<div className="wrapper-buttons">
									<span>Compartilhe</span>
									<div className="modal-share-button">
										<FacebookIcon />
										<TwitterIcon />
										<WhatsIcon />
										<InstagramIcon />
										<ShareIcon />
									</div>
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
							<button
								onClick={handleRestart}
								className="button-restart pink-button"
							>
								Visualizar todos os temas
							</button>
						</div>
					</div>
				</DialogMigrate>
			</Container>
		</div>
	</>
)
export default MemoryGame
