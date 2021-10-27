import React, { useEffect, useState, useRef } from 'react'
import Layout from '@Layout'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Container from '@material-ui/core/Container'

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Button,
	DialogTitle,
} from '@material-ui/core'
import CardContainer from '../modules/layout/containers/CardContainer'
import Diab from '../../static/assets/images/diabetes-brasil-logo.svg'
const uniqueElementsArray = [
	{
		type: 'Pikachu',
		image: <Diab />,
	},
	{
		type: 'ButterFree',
		image: <Diab />,
	},
	{
		type: 'Charmander',
		image: <Diab />,
	},
	{
		type: 'Squirtle',
		image: <Diab />,
	},
	{
		type: 'Pidgetto',
		image: <Diab />,
	},
	{
		type: 'Bulbasaur',
		image: <Diab />,
	},
]

function shuffleCards(array) {
	const length = array.length
	for (let i = length; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * i)
		const currentIndex = i - 1
		const temp = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temp
	}
	return array
}

function DialogMigrate({
	children,
	disableBackdropClick,
	disableEscapeKeyDown,
	onClose,
	...rest
}) {
	const handleClose = (event, reason) => {
		if (disableBackdropClick && reason === 'backdropClick') {
			return false
		}

		if (disableEscapeKeyDown && reason === 'escapeKeyDown') {
			return false
		}

		if (typeof onClose === 'function') {
			onClose()
		}
	}

	return (
		<Dialog onClose={handleClose} {...rest}>
			{children}
		</Dialog>
	)
}

const IndexPage = ({ data, location }) => {
	const [open, setOpen] = useState(true)

	const [cards, setCards] = useState(
		shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
	)
	const [openCards, setOpenCards] = useState([])
	const [clearedCards, setClearedCards] = useState({})
	const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false)
	const [moves, setMoves] = useState(0)
	const [showModal, setShowModal] = useState(false)
	const [bestScore, setBestScore] = useState(
		JSON.parse(localStorage.getItem('bestScore')) || Number.POSITIVE_INFINITY
	)
	const timeout = useRef(null)

	const disable = () => {
		setShouldDisableAllCards(true)
	}
	const enable = () => {
		setShouldDisableAllCards(false)
	}

	const checkCompletion = () => {
		if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
			setShowModal(true)
			const highScore = Math.min(moves, bestScore)
			setBestScore(highScore)
			localStorage.setItem('bestScore', highScore)
		}
	}
	const evaluate = () => {
		const [first, second] = openCards
		enable()
		if (cards[first].type === cards[second].type) {
			setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }))
			setOpenCards([])
			return
		}
		// This is to flip the cards back after 500ms duration
		timeout.current = setTimeout(() => {
			setOpenCards([])
		}, 500)
	}
	const handleCardClick = (index) => {
		if (openCards.length === 1) {
			setOpenCards((prev) => [...prev, index])
			setMoves((moves) => moves + 1)
			disable()
		} else {
			clearTimeout(timeout.current)
			setOpenCards([index])
		}
	}

	useEffect(() => {
		let timeout = null
		if (openCards.length === 2) {
			timeout = setTimeout(evaluate, 300)
		}
		return () => {
			clearTimeout(timeout)
		}
	}, [openCards])

	useEffect(() => {
		checkCompletion()
	}, [clearedCards])
	const checkIsFlipped = (index) => {
		return openCards.includes(index)
	}

	const checkIsInactive = (card) => {
		return Boolean(clearedCards[card.type])
	}

	const handleRestart = () => {
		setClearedCards({})
		setOpenCards([])
		setShowModal(false)
		setMoves(0)
		setShouldDisableAllCards(false)
		// set a shuffled deck of cards
		setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)))
	}

	return (
		<Layout type="BODY" opt={{ titleSeo: `DMDD` }}>
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<Layout type="HEADER" /*logo={data.edu4Dev}*/ />
				{/* <h1>{cardState}</h1> */}
				{/* <h1>{counter}</h1> */}
				<div className="App">
					<header>
						<h3>Play the Flip card game</h3>
						<div>
							Select two cards with same content consequtively to make them
							vanish
						</div>
					</header>
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
					<footer>
						<div className="score">
							<div className="moves">
								<span className="bold">Moves:</span> {moves}
							</div>
							{localStorage.getItem('bestScore') && (
								<div className="high-score">
									<span className="bold">Best Score:</span> {bestScore}
								</div>
							)}
						</div>
						<div className="restart">
							<Button
								onClick={handleRestart}
								color="primary"
								variant="contained"
							>
								Restart
							</Button>
						</div>
					</footer>
					<Container>
						<DialogMigrate
							open={showModal}
							disableEscapeKeyDown
							onClose={() => {
								// Whatever you want to run here on close.
								setOpen(false)
							}}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
								Hurray!!! You completed the challenge
							</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									You completed the game in {moves} moves. Your best score is{' '}
									{bestScore} moves.
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleRestart} color="primary">
									Restart
								</Button>
							</DialogActions>
						</DialogMigrate>
					</Container>

					{/* <Dialog
						open={showModal}
						disableEscapeKeyDown
						onClose={() => {
							// Whatever you want to run here on close.
							setOpen(false)
						}}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>

					</Dialog> */}
				</div>
				{/* <Layout type="MAIN" opt={'nothing here'} /> */}
			</Layout>
		</Layout>
	)
}
export default IndexPage
