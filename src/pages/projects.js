import React from "react"
import "../styles/style.scss"
import Card from "../components/card"
import projectData from "../utils/projectData.json"
import Button from "../components/button"
import { Link } from "gatsby"

export default function projects() {
  return (
    <>
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-cards">
          {projectData.data.map((project) => {
            return <Card project={project} />
          })}
        </div>
        <Link to="/">
          <Button color="#2fffff" fontSize="1.5em" marginTop="85px">
            Go Home
          </Button>
        </Link>
      </div>
    </>
  )
}
