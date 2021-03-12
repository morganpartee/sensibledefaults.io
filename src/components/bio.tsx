import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { rhythm } from "../utils/typography"

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(0.5)};
`
export const Bio = () => {
  const { social, author } = useSiteMetadata()

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
