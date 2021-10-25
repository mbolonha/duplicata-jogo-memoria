import Home__Settings from './home-settings'

const config = (pageName, pageParams) => {
	switch (pageName) {
		case 'Home':
			return Home__Settings(pageParams)
		default:
			return Home__Settings(pageParams)
	}
}

export default config
