import React, { useEffect, useState, useRef } from 'react'

import Container from '@material-ui/core/Container'
import ArrowRightIcon from '../../../../static/assets/images/icon-arrow-right.svg'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Button,
	DialogTitle,
	open,
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
		<button onClick={() => setShowModal(true)}>Fechar Aqui</button>
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
					<div className="moves">
						<span className="bold">Moves:</span> {moves}
					</div>
					{/* {localStorage.getItem('bestScore') && (
							<div className="high-score">
								<span className="bold">Best Score:</span> {bestScore}
							</div>
						)} */}
				</div>
				<div className="restart">
					<Button onClick={handleRestart} color="primary" variant="contained">
						Restart
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
				>
					<button onClick={() => setShowModal(!true)} className="close-button">
						<CloseButton />
					</button>

					<DialogTitle id="alert-dialog-title">
						Hurray!!! You completed the challenge
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							You completed the game in {moves} moves.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleRestart} color="primary">
							Restart
						</Button>
					</DialogActions>
				</DialogMigrate>
			</Container>
		</div>
	</>
)
export default MemoryGame
