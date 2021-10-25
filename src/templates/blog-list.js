import React from 'react'
import { graphql } from 'gatsby'

// import Layout from "../components/Layout"
// import SEO from "../components/seo"
// import PostItem from "../components/PostItem"
import Layout from '@Layout'
// import Pagination from "../components/Pagination"
import PostItem from '@Layout/containers/PostItemContainer.js'
import Pagination from '@Layout/containers/PaginationContainer.js'

const BlogList = (props) => {
	const postList = props.data.allMarkdownRemark.edges

	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/blog' : `/page/${currentPage - 1}`
	const nextPage = `/page/${currentPage + 1}`

	return (
		<>
			<Layout type="BODY" opt={{ titleSeo: 'bloList' }}>
				<Layout type="HEADER" />
				<Layout
					type="ROW"
					opt={{
						bgColor: '#d352cc',
						isBoxed: true,
						classes: 'light-content wrapper-overflow',
						alignTo: 'center',
					}}
				>
					{postList.map(
						({
							node: {
								frontmatter: { category, date, description, title },
								fields: { slug },
							},
						}) => (
							<PostItem
								slug={slug}
								title={title}
								// description={description}
								// category={category}
								// date={date}
							/>
						)
					)}
					<Pagination
						isFirst={isFirst}
						isLast={isLast}
						currentPage={currentPage}
						numPages={numPages}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
				</Layout>
				<Layout type="FOOTER" />
			</Layout>
		</>
	)
}

export const query = graphql`
	query BlogList($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						category
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
						description
						title
					}
				}
			}
		}
	}
`

export default BlogList
