import React from 'react'
// import Img from "gatsby-image"

// import { ThemeToggler } from "gatsby-plugin-dark-mode"

const darkMode = (darkCandleImg) => {
	// console.log(darkCandleImg)
	return (
		<>dark</>
		// <ThemeToggler>
		//   {({ theme, toggleTheme }) => (
		//     <label>
		//       {/* <Img
		//         fixed={darkCandleImg.childImageSharp.fixed}
		//         width={darkCandleImg.childImageSharp.fixed.width}
		//         height={darkCandleImg.childImageSharp.fixed.height}
		//         alt="Develop with Gatsby"
		//         title="Gatsby"
		//       /> */}
		//       <input
		//         type="checkbox"
		//         onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
		//         checked={theme === "dark"}
		//       />{" "}
		//       Dark mode
		//     </label>
		//   )}
		// </ThemeToggler>
	)
}
export default darkMode
