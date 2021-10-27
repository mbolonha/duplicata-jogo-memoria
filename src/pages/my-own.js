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
import Card01a from '../../static/assets/images/glicemia-card-01-a.svg'
import Card01b from '../../static/assets/images/glicemia-card-01-b.svg'
import Card02a from '../../static/assets/images/glicemia-card-02-a.svg'
import Card02b from '../../static/assets/images/glicemia-card-02-b.svg'
import Card03a from '../../static/assets/images/glicemia-card-03-a.svg'
import Card03b from '../../static/assets/images/glicemia-card-03-b.svg'
import Card04a from '../../static/assets/images/glicemia-card-04-a.svg'
import Card04b from '../../static/assets/images/glicemia-card-04-b.svg'
import Card05a from '../../static/assets/images/glicemia-card-05-a.svg'
import Card05b from '../../static/assets/images/glicemia-card-05-b.svg'
import Card06a from '../../static/assets/images/glicemia-card-06-a.svg'
import Card06b from '../../static/assets/images/glicemia-card-06-b.svg'
import Card07a from '../../static/assets/images/glicemia-card-07-a.svg'
import Card07b from '../../static/assets/images/glicemia-card-07-b.svg'
import Card08a from '../../static/assets/images/glicemia-card-08-a.svg'
import Card08b from '../../static/assets/images/glicemia-card-08-b.svg'

const uniqueElementsArray = [
	{
		type: 'Pikachu',
		image: <Card01a />,
	},
	{
		type: 'ButterFree',
		image: <Card02a />,
	},
	{
		type: 'Charmander',
		image: <Card03a />,
	},
	{
		type: 'Squirtle',
		image: <Card04a />,
	},
	{
		type: 'Pidgetto',
		image: <Card05a />,
	},
	{
		type: 'Bulbasaur',
		image: <Card06a />,
	},
]

const secondElementsArray = [
	{
		type: 'Pikachu',
		image: <Card01b />,
	},
	{
		type: 'ButterFree',
		image: <Card02b />,
	},
	{
		type: 'Charmander',
		image: <Card03b />,
	},
	{
		type: 'Squirtle',
		image: <Card04b />,
	},
	{
		type: 'Pidgetto',
		image: <Card05b />,
	},
	{
		type: 'Bulbasaur',
		image: <Card06b />,
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
		shuffleCards.bind(null, uniqueElementsArray.concat(secondElementsArray))
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
