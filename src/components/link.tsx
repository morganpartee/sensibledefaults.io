import { Link } from "gatsby"
import * as React from "react"
import { ComponentProps } from "react"

type Props = Partial<ComponentProps<typeof Link>>

export const FadeLink = (props: Props) => {
  const { children, ...linkProps } = props

  return <Link {...linkProps}>{children}</Link>
}
