import React, { FunctionComponent, useMemo } from 'react'
import Introduction from '../Main/Introduction'
import CategoryList, { CategoryListProps } from '../Main/CategoryList'
import PostList, { PostType } from '../Main/PostList'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ParsedQuery } from 'query-string'
import * as queryString from 'querystring'
import Template from 'components/Common/Template'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const parsedCategory = parsed['?category']
  const selectedCategory: string =
    typeof parsedCategory !== 'string' || !parsedCategory
      ? 'All'
      : parsedCategory
  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )
  return (
    <Template>
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
