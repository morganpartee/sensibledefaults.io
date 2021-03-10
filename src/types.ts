interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}
export type NavLink = {
  name: string,
  link: string
}
interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}

export type GatsbyCreatePages = (fns: {
  graphql: any
  boundActionCreators: BoundActionCreators
}) => void
