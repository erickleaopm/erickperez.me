import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { title, content } = data.blog

  return (
    <Layout>
      <section className="blog-template">
        <Title title={title} />
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            Back to Blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      content
    }
  }
`

export default ComponentName
