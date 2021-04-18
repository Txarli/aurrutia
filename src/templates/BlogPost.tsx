import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GlobalStyles } from '../theme/GlobalStyles';
import { colors, font, fontWeight, grid, size } from '../theme/theme';
import Img from 'gatsby-image';
import avatarUrl from '../images/avatar.jpg';
import Twitter from '../images/twitter.svg';
import LinkedIn from '../images/linkedin.svg';

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

          <Social>
            <SocialItem
              icon={<Twitter />}
              url="https://twitter.com/aitorcurrutia"
            />
            <SocialItem
              icon={<LinkedIn />}
              url="https://twitter.com/aitorcurrutia"
            />
          </Social>
        </Header>

        <Title>{post.frontmatter.title}</Title>

        {post.frontmatter.banner && (
          <Img fluid={post.frontmatter.banner.childImageSharp.fluid}></Img>
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </>
  );
}

const SocialItem: React.FC<{
  icon: React.ReactNode;
  url: string;
}> = ({ icon, url }) => (
  <SocialItemWrapper>
    <SocialIconWrapper>
      <SocialIcon href={url}>{icon}</SocialIcon>
    </SocialIconWrapper>
  </SocialItemWrapper>
);

const SocialItemWrapper = styled.li`
  &:not(:last-child) {
    margin-right: ${size.base}px;
  }
`;

const SocialIconWrapper = styled.div`
  height: ${size.medium}px;
  width: ${size.medium}px;
`;

const SocialIcon = styled.a`
  svg > path {
    fill: ${colors.grey};
  }
`;

const Social = styled.ul`
  display: flex;
  list-style-type: none;
`;

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  ${font.h3()}
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${size.medium}px;
  height: ${size.huge}px;
  padding: ${size.tiny}px;
`;

const Avatar = styled.img`
  height: ${size.large}px;
  border-radius: 50%;
  margin-right: ${size.small}px;
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
