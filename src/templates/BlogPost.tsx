import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
import { font, fontWeight, grid, size } from '../theme/theme';
import Img from 'gatsby-image';
import { Header } from '../components/Header';
export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <>
      <GlobalStyles />

      <Helmet title={`Aitor Urrutia - ${post.frontmatter.title}`} />

      <Container>
        <Header />

        <Title>{post.frontmatter.title}</Title>

        {post.frontmatter.banner && (
          <BannerWrapper>
            <Img fluid={post.frontmatter.banner.childImageSharp.fluid}></Img>
          </BannerWrapper>
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </>
  );
}

const BannerWrapper = styled.div`
  margin-bottom: ${size.medium}px;
`;

// DUPLICADO se duplica de la home: index.tsx
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${grid.contentMaxWidth}px;

  p {
    margin-bottom: ${size.base}px;
  }

  h2 {
    ${font.h2()}
    font-weight: ${fontWeight.bold};
    margin-bottom: ${size.small}px;
  }

  strong {
    font-weight: ${fontWeight.bold};
  }
`;

const Title = styled.h1`
  ${font.h1()}
  font-weight: ${fontWeight.bold};
  margin-bottom: ${size.small}px;
  text-align: center;
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
