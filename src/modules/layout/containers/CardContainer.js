import React from 'react'
// import Card from '../components/Card'
import classnames from 'classnames'
// import pokeball from '../../../../static/assets/images/pokeball.png'
import Pokeball from '../../../../static/assets/images/teste-glicemia.svg'

const CardContainer = ({
	onClick,
	card,
	index,
	isInactive,
	isFlipped,
	isDisabled,
}) => {
	const handleClick = () => {
		!isFlipped && !isDisabled && onClick(index)
	}
	// console.log(card.type)
	let x = card.type
	return (
		<>
			{/* <h6>{card.type}</h6>
			<br /> */}
			<div
				className={classnames('card', {
					'is-flipped': isInactive ? true : isFlipped,
					'is-inactive': isInactive,
					[`${x}`]: true,
				})}
				onClick={isInactive ? null : handleClick}
			>
				<div className="card-face card-font-face">
					<Pokeball />
				</div>
				<div className="card-face card-back-face">{card.image}</div>
			</div>
		</>
	)
}

export default CardContainer
