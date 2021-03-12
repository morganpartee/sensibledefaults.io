import React from "react"
import { PageRendererProps } from "gatsby"
import { Layout } from "../../components/layout"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

type Props = PageRendererProps

const ResourcesIndex = (props: Props) => {
  const { title, menuLinks } = useSiteMetadata()

  return (
    <Layout location={props.location} title={title!} navLinks={menuLinks!}>
      # TODO: Make this useful
    </Layout>
  )
}
export default ResourcesIndex
