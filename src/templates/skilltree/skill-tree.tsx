import { graphql, PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "../../components/bio"
import { Layout } from "../../components/layout"
import { SEO } from "../../components/seo"
import { Query, SitePageContext } from "../../graphql-types"
import { rhythm } from "../../utils/typography"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { VerticalTimeline } from "react-vertical-timeline-component"
import SkillTreeNode from "../../components/skilltree/skilltreenode"
import "./skilltree.css"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const SkillTreeTemplate = (props: Props) => {
  const data = props.data!
  const post = data.skilltreesYaml!
  const { title, menuLinks } = useSiteMetadata()

  return (
    <Layout location={props.location} title={title!} navLinks={menuLinks!}>
      <SEO title={post.title} description={post.description} />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Divider />
      <VerticalTimeline className="vertical-timeline-dark">
        {post.stages.map(stage => (
          <SkillTreeNode {...stage} key={post.fields.slug + stage.title}/>
        ))}
      </VerticalTimeline>
      <Bio />
    </Layout>
  )
}

export default SkillTreeTemplate

export const pageQuery = graphql`
  query SkillTreestBySlug($slug: String!) {
    skilltreesYaml(fields: { slug: { eq: $slug } }) {
      description
      title
      fields{
        slug
      }
      stages {
        body
        title
        link
      }
    }
  }
`
