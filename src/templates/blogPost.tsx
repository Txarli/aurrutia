import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function Template({
  data
}) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet title={`Aitor Urrutia - ${post.frontmatter.title}`} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
