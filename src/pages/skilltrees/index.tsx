import React from "react"
import styled from "styled-components"
import { Layout } from "../../components/layout"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import { Bio } from "../../components/bio"
import { FadeLink } from "../../components/link"
import { SEO } from "../../components/seo"
import { rhythm } from "../../utils/typography"
import { RoadMapData } from "../../types"


type Props = PageRendererProps

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const SkillTreeIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
  query{
  allSkilltreesYaml {
    edges {
      node {
        title
        description
        fields {
          slug
        }
      }
    }
  }
}
  `)

  const posts = data.allSkilltreesYaml.edges
  const {title, menuLinks} = useSiteMetadata()
  
  return (
    <Layout location={props.location} title={title!} navLinks={menuLinks!}>
      <SEO
        title="All posts"
        keywords={[
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `DevSecOps`,
          `Python`
        ]}
      />
      <br/>
      <p>When we got started in software there wasn't much of a roadmap. We're trying to help with some sensible defaults to get you learning.</p>
      {posts.map(({ node }: { node: RoadMapData }) => {
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.description!

        const postTitle = node.title || fields.slug
        return (
          <div key={slug}>
            <Title>
              <StyledLink to={slug}>{postTitle}</StyledLink>
            </Title>
            <p
              dangerouslySetInnerHTML={{
                __html: excerpt
              }}
            />
          </div>
        )
      })}
      <Bio />
    </Layout>
  )
}

export default SkillTreeIndex
