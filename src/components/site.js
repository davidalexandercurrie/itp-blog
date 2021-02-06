import React from "react"
import { Link } from "gatsby"
import Button from "../components/button"
import TV from "../components/tv"

export default function site() {
  return (
    <>
      {/* <Link to="/projects/">
        <Button marginTop="35px" background="black">
          Go to Projects
        </Button>
      </Link>
      <Link to="/blog/">
        <Button marginTop="35px" background="black">
          Go to Blog
        </Button>
      </Link> */}
      <TV />
    </>
  )
}
