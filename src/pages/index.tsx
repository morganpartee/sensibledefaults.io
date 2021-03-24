import { PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"
import { useAllMarkdownRemarkPosts } from "../hooks/useAllMarkdownRemark"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { rhythm } from "../utils/typography"

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const posts = useAllMarkdownRemarkPosts()
  const { title, menuLinks } = useSiteMetadata()

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
      <h2>Latest Posts</h2>
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!

        const title = frontmatter.title || fields.slug
        return (
          <div key={slug}>
            <Title>
              <StyledLink to={slug}>{title}</StyledLink>
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

export default BlogIndex
