import React from "react"
import image from "../../content/assets/haunt-that-house/haunt-that-house3.png"

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
