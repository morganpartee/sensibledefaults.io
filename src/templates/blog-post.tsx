import { graphql, PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"
import { rhythm, styledScale } from "../utils/typography"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const MiniHeader = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const { title, description, postAuthor, date } = post.frontmatter!
  const html = post.html!
  const siteTitle = data.site!.siteMetadata!.title!
  const navLinks = data.site!.siteMetadata!.menuLinks!
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle} navLinks={navLinks}>
      <SEO title={title!} description={description || excerpt} />
      <h1>{title}</h1>
      <MiniHeader>
        {date} - From {postAuthor}
      </MiniHeader>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />
      <Bio />
      <PostNavigator>
        <li>
          {previous && (
            <FadeLink to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </FadeLink>
          )}
        </li>
        <li>
          {next && (
            <FadeLink to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </FadeLink>
          )}
        </li>
      </PostNavigator>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        menuLinks {
          name
          link
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        postAuthor
      }
    }
  }
`
