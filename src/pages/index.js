import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import 'animate.css'
// import $ from 'jquery'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '@Layout'

const MySwal = withReactContent(Swal)

const IndexPage = ({ data, location }) => {
	const sentences = ['Ensino Disruptivo de Vdd !']
	const [refState] = useState(
		sentences[Math.floor(Math.random() * sentences.length)]
	)

	// const handle = useFullScreenHandle()

	// const seo = {
	// 	frontmatter: {
	// 		slug: location.pathname.replace(/[^\w\d-]/g, ''),
	// 		...data.frontmatter,
	// 	},
	// }
	// console.log(data.nutkls);
	return (
		<Layout type="BODY" opt={{ titleSeo: refState }}>
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#fff',
				}}
			>
				<Layout type="HEADER" /*logo={data.edu4Dev}*/ />
				<Layout type="MAIN" opt={'nothing here'} />
			</Layout>

			{/* <Layout type='FULLSCREEN'>
        <Layout type='VIDEOPLAYER' url={data.promoVideo.publicURL} />
      </Layout> */}

			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: '',
					alignTo: 'left',
					bgColor: '#47ff9d',
				}}
			>
				<Layout type="FOOTER" />
			</Layout>

			{/* <Layout
        type='ROW'
        opt={{
          // bgColor: '#d352cc',
          isBoxed: false,
          classes: "wrapper-overflow",
          alignTo: "center",
        }}
      >

		</Layout> */}
		</Layout>
	)
}

// export const queryBg = graphql`
//   query heroBg {
//     # heroImg: file(name: { eq: "hero-img" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     # }
//     # nutkls: file(name: { eq: "nutkls-img-hero" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     # }
//     # porto: file(name: { eq: "porto.jpg" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     # }
//     # edu4Dev: file(name: { eq: "edu4dev-logo" }) {
//     #   childImageSharp {
//     #     gatsbyImageData
//     #   }
//     #   extension
//     #   publicURL
//     # }
//     # promoVideo: file(name: { eq: "promo-edu4dev" }) {
//     #   publicURL
//     # }
//     # logo4dev: file(relativePath: { eq: "edu4dev-logo-2-menor.png" }) {
//     #   childrenImageSharp {
//     #     gatsbyImageData(layout: FIXED, width: 200)
//     #   }
//     # }
//   }
// `;

export default IndexPage
