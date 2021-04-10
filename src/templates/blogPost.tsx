import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { font, fontWeight, size } from "../theme/theme";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <>
      <GlobalStyles />

      <Helmet title={`Aitor Urrutia - ${post.frontmatter.title}`} />

      <div>
        <Title>{post.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  );
}

const Title = styled.h1`
  ${font.h1()}
  font-weight: ${fontWeight.bold};
  margin-bottom: ${size.small}px;
`;

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
`;
