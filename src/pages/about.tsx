import React from "react"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import { Layout } from "../components/layout"

type Props = PageRendererProps

const AboutIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const navLinks = data.site.siteMetadata.menuLinks

  return (
    <Layout location={props.location} title={siteTitle} navLinks={navLinks} >
      Some Bullshit here
    </Layout>
  )
}
export default AboutIndex
