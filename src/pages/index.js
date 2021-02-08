import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/style.scss"
import Site from "../components/site"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "david alexander currie"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[`blog`, `itp`, `david currie`]} />
        <Site />
      </Layout>
    )
  }
}

export default IndexPage
