import React from "react"

export default function card({ project }) {
  return (
    <div className="card">
      <div className="card-inner">
        <h3>{project.title}</h3>
        <div className="iframe-container">
          <iframe
            className="responsive-iframe"
            src={project.videoUrl}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <p>{project.description}</p>
        {Object.keys(project.links).map((link) => {
          return (
            <>
              <a href={project.links[link]} target="_blank" rel="noopener">
                {link}
              </a>
              <br />
            </>
          )
        })}
      </div>
    </div>
  )
}
