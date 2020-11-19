import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink />
      <Blogs blogs={blogs} title="Latest Articles" showLink />
    </Layout>
  )
}

// Add github to the query
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        url
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        excerpt
        date(formatString: "MMMM Do, YYYY")
        categories {
          id
          name
        }
        featured_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
