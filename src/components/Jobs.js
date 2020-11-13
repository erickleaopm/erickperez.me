import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaShareSquare } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { splitPascalCase } from "../libraries"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        type_of_job
        url
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setvalue] = React.useState(0)
  const { company, position, date, description, type_of_job, url } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Job Experience" />
      <div className="jobs-center">
        {/* Buttons container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.strapiId}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setvalue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/* Job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>
            <a href={url} target="_blank" rel="noreferrer">
              {company}
            </a>
          </h4>
          <p className="job-date">
            {date} <span>({splitPascalCase(type_of_job)})</span>
          </p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
