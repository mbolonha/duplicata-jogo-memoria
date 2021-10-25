import React from 'react'
import { graphql } from 'gatsby'

// import Layout from "../components/Layout"
// import Seo from '@Layout/components/seo'

// import * as S from "../styles/components/singlepost"
import Layout from '@Layout'

const SinglePost = ({ data }) => {
	const post = data.markdownRemark

	return (
		<>
			{/* <Layout crumbLabel={post.fields.slug.slice(1, -1)}> */}
			{/* <Seo
				title={post.frontmatter.title}
				description={post.frontmatter.description}
				image={post.frontmatter.image}
			/> */}
			<Layout type="BODY" opt={{ titleSeo: post.frontmatter.title }}>
				<Layout type="HEADER" />

				<Layout
					type="ROW"
					querySelector="Layout Location"
					setLocation="Home logos"
					sectionTitle="Zumiras"
					opt={{
						bgColor: '#000000',
						isBoxed: true,
						classes: 'light-content',
						alignTo: 'center',
					}}
				>
					{/* <AtomicBlock type="POPUP" querySelector="New Popup" /> */}

					<div className="index-main-container">
						{/* <div>{post.frontmatter.title}</div> */}
						{/* <div>{post.frontmatter.date}</div> */}

						<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
					</div>
				</Layout>
				<Layout type="FOOTER" />
			</Layout>
		</>
	)
}

export const query = graphql`
	query SinglePost($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				description
				date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
			}
			html
			fields {
				slug
			}
		}
	}
`

export default SinglePost
