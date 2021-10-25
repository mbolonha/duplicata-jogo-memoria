import LayoutLocation from '../query-layout'
// import NewPopup from "../query-popup"

const home = (querySelector, setLocation) => {
	let query = null

	switch (querySelector) {
		case 'Layout Location':
			query = LayoutLocation(setLocation)
			break
		case 'New Popup':
			// query = NewPopup()
			break
		default:
			break
	}
	return {
		query,
	}
}

export default home
