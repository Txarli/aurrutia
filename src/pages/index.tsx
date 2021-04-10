import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { size, grid, font, fontWeight, colors } from "../theme/theme";

const IndexPage = ({ data }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Hello>Kaixo! Soy Aitor Urrutia y me dedico al desarrollo de software.</Hello>

        {data.allMarkdownRemark.edges.map(({ node: post }) => (
          <PostWrapper key={post.frontmatter.path}>
            <PostTitle href={post.frontmatter.path}>{post.frontmatter.title}</PostTitle>
            <PostDate>{post.frontmatter.date}</PostDate>
          </PostWrapper>
        ))}
      </Container>
    </>
  );
};

const Hello = styled.div`
  ${font.h3()}
  margin-bottom: ${size.large}px;
  padding: ${size.base}px;
`;

const PostWrapper = styled.div`
  padding: ${size.base}px;
`

const PostTitle = styled.a`
  ${font.h4()}
  font-weight: ${fontWeight.bold};
`

const PostDate = styled.div`
  ${font.small()}
  color: ${colors.grey};
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${grid.contentMaxWidth}px;
`;

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark (sort: {
      fields: [frontmatter___date]
      order: DESC
    }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`;
