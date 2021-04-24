import React from "react"

export default function card({ project }) {
  return (
    <div className="card">
      <div className="card-inner">
        <h3>{project.title}</h3>
        <iframe
          width="560"
          height="315"
          src={project.videoUrl}
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
