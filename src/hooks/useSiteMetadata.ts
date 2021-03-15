import { SiteSiteMetadata } from "./../graphql-types.d"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

export const useSiteMetadata = (): SiteSiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          menuLinks {
            name
            link
          }
          social {
            twitter
          }
        }
      }
    }
  `)
  return site.siteMetadata!
}
