import React from "react"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import { Layout } from "../../components/layout"
import { RoadMapData, Stage } from "../../types"

type Props = PageRendererProps

const RoadmapsIndex = (props: Props) => {
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
      allSkilltreesYaml {
        edges {
          node {
            title
            stages {
              body
              title
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const navLinks = data.site.siteMetadata.menuLinks
  const nodes = data.allSkilltreesYaml.edges
  console.log(nodes)
  return (
    <Layout location={props.location} title={siteTitle} navLinks={navLinks}>
      {
        // nodes.map(({ title }: RoadMapData) => <a>{title}</a>)
      }
      {
        nodes[0].node.stages.map((stage: Stage) => <p>{stage.body}</p>)
      }
    </Layout>
  )
}
export default RoadmapsIndex
