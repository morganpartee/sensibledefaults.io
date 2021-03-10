import React from "react"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import { Layout } from "../../components/layout"

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
      <br />
      <p># TODO: Make this blog useful {/* This stays lol */}</p>
      <p>
        I still can't believe I got this domain name.
    </p>
      <p>
        Tony and I met when we were in the Air Force. I wound up working on satellite dishes for a while, he went off and did network stuff, but we both fell ass backwards into software. We've got weird backgrounds, but they helped make us who we are today.
    </p>
      <p>
        Here we're going to share some of that experience, and try to hand everyone that visits some sensible defaults for stuff like DevSecOps, machine learning, and a ton of resources for falling ass-backwards into this wonderful world like we did.
    </p>
      <b>- John</b>
    </Layout>
  )
}
export default AboutIndex
