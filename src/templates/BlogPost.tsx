import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { font, fontWeight, grid, size } from "../theme/theme";
import Img from 'gatsby-image'
import avatarUrl from '../images/avatar.jpg'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <>
      <GlobalStyles />

      <Helmet title={`Aitor Urrutia - ${post.frontmatter.title}`} />

      <Container>
        <Header>
          <HomeLink href="/">
            <Avatar src={avatarUrl} alt="Aitor Urrutia" /> Aitor Urrutia
          </HomeLink>         
        </Header>

        <Title>{post.frontmatter.title}</Title>

        {post.frontmatter.banner && <Img fluid={post.frontmatter.banner.childImageSharp.fluid}></Img>}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </>
  );
}

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  ${font.h3()}
`

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${size.medium}px;
  height: ${size.huge}px;
  padding: ${size.tiny}px;
`

const Avatar = styled.img`
  height: ${size.large}px;
  border-radius: 50%;
  margin-right: ${size.small}px;
`

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
