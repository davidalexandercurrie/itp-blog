import React from "react"
import { Link } from "gatsby"
import ContactLinks from "../components/contactLinks"

export default function contact() {
  return (
    <div className="contact">
      <ContactLinks />
      <Link className="contact-home" to="/">
        home
      </Link>
    </div>
  )
}
