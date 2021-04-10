import { graphql } from "gatsby";
import * as React from "react";

const IndexPage = ({ data }) => {
  return (
    <>
      <h1>Aitor Urrutia Aranburu</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node: post }) => (
          <li><a href={post.frontmatter.path}>{post.frontmatter.title}</a></li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
