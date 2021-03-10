import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { NavLink } from "../types"
import { rhythm, styledScale } from "../utils/typography"
import { FadeLink } from "./link"
interface Props extends PageRendererProps {
  title: string
  children: ReactNode
  navLinks: NavLink[]
}

const StyledH1 = styled.h1`
  ${styledScale(1.3)};
  margin-bottom: ${rhythm(.2)};
  margin-top: 0;
`

const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const StyledLink = styled(FadeLink)`
  box-shadow: none;
  font-weight: 900;
  padding: ${`${rhythm(.2)} ${rhythm(.5)} ${rhythm(.2)} 0`};
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1)} ${rhythm(3 / 4)}`};
`

export const Layout = (props: Props) => {
  const { location, navLinks, title, children } = props

  const HeaderTitle = location.pathname === `/` ? StyledH1 : StyledH3

  return (
    <Content>
      <header>
        <HeaderTitle>
          <StyledLink to={`/`} style={{ color: "unset" }}>{title}</StyledLink>
        </HeaderTitle>
        {navLinks!.map(({ name, link }) => {
          return <StyledLink to={link}>{name}</StyledLink>
        })}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Content>
  )
}
