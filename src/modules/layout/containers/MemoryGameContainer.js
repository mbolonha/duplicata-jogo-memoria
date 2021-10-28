import React, { useEffect, useState, useRef } from 'react'
import { Dialog } from '@material-ui/core'

import MemoryGame from '../components/MemoryGame'
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

const MemoryGameContainer = ({ opt }) => {
	const [open, setOpen] = useState(true)

	const [cards, setCards] = useState(
		shuffleCards.bind(
			null,
			opt.firstElementsArray.concat(opt.secondElementsArray)
		)
	)
	const [openCards, setOpenCards] = useState([])
	const [clearedCards, setClearedCards] = useState({})
	const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false)
	const [moves, setMoves] = useState(0)
	const [showModal, setShowModal] = useState(false)
	const [bestScore, setBestScore] = useState(
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('bestScore'))
			: Number.POSITIVE_INFINITY
	)
	const timeout = useRef(null)
	const disable = () => {
		setShouldDisableAllCards(true)
	}
	const enable = () => {
		setShouldDisableAllCards(false)
	}
	const checkCompletion = () => {
		if (Object.keys(clearedCards).length === opt.firstElementsArray.length) {
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
		setCards(
			shuffleCards(opt.firstElementsArray.concat(opt.secondElementsArray))
		)
	}
	return (
		<>
			<MemoryGame
				DialogMigrate={DialogMigrate}
				shouldDisableAllCards={shouldDisableAllCards}
				showModal={showModal}
				handleCardClick={handleCardClick}
				checkIsFlipped={checkIsFlipped}
				checkIsInactive={checkIsInactive}
				handleRestart={handleRestart}
				open={open}
				setOpen={setOpen}
				cards={cards}
				setCards={setCards}
				moves={moves}
				setShowModal={setShowModal}
			/>
		</>
	)
}

export default MemoryGameContainer
