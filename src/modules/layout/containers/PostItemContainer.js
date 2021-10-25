import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"

const PostItem = ({ slug, title, description, category, date }) => (
  <Link to={slug}>
    <h3>{title} • </h3>
    <h3>{date} • </h3>
    <h3>{category}</h3>

    <h3>{description}</h3>
  </Link>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default PostItem
