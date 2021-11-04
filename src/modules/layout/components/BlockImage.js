import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlockImage = ({ opt }) => {
	const image = getImage(opt.queryCard.childrenImageSharp[0])
	return (
		<>
			<GatsbyImage image={image} alt="Card" placeholder="blurred" />
		</>
	)
}

export default BlockImage
