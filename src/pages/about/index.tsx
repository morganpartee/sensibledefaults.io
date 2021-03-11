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
    <Layout location={props.location} title={siteTitle} navLinks={navLinks}>
      <br />
      <p># TODO: Make this blog useful {/* This stays lol */}</p>
      <p>I still can't believe I got this domain name.</p>
      <p>
        Tony and I met when we were in the Air Force. I wound up working on
        satellite dishes for a while, he went off and did network stuff, but we
        both fell ass backwards into software. We've got weird backgrounds, but
        they helped make us who we are today.
      </p>
      <p>
        Here we're going to share some of that experience, and try to hand
        everyone that visits some sensible defaults for stuff like DevSecOps,
        machine learning, and a ton of resources for falling ass-backwards into
        this wonderful world like we did.
      </p>
      <b>- John</b>
      <p>
        John and I share a passion for learning. I give us more credit for our
        hard work than John does, but he's not entirely false. I took an open
        contract in the Air Force, meaning that they could have given me any job
        they wanted. Luckily enough I landed in Tech. The rest, well that's what
        this site is for. I want to share my experiences and learnings so that
        we can lend a hand to others who may find themselves in similar
        positions. Hopefully we impact a few career changes along the way!
      </p>
      <b>- Tony</b>
    </Layout>
  )
}
export default AboutIndex
