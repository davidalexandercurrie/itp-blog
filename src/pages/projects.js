import React from "react"
import "../styles/style.scss"
import Card from "../components/card"
import projectData from "../utils/projectData.json"
import { Link } from "gatsby"
import { RiArrowLeftLine } from "react-icons/ri"

export default function projects() {
  return (
    <>
      <div className="projects">
        <div className="projects-title">
          <div className="back-arrow">
            <Link to="/">
              <RiArrowLeftLine />
            </Link>
          </div>
          <h1>Projects</h1>
        </div>
        <div className="project-sections">
          <div className="project-cards">
            {projectData.data.map((project) => {
              return <Card project={project} />
            })}
          </div>
        </div>
        <Link to="/liminal">
          <a>Check out other experiments</a>
        </Link>
        <br />
        <Link to="/">
          <a className="contact-home">home</a>
        </Link>
      </div>
    </>
  )
}
