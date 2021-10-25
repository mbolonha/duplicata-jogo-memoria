// import { graphql, useStaticQuery } from "gatsby"

// import { useContext } from "react"
// import LayoutContext from "@Layout/services/LayoutContext"

const setHardLocation = () => {
	const data = {
		location: 'Layout Location',
		rowHeading: null,
		headingOn: null,
		backgroundColor: '#000',
		color: null,
		layoutType: null,
		alignContent: null,
		specialDisplay: null, // tirar isso e colocar no bloco ( carousel or column )
		numberOfColumns: null,
	}

	return data
}
export default setHardLocation
