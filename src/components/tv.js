import React from "react"
import image from "../../content/assets/home/dave-live-code.jpeg"

export default function tv() {
  return (
    <>
      <div className="tv">
        <img alt="" className="image-in-tv" src={image} />
      </div>
      <div className="controls"></div>
    </>
  )
}
