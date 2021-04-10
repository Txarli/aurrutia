import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { font, fontWeight, grid, size } from "../theme/theme";
import Img from 'gatsby-image'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <>
      <GlobalStyles />

      <Helmet title={`Aitor Urrutia - ${post.frontmatter.title}`} />

      <Container>
        <Title>{post.frontmatter.title}</Title>

        {post.frontmatter.banner && <Img fluid={post.frontmatter.banner.childImageSharp.fluid}></Img>}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </>
  );
}

// DUPLICADO se duplica de la home: index.tsx
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${grid.contentMaxWidth}px;
`;

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
        banner {
          childImageSharp { 
            fluid {
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
              aspectRatio
              base64
              originalImg
              presentationHeight
              originalName
              presentationWidth
              sizes
            }
          }
        }
      }
    }
  }
`;
