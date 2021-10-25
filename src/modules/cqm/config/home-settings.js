import Home__Queries from '../queries/home/'

const homeSettings = ({
	querySelector,
	setLocation,
	wrapperRef,
	handleRefState,
	refState,
}) => {
	let configs = {
		// implementation configs
		wrapperRef: null,
		handleRefState: null,
		refState: null,
		isCarousel: false,
		isPopup: false,
		// application configs
		scroll: false,
		resize: false,
		outsideClick: false,
		hasOverlay: false,
		mouseDown: {
			on: false,
			clickElement: '.close-button',
		},
	}

	// const ValueProps__Settings = () => {
	//   configs = {
	//     sliderClass: "value-props",
	//     isCarousel: false,
	//     bgColor: "#000000",
	//     columnWidth: "full-width-row",
	//   }
	//   return configs
	// }

	// const Artist__Settings = () => {
	//   configs = {
	//     sliderClass: "artist-profiles",
	//     isCarousel: true,
	//     bgColor: "#ffffff",
	//     columnWidth: "boxed-column",
	//   }
	//   return configs
	// }

	// const Collector__Settings = () => {
	//   configs = {
	//     sliderClass: "collector-profiles",
	//     isCarousel: true,
	//     bgColor: "#ffffff",
	//     columnWidth: "boxed-column",
	//   }
	//   return configs
	// }

	// const Popup__Settings = (wrapperRef, handleRefState, refState) => {
	//   configs = {
	//     isCarousel: false,
	//     isPopup: true,
	//     // implementation configs
	//     wrapperRef: wrapperRef,
	//     handleRefState: handleRefState,
	//     refState: refState,
	//     // application configs
	//     scroll: false,
	//     resize: false,
	//     outsideClick: true,
	//     hasOverlay: true,
	//     mouseDown: {
	//       on: false,
	//       clickElement: ".close-button",
	//     },
	//   }
	//   return configs
	// }

	const NewPopup__Settings = (wrapperRef, handleRefState, refState) => {
		configs = {
			isCarousel: false,
			isPopup: true,
			// implementation configs
			wrapperRef: wrapperRef,
			handleRefState: handleRefState,
			refState: refState,
			// application configs
			scroll: false,
			resize: false,
			outsideClick: true,
			hasOverlay: true,
			mouseDown: {
				on: false,
				clickElement: '.close-button',
			},
			order: {
				heading: 2,
				paragraph: 1,
				form: 3,
			},
		}
		return configs
	}

	// const Logos__Settings = () => {
	//   configs = {
	//     sliderClass: "logos-box",
	//     bgColor: "#000000",
	//     isCarousel: false,
	//     columnWidth: "full-width-row",
	//   }
	//   return configs
	// }

	// const Quote__Settings = () => {
	//   configs = {
	//     sliderClass: "quote",
	//     bgColor: "#ffffff",
	//     isCarousel: false,
	//     columnWidth: "full-width-row",
	//   }
	//   return configs
	// }

	// const Subscription__Settings = () => {
	//   configs = {
	//     sliderClass: "subcription",
	//     bgColor: "#ffffff",
	//     isCarousel: false,
	//     columnWidth: "full-width-row",
	//   }
	//   return configs
	// }

	// const NewQuote__Settings = () => {
	//   configs = {
	//     sliderClass: "quote",
	//     bgColor: "#ffffff",
	//     isCarousel: false,
	//     columnWidth: "full-width-row",
	//     order: {
	//       heading: 2,
	//       paragraph: 1,
	//       form: 3,
	//     },
	//   }
	//   return configs
	// }

	const LayoutLocation__Settings = () => {
		configs = {
			sliderClass: 'class',
			bgColor: '#ffffff',
			isCarousel: false,
			columnWidth: 'full-width-row',
			order: {
				heading: 2,
				paragraph: 1,
				form: 3,
			},
		}
		return configs
	}

	let data = null
	if (querySelector === 'Layout Location') {
		data = Home__Queries(querySelector, setLocation)
		// console.log("222222222222")
		// console.log(querySelector)
	} else if (querySelector !== 'New Popup' && querySelector !== 'New Quote') {
		data = Home__Queries(querySelector)
	} else {
		data = Home__Queries(querySelector).query
	}

	let settings = null

	switch (querySelector) {
		// case "Artist":
		//   settings = Artist__Settings()
		//   break
		// case "Collector Profile":
		//   settings = Collector__Settings()
		//   break
		// case "Value Props":
		//   settings = ValueProps__Settings()
		//   break
		// case "Home Popup":
		//   settings = Popup__Settings(wrapperRef, handleRefState, refState)
		//   break
		// case "Home Logos":
		//   settings = Logos__Settings()
		//   break
		// case "Home Quote":
		//   settings = Quote__Settings()
		//   break
		// case "Home Subscription":
		//   settings = Subscription__Settings()
		//   break
		case 'New Popup':
			settings = NewPopup__Settings(wrapperRef, handleRefState, refState)
			break
		// case "New Quote":
		//   settings = NewQuote__Settings()
		//   break
		case 'Layout Location':
			// console.log("Home__Queries(querySelector).query")
			// console.log(Home__Queries(querySelector))
			settings = LayoutLocation__Settings()
			break
		default:
			break
	}
	// console.log("55555555555555555555555")
	// console.log(settings)
	// console.log(data)
	return {
		settings,
		data,
	}
}

export default homeSettings
