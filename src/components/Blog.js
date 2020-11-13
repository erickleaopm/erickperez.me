import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({
  id,
  title,
  slug,
  excerpt,
  date,
  categories,
  featured_image: image,
}) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{excerpt}</p>
          <div className="blog-footer">
            <ul>
              {categories.map(category => {
                return (
                  <li key={category.id}>
                    <p>{category.name}</p>
                  </li>
                )
              })}
            </ul>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
