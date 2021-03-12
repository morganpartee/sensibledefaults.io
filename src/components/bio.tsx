/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { ComponentProps, forwardRef, Ref } from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { rhythm } from "../utils/typography"

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(0.5)};
`

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
)

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
`

export const Bio = () => {
  const { social, author } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/sd-profile.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Content>
      <p>
        SensibleDefaults is mostly written by <strong>{author}</strong>, with
        frequent help from our friends.
        <br />
        <a href={`https://twitter.com/${social!.twitter}`}>
          You can follow the blog on Twitter.
        </a>
      </p>
    </Content>
  )
}
