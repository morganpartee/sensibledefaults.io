import React from "react"
import styled from "styled-components"
import { Layout } from "../../components/layout"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import { Bio } from "../../components/bio"
import { FadeLink } from "../../components/link"
import { SEO } from "../../components/seo"
import { MarkdownRemark } from "../../graphql-types"
import { rhythm } from "../../utils/typography"


type Props = PageRendererProps

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const ResourcesIndex = (props: Props) => {
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
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/resources/"}}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              postAuthor
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
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
      <h2>Resource Posts</h2>
      <p>Here are a few hand-picked things that we wanted to set aside as resources. These are usually more lists of things we like, and less opinion.</p>
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!

        const postTitle = frontmatter.title || fields.slug
        return (
          <div key={slug}>
            <Title>
              <StyledLink to={slug}>{postTitle}</StyledLink>
            </Title>
            <small>{`${frontmatter.date} - ${frontmatter.postAuthor}`}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt
              }}
            />
          </div>
        )
      })}
      <Bio />
    </Layout>
  )
}

export default ResourcesIndex
