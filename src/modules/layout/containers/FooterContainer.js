import { React, useState } from '../dependencies'
// import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'

const FooterContainer = () => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	// const socialIconsQuery = useStaticQuery(graphql`
	// 	fragment socialImgs on File {
	// 		childImageSharp {
	// 			fixed(width: 32) {
	// 				base64
	// 				width
	// 				height
	// 				src
	// 				srcSet
	// 			}
	// 		}
	// 	}
	// 	query {
	// 		instagram: file(relativePath: { eq: "images/instagram.png" }) {
	// 			...socialImgs
	// 		}
	// 		facebook: file(relativePath: { eq: "images/facebook.png" }) {
	// 			...socialImgs
	// 		}
	// 		linkedin: file(relativePath: { eq: "images/linkedin.png" }) {
	// 			...socialImgs
	// 		}
	// 		pinterest: file(relativePath: { eq: "images/pinterest.png" }) {
	// 			...socialImgs
	// 		}
	// 		footerMenuzim: file(relativePath: { eq: "theme/icons/candle.png" }) {
	// 			...socialImgs
	// 		}
	// 	}
	// `)

	// const socialIcons = {
	// 	instagram: socialIconsQuery.instagram,
	// 	facebook: socialIconsQuery.facebook,
	// 	linkedin: socialIconsQuery.linkedin,
	// 	pinterest: socialIconsQuery.pinterest,
	// 	footerMenuzim: socialIconsQuery.footerMenuzim,
	// }
	// console.log(socialIcons)
	return (
		<Footer
			// socialIcons={socialIcons}
			refState={refState}
			handleRefState={handleRefState}
		/>
	)
}

export default FooterContainer
