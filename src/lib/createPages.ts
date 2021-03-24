import path from "path"
import { GatsbyCreatePages } from "../types"

interface Post {
  node: {
    fields: {
      slug: string
    }
  }
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators
}) => {
  const { createPage } = boundActionCreators

  const data = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      allSkilltreesYaml {
        edges {
          node {
            title
            description
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (data.errors) {
    throw data.errors
  }

  // Create blog posts pages.
  const posts = data.data.allMarkdownRemark.edges

  posts.forEach((post: Post, index: number) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        slug: post.node.fields.slug
      }
    })
  })

  // Create skill tree pages.
  const skillTrees = data.data.allSkilltreesYaml.edges

  skillTrees.forEach((post: Post) => {
    createPage({
      path: post.node.fields.slug,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/templates/skilltree/skill-tree.tsx`),
      context: {
        slug: post.node.fields.slug
      }
    })
  })

  return null
}
