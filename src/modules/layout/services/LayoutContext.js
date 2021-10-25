import { React, useState } from '../dependencies'

const defaultState = {
	themeLocation: 'zumba',
	bgColor: '#fff',
	handleLocation: null,
}

const LayoutContext = React.createContext(defaultState)

const LayoutProvider = ({ children }) => {
	const [themeLocation, toggleLocation] = useState(null)
	const [bgColor, toggleBgColor] = useState(null)

	function handleLocation(newLocation) {
		toggleLocation(newLocation)
		// console.log("ahouuuuuaaa")
		// console.log(themeLocation)
	}

	const handleBgColor = (newColor) => {
		toggleBgColor(newColor)
	}

	return (
		<LayoutContext.Provider
			value={{
				themeLocation,
				handleLocation: handleLocation,
				bgColor: bgColor,
				handleBgColor: handleBgColor,
			}}
		>
			{children}
		</LayoutContext.Provider>
	)
}

export default LayoutContext
export { LayoutProvider }
