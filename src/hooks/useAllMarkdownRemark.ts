import { graphql, useStaticQuery } from 'gatsby';

export const useAllMarkdownRemarkPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
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
  return allMarkdownRemark.edges
}