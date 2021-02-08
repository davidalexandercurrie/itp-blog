import React, { useRef, useEffect } from "react"
import image from "../../content/assets/home/dave-web-home.png"

export default function TV() {
  return (
    <>
      <div className="tv">
        <img
          style={{ filter: `${"hue-rotate(" + Math.random() * 360}deg)` }}
          alt=""
          id="image-in-tv"
          src={image}
        />
      </div>
      <div className="controls"></div>
    </>
  )
}
