// import fetch from 'node-fetch'
require('node-fetch')

async function SgmModule(params) {
	return (
		// console.log(`...${params} VAAAIIIII ... SendGrid Masterfullish`),
		fetch(`/.netlify/functions/sgm?action=${params}`)
			.then((res) => res.text())
			.then((text) => console.log(text))
	)
}

module.exports = { SgmModule }
