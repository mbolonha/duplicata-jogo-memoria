import React from 'react'
import Container from '@material-ui/core/Container'
import ArrowRightIcon from '../../../../static/assets/images/icon-arrow-right.svg'
import {
	DialogActions,
	DialogContent,
	DialogContentText,
	Button,
	DialogTitle,
} from '@material-ui/core'
import CardContainer from '../containers/CardContainer'
import CloseButton from '../../../../static/assets/images/close-button.svg'
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
}) => (
	<>
		{/* Botão para abrir o modal */}
		<button onClick={() => setShowModal(true)}>Abrir Aqui</button>
		<div className="second-row-for-now">
			<div className="circle-shadow">
				<ArrowRightIcon />
			</div>
			<h1 className="main-h1">Tratamento</h1>
		</div>
		<div className="App">
			<div className="container">
				{cards.map((card, index) => {
					return (
						<CardContainer
							key={index}
							card={card}
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
				<div className="score">
					{/* <div className="moves">
						<span className="bold">Moves:</span> {moves}
					</div> */}
					{/* {localStorage.getItem('bestScore') && (
							<div className="high-score">
								<span className="bold">Best Score:</span> {bestScore}
							</div>
						)} */}
				</div>
				<div className="restart">
					<Button
						onClick={handleRestart}
						className="button-restart"
						// variant="contained"
					>
						Jogar novamente
					</Button>
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
							<DialogContentText className="modal-paragraph">
								Você terminou o jogo em {moves} fake/moves/segundos.
							</DialogContentText>
							<DialogContentText className="modal-paragraph bolder">
								Se você gostou do jogo, compartilhe com seus amigos.
							</DialogContentText>

							<DialogContentText className="modal-paragraph">
								Compartilhe
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleRestart} className="button-restart">
								Jogar novamente
							</Button>
							<Button onClick={handleRestart} className="button-restart">
								Jogar novamente
							</Button>
							<Button onClick={handleRestart} className="button-restart">
								Jogar novamente
							</Button>
						</DialogActions>
					</div>
				</DialogMigrate>
			</Container>
		</div>
	</>
)
export default MemoryGame
