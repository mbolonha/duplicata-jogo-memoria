import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlockImage = ({ opt }) => {
	console.log(opt.queryCard)
	const image = getImage(opt.queryCard.childrenImageSharp[0])
	return (
		<>
			{/* <h1>Image Here</h1> */}
			<GatsbyImage image={image} alt="Card" placeholder="blurred" />
		</>
	)
}

export default BlockImage
